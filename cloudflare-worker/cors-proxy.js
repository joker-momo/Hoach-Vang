// Cloudflare Worker — CORS proxy cho cổng giá vàng MINHFAT.VN
// ---------------------------------------------------------------------------
// Vì sao cần: webgia.com (nguồn tỷ giá VCB) KHÔNG gửi header CORS, nên trình
// duyệt chặn fetch trực tiếp. Worker này chạy server-side (serverless, free),
// lấy HTML giúp rồi gắn header CORS để trang gọi được.
//
// CÁCH DEPLOY (1 lần, free, không cần thẻ):
//   1. Tạo tài khoản https://dash.cloudflare.com  → Workers & Pages → Create → Worker.
//   2. Dán toàn bộ file này vào, bấm Deploy.
//   3. Copy URL worker (vd https://cors-proxy.<tên>.workers.dev).
//   4. Dán URL đó vào CORS_WORKER_URL trong script.js.
//
// (Tùy chọn) Hạn chế chỉ domain của bạn gọi được: sửa ALLOWED_ORIGINS.
// ---------------------------------------------------------------------------

// Chỉ cho proxy tới các host này (chống biến worker thành open proxy).
const ALLOWED_HOSTS = ['webgia.com', 'www.webgia.com', 'youtube.com', 'www.youtube.com'];

// '*' = mọi origin. Để siết, đổi thành ['https://minhfat.vn'].
const ALLOWED_ORIGINS = '*';

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS === '*' ? '*'
    : (ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]);
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };
}

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '*';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response('ok', { headers });
    }

    const target = new URL(request.url).searchParams.get('url');
    if (!target) {
      return new Response('Missing ?url=', { status: 400, headers });
    }

    let upstream;
    try {
      upstream = new URL(target);
    } catch {
      return new Response('Bad url', { status: 400, headers });
    }

    if (upstream.protocol !== 'https:' || !ALLOWED_HOSTS.includes(upstream.hostname)) {
      return new Response('Host not allowed', { status: 403, headers });
    }

    try {
      const resp = await fetch(upstream.toString(), {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml,*/*',
        },
      });
      const body = await resp.text();
      return new Response(body, {
        status: resp.status,
        headers: {
          ...headers,
          'Content-Type': resp.headers.get('content-type') || 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=20',
        },
      });
    } catch (e) {
      return new Response('Upstream fetch failed: ' + e, { status: 502, headers });
    }
  },
};
