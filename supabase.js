// supabase.js
// Kết nối Supabase cho cổng thông tin giá vàng Hoạch Vàng

const SUPABASE_URL = "https://hekxlchaazrqvqzwgsio.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_iRrFKvgSSQcfWKNUzBS9cg_eKsLrDx5";

// Chỉ bật cloud khi đã cấu hình thật và thư viện supabase-js đã nạp.
const SUPABASE_READY =
  typeof window !== "undefined" &&
  !!window.supabase &&
  typeof SUPABASE_URL === "string" && SUPABASE_URL.indexOf("YOUR-PROJECT") === -1 &&
  typeof SUPABASE_ANON_KEY === "string" && SUPABASE_ANON_KEY.indexOf("YOUR-ANON") === -1;

const sb = SUPABASE_READY ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const cloud = {
  ready: SUPABASE_READY,
  client: sb,

  // Tải danh sách đơn vị từ Supabase
  async loadProviders() {
    if (!sb) return [];
    const { data, error } = await sb
      .from("gold_providers")
      .select("*")
      .eq("is_deleted", false)
      .order("id", { ascending: true });
    
    if (error) {
      console.error("Lỗi khi tải dữ liệu từ Supabase:", error);
      throw error;
    }
    
    // Ánh xạ lại các trường từ snake_case sang camelCase của client
    return (data || []).map(r => ({
      id: Number(r.id),
      name: r.name,
      acronym: r.acronym,
      category: r.category,
      description: r.description,
      url: r.url,
      color: r.color,
      priceMode: r.price_mode || 'auto',
      customPrices: r.custom_prices || null
    }));
  },

  // Lưu hoặc cập nhật một đơn vị — bắt buộc qua RPC kèm password (RLS chặn ghi trực tiếp).
  async upsertProvider(provider, password) {
    if (!sb) return;

    const { error } = await sb.rpc("admin_upsert_provider", {
      p_password: password,
      p_id: String(provider.id),
      p_name: provider.name,
      p_acronym: provider.acronym,
      p_category: provider.category,
      p_description: provider.description,
      p_url: provider.url,
      p_color: provider.color,
      p_price_mode: provider.priceMode || 'auto',
      p_custom_prices: provider.customPrices || null
    });

    if (error) {
      console.error("Lỗi khi upsert dữ liệu lên Supabase:", error);
      throw error;
    }
  },

  // Xóa mềm đơn vị (soft delete) — qua RPC kèm password.
  async softDeleteProvider(id, password) {
    if (!sb) return;

    const { error } = await sb.rpc("admin_soft_delete_provider", {
      p_password: password,
      p_id: String(id)
    });

    if (error) {
      console.error("Lỗi khi xóa mềm dữ liệu trên Supabase:", error);
      throw error;
    }
  },

  // Đồng bộ hóa danh sách mặc định lên Supabase (seed dữ liệu lần đầu nếu DB trống)
  async seedDefaultProviders(defaultList) {
    if (!sb) return;
    
    // Kiểm tra xem bảng có dữ liệu chưa
    const { count, error } = await sb
      .from("gold_providers")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Lỗi khi kiểm tra dữ liệu bảng gold_providers:", error);
      return;
    }

    if ((count || 0) === 0) {
      // RLS khóa ghi trực tiếp → không seed từ client được.
      // Nạp 41 đơn vị mặc định bằng SQL trong Supabase (xem supabase/seed.sql).
      console.warn("Bảng gold_providers trống. Hãy seed dữ liệu mặc định bằng SQL (supabase/seed.sql).");
    }
  },

  // =========================================================================
  // ADMIN AUTHENTICATION
  // =========================================================================

  // Kiểm password admin (server-side qua RPC, KHÔNG lộ password về client)
  async verifyAdmin(password) {
    if (!sb) return false;
    const { data, error } = await sb.rpc("verify_admin", { p_password: password });
    if (error) {
      console.error("Lỗi khi xác thực admin:", error);
      throw error;
    }
    return !!data;
  }
};

window.cloud = cloud;
