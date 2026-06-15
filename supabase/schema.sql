-- Cổng thông tin giá vàng MINHFAT.VN — Supabase schema + RLS
-- Chạy file này TRƯỚC, sau đó chạy admin.sql.

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

-- Chỉ mở SELECT cho mọi người. GHI bị khóa — chỉ vào được qua RPC trong admin.sql.
drop policy if exists gold_providers_select on public.gold_providers;
create policy gold_providers_select on public.gold_providers for select using (true);

-- Bật Realtime cho bảng gold_providers để đồng bộ tức thời (tùy chọn)
alter publication supabase_realtime add table public.gold_providers;
