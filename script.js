// ==========================================================================
// 1. DATABASE: 41 Gold Providers in Vietnam
// ==========================================================================
const defaultProviders = [
    {
        id: 1,
        name: "SJC (Vàng bạc Đá quý Sài Gòn)",
        acronym: "SJC",
        category: "enterprise",
        description: "Thương hiệu vàng quốc gia hàng đầu tại Việt Nam, chuyên cung cấp vàng miếng SJC tiêu chuẩn và trang sức cao cấp.",
        url: "https://sjc.com.vn",
        color: "linear-gradient(135deg, #FFE07D 0%, #D4AF37 100%)"
    },
    {
        id: 2,
        name: "DOJI (Tập đoàn Vàng bạc Đá quý DOJI)",
        acronym: "DOJI",
        category: "enterprise",
        description: "Tập đoàn kinh doanh vàng bạc đá quý hàng đầu Việt Nam, nổi tiếng với công nghệ gia công kim cương, đá quý và vàng miếng.",
        url: "https://doji.vn",
        color: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)"
    },
    {
        id: 3,
        name: "PNJ (Vàng bạc Đá quý Phú Nhuận)",
        acronym: "PNJ",
        category: "enterprise",
        description: "Thương hiệu bán lẻ trang sức hàng đầu châu Á, nổi bật với hệ thống cửa hàng trải dài toàn quốc và chế tác tinh xảo.",
        url: "https://www.pnj.com.vn",
        color: "linear-gradient(135deg, #1E3A8A 0%, #0D9488 100%)"
    },
    {
        id: 4,
        name: "Bảo Tín Minh Châu",
        acronym: "BTMC",
        category: "enterprise",
        description: "Một trong những thương hiệu vàng uy tín lâu đời nhất miền Bắc, nổi tiếng với dòng sản phẩm vàng Rồng Thăng Long 999.9.",
        url: "https://btmc.vn",
        color: "linear-gradient(135deg, #854D0E 0%, #A16207 100%)"
    },
    {
        id: 5,
        name: "Phú Quý (Tập đoàn Phú Quý)",
        acronym: "PQ",
        category: "enterprise",
        description: "Chuyên kinh doanh phân phối vàng miếng, vàng mỹ nghệ và trang sức cưới chất lượng cao được ưa chuộng tại Việt Nam.",
        url: "https://phuquy.com.vn",
        color: "linear-gradient(135deg, #EA580C 0%, #9A3412 100%)"
    },
    {
        id: 6,
        name: "Bảo Tín Mạnh Hải",
        acronym: "BTMH",
        category: "enterprise",
        description: "Thương hiệu vàng trang sức và tích lũy uy tín, kế thừa tinh hoa chế tác kim hoàn lâu năm của dòng họ Bảo Tín.",
        url: "https://baotinmanhhai.vn",
        color: "linear-gradient(135deg, #9D174D 0%, #BE185D 100%)"
    },
    {
        id: 7,
        name: "VietinBank Gold",
        acronym: "VTBG",
        category: "enterprise",
        description: "Trực thuộc VietinBank, chuyên doanh vàng miếng SJC, quà tặng mạ vàng cao cấp, kim cương và đá quý đạt chuẩn quốc tế.",
        url: "https://vietinbankgold.vn",
        color: "linear-gradient(135deg, #0284C7 0%, #0F172A 100%)"
    },
    {
        id: 8,
        name: "Sacombank-SBJ",
        acronym: "SBJ",
        category: "enterprise",
        description: "Chuyên sản xuất các dòng sản phẩm quà tặng vàng mỹ nghệ cao cấp, vàng miếng tích trữ và trang sức cưới tinh tế.",
        url: "https://sacombank-sbj.com",
        color: "linear-gradient(135deg, #0891B2 0%, #0369A1 100%)"
    },
    {
        id: 9,
        name: "HanaGold (Vàng công nghệ)",
        acronym: "HNG",
        category: "enterprise",
        description: "Tiên phong trong mô hình ứng dụng công nghệ số vào tích lũy vàng, cho phép khách hàng mua tích trữ vàng trực tuyến.",
        url: "https://hanagold.vn",
        color: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)"
    },
    {
        id: 10,
        name: "Mi Hồng (Vàng Mi Hồng)",
        acronym: "MH",
        category: "enterprise",
        description: "Thương hiệu vàng bạc đá quý vô cùng uy tín và quen thuộc tại khu vực TP. Hồ Chí Minh và các tỉnh phía Nam.",
        url: "https://mihong.vn",
        color: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
    },
    {
        id: 11,
        name: "Ngọc Thẫm Jewelry (NTJ)",
        acronym: "NTJ",
        category: "enterprise",
        description: "Một trong những thương hiệu kim hoàn lớn nhất miền Tây Nam Bộ, chuyên sản xuất các dòng sản phẩm trang sức vàng tinh xảo.",
        url: "https://ngoctham.com.vn",
        color: "linear-gradient(135deg, #0D9488 0%, #115E59 100%)"
    },
    {
        id: 12,
        name: "Kim Tín (Tập đoàn Kim Tín)",
        acronym: "KT",
        category: "enterprise",
        description: "Đơn vị chế tác, sản xuất và phân phối vàng bạc đá quý lớn tại khu vực phía Bắc với công nghệ máy đo tuổi vàng hiện đại.",
        url: "http://kimtin.com.vn",
        color: "linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)"
    },
    {
        id: 13,
        name: "Huy Thanh Jewelry",
        acronym: "HTJ",
        category: "enterprise",
        description: "Nổi tiếng với các thiết kế nhẫn cưới trẻ trung, hiện đại, phong cách Hàn Quốc hướng tới đối tượng khách hàng trẻ.",
        url: "https://huythanhjewelry.vn",
        color: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)"
    },
    {
        id: 14,
        name: "Sinh Diễn (Vàng bạc Sinh Diễn)",
        acronym: "SD",
        category: "enterprise",
        description: "Thương hiệu vàng bạc đá quý lớn nhất khu vực Bắc Ninh và Bắc Giang với độ uy tín cao, giá niêm yết cạnh tranh.",
        url: "https://sinhdien.com.vn",
        color: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
    },
    {
        id: 15,
        name: "Bảo Tín Kim Chung (Thái Bình)",
        acronym: "BTKC",
        category: "enterprise",
        description: "Đơn vị cung cấp vàng miếng SJC và trang sức hàng đầu Thái Bình, kiểm định tuổi vàng chặt chẽ bằng máy quang phổ.",
        url: "https://baotinkimchung.com",
        color: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
    },
    {
        id: 16,
        name: "Ngọc Hải Jewelry (Mỹ Tho)",
        acronym: "NHJ",
        category: "enterprise",
        description: "Thương hiệu vàng bạc trang sức uy tín hàng đầu Tiền Giang và miền Tây Nam Bộ với hơn 30 năm hoạt động.",
        url: "https://ngochai.vn",
        color: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
    },
    {
        id: 17,
        name: "Vàng bạc Phước Hùng (Chợ Thiếc)",
        acronym: "PHG",
        category: "enterprise",
        description: "Chuyên trao đổi sỉ lẻ các loại vàng miếng 24K, nhẫn tròn trơn và trang sức trung cấp tại trung tâm vàng Chợ Thiếc, TP.HCM.",
        url: "http://phuochunggold.com",
        color: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)"
    },
    {
        id: 18,
        name: "Vàng bạc Kim Vinh (Đà Nẵng)",
        acronym: "KVG",
        category: "enterprise",
        description: "Nhà cung cấp vàng miếng SJC và vàng nhẫn 99.99 uy tín lâu năm tại thị trường miền Trung và TP. Đà Nẵng.",
        url: "https://kimvinh.vn",
        color: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"
    },
    {
        id: 19,
        name: "Eximbank",
        acronym: "EIB",
        category: "bank",
        description: "Một trong những ngân hàng thương mại cập nhật biểu giá giao dịch vàng miếng SJC nhanh chóng và đầy đủ nhất thị trường.",
        url: "https://eximbank.com.vn",
        color: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"
    },
    {
        id: 20,
        name: "Agribank",
        acronym: "AGR",
        category: "bank",
        description: "Ngân hàng quốc doanh lớn nhất Việt Nam được cấp phép trực tiếp bán vàng miếng SJC bình ổn giá đến tay người dân.",
        url: "https://www.agribank.com.vn",
        color: "linear-gradient(135deg, #15803D 0%, #166534 100%)"
    },
    {
        id: 21,
        name: "Vietcombank",
        acronym: "VCB",
        category: "bank",
        description: "Ngân hàng thương mại hàng đầu Việt Nam cung cấp dịch vụ đăng ký mua vàng miếng SJC trực tuyến vô cùng thuận tiện.",
        url: "https://portal.vietcombank.com.vn",
        color: "linear-gradient(135deg, #059669 0%, #047857 100%)"
    },
    {
        id: 22,
        name: "BIDV",
        acronym: "BIDV",
        category: "bank",
        description: "Thành viên nhóm Big 4 ngân hàng Việt Nam hỗ trợ bán vàng miếng SJC bình ổn giá theo định hướng của Ngân hàng Nhà nước.",
        url: "https://bidv.com.vn",
        color: "linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)"
    },
    {
        id: 23,
        name: "ACB (Ngân hàng Á Châu)",
        acronym: "ACB",
        category: "bank",
        description: "Thực hiện mua bán, giao dịch vàng miếng SJC tại các chi nhánh trọng điểm với thủ tục nhanh gọn, an toàn và bảo mật.",
        url: "https://acb.com.vn",
        color: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
    },
    {
        id: 24,
        name: "TPBank",
        acronym: "TPB",
        category: "bank",
        description: "Liên kết chặt chẽ với Tập đoàn DOJI trong các dịch vụ tài chính về vàng và giao dịch mua bán vàng miếng chất lượng.",
        url: "https://tpb.vn",
        color: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)"
    },
    {
        id: 25,
        name: "Sacombank",
        acronym: "STB",
        category: "bank",
        description: "Điểm giao dịch mua bán vàng miếng uy tín với chính sách tỷ giá linh hoạt và các gói dịch vụ giữ hộ vàng an toàn.",
        url: "https://www.sacombank.com.vn",
        color: "linear-gradient(135deg, #0369A1 0%, #1E3A8A 100%)"
    },
    {
        id: 26,
        name: "Techcombank",
        acronym: "TCB",
        category: "bank",
        description: "Ngân hàng thương mại cổ phần lớn hàng đầu Việt Nam được Ngân hàng Nhà Nước cấp phép kinh doanh vàng miếng SJC.",
        url: "https://techcombank.com",
        color: "linear-gradient(135deg, #EA580C 0%, #B91C1C 100%)"
    },
    {
        id: 27,
        name: "HDBank",
        acronym: "HDB",
        category: "bank",
        description: "Mạng lưới chi nhánh giao dịch vàng miếng SJC rộng khắp cả nước với bảng giá ngoại tệ và vàng miếng chuẩn xác.",
        url: "https://hdbank.com.vn",
        color: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)"
    },
    {
        id: 28,
        name: "MSB (Ngân hàng Hàng Hải)",
        acronym: "MSB",
        category: "bank",
        description: "Thực hiện các nghiệp vụ giao dịch, mua bán vàng miếng SJC trực tiếp tại quầy giao dịch chi nhánh lớn.",
        url: "https://msb.com.vn",
        color: "linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)"
    },
    {
        id: 29,
        name: "SCB (Ngân hàng Sài Gòn)",
        acronym: "SCB",
        category: "bank",
        description: "Đại lý phân phối và giao dịch vàng miếng SJC tiêu chuẩn tại các chi nhánh được ngân hàng nhà nước cấp giấy phép.",
        url: "https://scb.com.vn",
        color: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)"
    },
    {
        id: 30,
        name: "VPBank",
        acronym: "VPB",
        category: "bank",
        description: "Hỗ trợ khách hàng giao dịch vàng miếng SJC tích lũy qua hệ thống ngân hàng số VPBank NEO và chi nhánh.",
        url: "https://vpbank.com.vn",
        color: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
    },
    {
        id: 31,
        name: "MB Bank (Ngân hàng Quân Đội)",
        acronym: "MBB",
        category: "bank",
        description: "Điểm giao dịch vàng miếng SJC bảo mật và an toàn dưới sự giám sát chặt chẽ của Bộ Quốc Phòng Việt Nam.",
        url: "https://mbbank.com.vn",
        color: "linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)"
    },
    {
        id: 32,
        name: "SHB (Ngân hàng Sài Gòn - Hà Nội)",
        acronym: "SHB",
        category: "bank",
        description: "Thực hiện mua bán vàng miếng SJC chính hãng, cập nhật giá niêm yết theo quy định kiểm soát của Nhà Nước.",
        url: "https://shb.com.vn",
        color: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
    },
    {
        id: 33,
        name: "LPBank",
        acronym: "LPB",
        category: "bank",
        description: "Hỗ trợ giao dịch vàng miếng SJC an toàn, minh bạch thông qua hệ thống bưu điện và phòng giao dịch khắp 63 tỉnh thành.",
        url: "https://lpbank.com.vn",
        color: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)"
    },
    {
        id: 34,
        name: "SeABank",
        acronym: "SEAB",
        category: "bank",
        description: "Cung cấp dịch vụ mua bán vàng miếng SJC chuẩn quốc gia với quy trình bảo mật cao và thủ tục nhanh gọn.",
        url: "https://seabank.com.vn",
        color: "linear-gradient(135deg, #EF4444 0%, #991B1B 100%)"
    },
    {
        id: 35,
        name: "Webgiá (WG)",
        acronym: "WG",
        category: "aggregator",
        description: "Chuyên trang cập nhật bảng tỷ giá tài sản, biểu đồ giá vàng, tỷ giá ngoại tệ, xăng dầu và lãi suất tại Việt Nam.",
        url: "https://webgia.com",
        color: "linear-gradient(135deg, #059669 0%, #047857 100%)"
    },
    {
        id: 36,
        name: "Chợ Giá (CG)",
        acronym: "CG",
        category: "aggregator",
        description: "Cổng thông tin tổng hợp cập nhật giá vàng thế giới và giá vàng SJC, vàng nhẫn trong nước theo phút.",
        url: "https://chogia.vn",
        color: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
    },
    {
        id: 37,
        name: "Giá Vàng Org (GVO)",
        acronym: "GVO",
        category: "aggregator",
        description: "Chuyên cung cấp tin tức nhận định thị trường vàng bạc đá quý, tỷ giá ngân hàng và bảng so sánh giá vàng các tỉnh.",
        url: "https://giavang.org",
        color: "linear-gradient(135deg, #D4AF37 0%, #8A6605 100%)"
    },
    {
        id: 38,
        name: "Giá Vàng Net (GVN)",
        acronym: "GVN",
        category: "aggregator",
        description: "Trang tin tức chuyên phân tích thị trường vàng thế giới và diễn biến giá vàng SJC trong nước trực quan.",
        url: "https://giavang.net",
        color: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)"
    },
    {
        id: 39,
        name: "CafeF Giá Vàng (CFF)",
        acronym: "CFF",
        category: "aggregator",
        description: "Trang tài chính kinh tế hàng đầu, cung cấp số liệu chuyên sâu về diễn biến vàng miếng và chính sách tiền tệ vĩ mô.",
        url: "https://cafef.vn",
        color: "linear-gradient(135deg, #1F2937 0%, #111827 100%)"
    },
    {
        id: 40,
        name: "24hMoney (24M)",
        acronym: "24M",
        category: "aggregator",
        description: "Mạng xã hội tài chính cá nhân lớn cập nhật so sánh bảng giá vàng miếng, vàng nhẫn trực tuyến nhanh nhất.",
        url: "https://24hmoney.vn",
        color: "linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)"
    },
    {
        id: 41,
        name: "VnExpress Vàng (VNE)",
        acronym: "VNE",
        category: "aggregator",
        description: "Trang báo điện tử hàng đầu với chuyên mục biểu đồ giá vàng SJC trong nước và thế giới trực quan.",
        url: "https://vnexpress.net",
        color: "linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)"
    }
];

