-- =========================================================================
-- Bảng app_settings: lưu cấu hình ứng dụng (bao gồm mật khẩu admin)
-- Chạy file này trong Supabase → SQL Editor → Run
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
