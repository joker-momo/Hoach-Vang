-- Cổng thông tin giá vàng Hoạch Vàng — Supabase schema + RLS
-- Chạy toàn bộ file này trong Supabase → SQL Editor → Run.

create table if not exists public.gold_providers (
  id             text primary key,
  name           text not null,
  acronym        text not null,
  category       text not null,
  description    text,
  url            text,
  color          text,
  price_mode     text not null default 'auto',
  custom_prices  jsonb, -- bảng sản phẩm và giá mua/bán tùy chỉnh
  is_deleted     boolean not null default false,
  updated_at     timestamptz not null default now()
);

-- Bật Row Level Security (RLS)
alter table public.gold_providers enable row level security;

-- Tạo Policies: ai cũng có quyền SELECT, INSERT, UPDATE, DELETE (hoặc soft-delete)
drop policy if exists gold_providers_select on public.gold_providers;
drop policy if exists gold_providers_insert on public.gold_providers;
drop policy if exists gold_providers_update on public.gold_providers;
drop policy if exists gold_providers_delete on public.gold_providers;

create policy gold_providers_select on public.gold_providers for select using (true);
create policy gold_providers_insert on public.gold_providers for insert with check (true);
create policy gold_providers_update on public.gold_providers for update using (true) with check (true);
create policy gold_providers_delete on public.gold_providers for delete using (true);

-- Bật Realtime cho bảng gold_providers để đồng bộ tức thời (tùy chọn)
alter publication supabase_realtime add table public.gold_providers;

-- =========================================================================
-- Bảng app_settings: lưu cấu hình ứng dụng (bao gồm mật khẩu admin)
-- =========================================================================
create table if not exists public.app_settings (
  key    text primary key,
  value  text not null,
  updated_at timestamptz not null default now()
);

alter table public.app_settings enable row level security;

drop policy if exists app_settings_select on public.app_settings;
drop policy if exists app_settings_insert on public.app_settings;
drop policy if exists app_settings_update on public.app_settings;

create policy app_settings_select on public.app_settings for select using (true);
create policy app_settings_insert on public.app_settings for insert with check (true);
create policy app_settings_update on public.app_settings for update using (true) with check (true);

-- Mật khẩu admin mặc định: "admin123"
-- Đổi mật khẩu bằng cách UPDATE value trực tiếp.
insert into public.app_settings (key, value)
values ('admin_password_hash', 'admin123')
on conflict (key) do nothing;