let goldProviders = JSON.parse(localStorage.getItem('goldProviders')) || JSON.parse(JSON.stringify(defaultProviders));

// Reference Prices database (Mock data for display & conversion)
let goldRates = {
    sjc: { buy: 83500000, sell: 85500000, change: 150000, direction: "up" },
    doji: { buy: 83450000, sell: 85450000, change: 100000, direction: "up" },
    pnj: { buy: 83500000, sell: 85500000, change: -50000, direction: "down" },
    ring9999: { buy: 74200000, sell: 75800000, change: 250000, direction: "up" },
    world: { buy: 2330, sell: 2331, change: 12.5, direction: "up" } // USD/ounce
};

// ==========================================================================
// 2. DOM ELEMENTS & STATE
// ==========================================================================
let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'popularity';
let isAdminModeActive = false;
let currentLayout = localStorage.getItem('goldLayout') || 'grid';

const providerGrid = document.getElementById('providerGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const filterTabs = document.querySelectorAll('.filter-tab');
const sortSelect = document.getElementById('sortSelect');
const emptyState = document.getElementById('emptyState');

// Theme toggle
const themeToggle = document.getElementById('themeToggle');

// Clock
const timeStringSpan = document.getElementById('timeString');

// Modal Elements
const goldModal = document.getElementById('goldModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContent = document.getElementById('modalContent');

// Admin CRUD Elements
const adminToggle = document.getElementById('adminToggle');
const crudModal = document.getElementById('crudModal');
const crudModalCloseBtn = document.getElementById('crudModalCloseBtn');
const crudCancelBtn = document.getElementById('crudCancelBtn');
const crudForm = document.getElementById('crudForm');
const crudModalTitle = document.getElementById('crudModalTitle');

const providerIdInput = document.getElementById('providerId');
const providerNameInput = document.getElementById('providerName');
const providerCategorySelect = document.getElementById('providerCategory');
const providerUrlInput = document.getElementById('providerUrl');
const providerColorSelect = document.getElementById('providerColor');

// Admin Login Elements
const adminLoginModal = document.getElementById('adminLoginModal');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminLoginCloseBtn = document.getElementById('adminLoginCloseBtn');
const adminLoginCancelBtn = document.getElementById('adminLoginCancelBtn');
const adminPasswordInput = document.getElementById('adminPasswordInput');
const adminLoginError = document.getElementById('adminLoginError');
const togglePasswordVisibility = document.getElementById('togglePasswordVisibility');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');

// ==========================================================================
// 3. INITIALIZATION & LOGIC
// ==========================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

async function initApp() {
    initTheme();
    
    // Tải danh sách đơn vị từ Supabase (hoặc LocalStorage làm fallback)
    if (window.cloud && window.cloud.ready) {
        try {
            // Seed default if database is empty
            await window.cloud.seedDefaultProviders(defaultProviders);
            // Load list from Supabase
            const dbProviders = await window.cloud.loadProviders();
            if (dbProviders && dbProviders.length > 0) {
                goldProviders = dbProviders;
                saveProvidersToLocalStorage();
            }
            console.log("Tải danh sách đơn vị từ Supabase thành công!");
        } catch (e) {
            console.warn("Không thể tải từ Supabase, sử dụng localStorage làm dự phòng:", e);
        }
    }
    
    updateComputedPrices();
    renderProviders();
    changeLayout(currentLayout);
    updateClock();

    // Start timers
    setInterval(updateClock, 1000);

    // Fetch actual real-time prices initially and every 60 seconds (Anti-Mock)
    fetchRealTimePrices();
    setInterval(fetchRealTimePrices, 60000);
    
    // Fetch Vietcombank Exchange Rates initially and every 30 seconds (Auto Update)
    fetchVietcombankRates();
    setInterval(fetchVietcombankRates, 30000);
    
    // Bind Event Listeners
    setupEventListeners();
    lucide.createIcons();

    // Khôi phục UI admin nếu phiên còn hiệu lực + lắng nghe đổi trạng thái (đăng xuất / hết hạn)
    window.admin.onChange = onAdminStateChange;
    applyAdminAuthUI(window.admin.isAdmin());

    // Fetch YouTube channel info (non-blocking)
    fetchYouTubeChannelInfo();
}

// ==========================================================================
// YOUTUBE CHANNEL INFO (RSS + CORS Proxy)
// ==========================================================================
const YT_CHANNEL_ID = 'UCZGuIENfrzqyMQszkFxEPaA';
const YT_CHANNEL_HANDLE = '@MinhFAT';
const YT_RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;
const YT_CHANNEL_PAGE = `https://www.youtube.com/${YT_CHANNEL_HANDLE}`;

const YT_FALLBACK = {
    name: 'Minh FAT',
    avatar: 'https://yt3.googleusercontent.com/HzEPQaZZlF9WtjM8PkTHkfQ3JHqr6DxHYAfYym1TZCdZ5VYGQTzqQj0eDHkVIpz05AeTysVl=s176-c-k-c0x00ffffff-no-rj',
    description: 'Kênh tin tức tài chính, kinh tế, đời sống cập nhật hàng ngày',
    subscribers: '315K người đăng ký'
};

// CORS proxy chính: Cloudflare Worker tự deploy (xem cloudflare-worker/cors-proxy.js).
// Dán URL worker vào đây sau khi deploy, vd: "https://cors-proxy.abc.workers.dev".
const CORS_WORKER_URL = "https://shiny-violet-8bef.voix-momotalk.workers.dev";

// Worker đứng đầu (tin cậy); public proxy chỉ là dự phòng (hay chết/bị chặn).
const CORS_PROXIES = [
    ...(CORS_WORKER_URL.includes('YOUR-WORKER')
        ? []
        : [url => `${CORS_WORKER_URL}/?url=${encodeURIComponent(url)}`]),
    url => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    url => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
    url => `https://cors.eu.org/${url}`
];

function fetchYouTubeChannelInfo() {
    // YouTube RSS/trang kênh không có CORS → fetch từ trình duyệt luôn cần proxy (đã chết).
    // Dùng thông tin tĩnh trong YT_FALLBACK. Cập nhật trực tiếp ở YT_FALLBACK khi cần đổi.
    applyYouTubeChannelInfo(
        YT_FALLBACK.name,
        YT_FALLBACK.avatar,
        YT_FALLBACK.description,
        YT_FALLBACK.subscribers
    );
}

function applyYouTubeChannelInfo(name, avatar, description, subscribers) {
    const nameEl = document.getElementById('ytPromoName');
    const descEl = document.getElementById('ytPromoDesc');
    const avatarEl = document.getElementById('ytPromoAvatar');
    const subsEl = document.getElementById('ytPromoSubsText');

    if (nameEl) {
        nameEl.innerHTML = `${escapeHtml(name)} <svg class="yt-verified-badge" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
    }
    if (descEl) {
        descEl.textContent = description;
    }
    if (avatarEl) {
        avatarEl.innerHTML = `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(name)}" loading="lazy">`;
    }
    if (subsEl) {
        subsEl.textContent = subscribers;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        toggleClearButton();
        filterAndRender();
    });

    // Clear search button
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        toggleClearButton();
        filterAndRender();
        searchInput.focus();
    });

    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-filter');
            filterAndRender();
        });
    });

    // Sort Select box
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterAndRender();
    });

    // Layout toggle buttons
    const layoutGridBtn = document.getElementById('layoutGridBtn');
    const layoutListBtn = document.getElementById('layoutListBtn');
    if (layoutGridBtn && layoutListBtn) {
        layoutGridBtn.addEventListener('click', () => changeLayout('grid'));
        layoutListBtn.addEventListener('click', () => changeLayout('list'));
    }

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Close modal click
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal on clicking outside the modal container
    goldModal.addEventListener('click', (e) => {
        if (e.target === goldModal) {
            closeModal();
        }
    });

    // Handle ESC key press to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeAdminLoginModal();
        }
    });

    // Admin Mode toggle — now gated by authentication
    adminToggle.addEventListener('click', handleAdminToggleClick);

    // Admin Login Modal events
    adminLoginForm.addEventListener('submit', handleAdminLogin);
    adminLoginCloseBtn.addEventListener('click', closeAdminLoginModal);
    adminLoginCancelBtn.addEventListener('click', closeAdminLoginModal);
    adminLoginModal.addEventListener('click', (e) => {
        if (e.target === adminLoginModal) closeAdminLoginModal();
    });

    // Toggle password visibility
    togglePasswordVisibility.addEventListener('click', () => {
        const isPassword = adminPasswordInput.type === 'password';
        adminPasswordInput.type = isPassword ? 'text' : 'password';
        togglePasswordVisibility.querySelector('.eye-show').style.display = isPassword ? 'none' : '';
        togglePasswordVisibility.querySelector('.eye-hide').style.display = isPassword ? '' : 'none';
    });

    // Admin Logout
    adminLogoutBtn.addEventListener('click', handleAdminLogout);

    // CRUD Modal close & cancel
    crudModalCloseBtn.addEventListener('click', closeCrudModal);
    crudCancelBtn.addEventListener('click', closeCrudModal);
    crudModal.addEventListener('click', (e) => {
        if (e.target === crudModal) {
            closeCrudModal();
        }
    });

    // Form submit
    crudForm.addEventListener('submit', handleCrudFormSubmit);

    // Delegate click on grid cards to edit or delete or add
    providerGrid.addEventListener('click', (e) => {
        // 1. Add Card click
        const addCard = e.target.closest('.add-provider-card');
        if (addCard) {
            e.stopPropagation();
            openCrudModalForAdd();
            return;
        }

        const card = e.target.closest('.provider-card');
        if (!card) return;
        const providerId = parseInt(card.getAttribute('data-id'));

        // 2. Edit button click
        const editBtn = e.target.closest('.admin-action-btn.edit');
        if (editBtn) {
            e.stopPropagation();
            openCrudModalForEdit(providerId);
            return;
        }

        // 3. Delete button click
        const deleteBtn = e.target.closest('.admin-action-btn.delete');
        if (deleteBtn) {
            e.stopPropagation();
            handleDeleteProvider(providerId);
            return;
        }

        // 4. Navigate directly to website page in new tab
        if (!isAdminModeActive) {
            const provider = goldProviders.find(p => p.id === providerId);
            if (provider && provider.url) {
                window.open(provider.url, '_blank', 'noopener,noreferrer');
            }
        }
    });
}

