import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  electron: brand("Electron", "electron-mono.svg"),
  vite: brand("Vite", "vite-mono.svg"),
  astro: brand("Astro", "astro-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
  ffmpeg: brand("FFmpeg", "ffmpeg-mono.svg"),
  ollama: brand("Ollama", "ollama-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/assets/keyboard/logos/laravel.svg"
        alt="Laravel"
        className="w-4 h-4 object-contain inline-block"
      />
    ),
  },
  filament: {
    title: "FilamentPHP",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/assets/icon/filament-optimized.webp"
        alt="FilamentPHP"
        className="w-4 h-4 object-contain inline-block"
      />
    ),
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/assets/keyboard/logos/mysql.svg"
        alt="MySQL"
        className="w-4 h-4 object-contain inline-block"
      />
    ),
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/assets/keyboard/logos/php.svg"
        alt="PHP"
        className="w-4 h-4 object-contain inline-block"
      />
    ),
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold font-mono">B</span>,
  },
  vnpay: {
    title: "VNPay",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/assets/keyboard/logos/vnpay.svg"
        alt="VNPay"
        className="w-4 h-4 object-contain inline-block"
      />
    ),
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "fashion-ecommerce",
    category: "Fullstack E-Commerce",
    title: "Fashion Ecommerce",
    src: "/assets/projects-screenshots/fashion-ecommerce/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.filament,
        PROJECT_SKILLS.mysql,
      ],
    },
    github: "https://github.com/pham-trung-nghia-dev/fashion-ecommerce",
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Fashion Ecommerce Web Application
          </TypographyP>
          <TypographyP className="font-mono text-center text-muted-foreground">
            Hệ thống website thương mại điện tử thời trang được xây dựng theo kiến trúc tách biệt giữa Backend (Laravel + FilamentPHP + MySQL) và Frontend (Next.js + TailwindCSS + shadcn/ui), giao tiếp hoàn toàn qua RESTful API.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Kiến trúc hệ thống &amp; Phân tầng</TypographyH3>
          <div className="font-mono text-sm space-y-3 mb-6 bg-secondary/20 p-4 rounded-xl border border-border/60">
            <p className="font-semibold text-foreground">Luồng hoạt động của hệ thống:</p>
            <div className="p-3 bg-secondary/50 rounded-lg text-xs leading-relaxed font-mono">
              Admin (Filament Admin Panel) ➔ Database (MySQL) ➔ Laravel Backend API ➔ Next.js Frontend ➔ Người dùng (User)
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
              <li><strong>Admin</strong>: Sử dụng trang quản trị FilamentPHP để tạo, biên tập và quản lý dữ liệu (Sản phẩm, danh mục, bài viết, khuyến mãi, cửa hàng).</li>
              <li><strong>Database (MySQL)</strong>: Lưu trữ dữ liệu quan hệ với cấu trúc bảng chuẩn hóa và khóa ngoại chặt chẽ.</li>
              <li><strong>Laravel Backend</strong>: Cung cấp các RESTful APIs chuẩn JSON để truy xuất dữ liệu an toàn.</li>
              <li><strong>Next.js Frontend</strong>: Tiêu thụ API, render giao diện người dùng hiện đại, responsive và tối ưu hiệu năng.</li>
            </ul>
          </div>

          <TypographyH3 className="my-4 mt-8">Công nghệ sử dụng (Tech Stack)</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>Backend Services</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>Laravel</strong>: Framework PHP xử lý logic nghiệp vụ, quản lý migrations và cung cấp REST API.</li>
                <li><strong>FilamentPHP</strong>: Framework Admin Panel trực quan, mạnh mẽ cho phép quản trị toàn bộ nội dung.</li>
                <li><strong>MySQL</strong>: Hệ quản trị cơ sở dữ liệu quan hệ lưu trữ dữ liệu an toàn và ổn định.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>Frontend Application</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>Next.js (React)</strong>: Xây dựng ứng dụng web hiện đại, render dữ liệu nhanh chóng từ API.</li>
                <li><strong>Tailwind CSS</strong>: Xây dựng giao diện responsive, linh hoạt trên mọi kích thước màn hình.</li>
                <li><strong>shadcn/ui</strong>: Thư viện UI component thẩm mỹ, dễ tái sử dụng và đồng bộ phong cách.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Chức năng chính của hệ thống</TypographyH3>
          <div className="space-y-4 mb-6 text-sm font-mono">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">1. Trang quản trị Admin (FilamentPHP):</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li><strong>Products</strong>: Quản lý chi tiết sản phẩm, giá bán, hình ảnh và biến thể.</li>
                <li><strong>Categories</strong>: Phân loại danh mục sản phẩm theo cây phân cấp.</li>
                <li><strong>Posts &amp; Banners</strong>: Quản lý bài viết blog tin tức và banner quảng bá trên trang chủ.</li>
                <li><strong>Promotions &amp; Stores</strong>: Quản lý các chương trình ưu đãi và thông tin chuỗi cửa hàng.</li>
                <li>Hỗ trợ đầy đủ các thao tác CRUD, tìm kiếm, lọc nhanh và sắp xếp dữ liệu.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">2. Giao diện khách hàng (Next.js):</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Khám phá danh sách sản phẩm thời trang với bộ lọc danh mục trực quan.</li>
                <li>Xem chi tiết sản phẩm, hình ảnh và mô tả chất liệu.</li>
                <li>Cập nhật tin tức thời trang, khuyến mãi đang diễn ra và tìm kiếm địa chỉ cửa hàng.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">RESTful API Endpoints</TypographyH3>
          <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 font-mono text-xs space-y-2 mb-6">
            <p className="text-muted-foreground">Backend cung cấp các endpoint định dạng JSON cho client:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground">
              <code className="p-2 rounded bg-background/80 border border-border/40">GET /api/products</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">GET /api/categories</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">GET /api/posts</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">GET /api/promotions</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">GET /api/stores</code>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Định hướng mở rộng</TypographyH3>
          <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6">
            Kiến trúc phân tách Client - Server tạo tiền đề thuận lợi để mở rộng thêm chức năng giỏ hàng, thanh toán trực tuyến (VNPay/MoMo), hệ thống xác thực người dùng và tích hợp ứng dụng di động (Mobile App) trong tương lai.
          </p>
        </div>
      );
    },
  },
  {
    id: "e-ward",
    category: "Public Sector & E-Gov",
    title: "E-WARD",
    src: "/assets/projects-screenshots/e-ward/landing.png",
    screenshots: [
      "screen-1.png",
      "screen-2.png",
      "screen-3.png",
      "screen-4.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.vnpay,
      ],
    },
    github: "https://github.com/pham-trung-nghia-dev/eward-portal",
    live: "https://ewardabc.online/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Hệ Thống Quản Lý Thủ Tục Hành Chính Trực Tuyến - E-WARD
          </TypographyP>
          <TypographyP className="font-mono text-center text-muted-foreground">
            Hệ thống giải quyết thủ tục hành chính trực tuyến (Dịch vụ công cấp xã/phường) được phát triển cho Ủy ban nhân dân Phường ABC, Đại học Công nghiệp TP.HCM (IUH). Cho phép công dân nộp hồ sơ, đặt lịch hẹn và tra cứu tiến độ công khai 24/7.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow
            images={[
              `${BASE_PATH}/e-ward/screen-1.png`,
              `${BASE_PATH}/e-ward/screen-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">🎯 Mục tiêu &amp; Công nghệ cốt lõi</TypographyH3>
          <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">
            Số hóa toàn diện các thủ tục hành chính, cung cấp dịch vụ công trực tuyến 24/7, minh bạch hóa tiến trình giải quyết hồ sơ từ khâu tiếp nhận đến trả kết quả, đồng thời tích hợp cổng thanh toán trực tuyến VNPay Gateway.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 font-mono">Backend Architecture</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground font-mono">
                <li><strong>Laravel 12 (PHP 8.2+)</strong>: Xử lý toàn bộ logic nghiệp vụ, service layer, routing &amp; controller.</li>
                <li><strong>MySQL</strong>: Lưu trữ dữ liệu quan hệ, quan hệ bảng chặt chẽ và chuẩn hóa.</li>
                <li><strong>Redis</strong>: Bộ nhớ đệm cache dữ liệu, tối ưu hóa tốc độ truy xuất và giảm tải database.</li>
                <li><strong>VNPay Gateway</strong>: Cổng thanh toán trực tuyến với thuật toán mã hóa chữ ký số Checksum HMAC-SHA512.</li>
                <li><strong>SMTP &amp; PhpSpreadsheet</strong>: Tự động gửi thông báo OTP, email trạng thái và xuất báo cáo Excel.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 font-mono">Frontend &amp; UI Stack</h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground font-mono">
                <li><strong>Blade Templates &amp; JavaScript</strong>: Xây dựng giao diện đồng bộ, tốc độ phản hồi nhanh.</li>
                <li><strong>jQuery &amp; Bootstrap</strong>: Quản lý tương tác DOM, modal form động và xử lý validation client-side.</li>
                <li><strong>Responsive Design</strong>: Tối ưu hiển thị mượt mà trên cả máy tính (Desktop) và thiết bị di động (Mobile).</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">👥 5 Nhóm đối tượng &amp; Phân quyền hệ thống</TypographyH3>
          <div className="space-y-4 mb-6 font-mono text-xs">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 space-y-2">
              <p className="font-bold text-sm text-foreground">1. Công dân / Tổ chức:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Đăng ký &amp; Đăng nhập</strong>: Xác thực tài khoản qua OTP email an toàn, quản lý thông tin CCCD và địa chỉ.</li>
                <li><strong>Nộp hồ sơ trực tuyến</strong>: Tra cứu TTHC theo lĩnh vực, điền Form động, đính kèm tệp tài liệu (PDF, DOCX, ảnh) và thanh toán lệ phí VNPay.</li>
                <li><strong>Đặt lịch hẹn trực tiếp</strong>: Chọn ngày giờ, quầy làm việc, nhận mã QR Check-in tự động tại quầy và email nhắc hẹn.</li>
                <li><strong>Tra cứu công khai</strong>: Theo dõi tiến độ hồ sơ theo mã hồ sơ &amp; số CCCD mà không bắt buộc phải đăng nhập.</li>
                <li><strong>Quản lý hồ sơ cá nhân</strong>: Xem chi tiết trạng thái, bổ sung giấy tờ khi có yêu cầu, rút hồ sơ và tải hóa đơn lệ phí PDF.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 space-y-2">
              <p className="font-bold text-sm text-foreground">2. Cán bộ một cửa:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Dashboard thống kê hồ sơ mới trong ngày, hồ sơ chờ tiếp nhận và lịch hẹn.</li>
                <li>Tiếp nhận hồ sơ trực tuyến &amp; trực tiếp, tự động tính ngày hẹn trả kết quả theo thời hạn quy định của TTHC.</li>
                <li>Phân công cán bộ thụ lý cụ thể, quét mã QR Check-in lịch hẹn tự động gán số thứ tự và in giấy tiếp nhận/giấy chuyển.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 space-y-2">
              <p className="font-bold text-sm text-foreground">3. Cán bộ thụ lý &amp; 4. Lãnh đạo phê duyệt:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Cán bộ thụ lý</strong>: Kiểm tra tài liệu, thêm ý kiến xử lý, gửi yêu cầu công dân bổ sung hồ sơ (tự động kích hoạt email), upload file kết quả và chuyển trình lãnh đạo.</li>
                <li><strong>Lãnh đạo</strong>: Dashboard duyệt hồ sơ, xem ý kiến xử lý, phê duyệt hoàn tất (tự động chuyển về cán bộ một cửa trả kết quả) hoặc yêu cầu xử lý lại, xem và xuất báo cáo thống kê.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 space-y-2">
              <p className="font-bold text-sm text-foreground">5. Quản trị viên (Admin):</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Quản lý và phân quyền người dùng (Công dân, Cán bộ một cửa, Cán bộ thụ lý, Lãnh đạo).</li>
                <li>Cấu hình danh mục lĩnh vực, TTHC, cấu hình Form động và thành phần hồ sơ theo quy định.</li>
                <li>Báo cáo thống kê doanh thu lệ phí VNPay, xuất dữ liệu Excel và quản trị xóa cache Redis giúp hệ thống vận hành mượt mà.</li>
              </ul>
            </div>
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/e-ward/screen-3.png`,
              `${BASE_PATH}/e-ward/screen-4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">🔄 Quy trình xử lý hồ sơ khép kín</TypographyH3>
          <div className="p-4 rounded-xl border border-border/60 bg-secondary/20 font-mono text-xs space-y-2 mb-6">
            <p className="text-foreground font-semibold">Quy trình 7 bước giải quyết hồ sơ dịch vụ công:</p>
            <div className="p-3 bg-secondary/50 rounded-lg text-xs leading-relaxed font-mono text-foreground/90">
              Công dân nộp hồ sơ ➔ Cán bộ một cửa tiếp nhận ➔ Chuyển thụ lý ➔ Cán bộ thụ lý xử lý &amp; đề xuất ➔ Chuyển lãnh đạo ➔ Lãnh đạo phê duyệt ➔ Cán bộ một cửa trả kết quả cho công dân.
            </div>
            <p className="text-muted-foreground pt-1">
              Hệ thống đồng bộ kiểm tra trạng thái tự động: trường hợp cần bổ sung giấy tờ, hệ thống tự động kích hoạt thông báo qua Email SMTP kèm đường dẫn bổ sung trực tiếp cho công dân.
            </p>
          </div>

          <TypographyH3 className="my-4 mt-8">📊 Tính năng nổi bật &amp; Tối ưu kỹ thuật</TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono text-xs">
            <div className="p-3 rounded-lg border border-border/50 bg-secondary/10">
              <strong className="text-foreground">Form động (Dynamic Form):</strong> Cấu hình linh hoạt các trường nhập liệu (text, number, date, select, file upload) với validation tự động.
            </div>
            <div className="p-3 rounded-lg border border-border/50 bg-secondary/10">
              <strong className="text-foreground">Thanh toán VNPay:</strong> Giao dịch an toàn, xác thực chữ ký số, lưu vết lịch sử giao dịch và xuất hóa đơn PDF.
            </div>
            <div className="p-3 rounded-lg border border-border/50 bg-secondary/10">
              <strong className="text-foreground">Lịch hẹn &amp; Check-in QR:</strong> Đặt hẹn trước, quét mã QR check-in tại quầy làm việc tự động gán số thứ tự tiếp nhận.
            </div>
            <div className="p-3 rounded-lg border border-border/50 bg-secondary/10">
              <strong className="text-foreground">Redis Caching &amp; Performance:</strong> Caching danh mục TTHC và dữ liệu truy vấn tĩnh giúp tối ưu tải và tốc độ phản hồi trang.
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "laravel-ecommerce",
    category: "Fullstack E-Commerce",
    title: "Web Bán Hàng",
    src: "/assets/projects-screenshots/laravel-ecommerce/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.redis,
      ],
    },
    github: "https://github.com/pham-trung-nghia-dev/laravel-ecommerce",
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🛒 Web Bán Hàng - Hệ Thống E-Commerce Laravel
          </TypographyP>
          <TypographyP className="font-mono text-center text-muted-foreground">
            Hệ thống thương mại điện tử hoàn chỉnh được xây dựng bằng Laravel 12 &amp; PHP 8.2, tối ưu hiệu năng cao với Redis caching, xử lý bất đồng bộ qua Queue jobs và tích hợp cổng thanh toán MoMo API.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Kiến trúc &amp; Công nghệ sử dụng</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>Backend Services &amp; Architecture</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>Laravel 12.x &amp; PHP 8.2+</strong>: Kiến trúc chuẩn MVC, Eloquent ORM, Service Layer và Middleware bảo mật.</li>
                <li><strong>Redis</strong>: Caching danh mục, tìm kiếm (TTL 180s), lưu trữ session và quản lý hàng đợi (Queue).</li>
                <li><strong>MySQL</strong>: Database thiết kế chuẩn hóa 9 bảng chính (sản phẩm, đơn hàng, khách hàng, chi tiết đơn hàng, email log...).</li>
                <li><strong>Queue Jobs &amp; Mail</strong>: Xử lý gửi email xác nhận đơn hàng bất đồng bộ qua Gmail SMTP với Blade templates.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>Frontend &amp; Third-party Integration</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>Blade Templates &amp; Bootstrap</strong>: Giao diện trực quan, tối ưu hiển thị responsive đa thiết bị (Mobile/Tablet/Desktop).</li>
                <li><strong>jQuery &amp; Vite / Tailwind CSS</strong>: Cập nhật giỏ hàng real-time, animation mượt mà và tối ưu bundle frontend.</li>
                <li><strong>Cổng thanh toán MoMo</strong>: Tích hợp MoMo Payment Gateway song song với thanh toán COD và thẻ ATM.</li>
                <li><strong>Security Best Practices</strong>: Chống CSRF, SQL Injection, XSS, cơ chế Session an toàn và validation chặt chẽ.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Tính năng chi tiết theo phân hệ</TypographyH3>
          <div className="space-y-4 mb-6 text-sm font-mono">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">1. Phân hệ Khách hàng (Frontend Storefront):</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li><strong>Trang chủ &amp; Sản phẩm</strong>: Hiển thị sản phẩm mới nhất được lưu cache bằng Redis; phân loại theo danh mục đa cấp (parent-child) và thương hiệu.</li>
                <li><strong>Tìm kiếm &amp; Bộ lọc</strong>: Tìm kiếm tốc độ cao với Redis caching (TTL 180s); lọc linh hoạt theo khoảng giá, danh mục, thương hiệu.</li>
                <li><strong>Giỏ hàng &amp; Thanh toán</strong>: Giỏ hàng cập nhật số lượng real-time, tính toán phí vận chuyển, hỗ trợ thanh toán linh hoạt (COD, MoMo, ATM).</li>
                <li><strong>Tài khoản &amp; Lịch sử đơn</strong>: Đăng ký, đăng nhập, bảo vệ session và tra cứu lịch sử mua hàng cá nhân.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">2. Phân hệ Quản trị (Admin Dashboard):</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li><strong>Dashboard tổng quan</strong>: Thống kê số lượng đơn hàng, doanh thu và sản phẩm.</li>
                <li><strong>Quản lý Sản phẩm</strong>: CRUD toàn diện sản phẩm, upload ảnh, bật/tắt trạng thái hiển thị.</li>
                <li><strong>Quản lý Danh mục &amp; Thương hiệu</strong>: Cấu trúc cây phân cấp danh mục cha - con linh hoạt.</li>
                <li><strong>Quản lý Đơn hàng</strong>: Xem chi tiết đơn hàng, tình trạng xử lý và lịch sử thanh toán.</li>
                <li><strong>Email Log System</strong>: Giám sát toàn bộ tiến trình gửi email xác nhận và cảnh báo lỗi.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Cấu trúc Database &amp; Thống kê dự án</TypographyH3>
          <div className="p-4 rounded-xl border border-border/60 bg-secondary/10 font-mono text-xs space-y-3 mb-6">
            <p className="font-semibold text-foreground">9 Bảng dữ liệu quan hệ được chuẩn hóa:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-foreground">
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_category_product</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_brand</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_product</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_customer</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_shipping</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_payment</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_order</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_order_details</code>
              <code className="p-2 rounded bg-background/80 border border-border/40">tbl_email_log</code>
            </div>
            <div className="pt-2 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-muted-foreground text-center">
              <div><strong className="text-foreground text-sm">7</strong><br />Controllers</div>
              <div><strong className="text-foreground text-sm">40+</strong><br />Routes</div>
              <div><strong className="text-foreground text-sm">12+</strong><br />Migrations</div>
              <div><strong className="text-foreground text-sm">5,000+</strong><br />Lines of Code</div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/portfolio-full.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
    live: "https://phamtrungnghia-fullstack-dev.vercel.app",
    github: "https://github.com/pham-trung-nghia-dev/portfolio-nextjs",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            3D Interactive Portfolio
          </TypographyP>
          <TypographyP className="font-mono text-center text-muted-foreground">
            Trang web portfolio cá nhân kết hợp đồ họa 3D tương tác thời gian thực, giao diện hiện đại và hiệu ứng mượt mà giới thiệu các dự án và năng lực công nghệ Fullstack.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Kiến trúc hệ thống &amp; Điểm nhấn kỹ thuật</TypographyH3>
          <div className="font-mono text-sm space-y-3 mb-6 bg-secondary/20 p-4 rounded-xl border border-border/60">
            <p className="font-semibold text-foreground">Luồng hoạt động &amp; Tương tác:</p>
            <div className="p-3 bg-secondary/50 rounded-lg text-xs leading-relaxed font-mono">
              Next.js 16 (App Router) ➔ 3D Keyboard Engine (@chibi3d/runtime + Three.js) ➔ GSAP / Motion ➔ Responsive Mobile Accordion ➔ Resend API Form
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
              <li><strong>Interactive 3D Keyboard</strong>: Dựng hình bàn phím cơ 3D tương tác thời gian thực bằng Three.js, từng phím bấm phản ánh kỹ năng chuyên môn tương ứng.</li>
              <li><strong>Mobile-Optimized Accordion</strong>: Chuyển đổi linh hoạt thành dạng accordion dọc trên mobile, tối ưu hoàn toàn cho thao tác vuốt chạm.</li>
              <li><strong>Fluid Animation &amp; Smooth Scroll</strong>: Kết hợp Lenis Smooth Scroll, GSAP ScrollTrigger và Motion cho hiệu ứng lướt mượt mà, không giật lag.</li>
              <li><strong>Resend API Form</strong>: Xử lý gửi thư trực tiếp qua Serverless Route Handler kèm popup modal thông báo phản hồi nhanh.</li>
            </ul>
          </div>

          <TypographyH3 className="my-4 mt-8">Công nghệ sử dụng (Tech Stack)</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>Frontend &amp; Animations</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>Next.js 16 (Turbopack)</strong>: Framework React với kiến trúc App Router, SSR/SSG tối ưu SEO và tốc độ.</li>
                <li><strong>React 19 &amp; TypeScript 5</strong>: Xây dựng component hiện đại, type-safe chặt chẽ.</li>
                <li><strong>Tailwind CSS &amp; shadcn/ui</strong>: Hệ thống giao diện responsive, Dark/Light mode linh hoạt.</li>
                <li><strong>GSAP &amp; Motion</strong>: Quản lý animation phức tạp và hiệu ứng chuyển cảnh mượt mà.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <span>3D Graphics, Backend &amp; DevOps</span>
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground font-mono">
                <li><strong>@chibi3d/runtime &amp; Three.js</strong>: Render mô hình 3D và Canvas particle trực tiếp trên web.</li>
                <li><strong>Next.js Route Handlers</strong>: Backend API xử lý gửi email và validation với Zod.</li>
                <li><strong>Resend API</strong>: Dịch vụ gửi email giao dịch tốc độ cao và bảo mật.</li>
                <li><strong>Vercel</strong>: Nền tảng triển khai CI/CD toàn cầu, tự động build &amp; deploy từ GitHub.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Tính năng nổi bật (Features)</TypographyH3>
          <div className="space-y-4 mb-6 text-sm font-mono">
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">1. Bàn phím 3D tương tác &amp; Mobile Accordion:</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Mô phỏng bàn phím cơ 3D sống động; tương tác trực tiếp khi hover chuột hoặc nhấn phím vật lý.</li>
                <li>Tự động chuyển đổi thành danh sách accordion phân cấp chuyên nghiệp trên màn hình di động.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">2. Showcase Dự án &amp; Dialog chi tiết:</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Modal responsive hiển thị phân tích kiến trúc, sơ đồ công nghệ và hình ảnh minh họa chi tiết.</li>
                <li>Nút chuyển đổi nhanh tới Live Demo và mã nguồn GitHub.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/10">
              <p className="font-semibold text-foreground text-sm mb-1.5">3. Trải nghiệm &amp; Liên hệ nhanh:</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Chuyển đổi Dark/Light mode ấn tượng với View Transitions.</li>
                <li>Form liên hệ tích hợp xác thực dữ liệu và popup thông báo cảm ơn ngay giữa màn hình.</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Ảnh chụp chi tiết các Section
          </TypographyH3>
          <p className="font-mono mb-2 text-sm text-muted-foreground">
            Toàn bộ giao diện và các phân hệ trên website theo thứ tự từ trên xuống dưới:
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/1.png`,
              `${BASE_PATH}/portfolio/2.png`,
              `${BASE_PATH}/portfolio/3.png`,
              `${BASE_PATH}/portfolio/4.png`,
              `${BASE_PATH}/portfolio/5.png`,
              `${BASE_PATH}/portfolio/6.png`,
              `${BASE_PATH}/portfolio/7.png`,
              `${BASE_PATH}/portfolio/8.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
