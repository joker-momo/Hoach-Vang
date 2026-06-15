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

  // Lưu hoặc cập nhật một đơn vị
  async upsertProvider(provider) {
    if (!sb) return;
    
    const dbRow = {
      id: String(provider.id), // Supabase primary key as text
      name: provider.name,
      acronym: provider.acronym,
      category: provider.category,
      description: provider.description,
      url: provider.url,
      color: provider.color,
      price_mode: provider.priceMode || 'auto',
      custom_prices: provider.customPrices || null,
      is_deleted: false,
      updated_at: new Date().toISOString()
    };

    const { error } = await sb
      .from("gold_providers")
      .upsert(dbRow, { onConflict: "id" });

    if (error) {
      console.error("Lỗi khi upsert dữ liệu lên Supabase:", error);
      throw error;
    }
  },

  // Xóa mềm đơn vị (soft delete)
  async softDeleteProvider(id) {
    if (!sb) return;
    
    const { error } = await sb
      .from("gold_providers")
      .update({ is_deleted: true, updated_at: new Date().toISOString() })
      .eq("id", String(id));

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
      console.log("Cơ sở dữ liệu trống, đang nạp 41 đơn vị mặc định lên Supabase...");
      const dbRows = defaultList.map(provider => ({
        id: String(provider.id),
        name: provider.name,
        acronym: provider.acronym,
        category: provider.category,
        description: provider.description,
        url: provider.url,
        color: provider.color,
        price_mode: provider.priceMode || 'auto',
        custom_prices: provider.customPrices || null,
        is_deleted: false
      }));

      const { error: insertError } = await sb
        .from("gold_providers")
        .insert(dbRows);

      if (insertError) {
        console.error("Lỗi khi nạp dữ liệu mặc định lên Supabase:", insertError);
      } else {
        console.log("Đã nạp thành công 41 đơn vị mặc định lên Supabase!");
      }
    }
  },

  // =========================================================================
  // ADMIN AUTHENTICATION
  // =========================================================================

  // Lấy hash mật khẩu admin từ Supabase
  async getAdminPasswordHash() {
    if (!sb) return null;
    const { data, error } = await sb
      .from("app_settings")
      .select("value")
      .eq("key", "admin_password_hash")
      .single();

    if (error) {
      console.error("Lỗi khi lấy mật khẩu admin:", error);
      return null;
    }
    return data?.value || null;
  },

  // Xác thực mật khẩu admin: so sánh trực tiếp với giá trị trên Supabase
  async verifyAdminPassword(plainPassword) {
    if (!sb) return false;
    const storedPassword = await this.getAdminPasswordHash();
    if (!storedPassword) return false;
    return plainPassword === storedPassword;
  },

  // Cập nhật mật khẩu admin mới
  async updateAdminPassword(newPassword) {
    if (!sb) return false;

    const { error } = await sb
      .from("app_settings")
      .upsert({ key: "admin_password_hash", value: newPassword, updated_at: new Date().toISOString() }, { onConflict: "key" });

    if (error) {
      console.error("Lỗi khi cập nhật mật khẩu admin:", error);
      return false;
    }
    return true;
  }
};

window.cloud = cloud;