// Compute primary prices for each brand to support rendering and sorting
function updateComputedPrices() {
    goldProviders.forEach(provider => {
        const prices = getBrandSpecificPrices(provider);
        provider.computedBuy = prices[0].buy;
        provider.computedSell = prices[0].sell;
    });
}

// ==========================================================================
// 4. RENDER FUNCTIONS
// ==========================================================================

// Render the cards grid
function renderProviders(data = goldProviders) {
    providerGrid.innerHTML = '';
    
    // In admin mode, we always show the "Add New" card at the beginning
    if (isAdminModeActive) {
        const addCardHtml = `
            <div class="add-provider-card">
                <i data-lucide="plus-circle"></i>
                <span>Thêm Đơn Vị Mới</span>
            </div>
        `;
        providerGrid.insertAdjacentHTML('beforeend', addCardHtml);
    }
    
    if (data.length === 0 && !isAdminModeActive) {
        emptyState.classList.remove('hidden');
        providerGrid.style.display = 'none';
        return;
    }

    emptyState.classList.add('hidden');
    providerGrid.style.display = '';

    data.forEach((provider, index) => {
        const stt = index + 1;
        const cardHtml = `
            <div class="provider-card glass-panel" data-id="${provider.id}">
                <div class="card-stt-badge">${stt}</div>
                <div class="card-admin-actions">
                    <button class="admin-action-btn edit" title="Sửa thông tin" aria-label="Sửa">
                        <i data-lucide="edit-2"></i>
                    </button>
                    <button class="admin-action-btn delete" title="Xóa đơn vị" aria-label="Xóa">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
                <div class="card-header">
                    <div class="brand-avatar" style="background: ${escapeHtml(provider.color)}">
                        ${escapeHtml(provider.acronym)}
                    </div>
                    <span class="tag-badge ${provider.category}">
                        ${provider.category === 'enterprise' ? 'Doanh nghiệp' : provider.category === 'bank' ? 'Ngân hàng' : 'Trang tin'}
                    </span>
                </div>
                <div class="card-body">
                    <h3>${escapeHtml(provider.name)}</h3>
                </div>
                <div class="card-footer">
                    <button class="visit-btn view-details-btn" data-id="${provider.id}">
                        <span>Ghé Trang Web</span>
                        <i data-lucide="external-link"></i>
                    </button>
                </div>
            </div>
        `;
        providerGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Update total count
    const totalCountNum = document.getElementById('totalCountNum');
    if (totalCountNum) {
        totalCountNum.textContent = data.length;
    }

    // Re-initialize Lucide icons for dynamically added elements
    lucide.createIcons();
}

// Filter and render combined with Sorting
function filterAndRender() {
    let filtered = goldProviders.filter(provider => {
        // Category check
        const matchesCategory = currentFilter === 'all' || provider.category === currentFilter;
        
        // Search text check
        const matchesSearch = 
            provider.name.toLowerCase().includes(searchQuery) ||
            provider.acronym.toLowerCase().includes(searchQuery) ||
            provider.description.toLowerCase().includes(searchQuery) ||
            provider.url.toLowerCase().includes(searchQuery);

        return matchesCategory && matchesSearch;
    });

    // Apply Sorting
    if (currentSort === 'alphabet-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
    } else if (currentSort === 'alphabet-desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name, 'vi'));
    } else if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.computedSell - b.computedSell);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.computedSell - a.computedSell);
    } else {
        // Default Popularity (Sort by original ID order)
        filtered.sort((a, b) => a.id - b.id);
    }

    renderProviders(filtered);
}

