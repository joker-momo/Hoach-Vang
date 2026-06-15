-- Cổng giá vàng MINHFAT.VN — Admin gate (RPC, chống bypass)
-- Chạy SAU schema.sql. Khóa ghi trực tiếp; chỉ ghi được qua RPC kiểm password server-side.
-- ĐỔI 'CHANGE_ME_ADMIN_PASSWORD' thành mật khẩu admin của bạn (dòng INSERT bên dưới).

-- 1. Bảng lưu password admin (RLS bật, KHÔNG policy => client không đọc được).
create table if not exists public.admin_config (
  id       int primary key default 1,
  password text not null,
  constraint admin_config_single check (id = 1)
);
alter table public.admin_config enable row level security;
-- (không tạo policy nào => anon không SELECT/INSERT/UPDATE được trực tiếp)

-- 2. Đặt / đổi password admin
insert into public.admin_config (id, password)
values (1, 'CHANGE_ME_ADMIN_PASSWORD')
on conflict (id) do update set password = excluded.password;

-- 3. Khóa GHI TRỰC TIẾP: gỡ policy insert/update/delete mở. Giữ SELECT mở.
drop policy if exists gold_providers_insert on public.gold_providers;
drop policy if exists gold_providers_update on public.gold_providers;
drop policy if exists gold_providers_delete on public.gold_providers;

-- 4. Gỡ bảng app_settings cũ (password lưu plaintext, anon đọc được) — không dùng nữa.
drop table if exists public.app_settings;

-- 5. Hàm kiểm password (security definer => đọc được admin_config dù RLS khóa)
create or replace function public.verify_admin(p_password text)
returns boolean
language sql security definer set search_path = public as $$
  select exists (select 1 from admin_config where id = 1 and password = p_password);
$$;

-- 6. Hàm ghi (đều check password trước; security definer => bypass RLS để ghi)
create or replace function public.admin_upsert_provider(
  p_password text, p_id text, p_name text, p_acronym text, p_category text,
  p_description text, p_url text, p_color text, p_price_mode text, p_custom_prices jsonb)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not verify_admin(p_password) then raise exception 'unauthorized'; end if;
  insert into gold_providers (id, name, acronym, category, description, url, color, price_mode, custom_prices, is_deleted, updated_at)
  values (p_id, p_name, p_acronym, p_category, p_description, p_url, p_color, coalesce(p_price_mode, 'auto'), p_custom_prices, false, now())
  on conflict (id) do update set
    name          = excluded.name,
    acronym       = excluded.acronym,
    category      = excluded.category,
    description   = excluded.description,
    url           = excluded.url,
    color         = excluded.color,
    price_mode    = excluded.price_mode,
    custom_prices = excluded.custom_prices,
    is_deleted    = false,
    updated_at    = now();
end; $$;

create or replace function public.admin_soft_delete_provider(p_password text, p_id text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not verify_admin(p_password) then raise exception 'unauthorized'; end if;
  update gold_providers set is_deleted = true, updated_at = now() where id = p_id;
end; $$;

-- 7. Cho phép anon GỌI các hàm (việc ghi vẫn bị chặn nếu sai password)
grant execute on function public.verify_admin(text) to anon, authenticated;
grant execute on function public.admin_upsert_provider(text, text, text, text, text, text, text, text, text, jsonb) to anon, authenticated;
grant execute on function public.admin_soft_delete_provider(text, text) to anon, authenticated;
