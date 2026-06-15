// ==========================================================================
// 1. DATABASE: 41 Gold Providers in Vietnam
// ==========================================================================
const goldProviders = [
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

const providerGrid = document.getElementById('providerGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const filterTabs = document.querySelectorAll('.filter-tab');
const sortSelect = document.getElementById('sortSelect');
const emptyState = document.getElementById('emptyState');

// Converter elements
const goldAmountInput = document.getElementById('goldAmount');
const goldUnitSelect = document.getElementById('goldUnit');
const resGram = document.getElementById('resGram');
const resOunce = document.getElementById('resOunce');
const resVnd = document.getElementById('resVnd');

// Theme toggle
const themeToggle = document.getElementById('themeToggle');

// Clock
const timeStringSpan = document.getElementById('timeString');

// Modal Elements
const goldModal = document.getElementById('goldModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContent = document.getElementById('modalContent');

// ==========================================================================
// 3. INITIALIZATION & LOGIC
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateComputedPrices();
    renderProviders();
    renderTicker();
    renderPriceTable();
    updateClock();
    updateConversion();
    
    // Start timers
    setInterval(updateClock, 1000);
    setInterval(autoScrollTicker, 50); // Ticker scrolling
    setInterval(simulateMarketFluctuations, 5000); // Dynamic price update mock
    
    // Bind Event Listeners
    setupEventListeners();
    lucide.createIcons();
});

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

    // Converter inputs
    goldAmountInput.addEventListener('input', updateConversion);
    goldUnitSelect.addEventListener('change', updateConversion);

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
        }
    });

    // Delegate click on grid cards to open modal
    providerGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.provider-card');
        if (card) {
            // Only trigger popup if not clicking on elements that might have other handlers
            const providerId = parseInt(card.getAttribute('data-id'));
            openModal(providerId);
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
    
    if (data.length === 0) {
        emptyState.classList.remove('hidden');
        providerGrid.style.display = 'none';
        return;
    }

    emptyState.classList.add('hidden');
    providerGrid.style.display = 'grid';

    data.forEach(provider => {
        const cardHtml = `
            <div class="provider-card glass-panel" data-id="${provider.id}">
                <div class="card-header">
                    <div class="brand-avatar" style="background: ${provider.color}">
                        ${provider.acronym}
                    </div>
                    <span class="tag-badge ${provider.category}">
                        ${provider.category === 'enterprise' ? 'Doanh nghiệp' : provider.category === 'bank' ? 'Ngân hàng' : 'Trang tin'}
                    </span>
                </div>
                <div class="card-body">
                    <h3>${provider.name}</h3>
                    <p>${provider.description}</p>
                    
                    <div class="card-price-preview">
                        <div class="price-preview-col">
                            <span class="price-preview-label">Mua vào</span>
                            <span class="price-preview-val">${formatVndRaw(provider.computedBuy)}</span>
                        </div>
                        <div class="price-preview-col">
                            <span class="price-preview-label">Bán ra</span>
                            <span class="price-preview-val sell">${formatVndRaw(provider.computedSell)}</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="status-indicator">
                        <span>Cập nhật liên tục</span>
                    </div>
                    <button class="visit-btn view-details-btn" data-id="${provider.id}">
                        <span>Xem Giá Nhanh</span>
                        <i data-lucide="eye"></i>
                    </button>
                </div>
            </div>
        `;
        providerGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

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
// 5. LIVE TICKER & PRICE TABLE
// ==========================================================================

function renderTicker() {
    const tickerContainer = document.getElementById('tickerContainer');
    tickerContainer.innerHTML = '';

    const items = [
        { name: "SJC Miếng", price: formatVndTael(goldRates.sjc.sell), change: goldRates.sjc.change, dir: goldRates.sjc.direction },
        { name: "DOJI Miếng", price: formatVndTael(goldRates.doji.sell), change: goldRates.doji.change, dir: goldRates.doji.direction },
        { name: "PNJ Miếng", price: formatVndTael(goldRates.pnj.sell), change: goldRates.pnj.change, dir: goldRates.pnj.direction },
        { name: "Vàng Nhẫn 9999", price: formatVndTael(goldRates.ring9999.sell), change: goldRates.ring9999.change, dir: goldRates.ring9999.direction },
        { name: "Thế giới (Ounce)", price: `$${goldRates.world.sell}`, change: goldRates.world.change, dir: goldRates.world.direction }
    ];

    // Duplicate list to ensure infinite scroll illusion
    const extendedItems = [...items, ...items];

    extendedItems.forEach((item, index) => {
        const changeSign = item.change >= 0 ? '+' : '';
        const changePercent = (Math.abs(item.change) / 1000000).toFixed(2); // Convert to Million VND representation
        const formattedChange = item.name.includes("Thế giới") ? `${changeSign}${item.change}` : `${changeSign}${changePercent} Tr`;

        const itemHtml = `
            <div class="ticker-item">
                <span class="ticker-item-name">${item.name}:</span>
                <span class="ticker-item-price">${item.price}</span>
                <span class="ticker-item-change ${item.dir}">
                    <i data-lucide="${item.dir === 'up' ? 'trending-up' : 'trending-down'}"></i>
                    ${formattedChange}
                </span>
            </div>
        `;
        tickerContainer.insertAdjacentHTML('beforeend', itemHtml);
    });

    lucide.createIcons();
}

function renderPriceTable() {
    const tbody = document.getElementById('priceTableBody');
    tbody.innerHTML = '';

    const items = [
        { type: "SJC Vàng Miếng 99.99", buy: goldRates.sjc.buy, sell: goldRates.sjc.sell, change: goldRates.sjc.change, dir: goldRates.sjc.direction },
        { type: "DOJI Vàng Miếng 99.99", buy: goldRates.doji.buy, sell: goldRates.doji.sell, change: goldRates.doji.change, dir: goldRates.doji.direction },
        { type: "PNJ Vàng Trơn 99.99", buy: goldRates.pnj.buy, sell: goldRates.pnj.sell, change: goldRates.pnj.change, dir: goldRates.pnj.direction },
        { type: "Vàng Nhẫn 24K (99.99%)", buy: goldRates.ring9999.buy, sell: goldRates.ring9999.sell, change: goldRates.ring9999.change, dir: goldRates.ring9999.direction },
        { type: "Vàng Trang Sức 18K (75%)", buy: Math.round(goldRates.ring9999.buy * 0.75), sell: Math.round(goldRates.ring9999.sell * 0.75), change: Math.round(goldRates.ring9999.change * 0.75), dir: goldRates.ring9999.direction }
    ];

    items.forEach(item => {
        const changeSign = item.change >= 0 ? '+' : '';
        const displayChange = (item.change / 1000).toLocaleString('vi-VN');
        const rowHtml = `
            <tr>
                <td><strong>${item.type}</strong></td>
                <td>${formatVndRaw(item.buy)}</td>
                <td class="color-gold">${formatVndRaw(item.sell)}</td>
                <td>
                    <span class="price-change-cell ${item.dir}">
                        <i data-lucide="${item.dir === 'up' ? 'trending-up' : 'trending-down'}"></i>
                        ${changeSign}${displayChange}đ
                    </span>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', rowHtml);
    });

    lucide.createIcons();
}

// Auto scroll ticker container
function autoScrollTicker() {
    const tickerContainer = document.getElementById('tickerContainer');
    if (!tickerContainer) return;
    
    tickerContainer.scrollLeft += 1;
    
    const maxScroll = tickerContainer.scrollWidth / 2;
    if (tickerContainer.scrollLeft >= maxScroll) {
        tickerContainer.scrollLeft = 0;
    }
}

// Simulate market fluctuation to make the dashboard dynamic
function simulateMarketFluctuations() {
    const fluctuationKeys = ['sjc', 'doji', 'pnj', 'ring9999'];
    fluctuationKeys.forEach(key => {
        const sign = Math.random() > 0.45 ? 1 : -1;
        const amount = Math.floor(Math.random() * 5) * 10000;
        
        goldRates[key].change = sign * amount;
        goldRates[key].buy += sign * amount;
        goldRates[key].sell += sign * amount;
        goldRates[key].direction = sign >= 0 ? 'up' : 'down';
    });

    // World Gold fluctuation
    const worldSign = Math.random() > 0.5 ? 1 : -1;
    const worldVal = Math.random() * 2;
    goldRates.world.change = parseFloat((worldSign * worldVal).toFixed(1));
    goldRates.world.buy = parseFloat((goldRates.world.buy + worldSign * worldVal).toFixed(1));
    goldRates.world.sell = parseFloat((goldRates.world.sell + worldSign * worldVal).toFixed(1));
    goldRates.world.direction = worldSign >= 0 ? 'up' : 'down';

    // Update computed properties inside provider list
    updateComputedPrices();

    // Re-render
    renderTicker();
    renderPriceTable();
    filterAndRender(); // Re-render directory (keeps sorting and filters updated in real-time)
    updateConversion();
}

// ==========================================================================
// 6. GOLD UNIT CONVERTER
// ==========================================================================
function updateConversion() {
    const amountVal = parseFloat(goldAmountInput.value);
    const selectedUnit = goldUnitSelect.value;

    if (isNaN(amountVal) || amountVal <= 0) {
        resGram.textContent = "0.00 g";
        resOunce.textContent = "0.00 oz";
        resVnd.textContent = "0 ₫";
        return;
    }

    let grams = 0;
    let ounces = 0;
    let taels = 0;

    switch(selectedUnit) {
        case 'tael':
            taels = amountVal;
            grams = amountVal * 37.5;
            ounces = amountVal * 1.20565;
            break;
        case 'chi':
            taels = amountVal / 10;
            grams = amountVal * 3.75;
            ounces = amountVal * 0.120565;
            break;
        case 'gram':
            grams = amountVal;
            taels = amountVal / 37.5;
            ounces = amountVal / 31.103478;
            break;
        case 'ounce':
            ounces = amountVal;
            grams = amountVal * 31.103478;
            taels = grams / 37.5;
            break;
    }

    const sjcPricePerTael = goldRates.sjc.sell;
    const totalVnd = taels * sjcPricePerTael;

    resGram.textContent = `${grams.toFixed(2)} g`;
    resOunce.textContent = `${ounces.toFixed(3)} oz`;
    resVnd.textContent = formatVndRaw(Math.round(totalVnd));
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
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeStringSpan.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function formatVndTael(price) {
    const millions = price / 1000000;
    return `${millions.toFixed(2)} triệu/lượng`;
}

function formatVndRaw(price) {
    return `${price.toLocaleString('vi-VN')} ₫`;
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
            <div class="spinner-text">Đang kết nối tới cổng thông tin ${provider.acronym}...</div>
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
                    <td><strong>${item.name}</strong></td>
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
                <div class="brand-avatar" style="background: ${provider.color}">
                    ${provider.acronym}
                </div>
                <div class="modal-brand-info">
                    <h3>${provider.name}</h3>
                    <p>${provider.category === 'enterprise' ? 'Doanh nghiệp Vàng bạc' : provider.category === 'bank' ? 'Ngân hàng Thương mại' : 'Trang tin tổng hợp'}</p>
                </div>
            </div>
            
            <div class="modal-desc-box">
                ${provider.description}
            </div>
            
            <div class="modal-price-title">
                <i data-lucide="trending-up"></i>
                <span>Bảng Giá Vàng Trực Tuyến (${provider.acronym})</span>
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
                <a href="${provider.url}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-primary">
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