// Show/Hide search clear button
function toggleClearButton() {
    if (searchQuery.length > 0) {
        clearSearch.style.display = 'flex';
    } else {
        clearSearch.style.display = 'none';
    }
}

// ==========================================================================
// VIETCOMBANK EXCHANGE RATES (lấy HTML webgia.com qua CORS proxy, parse plain text)
// ==========================================================================
const VCB_RATES_URL = 'https://webgia.com/ty-gia/vietcombank/';
let isVcbExpanded = false;

async function fetchVietcombankRates() {
    const container = document.getElementById('vcbRatesContainer');
    if (!container) return;

    const hasData = container.querySelector('.vcb-table') !== null;
    if (!hasData) {
        container.innerHTML = `
            <div class="vcb-loading">
                <div class="vcb-spinner"></div>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">Đang tải dữ liệu tỷ giá...</p>
            </div>
        `;
    }

    let htmlText = '';
    let fetchSuccess = false;

    for (const proxyFn of CORS_PROXIES) {
        try {
            const resp = await fetch(proxyFn(VCB_RATES_URL), { signal: AbortSignal.timeout(8000) });
            if (resp.ok) {
                htmlText = await resp.text();
                // allorigins /get bọc trong {contents:"..."}; các proxy khác trả thẳng HTML.
                if (htmlText.startsWith('{') && htmlText.includes('"contents"')) {
                    try { htmlText = JSON.parse(htmlText).contents || ''; } catch (e) { /* dùng nguyên văn */ }
                }
                if (htmlText.includes('table-exchanges')) {
                    fetchSuccess = true;
                    break;
                }
            }
        } catch (e) {
            console.warn('Thất bại khi lấy tỷ giá VCB qua proxy:', e);
        }
    }

    if (!fetchSuccess || !htmlText) {
        if (!hasData) {
            container.innerHTML = `
                <div class="vcb-error">
                    <i data-lucide="alert-triangle" style="width: 24px; height: 24px; color: var(--danger);"></i>
                    <p style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">Không thể tải dữ liệu từ webgia.com</p>
                    <button class="vcb-retry-btn" onclick="fetchVietcombankRates()">Thử lại</button>
                </div>
            `;
            lucide.createIcons();
        }
        return;
    }

    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // webgia giấu vài chữ số trong span rỗng + CSS :before { content }.
        // textContent không lấy được nội dung :before → phải map class → chữ số rồi chèn vào span.
        const styleMap = {};
        const styleRegex = /\.([a-z0-9_-]+):before\s*\{\s*content\s*:\s*["']([^"']+)["']\s*\}/g;
        let m;
        while ((m = styleRegex.exec(htmlText)) !== null) {
            let ch = m[2];
            if (ch.startsWith('\\')) ch = String.fromCharCode(parseInt(ch.slice(1), 16)); // "\32" → "2"
            styleMap[m[1]] = ch;
        }
        doc.querySelectorAll('td span').forEach(span => {
            for (const cls of span.classList) {
                if (styleMap[cls] !== undefined) { span.textContent = styleMap[cls]; break; }
            }
        });

        // Số ẩn hoàn toàn: ô có thuộc tính nb (hex, bỏ chữ HOA), text hiển thị là mồi "webgia.com".
        // Tên class che thay đổi mỗi lần tải nên target theo [nb], không theo class cố định.
        function decodeNb(nbStr) {
            const cleaned = nbStr.replace(/[A-Z]/g, '');
            let out = '';
            for (let i = 0; i < cleaned.length - 1; i += 2) {
                out += String.fromCharCode(parseInt(cleaned.substr(i, 2), 16));
            }
            return out;
        }
        doc.querySelectorAll('td[nb]').forEach(td => {
            const v = td.getAttribute('nb');
            td.textContent = v ? decodeNb(v) : '-';
            td.removeAttribute('nb');
        });

        // Cột: [0]=mã, [1]=tên, [2]=mua tiền mặt, [3]=mua CK, [4]=bán tiền mặt.
        const rates = [];
        doc.querySelectorAll('.table-exchanges tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 5) return; // bỏ hàng header (th) + hàng "Cập nhật lúc" (colspan)

            const codeSpan = cells[0].querySelector('a span:not(.cur-icon)');
            const code = (codeSpan ? codeSpan.textContent : cells[0].textContent).trim();
            const name = cells[1].textContent.trim();
            const buyCash = cells[2].textContent.trim();
            const sellCash = cells[4].textContent.trim();
            if (code && name) rates.push({ code, name, buyCash, sellCash });
        });

        let updateTime = '';
        const updateTd = doc.querySelector('.table-exchanges td[colspan="5"]');
        if (updateTd) {
            const timeMatch = updateTd.textContent.trim().match(/Cập nhật lúc\s+(\d{1,2}:\d{1,2}:\d{1,2}\s+\d{1,2}\/\d{1,2}\/\d{4})/i);
            if (timeMatch) updateTime = timeMatch[1].trim();
        }

        if (rates.length > 0) {
            renderVcbTable(rates, updateTime);
        } else {
            throw new Error('No rates parsed');
        }
    } catch (e) {
        console.error('Lỗi phân tích cú pháp HTML tỷ giá VCB:', e);
        if (!hasData) {
            container.innerHTML = `
                <div class="vcb-error">
                    <i data-lucide="alert-triangle" style="width: 24px; height: 24px; color: var(--danger);"></i>
                    <p style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">Lỗi xử lý dữ liệu tỷ giá</p>
                    <button class="vcb-retry-btn" onclick="fetchVietcombankRates()">Thử lại</button>
                </div>
            `;
            lucide.createIcons();
        }
    }
}

function renderVcbTable(rates, updateTime) {
    const container = document.getElementById('vcbRatesContainer');
    if (!container) return;

    const FLAG_MAP = {
        'USD': '🇺🇸', 'EUR': '🇪🇺', 'GBP': '🇬🇧', 'JPY': '🇯🇵',
        'AUD': '🇦🇺', 'CAD': '🇨🇦', 'CHF': '🇨🇭', 'CNY': '🇨🇳',
        'DKK': '🇩🇰', 'HKD': '🇭🇰', 'INR': '🇮🇳', 'KRW': '🇰🇷',
        'KWD': '🇰🇼', 'MYR': '🇲🇾', 'NOK': '🇳🇴', 'RUB': '🇷🇺',
        'SAR': '🇸🇦', 'SEK': '🇸🇪', 'SGD': '🇸🇬', 'THB': '🇹🇭',
        'NZD': '🇳🇿', 'TWD': '🇹🇼'
    };

    let tableHtml = `
        <div class="vcb-table-wrapper">
            <table class="vcb-table">
                <thead>
                    <tr>
                        <th>Ngoại tệ</th>
                        <th style="text-align: right;">Mua</th>
                        <th style="text-align: right;">Bán</th>
                    </tr>
                </thead>
                <tbody>
    `;

    rates.forEach((rate, index) => {
        const flag = FLAG_MAP[rate.code] || '💵';
        const isHidden = index >= 8 ? 'class="hidden-row"' : '';
        tableHtml += `
            <tr ${isHidden}>
                <td>
                    <div class="vcb-currency-cell">
                        <div class="vcb-currency-code-wrap">
                            <span class="vcb-flag">${flag}</span>
                            <span>${rate.code}</span>
                        </div>
                        <div class="vcb-currency-name">${rate.name}</div>
                    </div>
                </td>
                <td class="vcb-val-buy">${rate.buyCash}</td>
                <td class="vcb-val-sell">${rate.sellCash}</td>
            </tr>
        `;
    });

    tableHtml += `
                </tbody>
            </table>
        </div>
    `;

    if (rates.length > 8) {
        const btnText = isVcbExpanded ? 'Thu gọn' : 'Xem thêm ngoại tệ';
        const btnIcon = isVcbExpanded ? 'chevron-up' : 'chevron-down';
        tableHtml += `
            <button type="button" class="vcb-toggle-btn" id="vcbToggleBtn">
                <span>${btnText}</span>
                <i data-lucide="${btnIcon}" style="width: 14px; height: 14px;"></i>
            </button>
        `;
    }

    tableHtml += `
        <div class="vcb-footer">
            <span>VCB • ${updateTime || 'Real-time'}</span>
            <a href="https://webgia.com/ty-gia/vietcombank/" target="_blank" rel="noopener noreferrer" class="vcb-footer-link">
                Nguồn: WebGia
            </a>
        </div>
    `;

    container.innerHTML = tableHtml;
    lucide.createIcons();

    const toggleBtn = document.getElementById('vcbToggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isVcbExpanded = !isVcbExpanded;
            const rows = container.querySelectorAll('.vcb-table tbody tr');
            rows.forEach((row, index) => {
                if (index >= 8) {
                    if (isVcbExpanded) {
                        row.classList.remove('hidden-row');
                    } else {
                        row.classList.add('hidden-row');
                    }
                }
            });
            
            const spanText = toggleBtn.querySelector('span');
            if (spanText) {
                spanText.textContent = isVcbExpanded ? 'Thu gọn' : 'Xem thêm ngoại tệ';
            }
            
            const iconWrap = toggleBtn.querySelector('i');
            if (iconWrap) {
                iconWrap.setAttribute('data-lucide', isVcbExpanded ? 'chevron-up' : 'chevron-down');
                lucide.createIcons();
            }
        });
    }

    if (isVcbExpanded) {
        const rows = container.querySelectorAll('.vcb-table tbody tr');
        rows.forEach((row, index) => {
            if (index >= 8) {
                row.classList.remove('hidden-row');
            }
        });
    }
}

// Fetch actual real-time prices from the API
async function fetchRealTimePrices() {
    try {
        const response = await fetch('https://www.vang.today/api/prices');
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        
        if (data && data.success && data.prices) {
            const p = data.prices;
            
            // Update rates with exact API values
            if (p.SJL1L10) {
                goldRates.sjc.buy = p.SJL1L10.buy;
                goldRates.sjc.sell = p.SJL1L10.sell;
                goldRates.sjc.change = p.SJL1L10.change_sell;
                goldRates.sjc.direction = p.SJL1L10.change_sell >= 0 ? "up" : "down";
            }
            if (p.DOHNL) {
                goldRates.doji.buy = p.DOHNL.buy;
                goldRates.doji.sell = p.DOHNL.sell;
                goldRates.doji.change = p.DOHNL.change_sell;
                goldRates.doji.direction = p.DOHNL.change_sell >= 0 ? "up" : "down";
            }
            if (p.PQHNVM) {
                goldRates.pnj.buy = p.PQHNVM.buy;
                goldRates.pnj.sell = p.PQHNVM.sell;
                goldRates.pnj.change = p.PQHNVM.change_sell;
                goldRates.pnj.direction = p.PQHNVM.change_sell >= 0 ? "up" : "down";
            }
            if (p.SJ9999) {
                goldRates.ring9999.buy = p.SJ9999.buy;
                goldRates.ring9999.sell = p.SJ9999.sell;
                goldRates.ring9999.change = p.SJ9999.change_sell;
                goldRates.ring9999.direction = p.SJ9999.change_sell >= 0 ? "up" : "down";
            }
            if (p.XAUUSD) {
                goldRates.world.buy = p.XAUUSD.buy;
                goldRates.world.sell = Math.round(p.XAUUSD.buy + 1); // Sell estimation
                goldRates.world.change = p.XAUUSD.change_buy;
                goldRates.world.direction = p.XAUUSD.change_buy >= 0 ? "up" : "down";
            }
            
            console.log("Cập nhật tỷ giá thực tế từ API thành công!");
            
            // Re-calculate all computed prices based on these exact values
            updateComputedPrices();
            
            // Re-render components
            filterAndRender();

            // Update UI status to show Live API Connected
            const clockEl = document.getElementById('timeString');
            if (clockEl && !document.getElementById('apiLiveIndicator')) {
                const clockWrap = clockEl.parentElement;
                clockWrap.innerHTML = `
                    <i data-lucide="wifi" id="apiLiveIndicator" class="color-success" style="color: #10B981"></i>
                    <span id="timeString">${clockEl.textContent}</span>
                `;
                lucide.createIcons();
            }
        }
    } catch (error) {
        console.warn("Không thể kết nối API giá vàng thực tế, đang sử dụng dữ liệu ngoại tuyến:", error);
    }
}

// ==========================================================================
// 7. THEME TOGGLER
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// ==========================================================================
// 8. HELPERS & CLOCK
// ==========================================================================
function updateClock() {
    const clockEl = document.getElementById('timeString');
    if (!clockEl) return;
    
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockEl.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function formatVndRaw(price) {
    return `${price.toLocaleString('vi-VN')} ₫`;
}

// Escape user/cloud-supplied strings before injecting via innerHTML.
// Safe for both element text and double-quoted attribute values.
function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ==========================================================================
// 9. POPUP MODAL SYSTEM
// ==========================================================================

function closeModal() {
    goldModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function openModal(providerId) {
    const provider = goldProviders.find(p => p.id === providerId);
    if (!provider) return;

    goldModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    modalContent.innerHTML = `
        <div class="spinner-container">
            <div class="spinner"></div>
            <div class="spinner-text">Đang kết nối tới cổng thông tin ${escapeHtml(provider.acronym)}...</div>
        </div>
    `;

    setTimeout(() => {
        const prices = getBrandSpecificPrices(provider);
        let priceRowsHtml = '';
        
        prices.forEach(item => {
            const changeSign = item.change >= 0 ? '+' : '';
            const displayChange = (item.change / 1000).toLocaleString('vi-VN');
            const directionClass = item.change >= 0 ? 'up' : 'down';
            const iconName = item.change >= 0 ? 'trending-up' : 'trending-down';

            priceRowsHtml += `
                <tr>
                    <td><strong>${escapeHtml(item.name)}</strong></td>
                    <td>${formatVndRaw(item.buy)}</td>
                    <td class="color-gold">${formatVndRaw(item.sell)}</td>
                    <td>
                        <span class="price-change-cell ${directionClass}">
                            <i data-lucide="${iconName}"></i>
                            ${changeSign}${displayChange}đ
                        </span>
                    </td>
                </tr>
            `;
        });

        modalContent.innerHTML = `
            <div class="modal-brand-header">
                <div class="brand-avatar" style="background: ${escapeHtml(provider.color)}">
                    ${escapeHtml(provider.acronym)}
                </div>
                <div class="modal-brand-info">
                    <h3>${escapeHtml(provider.name)}</h3>
                    <p>${provider.category === 'enterprise' ? 'Doanh nghiệp Vàng bạc' : provider.category === 'bank' ? 'Ngân hàng Thương mại' : 'Trang tin tổng hợp'}</p>
                </div>
            </div>

            <div class="modal-desc-box">
                ${escapeHtml(provider.description)}
            </div>

            <div class="modal-price-title">
                <i data-lucide="trending-up"></i>
                <span>Bảng Giá Vàng Trực Tuyến (${escapeHtml(provider.acronym)})</span>
            </div>
            
            <div class="price-table-container modal-price-table">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Mua Vào</th>
                            <th>Bán Ra</th>
                            <th>Biến Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${priceRowsHtml}
                    </tbody>
                </table>
            </div>
            
            <div class="modal-actions">
                <button class="modal-btn modal-btn-secondary" onclick="closeModal()">Đóng</button>
                <a href="${escapeHtml(provider.url)}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-primary">
                    <span>Mở Web Chính Thức</span>
                    <i data-lucide="external-link"></i>
                </a>
            </div>
        `;
        
        lucide.createIcons();
    }, 600);
}

// Generate realistic mock prices based on the provider category/name
function getBrandSpecificPrices(provider) {
    // If manual mode is active and there are custom prices, return them
    if (provider.priceMode === 'manual' && provider.customPrices && provider.customPrices.length > 0) {
        return provider.customPrices.map(p => ({
            name: p.name,
            buy: Number(p.buy),
            sell: Number(p.sell),
            change: p.change || 0
        }));
    }

    const acronym = provider.acronym;
    const cat = provider.category;
    
    // Base prices from goldRates
    const sjcBuy = goldRates.sjc.buy;
    const sjcSell = goldRates.sjc.sell;
    const ringBuy = goldRates.ring9999.buy;
    const ringSell = goldRates.ring9999.sell;
    
    const seed = provider.id * 15000;
    
    if (cat === 'bank') {
        // Banks mainly trade SJC gold bars
        return [
            {
                name: `Vàng miếng SJC 99.99 (1L - 10L)`,
                buy: sjcBuy + (seed % 30000) - 15000,
                sell: sjcSell + (seed % 20000) - 10000,
                change: goldRates.sjc.change
            },
            {
                name: `Vàng miếng SJC 99.99 (0.5L - 2L)`,
                buy: sjcBuy + (seed % 30000) - 15000,
                sell: sjcSell + (seed % 20000) - 10000 + 10000,
                change: goldRates.sjc.change
            }
        ];
    } else if (cat === 'aggregator') {
        // Aggregators show SJC price index and Nhẫn 9999 index
        return [
            {
                name: `Chỉ số Vàng miếng SJC`,
                buy: sjcBuy + (seed % 10000) - 5000,
                sell: sjcSell + (seed % 8000) - 4000,
                change: goldRates.sjc.change
            },
            {
                name: `Chỉ số Vàng Nhẫn 99.99`,
                buy: ringBuy + (seed % 8000) - 4000,
                sell: ringSell + (seed % 6000) - 3000,
                change: goldRates.ring9999.change
            }
        ];
    } else {
        // Enterprises trade SJC, Nhẫn Tròn Trơn and Jewelry
        let products = [];
        
        // Add SJC or equivalent brand bar
        if (acronym === 'SJC' || acronym === 'DOJI' || acronym === 'PNJ' || acronym === 'BTMC' || acronym === 'PQ') {
            products.push({
                name: `Vàng miếng ${acronym} 99.99`,
                buy: sjcBuy + (seed % 40000) - 20000,
                sell: sjcSell + (seed % 20000) - 10000,
                change: goldRates.sjc.change
            });
        } else {
            products.push({
                name: `Vàng miếng SJC niêm yết tại ${acronym}`,
                buy: sjcBuy + (seed % 50000) - 25000,
                sell: sjcSell + (seed % 30000) - 15000,
                change: goldRates.sjc.change
            });
        }
        
        // Add 24K Ring
        let ringName = `Vàng Nhẫn Trơn ${acronym} 24K`;
        if (acronym === 'BTMC') ringName = 'Vàng Nhẫn Rồng Thăng Long 999.9';
        else if (acronym === 'PNJ') ringName = 'Nhẫn Trơn PNJ 24K (99.99%)';
        else if (acronym === 'DOJI') ringName = 'Vàng Nhẫn Hưng Thịnh Vượng 9999';
        
        products.push({
            name: ringName,
            buy: ringBuy + (seed % 25000) - 10000,
            sell: ringSell + (seed % 15000) - 5000,
            change: goldRates.ring9999.change
        });
        
        // Add Jewelry 18K
        products.push({
            name: `Vàng trang sức ${acronym} 18K (75%)`,
            buy: Math.round((ringBuy + (seed % 20000)) * 0.75),
            sell: Math.round((ringSell + (seed % 15000)) * 0.75),
            change: Math.round(goldRates.ring9999.change * 0.75)
        });
        
        if (acronym === 'PNJ' || acronym === 'DOJI' || acronym === 'NTJ') {
            products.push({
                name: `Vàng trang sức ${acronym} 14K (58.3%)`,
                buy: Math.round((ringBuy + (seed % 10000)) * 0.583),
                sell: Math.round((ringSell + (seed % 8000)) * 0.583),
                change: Math.round(goldRates.ring9999.change * 0.583)
            });
        }

        return products;
    }
}

// ==========================================================================
// 10. CRUD ADMINISTRATION LOGIC
// ==========================================================================

// Xử lý khi nhấn nút ⚙️ Admin Toggle
function handleAdminToggleClick() {
    if (!window.admin.isAdmin()) {
        // Chưa xác thực (hoặc phiên hết hạn) → mở modal đăng nhập
        openAdminLoginModal();
    } else {
        // Đã xác thực → toggle chế độ admin bình thường
        toggleAdminMode();
    }
}

// Đồng bộ UI chỉ báo "đã đăng nhập admin" theo trạng thái phiên
function applyAdminAuthUI(isAdmin) {
    if (isAdmin) {
        document.body.classList.add('admin-authenticated');
        if (!adminToggle.querySelector('.admin-authenticated-indicator')) {
            const dot = document.createElement('span');
            dot.className = 'admin-authenticated-indicator';
            adminToggle.appendChild(dot);
        }
    } else {
        document.body.classList.remove('admin-authenticated');
        const dot = adminToggle.querySelector('.admin-authenticated-indicator');
        if (dot) dot.remove();
    }
}

// Gọi khi phiên admin đổi (đăng nhập / đăng xuất / hết hạn 30 phút)
function onAdminStateChange(isAdmin) {
    applyAdminAuthUI(isAdmin);
    if (!isAdmin && isAdminModeActive) {
        // Phiên hết hạn khi đang ở admin mode → tự về read-only
        isAdminModeActive = false;
        document.body.classList.remove('admin-mode-active');
        adminToggle.classList.remove('admin-active-btn');
        filterAndRender();
    }
}

function toggleAdminMode() {
    isAdminModeActive = !isAdminModeActive;
    if (isAdminModeActive) {
        document.body.classList.add('admin-mode-active');
        adminToggle.classList.add('admin-active-btn');
    } else {
        document.body.classList.remove('admin-mode-active');
        adminToggle.classList.remove('admin-active-btn');
    }
    filterAndRender();
}

// Mở modal đăng nhập Admin
function openAdminLoginModal() {
    adminPasswordInput.value = '';
    adminLoginError.classList.add('hidden');
    adminLoginModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => adminPasswordInput.focus(), 100);
}

// Đóng modal đăng nhập Admin
function closeAdminLoginModal() {
    adminLoginModal.classList.add('hidden');
    document.body.style.overflow = '';
    adminPasswordInput.value = '';
    adminLoginError.classList.add('hidden');
}

// Xử lý đăng nhập Admin
async function handleAdminLogin(e) {
    e.preventDefault();
    const password = adminPasswordInput.value;
    if (!password) return;

    // Disable submit button while verifying
    const submitBtn = adminLoginForm.querySelector('.admin-login-submit-btn');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2" style="width:16px;height:16px;animation:spin 1s linear infinite"></i> Đang xác thực...';
    lucide.createIcons({ nodes: [submitBtn] });

    try {
        // window.admin.login() verify qua RPC server-side + mở phiên 30 phút.
        const isValid = await window.admin.login(password);

        if (isValid) {
            closeAdminLoginModal();
            // Tự động bật admin mode sau khi đăng nhập
            if (!isAdminModeActive) toggleAdminMode();
        } else {
            // Hiện thông báo sai mật khẩu
            adminLoginError.classList.remove('hidden');
            adminPasswordInput.value = '';
            adminPasswordInput.focus();
            // Re-trigger shake animation
            adminLoginError.style.animation = 'none';
            void adminLoginError.offsetWidth;
            adminLoginError.style.animation = '';
        }
    } catch (err) {
        console.error('Lỗi xác thực admin:', err);
        adminLoginError.querySelector('span').textContent = 'Lỗi kết nối. Vui lòng thử lại.';
        adminLoginError.classList.remove('hidden');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        lucide.createIcons({ nodes: [submitBtn] });
    }
}

// Xử lý đăng xuất Admin
function handleAdminLogout() {
    isAdminModeActive = false;
    document.body.classList.remove('admin-mode-active');
    adminToggle.classList.remove('admin-active-btn');
    // window.admin.logout() xóa phiên + bắn onChange → applyAdminAuthUI gỡ chỉ báo
    window.admin.logout();
    filterAndRender();
}

// Tạo tên viết tắt tự động từ tên đơn vị (chữ cái đầu mỗi từ, tối đa 4 ký tự)
function generateAcronym(name) {
    const clean = name.replace(/\(.*?\)/g, ' ').trim();
    const words = clean.split(/\s+/).filter(Boolean);
    const ac = words.map(w => w[0]).join('').toUpperCase();
    return ac.slice(0, 4) || 'WEB';
}

function openCrudModalForAdd() {
    crudModalTitle.textContent = "Thêm Đơn Vị Mới";
    providerIdInput.value = "";
    crudForm.reset();

    crudModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function openCrudModalForEdit(id) {
    const provider = goldProviders.find(p => p.id === id);
    if (!provider) return;

    crudModalTitle.textContent = "Sửa Thông Tin Đơn Vị";
    providerIdInput.value = provider.id;
    providerNameInput.value = provider.name;
    providerCategorySelect.value = provider.category;
    providerUrlInput.value = provider.url;
    providerColorSelect.value = provider.color;

    crudModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCrudModal() {
    crudModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleCrudFormSubmit(e) {
    e.preventDefault();

    // Phiên admin có thể hết hạn khi modal đang mở → chặn ghi.
    if (window.cloud && window.cloud.ready && !window.admin.isAdmin()) {
        alert("Phiên admin đã hết hạn. Vui lòng đăng nhập lại.");
        closeCrudModal();
        return;
    }

    const idVal = providerIdInput.value;
    const nameVal = providerNameInput.value.trim();
    const categoryVal = providerCategorySelect.value;
    const urlVal = providerUrlInput.value.trim();
    const colorVal = providerColorSelect.value;

    if (idVal) {
        // Edit: chỉ cập nhật tên/phân loại/website/màu. Giữ nguyên acronym, mô tả, giá.
        const idNum = parseInt(idVal);
        const index = goldProviders.findIndex(p => p.id === idNum);
        if (index !== -1) {
            goldProviders[index].name = nameVal;
            goldProviders[index].category = categoryVal;
            goldProviders[index].url = urlVal;
            goldProviders[index].color = colorVal;

            // Sync to Supabase (ghi qua RPC kèm password phiên admin)
            if (window.cloud && window.cloud.ready) {
                window.cloud.upsertProvider(goldProviders[index], window.admin.getPassword()).catch(err => console.error("Lỗi đồng bộ Supabase khi cập nhật:", err));
            }
        }
    } else {
        // Add: tạo ID mới; acronym auto, mô tả rỗng, giá tự động.
        const maxId = goldProviders.reduce((max, p) => p.id > max ? p.id : max, 0);
        const newProvider = {
            id: maxId + 1,
            name: nameVal,
            acronym: generateAcronym(nameVal),
            category: categoryVal,
            description: '',
            url: urlVal,
            color: colorVal,
            priceMode: 'auto',
            customPrices: null
        };
        goldProviders.push(newProvider);

        // Sync to Supabase (ghi qua RPC kèm password phiên admin)
        if (window.cloud && window.cloud.ready) {
            window.cloud.upsertProvider(newProvider, window.admin.getPassword()).catch(err => console.error("Lỗi đồng bộ Supabase khi thêm mới:", err));
        }
    }

    // Save to LocalStorage
    saveProvidersToLocalStorage();

    // Recalculate prices
    updateComputedPrices();

    // Close modal and refresh directory view
    closeCrudModal();
    filterAndRender();
}

function handleDeleteProvider(id) {
    const provider = goldProviders.find(p => p.id === id);
    if (!provider) return;

    // Phiên admin có thể hết hạn → chặn xóa.
    if (window.cloud && window.cloud.ready && !window.admin.isAdmin()) {
        alert("Phiên admin đã hết hạn. Vui lòng đăng nhập lại.");
        return;
    }

    const isConfirmed = confirm(`Bạn có chắc chắn muốn xóa đơn vị "${provider.name}" khỏi danh sách?`);
    if (isConfirmed) {
        goldProviders = goldProviders.filter(p => p.id !== id);
        saveProvidersToLocalStorage();
        
        // Sync to Supabase (ghi qua RPC kèm password phiên admin)
        if (window.cloud && window.cloud.ready) {
            window.cloud.softDeleteProvider(id, window.admin.getPassword()).catch(err => console.error("Lỗi đồng bộ Supabase khi xóa:", err));
        }
        
        filterAndRender();
    }
}

function saveProvidersToLocalStorage() {
    localStorage.setItem('goldProviders', JSON.stringify(goldProviders));
}

function changeLayout(layout) {
    currentLayout = layout;
    localStorage.setItem('goldLayout', layout);
    
    const layoutGridBtn = document.getElementById('layoutGridBtn');
    const layoutListBtn = document.getElementById('layoutListBtn');
    
    if (layout === 'list') {
        providerGrid.classList.add('list-layout');
        if (layoutGridBtn) {
            layoutGridBtn.style.background = 'none';
            layoutGridBtn.style.color = 'var(--text-secondary)';
            layoutGridBtn.classList.remove('active');
        }
        if (layoutListBtn) {
            layoutListBtn.style.background = 'var(--gold-primary)';
            layoutListBtn.style.color = '#0b0f19';
            layoutListBtn.classList.add('active');
        }
    } else {
        providerGrid.classList.remove('list-layout');
        if (layoutGridBtn) {
            layoutGridBtn.style.background = 'var(--gold-primary)';
            layoutGridBtn.style.color = '#0b0f19';
            layoutGridBtn.classList.add('active');
        }
        if (layoutListBtn) {
            layoutListBtn.style.background = 'none';
            layoutListBtn.style.color = 'var(--text-secondary)';
            layoutListBtn.classList.remove('active');
        }
    }
}
