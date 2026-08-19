export type LocalizedString = {
  [langCode: string]: string; // ex: 'en', 'ko', 'tr', 'ar'
};

/** 상세 페이지 상단에 크게 박히는 숫자 칩 */
export type Metric = {
  value: string;
  label: LocalizedString;
};

/** 상세 페이지 기술 스택 정리 블록 */
export type StackGroup = {
  group: LocalizedString;
  items: string[];
};

export type Project = {
  slug: string;
  title: LocalizedString;
  blurb: LocalizedString;
  tags: string[];
  thumb?: string;
  previewVideo?: string;
  mainVideo?: string;
  youtubeVideo?: string;
  previewGif?: string;
  links?: { link?: string; code?: string };
  area?: "React" | "AI" | "Game" | "ROS/Arduino" | "Other";
  status?: "Active" | "In Progress" | "Paused" | "Study" | "Complete";
  active?: boolean;
  /** 카드에 ⭐ 뱃지를 달고 목록 상단에 고정 */
  featured?: boolean;
  /**
   * 벤토 그리드에서 차지하는 타일 크기. 클수록 눈에 먼저 들어온다.
   *  3 → 2×2 대표작   2 → 2×1 가로 타일   1 → 1×1 기본 타일
   *  0 → 이미지 없이 하단 칩 한 줄로만 (습작·실습용)
   * 생략하면 1로 본다.
   */
  weight?: 0 | 1 | 2 | 3;
  /** "2026.06 – 현재" 같은 표기 */
  period?: string;
  /** 맡은 역할 */
  role?: LocalizedString;
  /** 상세 페이지 히어로 아래 숫자 칩 */
  metrics?: Metric[];
  /** 상세 페이지 스택 정리 */
  stack?: StackGroup[];
  body?: LocalizedString; // long writeup per language
  gallery?: string[]; // additional images in public/media
  /** 데스크톱 캡쳐처럼 가로가 넓은 이미지는 "wide"로 두면 갤러리를 2단으로 크게 깐다 */
  galleryLayout?: "masonry" | "wide";
};

export const PROJECTS: Project[] = [
  //placeholder
  // {
  //   slug: "woodongseol",
  //   title: { ko: "", en: "", tr: "", ar: "" },
  //   blurb: { ko: "", en: "", tr: "", ar: "" },
  //   tags: [],
  //   area: "Other",
  //   status: "Complete",
  //   thumb: "",
  //   previewVideo: "",
  //   mainVideo: "",
  //   body: { ko: "", en: "", tr: "", ar: "" },
  //   gallery: [],
  // },

  //메렌 로묘 발판 도우미
  {
    slug: "maple-step",
    weight: 2,
    title: {
      ko: "메렌 로묘 발판 도우미",
      en: "Maple Romeo Helper",
      tr: "Maple Romeo Yardımcısı",
      ar: "مساعد Maple Romeo",
    },
    blurb: {
      ko: "메이플랜드 로미오·줄리엣 파퀘의 발판 단계를 4명이 같은 화면에서 맞추는 실시간 도우미. 방 코드 4자리만 공유하면 끝.",
      en: "A realtime helper that lets a 4-player MapleLand party sync their platform picks on one shared board. Share a 4-digit room code and go.",
      tr: "MapleLand parti görevindeki platform aşamasını 4 kişinin aynı ekranda eşitlemesini sağlayan gerçek zamanlı yardımcı. 4 haneli oda kodu yeter.",
      ar: "أداة فورية تتيح لفريق من 4 لاعبين مزامنة اختياراتهم على لوحة مشتركة. شارك رمز الغرفة المكوّن من 4 أرقام فقط.",
    },
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase Realtime",
      "TailwindCSS",
      "SEO",
      "AdSense",
    ],
    area: "React",
    status: "Active",
    active: true,
    featured: true,
    period: "2026",
    role: {
      ko: "기획 · 디자인 · 개발 · 배포 · 운영 (1인)",
      en: "Planning · Design · Development · Deploy · Ops (solo)",
      tr: "Planlama · Tasarım · Geliştirme · Dağıtım · İşletme (tek kişi)",
      ar: "التخطيط والتصميم والتطوير والنشر والتشغيل (منفرد)",
    },
    thumb: "media/maple-04-board.jpg",
    links: { link: "https://maple-help.xyz" },
    metrics: [
      {
        value: "4",
        label: { ko: "명 실시간 동시 접속", en: "realtime players", tr: "eşzamanlı oyuncu", ar: "لاعبون متزامنون" },
      },
      {
        value: "10",
        label: { ko: "층 발판 보드", en: "floor board", tr: "katlı platform tahtası", ar: "طوابق في اللوحة" },
      },
      {
        value: "#0000",
        label: { ko: "4자리 방 코드로 입장", en: "4-digit room code", tr: "4 haneli oda kodu", ar: "رمز غرفة من 4 أرقام" },
      },
      {
        value: "FREE",
        label: { ko: "무료 팬메이드", en: "free fan-made tool", tr: "ücretsiz hayran yapımı", ar: "أداة مجانية" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", tr: "Frontend", ar: "الواجهة الأمامية" },
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript", "TailwindCSS v4", "Turbopack"],
      },
      {
        group: { ko: "실시간 · 데이터", en: "Realtime & Data", tr: "Gerçek Zamanlı & Veri", ar: "الزمن الحقيقي والبيانات" },
        items: ["Supabase Realtime Channel", "Supabase Postgres", "Drizzle ORM", "Route Handlers"],
      },
      {
        group: { ko: "인프라 · 운영", en: "Infra & Ops", tr: "Altyapı & İşletme", ar: "البنية والتشغيل" },
        items: ["Cloudflare (vinext · D1 · Wrangler)", "인라인 콘텐츠 에디터", "관리자 페이지"],
      },
      {
        group: { ko: "그로스", en: "Growth", tr: "Büyüme", ar: "النمو" },
        items: ["JSON-LD 구조화 데이터", "sitemap · robots · manifest", "OG 이미지", "Google AdSense", "카카오 애드핏"],
      },
    ],
    body: {
      ko: `💡 메이플랜드 「로미오와 줄리엣」 파티퀘스트의 **발판 단계**를 위한 실시간 도우미입니다.
이 단계는 4명이 서로 다른 번호(1~4번)를 겹치지 않게 밟아야 빨리 끝나는데, 실제 플레이 중엔 파티챗이 전투·보상 얘기로 금방 섞여서 "누가 몇 번 밟았지?"를 계속 다시 묻게 됩니다. 그 한 가지 혼선만 없애려고 만든 도구예요.

🔗 **방 코드 4자리만 공유하면 끝.** 방장이 방을 열면 10층짜리 발판 보드와 아이템 순서가 같은 방에 들어온 모두에게 실시간으로 똑같이 보입니다. 닉네임은 선택이라 로그인·가입 절차가 아예 없어요.

⚡ Supabase Realtime 채널로 발판 선택 상태를 동기화했습니다. **발판콕** — 층마다 내가 밟은 칸을 찍으면 이미 찍힌 칸은 자동으로 패스되고, 판이 일정 비율 이상 차면 방장에게만 초기화 버튼이 나타납니다. 초기화는 즉시 지우지 않고 **10초 카운트다운**을 줘서, 아직 화면을 보고 있던 파티원이 당황하지 않게 했어요.

📄 도우미 하나만 있는 사이트가 아니라 **공략 콘텐츠까지 같이 운영합니다.** 입장 조건, 전체 관문 순서, 발판 꿀팁, 자주 하는 실수, 보상 정보를 정리한 가이드 페이지와 FAQ를 붙였고, 이 문구들은 코드가 아니라 관리자 페이지의 **인라인 에디터**로 고칩니다. 오타 하나 고치려고 재배포하지 않으려고요.

🔍 SEO는 처음부터 설계에 넣었습니다. JSON-LD 구조화 데이터(WebSite / Organization / WebApplication)로 검색엔진이 "무료 웹 게임 도우미"로 이해하게 만들고, sitemap·robots·manifest·OG 이미지를 전부 코드로 생성합니다. **실제로 제공하지 않는 기능은 구조화 데이터에 넣지 않았어요** — 구글이 무시하거나 감점하기 때문입니다.

💰 Google AdSense와 카카오 애드핏 반응형 배너로 운영비를 충당합니다.`,
      en: `💡 A realtime helper for the **platform stage** of the "Romeo and Juliet" party quest in MapleLand.
That stage goes fastest when all four players step on different numbers (1–4), but in practice the party chat fills up with combat and loot talk, and someone keeps asking "wait, who took which one?" This tool exists to remove that one specific confusion.

🔗 **Just share a 4-digit room code.** When the host opens a room, the 10-floor board and the item order render identically for everyone who joins, in realtime. Nicknames are optional — there is no login or signup at all.

⚡ Platform selections sync over a Supabase Realtime channel. Each player taps their own pad per floor; already-taken pads are skipped automatically. Once the board fills past a threshold, a reset button appears **for the host only** — and it doesn't wipe instantly. It runs a **10-second countdown** so nobody staring at the board gets blindsided.

📄 It's not just the tool — I run the **strategy content** alongside it: entry requirements, the full gate order, platform tips, common mistakes, and reward info, plus an FAQ. All that copy is edited through an **inline editor in the admin panel**, not in code, so fixing a typo never means a redeploy.

🔍 SEO was part of the design from day one. JSON-LD structured data (WebSite / Organization / WebApplication) tells search engines this is a free web game utility, and sitemap, robots, manifest, and OG images are all generated in code. **I deliberately left out features the site doesn't actually have** — Google either ignores or penalizes those.

💰 Running costs are covered by Google AdSense and a responsive Kakao AdFit banner.`,
      tr: `💡 MapleLand'deki "Romeo ve Juliet" parti görevinin **platform aşaması** için gerçek zamanlı bir yardımcı.
Bu aşama, dört oyuncunun farklı numaralara (1–4) basmasıyla hızlanır; ancak parti sohbeti savaş ve ödül konuşmalarıyla dolduğu için "kim hangisine bastı?" sorusu sürekli tekrarlanır. Bu araç tam olarak o karışıklığı ortadan kaldırmak için var.

🔗 **Sadece 4 haneli oda kodunu paylaş.** Oda sahibi odayı açtığında 10 katlı tahta ve eşya sırası, katılan herkeste gerçek zamanlı olarak birebir aynı görünür. Takma ad isteğe bağlı — giriş ya da kayıt hiç yok.

⚡ Seçimler Supabase Realtime kanalı üzerinden senkronize edilir. Her oyuncu kendi platformunu işaretler, dolu olanlar otomatik atlanır. Tahta belirli bir doluluğa ulaşınca **yalnızca oda sahibine** sıfırlama düğmesi çıkar ve anında silmez: **10 saniyelik geri sayım** verir, böylece ekrana bakan kimse şaşırmaz.

📄 Sadece araç değil, yanında **rehber içeriği** de işletiyorum: giriş koşulları, tüm aşama sırası, platform ipuçları, sık yapılan hatalar ve ödül bilgisi ile SSS. Bu metinler kodda değil, yönetim panelindeki **satır içi editör** ile düzenleniyor — yazım hatası için yeniden dağıtım gerekmiyor.

🔍 SEO ilk günden tasarımın parçasıydı. JSON-LD yapılandırılmış veri (WebSite / Organization / WebApplication) arama motorlarına bunun ücretsiz bir web oyun aracı olduğunu anlatıyor; sitemap, robots, manifest ve OG görselleri kodda üretiliyor. **Sitede gerçekten olmayan özellikleri bilinçli olarak eklemedim.**

💰 İşletme maliyetleri Google AdSense ve duyarlı Kakao AdFit banner ile karşılanıyor.`,
      ar: `💡 أداة فورية لمرحلة **المنصات** في مهمة "روميو وجولييت" الجماعية داخل MapleLand.
تنتهي هذه المرحلة أسرع عندما يقف كل من اللاعبين الأربعة على رقم مختلف (1–4)، لكن محادثة الفريق تمتلئ عملياً بالحديث عن القتال والمكافآت فيتكرر السؤال: "من أخذ أي رقم؟" وُجدت هذه الأداة لإزالة هذا الالتباس تحديداً.

🔗 **شارك رمز الغرفة المكوّن من 4 أرقام فقط.** عندما يفتح المضيف غرفة، تظهر لوحة الطوابق العشرة وترتيب العناصر بالشكل نفسه لكل من ينضم وفي الوقت الحقيقي. الاسم المستعار اختياري — لا يوجد تسجيل دخول أو اشتراك إطلاقاً.

⚡ تتم مزامنة الاختيارات عبر قناة Supabase Realtime. يضغط كل لاعب على منصته في كل طابق، وتُتخطى المنصات المحجوزة تلقائياً. وعندما تمتلئ اللوحة بنسبة معينة يظهر زر إعادة التعيين **للمضيف فقط**، ولا يمسح فوراً بل يمنح **عدّاً تنازلياً من 10 ثوانٍ** حتى لا يُفاجأ من كان ينظر إلى الشاشة.

📄 لا أقدّم الأداة وحدها، بل أُشغّل **محتوى الدليل** معها: شروط الدخول، ترتيب المراحل كاملاً، نصائح المنصات، الأخطاء الشائعة، ومعلومات المكافآت، إضافة إلى الأسئلة الشائعة. تُحرَّر هذه النصوص عبر **محرّر مدمج في لوحة الإدارة** وليس في الشيفرة، فلا حاجة لإعادة نشر لتصحيح خطأ مطبعي.

🔍 كان تحسين محركات البحث جزءاً من التصميم منذ البداية: بيانات JSON-LD المهيكلة (WebSite / Organization / WebApplication)، مع توليد sitemap وrobots وmanifest وصور OG برمجياً. **وتعمّدت عدم إدراج ميزات لا يوفرها الموقع فعلاً.**

💰 تُغطى تكاليف التشغيل عبر Google AdSense ولافتة Kakao AdFit المتجاوبة.`,
    },
    gallery: [
      "media/maple-04-board.jpg",
      "media/maple-02-room.jpg",
      "media/maple-01-home.jpg",
    ],
  },

  //도토리사진관
  {
    slug: "ddphoto",
    weight: 2,
    title: {
      ko: "도토리사진관",
      en: "Dotori Photo Studio",
      tr: "Dotori Fotoğraf Stüdyosu",
      ar: "استوديو دوتوري للصور",
    },
    blurb: {
      ko: "토스 앱 안에서 돌아가는 네컷사진 편집기. 사진 고르고 · 보정하고 · 스티커로 꾸며서 한 장으로 저장.",
      en: "A photo-booth style editor running inside the Toss app. Pick, adjust, decorate with stickers, export as one sheet.",
      tr: "Toss uygulaması içinde çalışan fotoğraf kabini editörü. Seç, düzenle, çıkartmalarla süsle, tek sayfa olarak kaydet.",
      ar: "محرر صور بأسلوب كشك التصوير يعمل داخل تطبيق Toss. اختر، عدّل، زيّن بالملصقات، واحفظ كورقة واحدة.",
    },
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Apps in Toss",
      "Supabase Storage",
      "Canvas",
    ],
    area: "React",
    status: "Active",
    featured: true,
    period: "2026",
    role: {
      ko: "기획 · 디자인 · 개발 · 심사 제출 (1인)",
      en: "Planning · Design · Development · Store submission (solo)",
      tr: "Planlama · Tasarım · Geliştirme · Mağaza başvurusu (tek kişi)",
      ar: "التخطيط والتصميم والتطوير وتقديم المراجعة (منفرد)",
    },
    thumb: "media/ddphoto-05-composite.jpg",
    metrics: [
      {
        value: "300+",
        label: { ko: "스티커 에셋", en: "sticker assets", tr: "çıkartma varlığı", ar: "ملصق" },
      },
      {
        value: "6",
        label: { ko: "스티커 카테고리", en: "sticker categories", tr: "çıkartma kategorisi", ar: "فئات ملصقات" },
      },
      {
        value: "4",
        label: { ko: "단계 편집 플로우", en: "step editing flow", tr: "adımlı düzenleme akışı", ar: "خطوات في مسار التحرير" },
      },
      {
        value: "0",
        label: { ko: "서버 업로드 (기기 내 처리)", en: "server uploads (on-device)", tr: "sunucu yüklemesi (cihazda)", ar: "رفع للخادم (على الجهاز)" },
      },
    ],
    stack: [
      {
        group: { ko: "앱", en: "App", tr: "Uygulama", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 6", "Apps in Toss Web Framework (Granite)", "Phosphor Icons"],
      },
      {
        group: { ko: "에셋 파이프라인", en: "Asset pipeline", tr: "Varlık hattı", ar: "خط الأصول" },
        items: ["Supabase Storage", "Supabase Postgres", "동기화 스크립트 (pull · push · relabel)", "로컬 카탈로그 폴백"],
      },
    ],
    body: {
      ko: `💡 토스 앱 안에서 바로 열리는 **네컷사진 편집기**입니다. 별도 앱 설치 없이 미니앱으로 실행돼요.

🧩 편집 플로우는 네 단계입니다.
- **컷 수 선택** — 몇 컷짜리 사진을 만들지 고르기
- **사진 넣고 조정** — 갤러리에서 불러와 프레임 안에서 확대·이동
- **꾸미기** — 스티커와 텍스트 올리기
- **저장** — 한 장의 이미지로 합성해서 내보내기

🎨 스티커는 **300개 이상**을 직접 정리해서 문구 · 얼굴소품 · 포인트 · 소품 · 낙서 카테고리로 나눴고, 여기에 최근 사용 탭을 더해 6개 탭으로 노출합니다.

☁️ 초기엔 스티커를 전부 번들에 넣었는데, 그러면 스티커 하나 추가할 때마다 앱을 다시 심사받아야 했습니다. 그래서 **원본을 Supabase Storage/DB로 옮기고**, 앱은 실행 시 DB 목록을 먼저 불러오도록 바꿨어요. 대신 **DB 요청이 실패하거나 결과가 비면 코드에 박아둔 로컬 카탈로그로 자동 폴백**합니다 — 네트워크가 불안정한 상황에서도 편집기가 빈 화면이 되지 않게요.

🔐 Storage로 한 번에 올리는 작업에만 service role 키를 쓰고, 이 키에는 VITE_ 나 NEXT_PUBLIC_ 접두어를 붙이지 않아 **번들에 절대 실리지 않도록** 분리했습니다. 카테고리 재분류·카탈로그 동기화도 전부 스크립트로 만들어서 수작업을 없앴어요.

📸 사진 권한은 읽기 전용으로만 요청하고, 합성은 기기 안에서 끝납니다.

🚀 앱인토스 콘솔 심사 제출까지 완료했습니다. 심사 요구사항에 맞춰 브랜드 아이콘 URL과 세로·가로 스크린샷 에셋도 함께 준비했어요.`,
      en: `💡 A **photo-booth style editor** that opens right inside the Toss app — no separate install, it runs as a mini app.

🧩 The editing flow has four steps:
- **Choose the layout** — how many cuts the sheet should have
- **Place and adjust** — pull photos from the gallery, then zoom and pan within each frame
- **Decorate** — drop on stickers and text
- **Export** — flatten everything into a single image

🎨 I curated **300+ stickers** myself and organized them into phrases, face props, accents, props, and doodles — shown as six tabs together with a "recent" tab.

☁️ Originally every sticker was bundled with the app, which meant adding a single sticker required going through review again. So I **moved the originals to Supabase Storage/DB** and made the app fetch the catalog at runtime. Crucially, **if the DB request fails or comes back empty, it falls back to a local catalog defined in code** — so the editor never renders as an empty screen on a flaky connection.

🔐 The service role key is used only for bulk uploads to Storage, and it deliberately carries no \`VITE_\` or \`NEXT_PUBLIC_\` prefix so it **can never end up in the bundle**. Category relabeling and catalog syncing are all scripted, so none of it is manual.

📸 Photo permission is requested as read-only, and compositing happens entirely on the device.

🚀 Submitted for review on the Apps in Toss console, including the brand icon URL and the portrait/landscape screenshot assets the review process requires.`,
      tr: `💡 Toss uygulamasının içinde doğrudan açılan bir **fotoğraf kabini editörü** — ayrı kurulum yok, mini uygulama olarak çalışıyor.

🧩 Düzenleme akışı dört adım:
- **Düzeni seç** — sayfada kaç kare olacak
- **Yerleştir ve ayarla** — galeriden fotoğraf al, her karede yakınlaştır ve kaydır
- **Süsle** — çıkartma ve metin ekle
- **Dışa aktar** — hepsini tek bir görsele düzleştir

🎨 **300'den fazla çıkartmayı** kendim derleyip söz, yüz aksesuarı, vurgu, obje ve karalama olarak ayırdım; "son kullanılanlar" ile birlikte altı sekme halinde gösteriliyor.

☁️ Başlangıçta tüm çıkartmalar uygulamayla paketleniyordu; bu da tek bir çıkartma eklemek için yeniden incelemeye girmek demekti. Bu yüzden **orijinalleri Supabase Storage/DB'ye taşıdım** ve uygulama katalogu çalışma anında çekiyor. Önemlisi: **DB isteği başarısız olursa veya boş dönerse, kodda tanımlı yerel kataloğa geri düşüyor** — bağlantı kötüyken editör boş ekran olmuyor.

🔐 Service role anahtarı yalnızca toplu yükleme için kullanılıyor ve bilinçli olarak \`VITE_\` ya da \`NEXT_PUBLIC_\` öneki taşımıyor, böylece **pakete asla girmiyor**.

📸 Fotoğraf izni yalnızca okuma olarak isteniyor ve birleştirme tamamen cihazda yapılıyor.

🚀 Apps in Toss konsolunda inceleme için gönderildi; marka ikonu URL'si ve gereken dikey/yatay ekran görüntüsü varlıkları da hazırlandı.`,
      ar: `💡 **محرر صور بأسلوب كشك التصوير** يُفتح مباشرة داخل تطبيق Toss — دون تثبيت منفصل، فهو يعمل كتطبيق مصغّر.

🧩 يتكوّن مسار التحرير من أربع خطوات:
- **اختيار التخطيط** — كم لقطة في الورقة
- **الإدراج والضبط** — جلب الصور من المعرض ثم التكبير والتحريك داخل كل إطار
- **التزيين** — إضافة الملصقات والنصوص
- **التصدير** — دمج كل شيء في صورة واحدة

🎨 نظّمت بنفسي **أكثر من 300 ملصق** ووزّعتها على العبارات وإكسسوارات الوجه ولمسات التمييز والأدوات والخربشات، وتُعرض في ستة تبويبات مع تبويب "الأحدث".

☁️ في البداية كانت كل الملصقات مضمّنة داخل التطبيق، ما يعني أن إضافة ملصق واحد تتطلب مراجعة جديدة. لذلك **نقلت الأصول إلى Supabase Storage/DB** وجعلت التطبيق يجلب الفهرس أثناء التشغيل. والأهم: **عند فشل الطلب أو عودته فارغاً يتراجع تلقائياً إلى فهرس محلي معرّف في الشيفرة** — فلا يظهر المحرر كشاشة فارغة عند ضعف الاتصال.

🔐 يُستخدم مفتاح service role للرفع المجمّع فقط، وهو بلا بادئة \`VITE_\` أو \`NEXT_PUBLIC_\` عمداً كي **لا يصل إلى الحزمة أبداً**.

📸 يُطلب إذن الصور للقراءة فقط، وتتم عملية الدمج بالكامل على الجهاز.

🚀 قُدّم للمراجعة على وحدة تحكم Apps in Toss، مع رابط أيقونة العلامة وأصول لقطات الشاشة الرأسية والأفقية المطلوبة.`,
    },
    gallery: [
      "media/ddphoto-05-composite.jpg",
      "media/ddphoto-01-count.jpg",
      "media/ddphoto-02-adjust.jpg",
      "media/ddphoto-03-decorate.jpg",
      "media/ddphoto-04-stickers.jpg",
    ],
  },

  //타임 클론
  {
    slug: "toss-time",
    weight: 2,
    title: {
      ko: "타임 클론",
      en: "Time Clone",
      tr: "Time Clone",
      ar: "Time Clone",
    },
    blurb: {
      ko: "과거의 나(클론)와 함께 푸는 격자 턴제 퍼즐. 54스테이지 · 6개 언어 · 스킨 뽑기까지 붙인 앱인토스 미니게임.",
      en: "A grid-based turn puzzle you solve together with your past self. 54 stages, 6 languages, and a skin gacha — built as a Toss mini game.",
      tr: "Geçmişteki kendinle birlikte çözdüğün ızgara tabanlı sıra bazlı bulmaca. 54 bölüm, 6 dil ve kostüm çekilişi.",
      ar: "لغز شبكي بالأدوار تحلّه بالتعاون مع نسختك السابقة. 54 مرحلة و6 لغات ونظام سحب للأشكال.",
    },
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Game Engine",
      "i18n",
      "Apps in Toss",
    ],
    area: "Game",
    status: "In Progress",
    featured: true,
    period: "2026",
    role: {
      ko: "게임 기획 · 엔진 설계 · 레벨 디자인 · 개발 (1인)",
      en: "Game design · Engine architecture · Level design · Development (solo)",
      tr: "Oyun tasarımı · Motor mimarisi · Bölüm tasarımı · Geliştirme (tek kişi)",
      ar: "تصميم اللعبة وبنية المحرك وتصميم المراحل والتطوير (منفرد)",
    },
    thumb: "media/tosstime-01-home.jpg",
    metrics: [
      {
        value: "54",
        label: { ko: "스테이지 (튜토리얼 6 + 본편 48)", en: "stages (6 tutorial + 48 main)", tr: "bölüm (6 + 48)", ar: "مرحلة (6 + 48)" },
      },
      {
        value: "6",
        label: { ko: "지원 언어", en: "languages", tr: "dil", ar: "لغات" },
      },
      {
        value: "50",
        label: { ko: "수집 스킨 · 12등급", en: "collectible skins · 12 tiers", tr: "kostüm · 12 kademe", ar: "شكل · 12 فئة" },
      },
      {
        value: "62→54",
        label: { ko: "검증으로 걸러낸 레벨", en: "levels after verification", tr: "doğrulama sonrası bölüm", ar: "مراحل بعد التحقق" },
      },
    ],
    stack: [
      {
        group: { ko: "게임 코어", en: "Game core", tr: "Oyun çekirdeği", ar: "نواة اللعبة" },
        items: ["순수 함수 엔진 (React 비의존)", "useReducer 상태 + 언두 스택", "ASCII 맵 레벨 정의", "자동 검증 스크립트"],
      },
      {
        group: { ko: "앱", en: "App", tr: "Uygulama", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 8", "순수 CSS (3D·셰이더 없음)", "i18n 6개 언어"],
      },
      {
        group: { ko: "플랫폼 · 수익화", en: "Platform & Monetization", tr: "Platform & Gelir", ar: "المنصة والدخل" },
        items: ["Apps in Toss", "어댑터 패턴 스토리지 / 광고", "코인 · 확률 공개 뽑기", "전면 · 보상형 광고"],
      },
    ],
    body: {
      ko: `💡 **내가 움직인 기록이 다음 회차에 클론이 되어 똑같이 따라 움직입니다.** 그 클론이 스위치를 밟아주는 사이에 내가 문을 통과하는 식으로 푸는 격자 턴제 퍼즐이에요.

🧠 **엔진을 React에서 완전히 분리한 게 이 프로젝트의 핵심입니다.** 게임 로직은 UI를 전혀 모르는 순수 함수라, 브라우저 없이 Node에서 그대로 실행할 수 있어요. 덕분에 **레벨 검증을 자동화**할 수 있었습니다.

🔍 \`verify\` 스크립트가 레벨별 정답 경로를 실제 엔진에 돌려서 클리어 여부와 par를 확인하고, 눈으로는 잘 안 보이는 설계 사고를 정적으로 잡습니다.
- 문이 자기 그룹의 **유일한** 스위치 바로 옆에 있음 → 스위치를 밟은 본인이 그 턴에 통과해버려서 클론이 무의미해짐
- 퍼즐 요소를 전부 무시하고 걸어서 출구에 닿을 수 있음 → 퍼즐이 장식이 됨
- 맵은 달라 보이는데 **정답 입력이 통째로 같은** 스테이지 쌍 → 플레이어에게는 같은 판

👉 이 검증으로 **62개였던 레벨을 54개로 정리**했습니다. 스테이지 네 개는 "문이 스위치 바로 옆"이라는 이유 하나로 클론 없이 뚫렸고, 맵을 눈에 띄게 바꿔놨는데 정답 키 입력이 한 글자도 다르지 않은 쌍이 세 개 있었어요. **눈으로 검수했으면 절대 못 찾았을 것들입니다.**

⚖️ 기획서에 없던 규칙은 제가 정하고 문서에 남겼습니다. 예를 들어 **기다리기(wait) 액션을 추가**했는데, 이게 없으면 클론을 앞세울 수 없어서 "동시에 두 곳" 류 퍼즐이 아예 성립하지 않습니다. **막힌 이동은 턴을 소모하지 않게** 한 것도 의도적이에요 — 벽에 부딪히는 걸로 시간이 흐르면 예측이 어려워지니까요.

🎨 톤은 "말랑말랑 솜사탕 유니콘"으로 잡되, 원칙을 하나 세웠습니다. **퍼즐 게임이니까 보드 위 정보는 무조건 명확해야 한다.** 판단 기준은 "눈을 반쯤 감고 봐도 어느 칸이 위험한지 보이는가?" 말랑함은 배경과 프레임에 몰아주고, 격자 안은 대비를 확실히 줬습니다.

🌍 한국어 · 영어 · 일본어 · 프랑스어 · 스페인어 · 아랍어 6개 언어를 지원하고, 브라우저 언어를 감지해 자동 선택합니다.

🎁 코인으로 스킨을 뽑는 수집 요소를 붙였고, **등급별 확률을 화면에 그대로 공개**합니다. 광고는 어댑터 패턴으로 감싸서 SDK 교체 지점을 두 파일로 좁혔고, 클론+1 버튼은 "클론을 다 쓰고 par를 넘겼을 때"만 뜨게 해서 초반 스팸을 막았어요.`,
      en: `💡 **Your movement gets recorded, and on the next run it plays back as a clone that repeats it exactly.** You solve each grid by having that clone hold a switch while you slip through the door it opens.

🧠 **Fully separating the engine from React is the core of this project.** The game logic is pure functions that know nothing about the UI, so it runs in Node without a browser. That's what made **automated level verification** possible.

🔍 A \`verify\` script replays each level's solution through the real engine to confirm it clears and that par is right — and statically catches design bugs that are nearly invisible by eye:
- A door sitting right next to the **only** switch in its group → the player who steps on it walks through the same turn, making the clone pointless
- A path to the exit that ignores every puzzle element → the puzzle is decoration
- Stage pairs whose maps look different but whose **solution inputs are byte-for-byte identical** → the same level to the player

👉 That verification cut the level list **from 62 down to 54**. Four stages were solvable without any clone purely because a door sat next to its switch, and three pairs had visibly redesigned maps whose solution keystrokes didn't differ by a single character. **Manual review would never have caught those.**

⚖️ Where the spec was silent, I made the call and documented it. I **added a wait action**, for instance — without it you can't send a clone ahead, so "be in two places at once" puzzles don't work at all. **Blocked moves deliberately don't consume a turn** either: if bumping into a wall advanced time, the whole thing becomes hard to predict.

🎨 The art direction is soft pastel, but with one hard rule: **it's a puzzle game, so information on the board must always be unambiguous.** The test I used was "can you still tell which tile is dangerous with your eyes half closed?" All the softness went into the background and frame; inside the grid, contrast stays strong.

🌍 Six languages — Korean, English, Japanese, French, Spanish, Arabic — with automatic detection from the browser locale.

🎁 There's a coin-based skin gacha, and **the per-tier odds are published right on screen**. Ads are wrapped behind an adapter so swapping the SDK touches only two files, and the "+1 clone" button only appears once you've used every clone and gone over par — no early-game spam.`,
      tr: `💡 **Hareketlerin kaydedilir ve sonraki turda bunu birebir tekrarlayan bir klon olarak oynatılır.** Her ızgarayı, o klon bir düğmeye basarken senin açılan kapıdan geçmenle çözersin.

🧠 **Motoru React'ten tamamen ayırmak bu projenin özü.** Oyun mantığı arayüzü hiç bilmeyen saf fonksiyonlardan oluşuyor, yani tarayıcı olmadan Node'da çalışıyor. **Otomatik bölüm doğrulamasını** mümkün kılan da bu.

🔍 \`verify\` betiği her bölümün çözümünü gerçek motorda oynatıp geçilebilirliği ve par değerini doğruluyor; ayrıca gözle neredeyse görünmeyen tasarım hatalarını statik olarak yakalıyor:
- Kapının, grubundaki **tek** düğmenin hemen yanında olması → düğmeye basan kişi aynı turda geçer, klon anlamsızlaşır
- Tüm bulmaca öğelerini yok sayarak çıkışa yürünebilmesi → bulmaca süs olur
- Haritaları farklı görünen ama **çözüm girdileri birebir aynı** bölüm çiftleri → oyuncu için aynı bölüm

👉 Bu doğrulama bölüm sayısını **62'den 54'e** indirdi. Dört bölüm, sırf kapı düğmenin yanında diye klonsuz çözülüyordu; üç çiftte ise harita belirgin şekilde değişmesine rağmen çözüm tuşları tek karakter bile farklı değildi. **Elle inceleme bunları asla bulamazdı.**

⚖️ Dokümanda olmayan kuralları ben belirleyip yazıya döktüm. Örneğin **bekleme (wait) eylemi ekledim**; o olmadan klonu öne süremezsin ve "aynı anda iki yerde" bulmacaları hiç kurulamaz. **Engellenen hamleler bilinçli olarak tur harcamıyor**: duvara toslamak zamanı ilerletirse tahmin edilebilirlik kaybolur.

🎨 Sanat yönü yumuşak pastel, ama tek katı kural var: **bu bir bulmaca oyunu, tahtadaki bilgi her zaman net olmalı.** Ölçütüm şuydu: "gözlerini yarı kapatınca hangi karenin tehlikeli olduğunu hâlâ görebiliyor musun?"

🌍 Altı dil — Korece, İngilizce, Japonca, Fransızca, İspanyolca, Arapça — tarayıcı diline göre otomatik seçimle.

🎁 Coin ile kostüm çekilişi var ve **kademe olasılıkları doğrudan ekranda yayımlanıyor**. Reklamlar bir adaptörün arkasında, SDK değişimi yalnızca iki dosyaya dokunuyor.`,
      ar: `💡 **تُسجَّل حركتك، وفي الجولة التالية تُعاد كنسخة (كلون) تكرّرها تماماً.** تحلّ كل شبكة بجعل تلك النسخة تقف على مفتاح بينما تمرّ أنت من الباب الذي يفتحه.

🧠 **فصل المحرك عن React بالكامل هو جوهر هذا المشروع.** منطق اللعبة دوال خالصة لا تعرف شيئاً عن الواجهة، فيعمل في Node دون متصفح. وهذا ما جعل **التحقق الآلي من المراحل** ممكناً.

🔍 يعيد سكربت \`verify\` تشغيل حلّ كل مرحلة داخل المحرك الحقيقي للتأكد من إمكانية إتمامها وصحة الـ par، ويلتقط ثابتاً أخطاء تصميم يصعب رؤيتها بالعين:
- باب يقع بجوار المفتاح **الوحيد** في مجموعته → يعبر اللاعب نفسه في الدور ذاته فتصبح النسخة بلا معنى
- إمكانية الوصول إلى المخرج بتجاهل كل عناصر اللغز → يصبح اللغز مجرد زينة
- مراحل تبدو خرائطها مختلفة بينما **مدخلات الحل متطابقة حرفياً** → هي المرحلة نفسها بالنسبة للاعب

👉 قلّص هذا التحقق عدد المراحل **من 62 إلى 54**. أربع مراحل كانت تُحلّ دون أي نسخة لمجرد أن الباب بجوار مفتاحه، وثلاثة أزواج تغيّرت خرائطها بوضوح دون أن يختلف حرف واحد من مدخلات الحل. **المراجعة اليدوية ما كانت لتكتشف ذلك أبداً.**

⚖️ حيث سكت المستند اتخذت القرار ووثّقته. مثلاً **أضفت إجراء الانتظار (wait)**؛ بدونه لا يمكن إرسال النسخة أولاً فتنهار ألغاز "التواجد في مكانين". كذلك **لا تستهلك الحركات المسدودة دوراً** عمداً: لو تقدّم الزمن بالارتطام بجدار لصار التنبؤ صعباً.

🎨 الاتجاه الفني باستيل هادئ، لكن بقاعدة صارمة واحدة: **إنها لعبة ألغاز، فالمعلومات على اللوحة يجب أن تبقى واضحة دائماً.** معياري كان: "هل ما زلت تميّز المربع الخطِر وعيناك نصف مغمضتين؟"

🌍 ست لغات — الكورية والإنجليزية واليابانية والفرنسية والإسبانية والعربية — مع اكتشاف تلقائي من لغة المتصفح.

🎁 يوجد نظام سحب للأشكال بالعملات، و**تُنشر احتمالات كل فئة على الشاشة مباشرة**. أما الإعلانات فمغلّفة خلف محوّل يجعل تبديل الـ SDK يمسّ ملفين فقط.`,
    },
    gallery: [
      "media/tosstime-02-play.jpg",
      "media/tosstime-06-board.jpg",
      "media/tosstime-01-home.jpg",
      "media/tosstime-03-gacha.jpg",
      "media/tosstime-04-bag.jpg",
      "media/tosstime-05-records.jpg",
    ],
  },

  //지금화장실
  {
    slug: "nowtoilet",
    weight: 1,
    title: {
      ko: "지금화장실",
      en: "NowToilet",
      tr: "NowToilet",
      ar: "NowToilet",
    },
    blurb: {
      ko: "지금 내 주변에서 실제로 열려 있는 개방화장실을 찾아주는 앱인토스 미니앱. 공공데이터 5만여 건을 직접 정제했어요.",
      en: "A Toss mini app that finds public restrooms actually open near you right now — built on 50k+ rows of public data I cleaned myself.",
      tr: "Şu anda çevrende gerçekten açık olan umumi tuvaletleri bulan Toss mini uygulaması. 50 binden fazla kamu verisi satırını kendim temizledim.",
      ar: "تطبيق Toss مصغّر يعثر على دورات المياه العامة المفتوحة فعلاً بجوارك الآن، مبني على أكثر من 50 ألف سجل من البيانات العامة نظّفتها بنفسي.",
    },
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Apps in Toss",
      "Supabase",
      "공공데이터",
      "Kakao Map",
    ],
    area: "React",
    status: "Active",
    period: "2026",
    role: {
      ko: "기획 · 데이터 파이프라인 · 개발 (1인)",
      en: "Planning · Data pipeline · Development (solo)",
      tr: "Planlama · Veri hattı · Geliştirme (tek kişi)",
      ar: "التخطيط وخط البيانات والتطوير (منفرد)",
    },
    thumb: "media/toilet-01-list.jpg",
    metrics: [
      {
        value: "50K+",
        label: { ko: "공공데이터 화장실", en: "restrooms from open data", tr: "açık veriden tuvalet", ar: "دورة مياه من البيانات المفتوحة" },
      },
      {
        value: "5",
        label: { ko: "필터 (24시간 · 기저귀 · 장애인 · 비상벨)", en: "filters", tr: "filtre", ar: "مرشحات" },
      },
      {
        value: "3",
        label: { ko: "단계 바텀시트 스냅 (직접 구현)", en: "hand-built sheet snap points", tr: "elle yapılan yapışma noktası", ar: "نقاط التصاق مبنية يدوياً" },
      },
    ],
    stack: [
      {
        group: { ko: "앱", en: "App", tr: "Uygulama", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 6", "Apps in Toss Web Framework", "Kakao Map SDK", "Lucide Icons"],
      },
      {
        group: { ko: "데이터", en: "Data", tr: "Veri", ar: "البيانات" },
        items: ["행정안전부 공중화장실정보 API", "카카오 지오코딩", "Supabase Postgres", "배치 동기화 스크립트"],
      },
    ],
    body: {
      ko: `급할 때 **지금 열려 있는** 화장실을 가까운 순으로 찾아주는 앱인토스 미니앱입니다.

- **데이터가 제일 큰 일이었어요.** 행정안전부 원천 데이터는 2025년 2월부터 좌표 제공이 끊겨 주소만 들어옵니다. 주소를 카카오 지오코딩으로 좌표로 바꾸는 배치 파이프라인을 따로 만들었고, 5만여 건을 지역·건수 단위로 잘라 돌릴 수 있게 했어요.
- **개방시간 형식이 제각각.** 문자열을 파싱해 "지금 열려 있는지"를 판정하는 로직을 따로 뒀습니다. 24시간 · 기저귀교환대 · 장애인 · 비상벨 필터도 여기에 붙였어요.
- **바텀시트는 라이브러리 없이 직접.** peek / half / full 3단 스냅을 포인터 드래그로 구현하고, full에서는 스크롤을 브라우저에 완전히 넘겨 네이티브 관성 스크롤을 살렸습니다.
- **화면이 비지 않게.** 네트워크나 DB가 불안정하면 샘플 데이터로 폴백하고, 데이터 출처와 "현장 상황과 다를 수 있다"는 고지를 항상 노출합니다.
- **사용자가 채우는 정보.** 별점 후기와 오류 신고를 붙여, 공공데이터가 놓치는 "실제로는 닫혀 있다" 같은 정보를 이용자가 보완할 수 있게 했어요.
- **출시 심사 대비.** service role 키는 동기화 스크립트 전용이고, 테스트 광고 ID가 번들에 들어가면 반려되기 때문에 값이 없으면 광고를 아예 렌더링하지 않습니다.`,
      en: `A Toss mini app that finds the restrooms **open right now**, nearest first, for when you urgently need one.

- **The data was the real work.** Korea's public restroom dataset stopped providing coordinates in February 2025 — only addresses remain. I built a batch pipeline that geocodes those addresses through Kakao, sliceable by region and row count instead of running all 50k+ rows at once.
- **Opening hours arrive in wildly inconsistent formats.** Dedicated logic parses those strings and decides whether a place is open right now. The 24-hour, diaper-changing, accessible, and emergency-bell filters hang off the same layer.
- **The bottom sheet is hand-built, no library.** Three snap points — peek / half / full — driven by pointer drags, and in the full state scrolling is handed entirely back to the browser so native momentum scrolling survives.
- **Never an empty screen.** If the network or DB is unreliable it falls back to sample data, and the data source plus an "actual availability may differ on site" notice stays visible.
- **Users fill the gaps.** Star reviews and error reports let people correct what open data misses — like a place listed as open that is actually closed.
- **Built for store review.** The service role key is sync-script only, and since shipping a test ad ID in the bundle gets you rejected, the app renders no ad at all when the value is absent.`,
      tr: `Acil durumda **şu anda açık olan** tuvaletleri en yakından başlayarak bulan bir Toss mini uygulaması.

- **Asıl iş veriydi.** Kore'nin umumi tuvalet veri seti Şubat 2025'te koordinat vermeyi bıraktı, elde yalnızca adres kaldı. Adresleri Kakao ile koordinata çeviren toplu iş hattı kurdum; 50 binden fazla satırı tek seferde değil, bölge ve satır sayısına göre dilimleyerek işliyorum.
- **Çalışma saatleri son derece tutarsız biçimlerde geliyor.** Bu metinleri ayrıştırıp "şu anda açık mı" kararını veren özel bir mantık yazdım. 24 saat, bebek bakım, engelli ve acil zil filtreleri de aynı katmanda.
- **Alt sayfa kütüphanesiz, elle yapıldı.** peek / half / full üç yapışma noktası işaretçi sürüklemesiyle çalışıyor; full durumunda kaydırma tamamen tarayıcıya bırakılıyor, böylece yerel ivmeli kaydırma korunuyor.
- **Asla boş ekran yok.** Ağ veya veritabanı güvenilmezse örnek veriye geri düşüyor; veri kaynağı ve "sahadaki durum farklı olabilir" uyarısı görünür kalıyor.
- **Boşlukları kullanıcılar dolduruyor.** Yıldızlı yorumlar ve hata bildirimleri, açık verinin kaçırdıklarını düzeltmeye yarıyor.
- **Mağaza incelemesine hazır.** Service role anahtarı yalnızca senkronizasyon betiğinde; pakette test reklam kimliği göndermek ret sebebi olduğu için değer yoksa hiç reklam çizilmiyor.`,
      ar: `تطبيق Toss مصغّر يعثر على دورات المياه **المفتوحة الآن** مرتّبة من الأقرب، عند الحاجة الملحّة.

- **العمل الحقيقي كان في البيانات.** توقّفت بيانات دورات المياه العامة في كوريا عن توفير الإحداثيات في فبراير 2025، ولم يبقَ سوى العناوين. بنيت خط معالجة دفعي يحوّل العناوين إلى إحداثيات عبر Kakao، قابلاً للتقسيم حسب المنطقة وعدد السجلات بدل تشغيل أكثر من 50 ألف سجل دفعة واحدة.
- **أوقات العمل تأتي بصيغ شديدة التباين.** كتبت منطقاً مخصّصاً يحلّل هذه النصوص ويقرّر ما إذا كان المكان مفتوحاً الآن، وعليه تُبنى مرشّحات 24 ساعة وتغيير الحفاضات وذوي الإعاقة وجرس الطوارئ.
- **الورقة السفلية مبنية يدوياً بلا مكتبات.** ثلاث نقاط التصاق — peek / half / full — عبر سحب المؤشر، وفي الحالة الكاملة يُعاد التمرير بالكامل إلى المتصفح ليبقى التمرير بالقصور الذاتي الأصلي.
- **لا شاشة فارغة أبداً.** عند عدم استقرار الشبكة أو قاعدة البيانات يتراجع إلى بيانات نموذجية، مع إبقاء مصدر البيانات وتنبيه "قد يختلف الوضع الفعلي" ظاهرين.
- **المستخدمون يسدّون الفجوات.** المراجعات بالنجوم وبلاغات الأخطاء تصحّح ما تغفله البيانات المفتوحة.
- **جاهز لمراجعة المتجر.** مفتاح service role في سكربت المزامنة فقط، ولأن شحن معرّف إعلان تجريبي يعني الرفض، لا يُعرض أي إعلان عند غياب القيمة.`,
    },
    gallery: [
      "media/toilet-01-list.jpg",
      "media/toilet-02-filters.jpg",
      "media/toilet-03-detail.jpg",
      "media/toilet-05-review.jpg",
      "media/toilet-06-report.jpg",
    ],
  },

  //Life Dash
  {
    slug: "life-dash",
    weight: 1,
    title: {
      ko: "라이프 대시",
      en: "Life Dash",
      tr: "Life Dash",
      ar: "Life Dash",
    },
    blurb: {
      ko: "떨어지는 똥을 피하며 아기부터 유령까지 인생 12단계를 살아내는 원버튼 생존 아케이드. Phaser로 만드는 중.",
      en: "A one-button survival arcade where you dodge falling poop through 12 stages of life — from baby to ghost. Built with Phaser.",
              tr: "Düşen kakalardan kaçarak bebeklikten hayalete kadar 12 yaşam evresini atlatmaya çalıştığın tek tuşlu hayatta kalma oyunu.",
      ar: "لعبة أركيد بزر واحد تتفادى فيها السقوط عبر 12 مرحلة من الحياة — من الرضاعة إلى الشبح.",
    },
    tags: ["Phaser 3", "TypeScript", "Vite", "Vitest", "Game Design", "Pixel Art"],
    area: "Game",
    status: "In Progress",
    period: "2026",
    role: {
      ko: "게임 기획(GDD) · 개발 · 밸런싱 · 에셋 파이프라인 (1인)",
      en: "Game design (GDD) · Development · Balancing · Asset pipeline (solo)",
      tr: "Oyun tasarımı (GDD) · Geliştirme · Denge · Varlık hattı (tek kişi)",
      ar: "تصميم اللعبة (GDD) والتطوير والموازنة وخط الأصول (منفرد)",
    },
    thumb: "media/gamelife-02-play.jpg",
    metrics: [
      {
        value: "12",
        label: { ko: "인생 스테이지 (기획)", en: "life stages (designed)", tr: "yaşam evresi (tasarım)", ar: "مرحلة حياة (مصمّمة)" },
      },
      {
        value: "9",
        label: { ko: "능력 카드 (데이터로만 정의)", en: "ability cards (data-defined)", tr: "yetenek kartı", ar: "بطاقة قدرة" },
      },
      {
        value: "15s",
        label: { ko: "마다 능력 3택 1", en: "between each 3-card pick", tr: "her 3 kart seçimi arası", ar: "بين كل اختيار من 3 بطاقات" },
      },
      {
        value: "270×480",
        label: { ko: "논리 해상도 고정", en: "fixed logical resolution", tr: "sabit mantıksal çözünürlük", ar: "دقة منطقية ثابتة" },
      },
    ],
    stack: [
      {
        group: { ko: "게임", en: "Game", tr: "Oyun", ar: "اللعبة" },
        items: ["Phaser 3.90", "TypeScript", "Vite 7", "Vitest", "DOM 기반 HUD"],
      },
      {
        group: { ko: "설계", en: "Architecture", tr: "Mimari", ar: "البنية" },
        items: ["Phaser 비의존 순수 시스템", "JSON 데이터 주도 밸런싱", "결정론적 RNG", "스폰 디렉터 · 난이도 커브"],
      },
      {
        group: { ko: "에셋 · 테스트", en: "Assets & Testing", tr: "Varlıklar & Test", ar: "الأصول والاختبار" },
        items: ["Python 재양자화 파이프라인", "Cloudflare Quick Tunnel 실기기 테스트"],
      },
    ],
    body: {
      ko: `💡 손가락 하나로 캐릭터를 움직여 하늘에서 떨어지는 똥을 피하는 게임입니다. **유치한 소재에 인생 12단계를 얹은 게 이 게임의 정체성**이에요 — 웃으면서 시작해서 후반 스테이지쯤 조용해지는 낙차를 노렸습니다.

📐 기획서에 세 가지 원칙을 못 박고 시작했습니다.
- **죽음은 항상 유저 탓이어야 한다.** 화면 밖에서 갑자기 나타나는 즉사 요소 금지, 모든 낙하물은 착탄 예고 그림자를 가진다
- **똥은 웃겨야 하고 감정은 진지해야 한다.** 연출로 개그를 치되 클리어 컷씬에는 절대 개그를 넣지 않는다
- **60초 안에 완결된 감정.** 스테이지 하나가 짧은 단편 애니메이션처럼 느껴져야 한다

🧪 **src/systems 폴더는 Phaser를 import하지 않는 순수 로직입니다.** 그래서 밸런스 불변식을 유닛 테스트로 고정할 수 있어요 — 예를 들어 "도박꾼 능력을 3중첩해도 최소 반응 시간 0.85초는 깨지지 않는다"가 테스트로 강제됩니다. 능력 조합이 늘어나도 게임이 조용히 망가지지 않게 하는 안전장치예요.

🎚️ **수치는 전부 JSON에 있고 코드에는 없습니다.** 이동 속도, 생명, 난이도 커브, 목표치, 패턴 가중치가 데이터 파일에 있어서 저장하면 바로 핫리로드됩니다. 능력 9종도 \`{target, op, value}\` 모디파이어로만 표현해서 **새 능력을 추가하는 데 코드 수정이 필요 없어요.**

📱 세로는 480 논리 픽셀로 **고정**했습니다. 이게 곧 반응 시간이라 기기마다 달라지면 안 되거든요. 가로만 화면 비율을 따라 225~360 사이에서 변하고, 넓어진 만큼 **스폰 밀도를 비례해서 올려** 비율이 달라져도 체감 난이도가 같게 맞췄습니다. 배율은 디바이스 픽셀 기준 **정수만** 씁니다 — 소수 배율로 화면을 꽉 채우면 픽셀이 일렁이기 때문에, 위아래가 조금 남더라도 정수 배율을 택했어요.

🖼️ 원본 아트가 '픽셀아트처럼 보이는' 고해상도 이미지라 실제 픽셀 그리드가 없었습니다. 그래서 **논리 해상도 그리드 위로 재양자화하는 Python 도구**를 만들어서, 새 아트가 오면 명령 한 줄로 게임 해상도에 맞게 변환합니다.

🔗 실기기 테스트는 Cloudflare Quick Tunnel로 붙였습니다. 터널 너머로도 HMR이 살아 있어서, 폰을 손에 든 채로 수치를 고치면 즉시 반영돼요.

📌 현재 1스테이지 「첫걸음 — 아기」가 플레이 가능한 상태이고, 밸런싱 중입니다.`,
      en: `💡 You move a character with one finger and dodge poop falling from the sky. **The identity of this game is layering 12 stages of a human life onto that deliberately childish premise** — you start laughing and go quiet somewhere in the late stages.

📐 I locked three principles into the design doc before writing any code:
- **Death must always be the player's fault.** No instant-kill spawning off-screen; every falling object gets a landing shadow first
- **The poop is the joke; the emotion is not.** Be funny in the moment-to-moment, never in the stage-clear cutscene
- **A complete emotional arc in 60 seconds.** One stage should feel like a short film

🧪 **The \`src/systems\` folder never imports Phaser.** Because it's pure logic, I can pin balance invariants with unit tests — for example, "even with the gambler ability stacked three times, the minimum reaction window never drops below 0.85s" is enforced by a test. It's the safety net that keeps the game from quietly breaking as ability combinations grow.

🎚️ **All the numbers live in JSON, none in code.** Movement speed, lives, difficulty curve, targets, and pattern weights sit in data files and hot-reload on save. The nine abilities are expressed purely as \`{target, op, value}\` modifiers, so **adding a new ability requires no code change at all.**

📱 Vertical space is **fixed** at 480 logical pixels, because that height *is* the reaction time and can't drift between devices. Only the width flexes, from 225 to 360 depending on aspect ratio — and I scale **spawn density proportionally** to the extra width so perceived difficulty stays constant. Scaling uses **integers only**, measured in device pixels: fractional scaling to fill the screen makes pixels shimmer, so I accept letterboxing instead.

🖼️ The source art was high-resolution images that merely *look* like pixel art, with no real pixel grid. So I wrote a **Python tool that requantizes them onto the logical resolution grid** — when new art arrives, one command converts it to game resolution.

🔗 On-device testing runs through a Cloudflare Quick Tunnel. HMR survives across the tunnel, so I can tweak a number while holding the phone and see it instantly.

📌 Stage 1, "First Steps — Baby," is currently playable and in balancing.`,
      tr: `💡 Tek parmakla bir karakteri hareket ettirip gökten düşen kakalardan kaçıyorsun. **Bu oyunun kimliği, bilinçli olarak çocuksu bu fikrin üzerine 12 yaşam evresini bindirmek** — gülerek başlıyorsun, son evrelerde sessizleşiyorsun.

📐 Kod yazmadan önce tasarım dokümanına üç ilke çaktım:
- **Ölüm her zaman oyuncunun hatası olmalı.** Ekran dışından ani ölüm yok; her düşen nesnenin önce iniş gölgesi var
- **Şaka kaka; duygu değil.** Anlık oynanışta komik ol, bölüm sonu ara sahnesinde asla
- **60 saniyede tamamlanan bir duygu yayı.**

🧪 **\`src/systems\` klasörü Phaser'ı hiç import etmiyor.** Saf mantık olduğu için denge değişmezlerini birim testleriyle sabitleyebiliyorum — örneğin "kumarbaz yeteneği üç kez üst üste binse bile minimum tepki penceresi 0.85 saniyenin altına düşmez" testle zorunlu kılınıyor.

🎚️ **Tüm sayılar JSON'da, kodda değil.** Hız, can, zorluk eğrisi, hedefler ve desen ağırlıkları veri dosyalarında ve kaydedince anında yenileniyor. Dokuz yetenek yalnızca \`{target, op, value}\` değiştiricileriyle ifade ediliyor, yani **yeni yetenek eklemek hiç kod değişikliği gerektirmiyor.**

📱 Dikey alan 480 mantıksal piksele **sabit**; çünkü bu yükseklik doğrudan tepki süresi demek. Yalnızca genişlik 225–360 arasında esniyor ve fazladan genişliğe **orantılı olarak doğma yoğunluğunu** artırıyorum. Ölçek yalnızca **tam sayı**: kesirli ölçek pikselleri titretiyor.

🖼️ Kaynak sanat, gerçek piksel ızgarası olmayan "piksel gibi görünen" yüksek çözünürlüklü görsellerdi. Bu yüzden onları mantıksal ızgaraya **yeniden nicemleyen bir Python aracı** yazdım.

📌 1. bölüm "İlk Adımlar — Bebek" şu anda oynanabilir ve denge çalışması sürüyor.`,
      ar: `💡 تحرّك شخصية بإصبع واحد وتتفادى ما يسقط من السماء. **هوية هذه اللعبة هي إسقاط 12 مرحلة من حياة الإنسان على فكرة طفولية متعمّدة** — تبدأ ضاحكاً ثم تصمت في المراحل المتأخرة.

📐 ثبّتُ ثلاثة مبادئ في مستند التصميم قبل كتابة أي شيفرة:
- **يجب أن يكون الموت دائماً خطأ اللاعب.** لا موت مفاجئ من خارج الشاشة؛ ولكل جسم ساقط ظلّ هبوط تحذيري
- **المزحة في الموضوع، لا في المشاعر.** كن طريفاً في اللعب اللحظي، وليس أبداً في مشهد إنهاء المرحلة
- **قوس شعوري مكتمل خلال 60 ثانية.**

🧪 **مجلد \`src/systems\` لا يستورد Phaser إطلاقاً.** ولأنه منطق خالص أستطيع تثبيت ثوابت التوازن باختبارات وحدة — مثلاً: "حتى بمضاعفة قدرة المقامر ثلاث مرات، لا تنخفض نافذة رد الفعل الدنيا عن 0.85 ثانية".

🎚️ **كل الأرقام في JSON ولا شيء منها في الشيفرة.** السرعة والأرواح ومنحنى الصعوبة والأهداف وأوزان الأنماط كلها في ملفات بيانات تُحدَّث فور الحفظ. وتُعبَّر القدرات التسع بمعدِّلات \`{target, op, value}\` فقط، أي أن **إضافة قدرة جديدة لا تتطلب أي تعديل برمجي.**

📱 الارتفاع **ثابت** عند 480 بكسل منطقي، لأن هذا الارتفاع هو زمن رد الفعل نفسه. يتغيّر العرض فقط بين 225 و360، ومعه أرفع **كثافة الظهور بالتناسب** كي تبقى الصعوبة المحسوسة ثابتة. والتحجيم **بأعداد صحيحة فقط**، لأن التحجيم الكسري يجعل البكسلات تهتزّ.

🖼️ كانت الرسوم الأصلية صوراً عالية الدقة "تبدو" كفن بكسل دون شبكة حقيقية، فكتبت **أداة Python تعيد تكميمها على شبكة الدقة المنطقية**.

📌 المرحلة الأولى "الخطوات الأولى — الرضيع" قابلة للعب حالياً وقيد الموازنة.`,
    },
    gallery: ["media/gamelife-02-play.jpg", "media/gamelife-01-title.jpg"],
  },

  //portfolio-site
  {
    slug: "portfolio-site",
    weight: 0,
    title: {
      ko: "개인 포트폴리오 사이트",
      en: "Personal Portfolio Site",
      tr: "Kişisel Portföy Sitesi",
      ar: "موقع محفظة شخصية",
    },
    blurb: {
      ko: "다국어 지원과 반응형 UI를 적용한 개인 포트폴리오 사이트입니다.",
      en: "Personal portfolio site with multi-language support and responsive UI.",
      tr: "Çoklu dil desteği ve duyarlı UI ile kişisel portföy sitesi.",
      ar: "موقع محفظة شخصية مع دعم لغات متعددة وتصميم واجهة متجاوبة.",
    },
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "i18n", "RTL"],
    area: "React",
    status: "Active",
    active: true,
    role: {
      ko: "전부 혼자 (기획 · 디자인 · 개발 · 배포)",
      en: "Everything solo (planning · design · development · deploy)",
      tr: "Hepsi tek başıma (planlama · tasarım · geliştirme · dağıtım)",
      ar: "كل شيء بمفردي (تخطيط وتصميم وتطوير ونشر)",
    },
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588118/port_at4zcs.png",
    previewVideo: "",
    mainVideo: "",
    links: {
      code: "https://github.com/wonseola/seola-portfolio",
      link: "https://wonseola.netlify.app",
    },
    metrics: [
      {
        value: "4",
        label: { ko: "지원 언어 (RTL 포함)", en: "languages (incl. RTL)", tr: "dil (RTL dahil)", ar: "لغات (تشمل RTL)" },
      },
      {
        value: "0",
        label: { ko: "런타임 의존 CMS (전부 타입 데이터)", en: "runtime CMS (all typed data)", tr: "çalışma zamanı CMS", ar: "نظام محتوى وقت التشغيل" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", tr: "Frontend", ar: "الواجهة الأمامية" },
        items: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "React Router"],
      },
      {
        group: { ko: "구조", en: "Architecture", tr: "Mimari", ar: "البنية" },
        items: ["타입 안전 다국어 데이터", "에셋 프리로더", "Cloudinary 자동 최적화"],
      },
    ],
    body: {
      ko: `💡 지금 보고 계신 사이트예요 :) 이력서를 PDF로 돌리는 대신, **프로젝트를 실제로 만져볼 수 있는 형태**로 두고 싶어서 만들었습니다.

🌍 **한국어 · 영어 · 터키어 · 아랍어 4개 언어**를 지원합니다. 단순 번역이 아니라 아랍어에서는 정렬 방향까지 바꿔서 RTL로 읽히도록 했어요. 모든 콘텐츠는 언어 코드를 키로 갖는 타입 안전한 데이터로 관리해서, **언어를 빼먹으면 타입 에러가 납니다.**

⚡ 첫 화면 체감 속도에 신경 썼습니다. 로딩 스크린에서 핵심 에셋을 미리 받고, Cloudinary 이미지는 URL을 가로채 f_auto·q_auto·리사이즈 파라미터를 자동으로 붙여 내려받습니다. 이미지와 영상은 전부 lazy 로딩 + 페이드인이라 레이아웃이 튀지 않아요.

🎨 인터랙션은 과하지 않게 넣었습니다. 커서를 따라다니는 글로우, 상태 메시지 글리치 전환, 타이핑 효과, 프로젝트 갤러리 라이트박스 정도예요. 모바일에서는 글리치 스크램블을 끄고 부드러운 페이드만 남겨서 배터리와 가독성을 챙겼습니다.

🦖 콘솔을 열어보시면 뭔가 있을지도 몰라요.`,
      en: `💡 The site you're looking at right now :) I built it because I'd rather hand someone **projects they can actually click through** than a PDF résumé.

🌍 It supports **four languages — Korean, English, Turkish, and Arabic.** Not just translated strings: Arabic flips the text alignment so it reads properly right-to-left. All content is stored as type-safe data keyed by language code, which means **forgetting a locale is a type error**, not a silent blank.

⚡ I cared about perceived load time. Critical assets are prefetched behind the loading screen, and Cloudinary image URLs are intercepted to append f_auto, q_auto, and resize parameters automatically. Every image and video lazy-loads with a fade-in so the layout never jumps.

🎨 The interactions stay on the restrained side: a glow that trails the cursor, a glitch transition on the status line, a typing effect, and a lightbox for project galleries. On mobile the glitch scramble is disabled in favor of a plain fade — better for battery and readability.

🦖 There might be something waiting in the console.`,
      tr: `💡 Şu anda baktığınız site :) PDF özgeçmiş yerine **gerçekten tıklanabilir projeler** sunmak istediğim için yaptım.

🌍 **Dört dili destekliyor — Korece, İngilizce, Türkçe ve Arapça.** Sadece çeviri değil: Arapçada metin hizalaması da sağdan sola dönüyor. Tüm içerik dil koduyla anahtarlanan tip güvenli veri olarak tutuluyor, yani **bir dili unutmak sessiz bir boşluk değil, tip hatası.**

⚡ Algılanan yüklenme süresine önem verdim. Kritik varlıklar yükleme ekranının arkasında önden çekiliyor; Cloudinary görsel URL'lerine f_auto, q_auto ve yeniden boyutlandırma parametreleri otomatik ekleniyor. Tüm görsel ve videolar solma efektiyle tembel yükleniyor, düzen zıplamıyor.

🎨 Etkileşimler ölçülü: imleci izleyen bir parıltı, durum satırında glitch geçişi, yazma efekti ve galeri için lightbox. Mobilde glitch kapalı, yerine sade bir solma var.

🦖 Konsolda sizi bekleyen bir şey olabilir.`,
      ar: `💡 الموقع الذي تنظر إليه الآن :) بنيته لأنني أفضّل تقديم **مشاريع يمكن تصفّحها فعلاً** بدل سيرة ذاتية بصيغة PDF.

🌍 يدعم **أربع لغات — الكورية والإنجليزية والتركية والعربية.** وليس مجرد ترجمة: في العربية يتغيّر اتجاه المحاذاة ليُقرأ من اليمين إلى اليسار. يُخزَّن المحتوى كله كبيانات آمنة الأنواع مفهرسة برمز اللغة، ما يعني أن **نسيان لغة ما يصبح خطأً في الأنواع** لا فراغاً صامتاً.

⚡ اهتممت بسرعة التحميل المحسوسة: تُجلب الأصول الأساسية مسبقاً خلف شاشة التحميل، وتُعترض روابط صور Cloudinary لإضافة f_auto و q_auto ومعاملات تغيير الحجم تلقائياً.

🎨 التفاعلات مضبوطة: توهّج يتبع المؤشر، وانتقال glitch في سطر الحالة، وتأثير كتابة، وعارض صور للمعرض. وعلى الجوال يُعطَّل الـ glitch لصالح تلاشٍ بسيط.

🦖 قد يكون هناك شيء بانتظارك في الـ console.`,
    },
    gallery: [],
  },
  //우동설
  {
    slug: "woodongseol",
    weight: 3,
    title: {
      ko: "우리동네 설명회",
      en: "WoodongSeol",
      tr: "WoodongSeol",
      ar: "WoodongSeol",
    },
    blurb: {
      ko: "기업과 개인이 설명회를 등록하고 예약·결제·인증까지 진행할 수 있는 플랫폼입니다.",
      en: "A platform where companies and individuals can host, book, and pay for seminars with authentication.",
      tr: "Şirketlerin ve bireylerin seminer oluşturup rezervasyon ve ödeme yapabildiği bir platform.",
      ar: "منصة تتيح للشركات والأفراد تنظيم الندوات، الحجز، والدفع مع التحقق من الهوية.",
    },
    tags: [
      "React",
      "JavaScript",
      "Styled-Components",
      "PortOne",
      "AWS S3",
      "Auth",
      "SEO",
    ],
    area: "React",
    status: "Active",
    featured: true,
    role: {
      ko: "프론트엔드 전담 · 백엔드 1명과 협업",
      en: "Sole frontend developer · paired with one backend developer",
      tr: "Tek frontend geliştirici · bir backend geliştiriciyle birlikte",
      ar: "مطوّرة الواجهة الأمامية الوحيدة · بالتعاون مع مطوّر خلفية",
    },
    metrics: [
      {
        value: "4",
        label: {
          ko: "연결 플로우 (예약 · 결제 · 인증 · 관리)",
          en: "connected flows (booking · payment · auth · admin)",
          tr: "bağlı akış",
          ar: "مسارات مترابطة",
        },
      },
      {
        value: "2",
        label: { ko: "검색엔진 노출 (구글 · 네이버)", en: "search engines indexed", tr: "arama motoru", ar: "محركات بحث" },
      },
      {
        value: "PortOne",
        label: { ko: "실결제 연동", en: "live payment integration", tr: "canlı ödeme entegrasyonu", ar: "تكامل دفع حقيقي" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", tr: "Frontend", ar: "الواجهة الأمامية" },
        items: ["React", "JavaScript", "Styled-Components"],
      },
      {
        group: { ko: "연동 · 배포", en: "Integrations & Deploy", tr: "Entegrasyon & Dağıtım", ar: "التكاملات والنشر" },
        items: ["PortOne 결제 API", "본인인증", "AWS S3 정적 배포", "SEO · 메타데이터"],
      },
    ],
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752439/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-11-10_%EC%98%A4%ED%9B%84_2.26.58_qt6upc.png",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762752176/12_dhqihr.mp4",
    mainVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762752176/12_dhqihr.mp4",
    links: {
      code: "",
      link: "https://woodongseol.com",
    },
    body: {
      ko: `
💡 기업과 개인이 설명회를 등록하고, 참가자는 일정 선택부터 예약·결제·본인인증까지 한 번에 처리할 수 있는 플랫폼입니다.  

🧩 프론트엔드는 React와 Styled-Components로 개발했으며, 결제는 PortOne API를 사용했습니다.  

🚀 AWS S3를 통해 정적 배포를 진행했고, 검색엔진 최적화(SEO)와 메타데이터 설정으로 네이버·구글 노출을 개선했습니다.  

🤝 백엔드 개발자 1명과 협업하여 전체 서비스 구조와 UX를 함께 설계했습니다.
`,
      en: `
💡 A platform where companies and individuals can host seminars, while participants can handle booking, payment, and verification in one flow.  

🧩 Built with React and Styled-Components, using PortOne API for payment integration.  

🚀 Deployed on AWS S3 with full SEO optimization for Google and Naver search visibility.  

🤝 Collaborated with a backend developer on architecture and UX design.
`,
      tr: `
💡 Şirketler ve bireyler için seminer oluşturma, rezervasyon, ödeme ve kimlik doğrulama özellikleri sunan bir platform.  

🧩 React ve Styled-Components kullanılarak geliştirildi, ödeme entegrasyonu PortOne API ile sağlandı.  

🚀 AWS S3 üzerinde dağıtıldı ve Google/Naver SEO için optimize edildi.  

🤝 Bir backend geliştiriciyle iş birliği içinde tasarlandı.
`,
      ar: `
💡 منصة تتيح للشركات والأفراد إنشاء الندوات، مع الحجز والدفع والتحقق في عملية واحدة.  

🧩 تم تطويرها باستخدام React وStyled-Components، مع دمج واجهة برمجة تطبيقات PortOne للدفع.  

🚀 تم النشر على AWS S3 مع تحسين محركات البحث لجوجل ونفر.  

🤝 تم تطويرها بالتعاون مع مطور خلفية واحد.
`,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762752176/12_dhqihr.mp4",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752148/001_c6ed1b.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752157/004_htvx74.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752166/007_tulehx.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752161/005_n6vrta.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752171/006_vwhzx5.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752180/008_ccdyma.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752184/020_ymmtdr.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752152/010_j0enl7.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752144/002_ryddhk.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762752189/003_ahhji1.jpg",
    ],
  },

  //dangseon
  {
    slug: "dangseon",
    weight: 3,
    title: {
      ko: "당신의 선택 — 당선",
      en: "Your Choice — Dangseon",
      tr: "Senin Seçimin — Dangseon",
      ar: "اختيارك — Dangseon",
    },
    blurb: {
      ko: "누구나 투표를 만들고 참여할 수 있는 투표 플랫폼. Next.js 웹 + Capacitor로 iOS·Android 앱까지 출시.",
      en: "A voting platform where anyone can create and join polls. Next.js web app + shipped to iOS & Android via Capacitor.",
      tr: "Herkesin anket oluşturup katılabileceği bir oy platformu. Next.js web uygulaması + Capacitor ile iOS ve Android'e yayınlandı.",
      ar: "منصة تصويت تتيح لأي شخص إنشاء استطلاعات والمشاركة فيها. تطبيق ويب Next.js ونشر على iOS وAndroid عبر Capacitor.",
    },
    tags: [
      "Next.js 16",
      "React 19",
      "TailwindCSS v4",
      "Supabase",
      "RLS",
      "Realtime",
      "Capacitor",
      "iOS",
      "Android",
      "FCM",
      "Sentry",
      "SEO",
    ],
    area: "React",
    status: "Active",
    active: true,
    featured: true,
    period: "2025 – 현재",
    role: {
      ko: "기획 · 디자인 · 웹/앱 개발 · 배포 · 운영 (1인)",
      en: "Planning · Design · Web & app development · Deploy · Live ops (solo)",
      tr: "Planlama · Tasarım · Web/uygulama geliştirme · Dağıtım · İşletme (tek kişi)",
      ar: "التخطيط والتصميم وتطوير الويب والتطبيق والنشر والتشغيل (منفرد)",
    },
    thumb: "media/dangseon-01-home.jpg",
    links: { link: "https://dangseon.com" },
    metrics: [
      {
        value: "3",
        label: { ko: "출시 플랫폼 (웹 · iOS · Android)", en: "shipped platforms", tr: "yayın platformu", ar: "منصات منشورة" },
      },
      {
        value: "7",
        label: {
          ko: "서비스 축 (투표 · 숏픽 · 토너먼트 · 커뮤니티 · 인사이트 · 이벤트 · 랭킹)",
          en: "product pillars",
          tr: "ürün ekseni",
          ar: "محاور المنتج",
        },
      },
      {
        value: "RLS",
        label: { ko: "DB 레벨 권한 제어", en: "row-level security", tr: "satır düzeyi güvenlik", ar: "أمان على مستوى الصف" },
      },
      {
        value: "24/7",
        label: { ko: "Sentry · Analytics 관측", en: "monitored with Sentry", tr: "Sentry ile izleniyor", ar: "مراقبة عبر Sentry" },
      },
    ],
    stack: [
      {
        group: { ko: "웹", en: "Web", tr: "Web", ar: "الويب" },
        items: ["Next.js 16 App Router", "React 19", "React Compiler", "TailwindCSS v4", "Recharts", "Lottie"],
      },
      {
        group: { ko: "백엔드 · 데이터", en: "Backend & Data", tr: "Backend & Veri", ar: "الخلفية والبيانات" },
        items: ["Supabase Auth", "PostgreSQL + RLS", "Supabase Realtime", "Route Handlers", "Webhooks"],
      },
      {
        group: { ko: "모바일", en: "Mobile", tr: "Mobil", ar: "الموبايل" },
        items: ["Capacitor 8", "Android (com.dangseon.app)", "iOS (com.dangseon.ios)", "FCM 푸시 알림"],
      },
      {
        group: { ko: "운영 · 관측", en: "Ops & Observability", tr: "İşletme & Gözlem", ar: "التشغيل والمراقبة" },
        items: ["Vercel", "Sentry", "Vercel Analytics · Speed Insights", "Google Analytics", "어드민 대시보드"],
      },
    ],
    body: {
      ko: `누구나 투표를 만들고 링크로 공유하는 서비스로 시작해, 지금은 **숏픽 · 토너먼트 · 커뮤니티 · AI 인사이트 · 포인트/등급 · 이벤트**까지 붙었습니다. 웹 · iOS · Android 모두 출시해 운영 중이에요.

**서비스에 들어간 것들**
- **숏픽** — 세로로 넘기면서 바로 투표하는 쇼츠형 피드
- **픽 토너먼트** — 이상형 월드컵 방식의 대진과 완주 통계
- **투표 인사이트** — 마감된 투표를 AI가 읽을거리로 바꿔 커뮤니티에 발행 (어드민 콘솔 프로젝트에서 자세히)
- **포인트 · 등급** — 출석·참여·작성으로 SEED부터 FOREST까지 6단계
- **이벤트 · 쿠폰** — 출석체크, 선착순 기프티콘, 포인트 랜덤박스
- **추천인 파트너** — 추천 실적 정산과 전자 서명 약정서
- **알림함 · 공지 모달 · 게스트 모드 · 투표 제안**

**만들면서 신경 쓴 것**
- **웹 하나로 세 플랫폼.** Next.js 16 + React 19를 Vercel에 올리고 Capacitor 8로 감싸 스토어에 출시했습니다. 앱이 dangseon.com을 로드하는 구조라 **웹을 배포하면 앱도 같이 최신**이 됩니다.
- **권한은 앱이 아니라 DB에서.** Supabase RLS로 "누가 무엇을 읽고 쓰는지"를 테이블 정책에 못 박았어요. 클라이언트에서 조건문을 빼먹어도 데이터가 새지 않게 하려는 선택입니다.
- **앱 빌드 우회.** Capacitor는 정적 export가 필요한데 서버 Route Handler가 있어서 그대로는 빌드가 안 됩니다. 빌드 스크립트가 **API 라우트를 임시로 숨기고 export한 뒤 종료 시 원복**하게 만들었어요. 성공하든 실패하든 복구돼서 작업 트리가 더러워지지 않습니다.
- **실시간 · 푸시.** 참여·좋아요·댓글은 Supabase Realtime으로 즉시 반영되고, 푸시는 FCM + firebase-admin으로 서버에서 발송합니다. 결과 카드는 html-to-image로 이미지화해 공유할 수 있어요.
- **관측.** Sentry로 에러를, Vercel Analytics · Speed Insights · GA로 흐름을 봅니다. 가입 전환은 프로필 설정이 끝나는 시점으로 맞췄어요.

📱 [App Store에서 보기](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · Google Play 동시 배포`,
      en: `Started as a place to create a poll and share it by link; it now carries **short picks, tournaments, community boards, AI insights, points/tiers, and events**. Shipped and running on web, iOS, and Android.

**What's in the service**
- **Short picks** — a vertical shorts-style feed you vote in directly
- **Pick tournaments** — bracket-style matchups with completion stats
- **Poll insights** — closed polls turned into readable articles by AI and published to the community (see the admin console project)
- **Points & tiers** — six levels from SEED to FOREST, earned by attendance, participation, and posting
- **Events & coupons** — attendance check-ins, first-come gift cards, point random boxes
- **Referral partners** — payout settlement and e-signed agreements
- **Notification inbox, announcement modals, guest mode, poll suggestions**

**What I cared about building it**
- **One web codebase, three platforms.** Next.js 16 + React 19 on Vercel, wrapped with Capacitor 8 for the stores. The app loads dangseon.com, so **deploying the web updates the apps too**.
- **Authorization lives in the database, not the app.** Supabase RLS pins down who can read and write what at the table level — so a forgotten conditional in client code can't leak data.
- **Working around the app build.** Capacitor needs a static export, but server Route Handlers block that. The build script **hides the API routes, exports, and restores them on exit** — on success and failure alike, so the working tree never ends up dirty.
- **Realtime & push.** Votes, likes, and comments propagate instantly over Supabase Realtime; push goes out server-side via FCM + firebase-admin. Result cards render to images with html-to-image for sharing.
- **Observability.** Sentry for errors; Vercel Analytics, Speed Insights, and GA for flow. Signup conversion is measured when profile setup completes, not before.

📱 [View on App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · also on Google Play`,
      tr: `Anket oluşturup bağlantıyla paylaşmakla başladı; bugün **kısa seçimler, turnuvalar, topluluk panoları, AI içgörüleri, puan/seviye ve etkinlikler** içeriyor. Web, iOS ve Android'de yayında.

**Serviste neler var**
- **Kısa seçimler** — dikey kaydırmalı, doğrudan oy verilen akış
- **Seçim turnuvaları** — eşleşmeli turnuva ve tamamlama istatistikleri
- **Anket içgörüleri** — kapanan anketleri AI'ın okunur yazıya çevirip toplulukta yayımlaması (yönetim konsolu projesine bakın)
- **Puan ve seviye** — katılım ve paylaşımla SEED'den FOREST'a altı kademe
- **Etkinlik ve kuponlar** — yoklama, sınırlı sayıda hediye çeki, puan kutuları
- **Referans ortakları** — hakediş mutabakatı ve e-imzalı sözleşme
- **Bildirim kutusu, duyuru modalları, misafir modu, anket önerileri**

**Yaparken önemsediklerim**
- **Tek web kod tabanı, üç platform.** Vercel'de Next.js 16 + React 19, mağazalar için Capacitor 8 ile paketlendi. Uygulama dangseon.com'u yüklediği için **web'i dağıtmak uygulamaları da güncelliyor**.
- **Yetkilendirme uygulamada değil veritabanında.** Supabase RLS ile kimin neyi okuyup yazacağı tablo düzeyinde sabitlendi; istemcide unutulan bir koşul veri sızdıramıyor.
- **Uygulama derlemesini aşmak.** Capacitor statik export istiyor ama sunucu Route Handler'ları buna engel. Derleme betiği **API rotalarını gizliyor, export alıyor ve çıkışta geri koyuyor** — başarıda da hatada da, çalışma ağacı kirlenmiyor.
- **Gerçek zaman ve push.** Oylar, beğeniler, yorumlar Supabase Realtime ile anında yayılıyor; push sunucudan FCM + firebase-admin ile gidiyor.
- **Gözlemlenebilirlik.** Hatalar Sentry'de; akış Vercel Analytics, Speed Insights ve GA'da.

📱 [App Store'da görüntüle](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · Google Play'de de yayında`,
      ar: `بدأت كمكان لإنشاء استطلاع ومشاركته عبر رابط، وتضم اليوم **اختيارات سريعة وبطولات ولوحات مجتمع ورؤى بالذكاء الاصطناعي ونقاطاً ومستويات وفعاليات**. منشورة وتعمل على الويب وiOS وAndroid.

**ما تحتويه الخدمة**
- **الاختيارات السريعة** — تدفّق رأسي على غرار الفيديوهات القصيرة تصوّت فيه مباشرة
- **بطولات الاختيار** — مواجهات على شكل أقواس مع إحصاءات الإكمال
- **رؤى الاستطلاعات** — تحويل الاستطلاعات المنتهية إلى مقالات يكتبها الذكاء الاصطناعي وتُنشر في المجتمع (انظر مشروع لوحة الإدارة)
- **النقاط والمستويات** — ست مراتب من SEED إلى FOREST عبر الحضور والمشاركة والنشر
- **الفعاليات والقسائم** — تسجيل الحضور وبطاقات هدايا لأول المشاركين وصناديق نقاط عشوائية
- **شركاء الإحالة** — تسوية المستحقات واتفاقيات موقّعة إلكترونياً
- **صندوق الإشعارات ونوافذ الإعلانات ووضع الضيف واقتراح الاستطلاعات**

**ما اهتممت به أثناء البناء**
- **قاعدة شيفرة ويب واحدة لثلاث منصات.** Next.js 16 و React 19 على Vercel، مغلّفة بـ Capacitor 8 للمتاجر. ولأن التطبيق يحمّل dangseon.com فإن **نشر الويب يحدّث التطبيقات أيضاً**.
- **الصلاحيات في قاعدة البيانات لا في التطبيق.** تثبّت سياسات Supabase RLS من يقرأ ومن يكتب ماذا على مستوى الجدول، فلا يتسبب شرط منسي في العميل بتسريب البيانات.
- **الالتفاف حول بناء التطبيق.** يتطلب Capacitor تصديراً ثابتاً بينما تمنعه Route Handlers على الخادم. لذا **يخفي سكربت البناء مسارات الـ API ثم يصدّر ويستعيدها عند الخروج** — في النجاح والفشل معاً، فلا تتّسخ شجرة العمل.
- **الزمن الحقيقي والإشعارات.** تنتشر الأصوات والإعجابات والتعليقات فوراً عبر Supabase Realtime، وتُرسل الإشعارات من الخادم عبر FCM و firebase-admin.
- **المراقبة.** Sentry للأخطاء، و Vercel Analytics و Speed Insights و GA لتتبّع الاستخدام.

📱 [عرض في App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · ومتاح على Google Play`,
    },
    gallery: [
      "media/dangseon-01-home.jpg",
      "media/dangseon-02-vote-detail.jpg",
      "media/dangseon-08-shortpick.jpg",
      "media/dangseon-06-worldcup.jpg",
      "media/dangseon-05-insight-detail.jpg",
      "media/dangseon-04-insight-list.jpg",
      "media/dangseon-03-community.jpg",
      "media/dangseon-09-rank.jpg",
      "media/dangseon-10-events.jpg",
    ],
  },

  //dangseon admin console
  {
    slug: "dangseon-admin",
    weight: 2,
    title: {
      ko: "당선 어드민 콘솔 — AI 운영 파이프라인",
      en: "Dangseon Admin Console — AI Ops Pipeline",
      tr: "Dangseon Yönetim Konsolu — AI Operasyon Hattı",
      ar: "لوحة إدارة Dangseon — خط تشغيل بالذكاء الاصطناعي",
    },
    blurb: {
      ko: "투표 서비스를 혼자 운영하려고 만든 관리자 콘솔. 뉴스에서 투표 초안을 만들고, 마감된 투표를 읽을거리로 바꾸는 AI 파이프라인 두 개가 크론으로 돌아갑니다.",
      en: "The admin console I built to run the voting service solo. Two AI pipelines run on cron: one drafts polls from the news, the other turns closed polls into readable articles.",
      tr: "Oylama servisini tek başıma işletmek için yaptığım yönetim konsolu. Cron ile çalışan iki AI hattı: biri haberlerden anket taslağı üretiyor, diğeri kapanan anketleri okunur yazıya çeviriyor.",
      ar: "لوحة الإدارة التي بنيتها لتشغيل خدمة التصويت منفرداً. خطّان بالذكاء الاصطناعي يعملان عبر cron: أحدهما يصوغ استطلاعات من الأخبار، والآخر يحوّل الاستطلاعات المنتهية إلى مقالات.",
    },
    tags: [
      "Next.js 16",
      "OpenAI Responses API",
      "JSON Schema",
      "이미지 생성",
      "Vercel Cron",
      "Supabase",
      "RLS",
      "Slack Webhook",
      "Admin",
    ],
    area: "AI",
    status: "Active",
    active: true,
    featured: true,
    period: "2025 – 현재",
    role: {
      ko: "설계 · 개발 · 운영 (1인)",
      en: "Design · Development · Operations (solo)",
      tr: "Tasarım · Geliştirme · İşletme (tek kişi)",
      ar: "التصميم والتطوير والتشغيل (منفرد)",
    },
    links: { link: "https://dangseon.com" },
    thumb: "media/dangseon-admin-01-aipolls.jpg",
    galleryLayout: "wide",
    gallery: [
      "media/dangseon-admin-01-aipolls.jpg",
      "media/dangseon-admin-02-insight.jpg",
      "media/dangseon-admin-03-coupons.jpg",
      "media/dangseon-admin-04-events.jpg",
      "media/dangseon-admin-05-overview.jpg",
    ],
    metrics: [
      {
        value: "20+",
        label: { ko: "운영 화면", en: "admin screens", tr: "yönetim ekranı", ar: "شاشات إدارية" },
      },
      {
        value: "2",
        label: {
          ko: "AI 파이프라인 (투표 초안 · 결과 인사이트)",
          en: "AI pipelines",
          tr: "AI hattı",
          ar: "خطوط ذكاء اصطناعي",
        },
      },
      {
        value: "3",
        label: { ko: "Vercel Cron 자동 실행", en: "scheduled cron jobs", tr: "zamanlanmış cron işi", ar: "مهام cron مجدولة" },
      },
      {
        value: "2단계",
        label: {
          ko: "관리자 인증 (middleware + admins 테이블)",
          en: "layers of admin auth",
          tr: "katmanlı yönetici doğrulaması",
          ar: "طبقتا تحقّق للمشرف",
        },
      },
    ],
    stack: [
      {
        group: { ko: "콘솔", en: "Console", tr: "Konsol", ar: "اللوحة" },
        items: ["Next.js 16 App Router", "React 19", "TailwindCSS v4", "Recharts", "Phosphor Icons"],
      },
      {
        group: { ko: "AI", en: "AI", tr: "AI", ar: "الذكاء الاصطناعي" },
        items: ["OpenAI Responses API", "JSON Schema strict 모드", "이미지 생성 모델", "RSS 수집·정규화", "프롬프트 가드레일"],
      },
      {
        group: { ko: "자동화 · 연동", en: "Automation & Integrations", tr: "Otomasyon & Entegrasyon", ar: "الأتمتة والتكاملات" },
        items: ["Vercel Cron", "Slack Webhook", "FCM 예약 발송", "기프티쇼 API", "Supabase Storage"],
      },
      {
        group: { ko: "보안", en: "Security", tr: "Güvenlik", ar: "الأمان" },
        items: ["middleware + admins 테이블", "CRON_SECRET Bearer", "service role 서버 전용", "Supabase RLS"],
      },
    ],
    body: {
      ko: `[당신의 선택](https://dangseon.com)을 혼자 운영하려고 만든 관리자 콘솔입니다. 투표 등록부터 신고 처리, 알림 발송, 정산까지 20개가 넘는 화면이 하나의 사이드바 아래 묶여 있어요.

**AI 파이프라인 ① — 뉴스에서 투표 초안 만들기**
- 구글 뉴스 RSS 5개에서 기사 후보를 모아 중복을 걷어냅니다.
- OpenAI Responses API에 **JSON Schema strict 모드**로 요청해서 제목 · 설명 · 선택지 · 카테고리 · 푸시 문구 · 이미지 프롬프트를 한 번에 구조화해 받아요. 형식이 어긋난 응답이 애초에 나오지 않게 하려는 선택입니다.
- 최근 3일 초안 제목을 프롬프트에 같이 넣어 **같은 주제가 반복되지 않게** 막았어요.
- 초안마다 이미지 모델로 4:5 썸네일을 생성해 Supabase Storage에 올립니다. 실존 인물 묘사 · 언론사 로고 · 워터마크는 프롬프트에서 금지했습니다.
- 생성이 끝나면 **Slack으로 알림**이 가고, 운영자가 어드민에서 확인하고 승인해야 실제 투표로 발행됩니다. **AI가 바로 게시하지 않는 구조**예요.
- 오전 8시 · 오후 2시(KST)에 Vercel Cron으로 자동 실행됩니다.

**AI 파이프라인 ② — 마감된 투표를 읽을거리로**
- 마감된 투표의 응답을 **연령 · 성별 · 지역**으로 집계합니다. 1,000건씩 페이지네이션해서 전체를 훑어요.
- 이 통계를 근거로 AI가 제목 · 요약 · 본문 · 핵심 포인트를 써서 커뮤니티 인사이트 글로 발행합니다.
- 프롬프트에 **"데이터에 없는 외부 통계는 절대 넣지 않는다", "표본 20명 미만 구간은 단정하지 않는다", "특정 입장을 지지하지 않는다"** 같은 규칙을 박아뒀어요. 숫자를 지어내거나 한쪽으로 기우는 글이 나오는 게 가장 큰 리스크라서요.
- 통계 용어 대신 "10명 중 9명꼴"처럼 풀어 쓰게 했고, **본문의 60%는 이슈 맥락 · 40%만 통계 해석**에 쓰도록 비중까지 지정했습니다.

**운영 기능**
- 회원 관리 · 프로필 변경 승인 · 제재와 패널티 현황
- 신고 처리 (투표 댓글 · 커뮤니티 글/댓글)
- 배너 · 공지 · 푸시 발송과 예약
- 이벤트 · 쿠폰 · 기프티쇼 연동 (비즈머니 잔액과 상품 조회)
- 추천인 파트너 정산과 전자 서명 약정서
- Overview 대시보드 — 지표를 **count 쿼리로만** 집계해서 전체 row를 내려받지 않습니다.

**권한과 안전장치**
- 관리자 판별은 **middleware와 \`admins\` 테이블 두 곳**에서 확인합니다.
- 크론 엔드포인트는 \`CRON_SECRET\` Bearer 토큰으로 막았어요.
- service role 키 · OpenAI 키 · Slack 웹훅은 전부 서버 Route Handler 안에서만 씁니다.
- 푸시는 **밤에 울리지 않게** 07~22시 밖이면 다음 날 아침으로 자동으로 밀립니다.`,
      en: `The admin console I built to run [Dangseon](https://dangseon.com) on my own — over 20 screens under one sidebar, from creating polls to handling reports, sending notifications, and settling partner payouts.

**AI pipeline ① — drafting polls from the news**
- Collects article candidates from five Google News RSS feeds and dedupes them.
- Calls the OpenAI Responses API in **JSON Schema strict mode**, getting title, description, options, category, push copy, and image prompt back as one structured payload — so a malformed response can't happen in the first place.
- Feeds the last three days of draft titles into the prompt so **the same topic doesn't come around again**.
- Generates a 4:5 thumbnail per draft with an image model and uploads it to Supabase Storage. Real-person likeness, media logos, and watermarks are forbidden in the prompt.
- When generation finishes a **Slack notification** goes out, and an operator has to review and approve in the admin before anything publishes. **The AI never posts directly.**
- Runs automatically at 8am and 2pm KST via Vercel Cron.

**AI pipeline ② — turning closed polls into articles**
- Aggregates responses from closed polls by **age, gender, and region**, paginating 1,000 rows at a time to cover the whole set.
- On that basis the AI writes a title, summary, body, and key takeaways, published as a community insight post.
- The prompt pins down rules like **"never introduce statistics that aren't in the data", "don't draw conclusions from segments under 20 respondents", and "don't take a side"** — invented numbers or a slanted read are the biggest risks here.
- It has to write "9 out of 10 people" rather than statistical jargon, and I specified the ratio too: **60% of the body on issue context, only 40% on reading the numbers.**

**Operations**
- Member management, profile-change approvals, sanctions and penalty status
- Report handling across poll comments and community posts
- Banners, announcements, and push sends with scheduling
- Events, coupons, and a gift-card API integration (balance and product lookup)
- Referral partner settlement and e-signed agreements
- An overview dashboard that aggregates metrics with **count queries only**, never pulling full rows

**Authorization & safeguards**
- Admin identity is checked in **two places: middleware and the \`admins\` table**.
- Cron endpoints are gated behind a \`CRON_SECRET\` bearer token.
- The service role key, OpenAI key, and Slack webhook are used exclusively inside server Route Handlers.
- Push sends are held back so **nothing buzzes at night** — outside 07:00–22:00 they roll to the next morning.`,
      tr: `[Dangseon](https://dangseon.com)'u tek başıma işletmek için yaptığım yönetim konsolu — tek bir kenar çubuğu altında 20'den fazla ekran: anket oluşturmadan şikayet yönetimine, bildirim göndermeden ortak hakedişlerine kadar.

**AI hattı ① — haberlerden anket taslağı**
- Beş Google Haberler RSS akışından aday makaleleri toplayıp yinelenenleri ayıklıyor.
- OpenAI Responses API'sini **JSON Schema strict modunda** çağırıyor; başlık, açıklama, seçenekler, kategori, push metni ve görsel istemi tek yapılandırılmış yanıt olarak geliyor — bozuk biçimli bir yanıt en baştan mümkün olmuyor.
- Son üç günün taslak başlıkları isteme ekleniyor, böylece **aynı konu tekrar dönmüyor**.
- Her taslak için görsel modeliyle 4:5 küçük resim üretilip Supabase Storage'a yükleniyor. Gerçek kişi benzerliği, medya logoları ve filigranlar istemde yasak.
- Üretim bitince **Slack bildirimi** gidiyor; yayına girmesi için operatörün yönetim panelinde onaylaması gerekiyor. **AI doğrudan yayımlamıyor.**
- Vercel Cron ile KST 08:00 ve 14:00'te otomatik çalışıyor.

**AI hattı ② — kapanan anketleri yazıya çevirmek**
- Kapanan anketlerin yanıtlarını **yaş, cinsiyet ve bölgeye** göre topluyor; tamamını taramak için 1.000'er satır sayfalıyor.
- Bu temelde AI başlık, özet, gövde ve öne çıkan noktaları yazıyor ve topluluk içgörü yazısı olarak yayımlanıyor.
- İsteme **"veride olmayan istatistik asla eklenmez", "20 kişinin altındaki kesitlerden kesin sonuç çıkarılmaz", "taraf tutulmaz"** gibi kurallar sabitlendi — uydurulmuş sayı veya yanlı okuma buradaki en büyük risk.
- İstatistik jargonu yerine "10 kişiden 9'u" gibi yazması isteniyor; oran da belirtildi: **gövdenin %60'ı konu bağlamı, yalnızca %40'ı sayıların yorumu.**

**İşletme**
- Üye yönetimi, profil değişikliği onayları, yaptırım ve ceza durumu
- Anket yorumları ve topluluk gönderilerinde şikayet yönetimi
- Banner, duyuru ve zamanlanabilir push gönderimi
- Etkinlik, kupon ve hediye çeki API entegrasyonu
- Referans ortağı mutabakatı ve e-imzalı sözleşmeler
- Metrikleri **yalnızca count sorgularıyla** toplayan, tam satır çekmeyen genel bakış paneli

**Yetki ve güvenlik önlemleri**
- Yönetici kimliği **iki yerde** doğrulanıyor: middleware ve \`admins\` tablosu.
- Cron uç noktaları \`CRON_SECRET\` bearer token ile korunuyor.
- Service role anahtarı, OpenAI anahtarı ve Slack webhook'u yalnızca sunucu Route Handler'ları içinde kullanılıyor.
- Bildirimler **gece çalmasın diye** 07:00–22:00 dışında ertesi sabaha erteleniyor.`,
      ar: `لوحة الإدارة التي بنيتها لتشغيل [Dangseon](https://dangseon.com) بمفردي — أكثر من 20 شاشة تحت شريط جانبي واحد، من إنشاء الاستطلاعات إلى معالجة البلاغات وإرسال الإشعارات وتسوية مستحقات الشركاء.

**خط الذكاء الاصطناعي ① — صياغة استطلاعات من الأخبار**
- يجمع المقالات المرشّحة من خمس تغذيات RSS لأخبار Google ويزيل المكرّر.
- يستدعي OpenAI Responses API في **وضع JSON Schema الصارم**، فيعود العنوان والوصف والخيارات والتصنيف ونص الإشعار وموجّه الصورة في حمولة واحدة منظّمة — بحيث يستحيل أصلاً ورود استجابة مشوّهة.
- تُضاف عناوين مسودات آخر ثلاثة أيام إلى الموجّه كي **لا يتكرّر الموضوع نفسه**.
- يولّد لكل مسودة صورة مصغّرة بنسبة 4:5 عبر نموذج صور ويرفعها إلى Supabase Storage، مع منع تصوير أشخاص حقيقيين وشعارات المؤسسات الإعلامية والعلامات المائية في الموجّه.
- عند انتهاء التوليد يصل **إشعار Slack**، ولا يُنشر شيء قبل مراجعة المشرف وموافقته في اللوحة. **الذكاء الاصطناعي لا ينشر مباشرة.**
- يعمل تلقائياً في الثامنة صباحاً والثانية ظهراً بتوقيت كوريا عبر Vercel Cron.

**خط الذكاء الاصطناعي ② — تحويل الاستطلاعات المنتهية إلى مقالات**
- يجمّع استجابات الاستطلاعات المنتهية حسب **العمر والجنس والمنطقة**، مع ترقيم صفحات بألف سجل في كل مرة لتغطية المجموعة كاملة.
- على هذا الأساس يكتب الذكاء الاصطناعي عنواناً وملخصاً ومتناً ونقاطاً أساسية، ويُنشر كمقال رؤى في المجتمع.
- يثبّت الموجّه قواعد مثل **"لا تُضف إحصاءات غير موجودة في البيانات"، و"لا تجزم من شرائح أقل من 20 مشاركاً"، و"لا تنحَز لطرف"** — فالأرقام المختلقة أو القراءة المنحازة هما أكبر خطر هنا.
- ويُلزَم بكتابة "9 من كل 10" بدل المصطلحات الإحصائية، مع تحديد النسبة أيضاً: **60% من المتن لسياق القضية و40% فقط لقراءة الأرقام.**

**التشغيل**
- إدارة الأعضاء واعتماد تغييرات الملف الشخصي والعقوبات
- معالجة البلاغات على تعليقات الاستطلاعات ومنشورات المجتمع
- اللافتات والإعلانات وإرسال الإشعارات مع الجدولة
- الفعاليات والقسائم وتكامل واجهة بطاقات الهدايا
- تسوية شركاء الإحالة والاتفاقيات الموقّعة إلكترونياً
- لوحة عامة تجمّع المؤشرات **باستعلامات count فقط** دون سحب الصفوف كاملة

**الصلاحيات وإجراءات الأمان**
- يُتحقّق من هوية المشرف في **موضعين: الـ middleware وجدول \`admins\`**.
- نقاط الـ cron محميّة برمز \`CRON_SECRET\` من نوع bearer.
- مفتاح service role ومفتاح OpenAI و webhook الخاص بـ Slack تُستخدم حصراً داخل Route Handlers على الخادم.
- تُؤجَّل الإشعارات **كي لا يرنّ شيء ليلاً**؛ خارج 07:00–22:00 تُدفع إلى صباح اليوم التالي.`,
    },
  },

  //seobuds
  {
    slug: "seobuds",
    weight: 1,
    title: {
      ko: "서부디에스 홈페이지",
      en: "SeobuDS Website",
      tr: "SeobuDS Web Sitesi",
      ar: "موقع SeobuDS",
    },
    blurb: {
      ko: "Next.js로 제작한 회사 소개 페이지. SEO 최적화와 구글·네이버 등록까지 완료.",
      en: "Company website built with Next.js. Fully SEO-optimized with Google and Naver indexing.",
      tr: "Next.js ile yapılmış şirket tanıtım sitesi. Google ve Naver'da tam SEO optimizasyonu ile.",
      ar: "موقع تعريفي للشركة مبني بـ Next.js مع تحسين كامل لمحركات البحث وتسجيل على Google وNaver.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "SEO"],
    area: "React",
    status: "Active",
    active: true,
    role: {
      ko: "기획 · 디자인 · 개발 · 배포 (1인)",
      en: "Planning · Design · Development · Deploy (solo)",
      tr: "Planlama · Tasarım · Geliştirme · Dağıtım (tek kişi)",
      ar: "التخطيط والتصميم والتطوير والنشر (منفرد)",
    },
    stack: [
      {
        group: { ko: "웹", en: "Web", tr: "Web", ar: "الويب" },
        items: ["Next.js", "TypeScript", "TailwindCSS"],
      },
      {
        group: { ko: "배포 · 그로스", en: "Deploy & Growth", tr: "Dağıtım & Büyüme", ar: "النشر والنمو" },
        items: ["Vercel", "구글 · 네이버 서치콘솔", "메타데이터 · OG 최적화"],
      },
    ],
    thumb: "seobuds.png",
    links: { link: "https://seobuds.com" },
    body: {
      ko: `
💡 회사 소개 및 서비스 안내를 위한 공식 웹사이트입니다.

🧩 Next.js + TypeScript + TailwindCSS로 개발하고 Vercel로 배포했습니다.

🔍 구글·네이버 서치콘솔 등록 및 메타데이터 최적화로 검색엔진 노출을 완성했습니다.

📱 반응형 디자인으로 모바일부터 데스크탑까지 대응합니다.
`,
      en: `
💡 Official company website for introducing services and company info.

🧩 Built with Next.js + TypeScript + TailwindCSS, deployed on Vercel.

🔍 Fully indexed on Google and Naver Search Console with optimized metadata for SEO.

📱 Fully responsive across mobile and desktop.
`,
      tr: `
💡 Şirket tanıtımı ve hizmet bilgisi için resmi web sitesi.

🧩 Next.js + TypeScript + TailwindCSS ile geliştirildi, Vercel üzerinde dağıtıldı.

🔍 Google ve Naver Search Console'a tam indeksleme ve optimize edilmiş meta verilerle SEO tamamlandı.

📱 Mobil ve masaüstü için tam duyarlı tasarım.
`,
      ar: `
💡 الموقع الرسمي للشركة لتقديم الخدمات ومعلومات الشركة.

🧩 مبني بـ Next.js + TypeScript + TailwindCSS ومنشور على Vercel.

🔍 تم التسجيل على Google وNaver Search Console مع تحسين البيانات الوصفية لمحركات البحث.

📱 تصميم متجاوب بالكامل للجوال وسطح المكتب.
`,
    },
    gallery: [],
  },
  //infocompany
  {
    slug: "infocompany",
    weight: 0,
    title: {
      ko: "인포컴퍼니",
      en: "InfoCompany",
      tr: "InfoCompany",
      ar: "InfoCompany",
    },
    blurb: {
      ko: "React로 만든 회사 소개 페이지",
      en: "Company info page built with React",
      tr: "React ile yapılmış şirket tanıtım sayfası",
      ar: "صفحة تعريف الشركة مصممة بـ React",
    },
    tags: ["React", "Web", "Firebase", "JavaScript"],
    area: "React",
    status: "Active",
    links: { link: "https://infocompany.co.kr" },
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588125/info1_bfffon.png",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588131/info_v1_qwh23v.mov",
    mainVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588131/info_v1_qwh23v.mov",

    body: {
      ko: `
React를 사용하여 제작한 회사 소개 페이지입니다.
- 회사 정보, 서비스, 연락처 섹션 구현
- 간단한 반응형 레이아웃 적용
- 배포 완료 및 운영 중
    `,
      en: `
Company info page built with React.
- Sections: Company info, Services, Contact
- Simple responsive layout
- Deployed and live
    `,
      tr: `
React ile yapılmış şirket tanıtım sayfası.
- Bölümler: Şirket bilgisi, Hizmetler, İletişim
- Basit duyarlı tasarım
- Yayında
    `,
      ar: `
صفحة تعريف الشركة مصممة بـ React.
- الأقسام: معلومات الشركة، الخدمات، الاتصال
- تصميم متجاوب بسيط
- تم النشر وتشغيله
    `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588131/info_v1_qwh23v.mov",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588125/info1_bfffon.png",
    ],
  },
  //randommong
  {
    slug: "random-mong",
    weight: 1,
    title: {
      ko: "랜덤몽",
      en: "Random Mong",
      tr: "Rastgele Mong",
      ar: "راندوم مونج",
    },
    blurb: {
      ko: "Firebase Realtime Database를 활용한 실시간 랜덤 채팅 사이트",
      en: "A real-time random chat platform using Firebase Realtime Database",
      tr: "Firebase Realtime Database kullanan gerçek zamanlı rastgele sohbet sitesi",
      ar: "موقع دردشة عشوائي في الوقت الفعلي باستخدام Firebase Realtime Database",
    },
    tags: ["React", "TypeScript", "Firebase", "Realtime", "Study"],
    area: "React",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588117/1_aqnum9.png",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588125/mong_1_l958pe.mov",
    mainVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588125/mong_1_l958pe.mov",
    links: {
      link: "https://bom-random2.web.app",
      code: "https://github.com/wonseola/typescript",
    },
    body: {
      ko: `
랜덤몽은 Firebase Realtime Database와 React를 활용하여 만든 실시간 랜덤 채팅 사이트입니다.
- 사용자 이름 저장 및 입장/퇴장 처리
- 실시간 메시지 전송 및 수신
- 이모지 선택 기능
- Firebase Realtime Database를 활용한 메시지 동기화
- TypeScript와 React Hooks로 구현
- 학습용 실습 프로젝트
    `,
      en: `
Random Mong is a real-time random chat platform built with Firebase Realtime Database and React.
- Stores user names and manages join/leave events
- Sends and receives messages in real-time
- Emoji picker functionality
- Message synchronization via Firebase Realtime Database
- Implemented using TypeScript and React Hooks
- Practice/learning project
    `,
      tr: `
Random Mong, Firebase Realtime Database ve React kullanılarak oluşturulmuş gerçek zamanlı rastgele sohbet sitesidir.
- Kullanıcı adlarını saklama ve giriş/çıkış yönetimi
- Gerçek zamanlı mesaj gönderme ve alma
- Emoji seçici özelliği
- Firebase Realtime Database üzerinden mesaj senkronizasyonu
- TypeScript ve React Hooks ile uygulanmıştır
- Öğrenme/deneme amaçlı proje
    `,
      ar: `
Random Mong هو موقع دردشة عشوائي في الوقت الفعلي تم إنشاؤه باستخدام Firebase Realtime Database وReact.
- تخزين أسماء المستخدمين وإدارة الدخول والخروج
- إرسال واستقبال الرسائل في الوقت الفعلي
- وظيفة اختيار الرموز التعبيرية
- مزامنة الرسائل باستخدام Firebase Realtime Database
- تم التنفيذ باستخدام TypeScript وReact Hooks
- مشروع تجريبي للتعلم
    `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588117/1_aqnum9.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588115/2_b8z7dl.png",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588125/mong_1_l958pe.mov",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588117/3_xkhhau.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588115/4_s9owsb.png",
    ],
  },
  //flutter
  {
    slug: "flutter-practice",
    weight: 0,
    title: {
      ko: "Flutter",
      en: "Flutter Practice Project",
      tr: "Flutter Uygulama Örneği",
      ar: "مشروع تجريبي فلاتر",
    },
    blurb: {
      ko: "Flutter/Dart 로 만든 간단한 실습 프로젝트 모음",
      en: "A collection of simple practice projects made with Flutter/Dart",
      tr: "Flutter/Dart ile yapılmış basit uygulama örnekleri",
      ar: "مجموعة من المشاريع التجريبية البسيطة باستخدام Flutter/Dart",
    },
    tags: ["Flutter", "Dart", "Study"],
    area: "Other",
    status: "Study",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588103/flutter3_lfpgyn.png",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588109/flutter2_ywhexr.mov",

    mainVideo: "",
    links: { code: "https://github.com/wonseola/Flutter" },
    body: {
      ko: `
Flutter/Dart로 만든 다양한 실습 프로젝트를 모아둔 포트폴리오용 예제입니다.
- 영화 모아보기 (영화 리스트 및 상세보기)
- 타이머 앱 (포모도로 타이머)
- 오늘의 웹툰 (웹툰 리스트와 UI)
  `,
      en: `
A collection of practice projects built with Flutter/Dart for portfolio purposes:
- Movie Collector (movie list and detail view)
- Timer App (Pomodoro timer)
- Webtoon Today (webtoon list and UI)
  `,
      tr: `
Flutter/Dart ile yapılmış çeşitli uygulama örneklerini içeren portföy çalışması:
- Film Toplayıcı (film listesi ve detay görünümü)
- Zamanlayıcı Uygulaması (Pomodoro zamanlayıcısı)
- Bugünün Webtoon'u (webtoon listesi ve UI)
  `,
      ar: `
مجموعة من المشاريع التجريبية باستخدام Flutter/Dart لأغراض المحفظة:
- جامع الأفلام (قائمة الأفلام وعرض التفاصيل)
- تطبيق المؤقت (مؤقت بومودورو)
- ويب تون اليوم (قائمة الويب تون وواجهة المستخدم)
  `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588109/flutter1_zdb42e.mov",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588109/flutter2_ywhexr.mov",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588110/flutter3_tyj1ke.mov",
    ],
  },
  //영화모아보기
  {
    slug: "movie-collection",
    weight: 0,
    title: {
      ko: "영화 모아보기",
      en: "Movie Collection",
      tr: "Film Koleksiyonu",
      ar: "مجموعة الأفلام",
    },
    blurb: {
      ko: "다양한 영화 정보를 한눈에 볼 수 있는 페이지 예시입니다.",
      en: "A sample page to view various movie information at a glance.",
      tr: "Çeşitli film bilgilerini tek bakışta görebileceğiniz örnek sayfa.",
      ar: "صفحة تجريبية لعرض معلومات الأفلام المختلفة بنظرة واحدة.",
    },
    tags: ["React", "Next.js", "SSR", "Movie Info", "Study"],
    area: "React",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588058/movie1_lqvsso.png",
    previewVideo: "",
    mainVideo: "",
    links: {
      link: "https://nextjs-movies-theta-puce.vercel.app",
      code: "https://github.com/wonseola/nextjs",
    },
    body: {
      ko: `
영화 모아보기 프로젝트입니다.
- Next.js + React 기반
- Suspense 및 동적 import 활용
- 영화 정보, 출연진, 예고편 등 구성
- CSS 모듈로 스타일링
    `,
      en: `
This is a Movie Collection project.
- Built with Next.js + React
- Uses Suspense and dynamic imports
- Displays movie details, cast, and trailers
- Styled with CSS modules
    `,
      tr: `
Bu bir Film Koleksiyonu projesidir.
- Next.js + React ile yapıldı
- Suspense ve dinamik import kullanımı
- Film detayları, oyuncular ve fragmanlar gösterimi
- CSS modülleri ile stil verilmiş
    `,
      ar: `
هذا مشروع لمجموعة أفلام.
- مبني باستخدام Next.js + React
- يستخدم Suspense و dynamic imports
- يعرض تفاصيل الأفلام والممثلين والمقاطع الدعائية
- تصميم باستخدام CSS modules
    `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588057/movie2_rywcex.png",
    ],
  },
  //bint
  {
    slug: "sns-clone",
    weight: 0,
    title: {
      ko: "SNS 클론",
      en: "SNS Clone",
      tr: "SNS Klon",
      ar: "نسخة SNS",
    },
    blurb: {
      ko: "TypeScript와 React, Firebase를 활용해 만든 SNS 클론 프로젝트. 로그인과 게시글 CRUD 기능을 구현.",
      en: "A SNS clone built with TypeScript, React, and Firebase. Implements login and CRUD operations for posts.",
      tr: "TypeScript, React ve Firebase kullanılarak yapılan SNS klon projesi. Giriş ve gönderi CRUD işlemleri içerir.",
      ar: "نسخة SNS مبنية باستخدام TypeScript وReact وFirebase. تتضمن تسجيل الدخول وعمليات CRUD للمنشورات.",
    },
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Authentication",
      "CRUD",
      "Study",
    ],
    area: "React",
    status: "Study",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588054/bint_1_b0zn5p.png",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588056/bint_v2_ebaafb.mov",
    mainVideo: "",
    links: {
      code: "https://github.com/wonseola/react_sns_app",
      link: "https://bom-app-8cd7b.web.app",
    },
    body: {
      ko: `
SNS 클론 프로젝트입니다.
- Firebase Authentication을 이용한 로그인/회원가입
- 게시글 CRUD(Create, Read, Update, Delete) 기능
- 사용자별 게시글 표시
- 실시간 데이터 반영 (Firebase Firestore)
  `,
      en: `
This is an SNS clone project.
- Login/Register using Firebase Authentication
- Create, Read, Update, Delete posts
- Display posts by individual users
- Real-time data updates via Firebase Firestore
  `,
      tr: `
Bu bir SNS klon projesidir.
- Firebase Authentication ile giriş/kayıt
- Gönderi oluşturma, okuma, güncelleme, silme
- Kullanıcıya özel gönderi gösterimi
- Firebase Firestore ile gerçek zamanlı veri güncellemeleri
  `,
      ar: `
هذا مشروع نسخ SNS.
- تسجيل الدخول/التسجيل باستخدام Firebase Authentication
- إنشاء/قراءة/تحديث/حذف المنشورات
- عرض المنشورات حسب المستخدم
- تحديث البيانات في الوقت الفعلي باستخدام Firebase Firestore
  `,
    },

    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588056/bint_v2_ebaafb.mov",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588056/bint_v1_fnht8h.mov",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588054/bint_2_zhklaz.png",
    ],
  },
  //senior
  {
    slug: "senior-cctv",
    weight: 1,
    title: {
      ko: "시니어 행동 감지 지능형 CCTV",
      en: "Intelligent CCTV for Senior Behavior Detection",
      tr: "Yaşlı Davranışlarını Algılayan Akıllı CCTV",
      ar: "كاميرات مراقبة ذكية لاكتشاف سلوك كبار السن",
    },
    blurb: {
      ko: "고령층의 낙상 및 이상행동을 실시간으로 감지하는 AI 기반 스마트 CCTV 시스템",
      en: "An AI-powered smart CCTV system that detects falls and abnormal behaviors of the elderly in real-time.",
      tr: "Yaşlıların düşme ve anormal davranışlarını gerçek zamanlı olarak algılayan yapay zekâ destekli akıllı CCTV sistemi.",
      ar: "نظام كاميرات مراقبة ذكي يعمل بالذكاء الاصطناعي لاكتشاف سقوط أو سلوك غير طبيعي لكبار السن في الوقت الفعلي.",
    },
    tags: [
      "AI",
      "OpenCV",
      "YOLO",
      "TensorFlow",
      "FastAPI",
      "Computer Vision",
      "Study",
    ],
    area: "AI",
    status: "Study",
    stack: [
      {
        group: { ko: "모델 · 비전", en: "Model & Vision", tr: "Model & Görü", ar: "النموذج والرؤية" },
        items: ["YOLO", "TensorFlow", "OpenCV", "AI-HUB 시니어 이상행동 데이터셋"],
      },
      {
        group: { ko: "서버", en: "Server", tr: "Sunucu", ar: "الخادم" },
        items: ["Python", "FastAPI", "실시간 영상 스트림 처리", "이상행동 알림 발송"],
      },
    ],
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588080/cctv_6_koblao.png",
    mainVideo: "",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588108/cctv_video_x4pymi.mp4",
    links: {
      link: "",
      code: "https://github.com/wonseola/Senior_Project",
    },
    body: {
      ko: `AI-HUB의 시니어 이상행동 데이터셋을 활용하여 요양시설 내 고령층의 낙상 및 배회 등의 이상 행동을 실시간 감지하는 지능형 CCTV 시스템을 개발했습니다.

이 프로젝트는 **고령층의 안전을 위한 빠른 대처 시스템**을 목표로 하며, Python과 FastAPI를 기반으로 서버를 구축하고 OpenCV, YOLO, TensorFlow를 활용하여 **낙상 감지 모델**을 학습 및 적용했습니다.  
CCTV 카메라를 통해 수집된 영상을 실시간으로 분석하고, 이상 행동이 감지되면 **즉시 관리자나 보호자에게 알림을 전송**하도록 구현했습니다.

최신 AI 기술과 영상처리 알고리즘을 결합하여 고령층의 안전을 보조하고, 사고 발생 시 빠른 대응이 가능하도록 설계되었습니다.`,

      en: `Developed an AI-based intelligent CCTV system that detects abnormal behaviors such as falls and wandering among elderly individuals in real-time using the AI-HUB senior behavior dataset.

The project aims to enable **rapid response for elderly safety**, building a backend with Python and FastAPI and applying OpenCV, YOLO, and TensorFlow for **real-time fall detection**.  
Video streams from CCTV cameras are analyzed continuously, and when abnormal movements are detected, **notifications are immediately sent** to caregivers or administrators.

This system integrates modern AI and computer vision algorithms to assist in elderly safety and enable timely response to accidents.`,

      tr: `AI-HUB'un yaşlı davranış veri seti kullanılarak, huzurevlerinde yaşlı bireylerin düşme ve dolaşma gibi anormal davranışlarını gerçek zamanlı olarak algılayan akıllı CCTV sistemi geliştirildi.

Proje, yaşlıların güvenliği için hızlı müdahale sağlamayı amaçlamaktadır. Python ve FastAPI kullanılarak geliştirilen sistem, OpenCV, YOLO ve TensorFlow ile **gerçek zamanlı düşme algılama** işlevi sunar.  
CCTV kameralarından gelen görüntüler sürekli analiz edilir ve anormal hareketler algılandığında **bakıcılara veya yöneticilere anında bildirim gönderilir.**

Bu sistem, modern yapay zekâ ve görüntü işleme algoritmalarını birleştirerek yaşlıların güvenliğini artırmayı ve kazalara hızlı tepki verilmesini sağlar.`,

      ar: `تم تطوير نظام كاميرات مراقبة ذكي يعتمد على الذكاء الاصطناعي لاكتشاف السلوكيات غير الطبيعية مثل السقوط أو التجول بين كبار السن في الوقت الفعلي باستخدام مجموعة بيانات AI-HUB.

يهدف المشروع إلى **تحقيق استجابة سريعة لضمان سلامة كبار السن**، حيث يعتمد على Python وFastAPI ويستخدم OpenCV وYOLO وTensorFlow للكشف عن السقوط في الوقت الفعلي.  
تُحلل تدفقات الفيديو من الكاميرات باستمرار، وعند اكتشاف حركة غير طبيعية، يتم **إرسال إشعار فوري** إلى مقدمي الرعاية أو المسؤولين.

يجمع هذا النظام بين تقنيات الذكاء الاصطناعي الحديثة وخوارزميات الرؤية الحاسوبية لتعزيز سلامة كبار السن وتمكين الاستجابة السريعة للحوادث.`,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588092/1_rsvhui.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588088/2_phkoo1.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588087/3_vsannh.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588085/4_deyuoq.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588084/json_image_after_lbastl.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588064/Flow_Chart_1_mm7b0t.jpg",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588108/cctv_video_x4pymi.mp4",
    ],
  },

  //cardgame
  {
    slug: "card_game",
    weight: 1,
    title: {
      ko: "라즈베리파이 오토 홀덤 카드 분배기",
      en: "Raspberry Pi Auto Hold’em Card Dealer",
      tr: "Raspberry Pi Tabanlı Otomatik Hold’em Kart Dağıtıcısı",
      ar: "آلة توزيع بطاقات بوكر أوتوماتيكية تعتمد على Raspberry Pi",
    },
    blurb: {
      ko: "라즈베리파이와 서보모터를 이용해 인원 수를 입력하면 자동으로 카드를 분배",
      en: "A Raspberry Pi–powered system that automatically deals cards based on the number of players entered.",
      tr: "Oyuncu sayısına göre otomatik kart dağıtımı yapan Raspberry Pi tabanlı bir sistem.",
      ar: "نظام يعتمد على Raspberry Pi يقوم بتوزيع البطاقات تلقائيًا بناءً على عدد اللاعبين المدخل.",
    },
    tags: [
      "Raspberry Pi",
      "Servo Motor",
      "Python",
      "Automation",
      "Mechanics",
      "Study",
    ],
    area: "ROS/Arduino",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588060/IMG_3127_owcwkv.jpg",
    links: {
      code: "https://github.com/wonseola/GitCollabo_Auto_Card_Game/tree/Control_moter",
    },
    mainVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588062/card_gfdsmn.mp4",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588062/card_gfdsmn.mp4",
    body: {
      ko: `라즈베리파이와 서보 모터를 활용해 홀덤 게임용 자동 카드 분배기를 제작했습니다.  

전체 구조를 직접 도면으로 설계한 뒤, 아크릴판과 하드보드지를 이용해 외형을 제작했습니다.  
라즈베리파이에서 Python 코드를 통해 두 개의 MG995 서보모터(360° 회전 가능)를 제어하여  
주축 회전부와 카드 출력부의 움직임을 조정했습니다.  

게임 시작 전, 인원 수를 입력하면 시스템이 해당 인원에 맞게 자동으로 분배 횟수를 계산하고  
GPIO 핀과 PWM 신호를 통해 두 모터를 제어하여 카드를 순서대로 배포합니다.  
세븐 포커 규칙을 바탕으로 코드 로직을 작성했으며, 실제 물리 장치와 연동해 구동을 확인했습니다.`,

      en: `An automated Hold’em card dealer built with Raspberry Pi and servo motors.  

The structure was designed from scratch and fabricated using acrylic and hardboard.  
Two MG995 servo motors (360° rotation) were controlled via Python to manage both the main rotation axis and card output mechanism.  

Before the game starts, the system takes the number of players as input, then automatically calculates the number of distribution cycles.  
Using GPIO and PWM control, it deals cards in order based on the “Seven Poker” rules.  
The software logic and hardware system were fully integrated for smooth, autonomous operation.`,

      tr: `Raspberry Pi ve servo motorlar kullanılarak yapılan otomatik Hold’em kart dağıtıcı.  

Tüm yapı çizimlerle tasarlandı ve akrilik ile mukavvadan üretildi.  
İki adet MG995 servo motor (360° dönebilen) Python kodlarıyla kontrol edilerek ana eksen ve kart çıkış mekanizması yönetildi.  

Oyun başlamadan önce oyuncu sayısı girildiğinde, sistem otomatik olarak dağıtım döngülerini hesaplar  
ve GPIO ile PWM sinyalleri aracılığıyla kartları sırasıyla dağıtır.  
Yazılım mantığı “Seven Poker” kurallarına dayanmaktadır.`,

      ar: `مشروع موزع بطاقات بوكر أوتوماتيكي يعتمد على Raspberry Pi ومحركات مؤازرة.  

تم تصميم الهيكل من البداية وصُنع باستخدام الألواح الأكريليكية والورق المقوى.  
تم التحكم في محركين من نوع MG995 (بزاوية دوران 360 درجة) باستخدام Python لإدارة محور الدوران الرئيسي وآلية إخراج البطاقات.  

قبل بدء اللعبة، يستقبل النظام عدد اللاعبين ويحسب تلقائيًا عدد جولات التوزيع.  
ثم يستخدم إشارات GPIO وPWM لتوزيع البطاقات بالترتيب وفقًا لقواعد “Seven Poker”.`,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588064/IMG_2578_pqrgpd.jpg",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588062/IMG_2591_c7lcrb.jpg",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588062/IMG_2594_yh5x07.jpg",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588062/card_gfdsmn.mp4",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588061/IMG_2743_d5lij0.jpg",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588063/IMG_2745_kyyz6v.jpg",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588060/IMG_3127_owcwkv.jpg",
    ],
  },

  //ros line tracing car
  {
    slug: "line-tracing-car",
    weight: 1,
    title: {
      ko: "ROS 라인트레이싱 로봇",
      en: "ROS Line Tracing Robot",
      tr: "ROS Tabanlı Çizgi Takip Eden Robot",
      ar: "روبوت تتبع الخط باستخدام ROS",
    },
    blurb: {
      ko: "ROS 환경에서 카메라로 검은 선을 인식해 주행하는 자율주행 로봇 프로젝트입니다.",
      en: "A ROS autonomous driving robot that detects and follows black lines using a camera.",
      tr: "Kamera ile siyah çizgileri algılayıp takip eden ROS tabanlı otonom robot projesi.",
      ar: "مشروع روبوت ذاتي القيادة يعتمد على ROS ويستخدم الكاميرا لاكتشاف الخطوط السوداء وتتبعها.",
    },
    tags: ["ROS", "Computer Vision", "Autonomous", "Python", "OpenCV", "Study"],
    area: "ROS/Arduino",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588058/IMG_2335_dixslf.jpg",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588058/car1_rs87nc.mp4",
    links: { code: "", link: "" },
    body: {
      ko: `ROS(Robot Operating System)를 이용해 라인트레이싱 로봇을 구현했습니다.  
웹캠으로 입력된 영상을 처리하여 검은 선을 인식하고,  
선의 위치에 따라 좌·우 바퀴의 속도를 제어하여 주행 경로를 유지했습니다.  

주요 기능은 다음과 같습니다:
- OpenCV를 이용한 라인 인식 및 영상 처리  
- ROS 노드 간 통신을 통한 속도 제어  
- PID 제어를 적용한 부드러운 주행  
- 실시간 디버깅 및 로그 모니터링  

이 프로젝트를 통해 ROS의 노드 구조와 센서–제어 간 통합 방식을 실습했습니다.`,
      en: `Implemented a line-tracing robot using ROS (Robot Operating System).  
The webcam captures video frames, which are processed to detect black lines,  
and wheel speeds are adjusted accordingly to maintain the trajectory.  

Key features:
- Line detection and image processing with OpenCV  
- Motor control through ROS node communication  
- Smooth motion using PID control  
- Real-time logging and debugging  

This project provided hands-on experience in integrating sensor input and motor control using ROS.`,
      tr: `ROS (Robot Operating System) kullanarak çizgi takip eden bir robot geliştirdim.  
Web kamerası ile görüntü alındı, OpenCV ile siyah çizgiler algılandı ve tekerlek hızları buna göre ayarlandı.  

Öne çıkan özellikler:
- OpenCV ile çizgi algılama  
- ROS node'ları aracılığıyla motor kontrolü  
- PID kontrol ile yumuşak hareket  
- Gerçek zamanlı hata ayıklama ve günlükleme`,
      ar: `قمت بتطبيق روبوت لتتبع الخط باستخدام نظام ROS.  
تلتقط الكاميرا الفيديو ويُعالج لاكتشاف الخط الأسود،  
ثم تُضبط سرعات العجلات للحفاظ على المسار.  

الميزات الرئيسية:
- اكتشاف الخط باستخدام OpenCV  
- التحكم في المحركات عبر عقد ROS  
- التحكم السلس باستخدام PID  
- مراقبة وتصحيح الأخطاء في الوقت الحقيقي.`,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588059/IMG_2346_uthh9r.jpg",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588058/car1_rs87nc.mp4",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588060/car2_mb0j9b.mp4",
    ],
  },
  {
    //  피그마
    slug: "figma-designs",
    weight: 1,
    title: {
      ko: "Figma UI",
      en: "Figma UI",
      tr: "Figma UI",
      ar: "Figma",
    },
    blurb: {
      ko: "서비스 런칭 전 UI/UX 프로토타이핑과 컴포넌트 시스템 설계",
      en: "Prototyping and component system design for pre-launch services",
      tr: "Lansman öncesi hizmetler için prototip oluşturma ve bileşen sistemi tasarımı",
      ar: "تصميم النماذج الأولية ونظام المكونات للخدمات قبل الإطلاق",
    },
    tags: ["Figma", "UI/UX", "Design System"],
    area: "Other",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754830/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-11-10_%EC%98%A4%ED%9B%84_2.36.17_cxtezw.png",
    previewVideo: "",
    mainVideo: "",
    body: {
      ko: "사용자 흐름 설계, 와이어프레임 제작, 프로토타입 테스트까지 진행했습니다 🎨",
      en: "Designed user flows, wireframes, and interactive prototypes using Figma.",
      tr: "Kullanıcı akışlarını, tel kafesleri ve etkileşimli prototipleri Figma kullanarak tasarladım 🎨",
      ar: "صممت تدفقات المستخدم والنماذج الهيكلية والنماذج التفاعلية باستخدام Figma 🎨",
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754830/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-11-10_%EC%98%A4%ED%9B%84_2.36.17_cxtezw.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754825/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-11-10_%EC%98%A4%ED%9B%84_2.36.38_zozj1p.png",
    ],
  },

  {
    // IR덱 제안서
    slug: "gov-irdeck",
    weight: 1,
    title: {
      ko: "정부지원사업 IR덱 및 제안서",
      en: "Government Funding IR Deck & Proposal",
      tr: "Hükümet Destek Programı IR Sunumu ve Teklifi",
      ar: "عرض وملف تمويلي حكومي (IR Deck & Proposal)",
    },
    blurb: {
      ko: "정부지원사업을 위한 제안서, 사업계획서, IR 자료 기획 및 디자인",
      en: "Planned and designed proposals and IR decks for startup funding programs",
      tr: "Devlet destek programları için teklif ve yatırım sunumu (IR deck) hazırlayıp tasarladım",
      ar: "قمت بتخطيط وتصميم المقترحات وعروض المستثمرين (IR Deck) لبرامج التمويل الحكومية",
    },
    tags: ["IR Deck", "Proposal", "Branding", "Design"],
    area: "Other",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754855/06_wqwmbh.png",
    previewVideo: "",
    mainVideo: "",
    body: {
      ko: "사업 개요 정리부터 시각자료 구성, 발표용 IR 슬라이드 제작까지 담당했습니다 💼",
      en: "Handled overall planning, visual design, and pitch deck creation for funding presentations.",
      tr: "Proje planlamasından sunum tasarımına ve IR slaytlarının hazırlanmasına kadar tüm süreci yönettim 💼",
      ar: "تولّيت التخطيط العام وتصميم العروض وإنشاء شرائح العرض التقديمي للتمويل 💼",
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754867/05_xhmast.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754860/07_orx5mr.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754849/02_mak3vh.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754842/03_jxefob.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762754836/01_a8xdj0.png",
    ],
  },
  //arduino study
  {
    slug: "arduino",
    weight: 0,
    title: {
      ko: "Arduino Study",
      en: "Arduino Study",
      tr: "Arduino Çalışması",
      ar: "دراسة أردوينو",
    },
    blurb: {
      ko: "아두이노를 배우며 진행한 프로젝트와 실습 기록 모음.",
      en: "Collection of Arduino projects and exercises.",
      tr: "Arduino projeleri ve alıştırmalarının koleksiyonu.",
      ar: "مجموعة من مشاريع وتمارين أردوينو.",
    },
    tags: ["Arduino", "Electronics", "DIY", "Programming", "Study"],
    area: "ROS/Arduino",
    status: "Complete",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588052/123_orsdvo.gif",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588054/3_rf8ozg.mp4",
    links: {
      code: "https://github.com/wonseola/study_arduino",
    },
    body: {
      ko: `
아두이노를 활용해 다양한 하드웨어 컴포넌트를 제어하고 실험한 기록입니다.
기초 회로부터 센서, 모터, LED, 버튼, 피에조 부저 등 여러 요소를 다뤘으며,
직접 배선을 구성하고 디지털/아날로그 입출력, 저항 계산, 디바운싱 처리 등을 학습했습니다.

시리얼 모니터와 PuTTY 로그를 통해 데이터 통신 과정을 확인하고,
타이머 기반 제어와 서보모터 각도 제어 등 다양한 실습을 진행했습니다.
또한 Python을 이용해 아두이노와 시리얼 통신을 구현하고,
얼굴 인식(OpenCV 기반)이 감지되면 모터가 자동으로 회전하는 시스템을 구성했습니다.

이를 통해 하드웨어 제어와 소프트웨어 비전 기술을 결합한 통합 제어의 기초를 경험했습니다.
작은 실험들의 연속이지만, 아두이노 프로그래밍과 하드웨어 제어의 기초를 단단히 다지는 과정이었습니다.
`,
      en: `
A collection of experiments exploring various Arduino components and control methods.
I worked with sensors, motors, LEDs, buttons, piezo buzzers, and resistors —
building circuits, handling digital and analog I/O, calculating resistances, and implementing debouncing logic.

Using the serial monitor and PuTTY logs, I observed communication between the board and the computer,
and implemented timer actions and servo motor control.

In addition, I integrated Arduino with Python via serial communication,
creating a system where a motor automatically rotates when face recognition (based on OpenCV) detects a person.

This experiment combined hardware control with computer vision, introducing me to real-world embedded interaction.
Although composed of small exercises, this project helped solidify my understanding of Arduino programming and hardware integration.
      `,
      tr: `
Farklı Arduino bileşenlerini ve kontrol yöntemlerini deneyerek oluşturduğum bir çalışma serisidir.

Sensörler, motorlar, LED’ler, butonlar, piezo buzzer’lar ve dirençlerle çalıştım;
devreler kurarak dijital/analog giriş çıkışlarını yönettim, direnç hesaplamaları ve debouncing uygulamaları yaptım.

Seri monitör ve PuTTY loglarıyla veri iletişimini gözlemledim,
zamanlayıcılar ve servo motor kontrolü üzerinde çeşitli denemeler yaptım.
Ayrıca Arduino ile Python arasında seri iletişim kurarak,
OpenCV tabanlı yüz tanıma algılandığında motorun otomatik olarak dönmesini sağlayan bir sistem geliştirdim.

Bu sayede donanım kontrolünü yazılım tabanlı görsel algılama ile birleştirme deneyimi kazandım.
Küçük deneylerden oluşsa da, Arduino programlama ve donanım etkileşimi konusundaki temelimi güçlendiren bir süreçti.
`,
      ar: `
مجموعة من التجارب التي تستكشف مكونات وتحكمات مختلفة باستخدام Arduino.
عملت على المستشعرات، المحركات، مصابيح LED، الأزرار، صفارات الإنذار، والمقاومات —
بناء الدوائر، التعامل مع المدخلات والمخرجات الرقمية والتناظرية، وحساب المقاومات وتنفيذ معالجة الاهتزاز (debouncing).

استخدمت شاشة السيريال وPuTTY لمراقبة الاتصال بين اللوحة والحاسوب،
وطبقت تحكمات تعتمد على المؤقت ومحركات السيرفو.

كما قمت بدمج Arduino مع Python عبر الاتصال التسلسلي،
لبناء نظام يقوم بتشغيل المحرك تلقائياً عند اكتشاف الوجه باستخدام تقنية OpenCV.

هذا المشروع جمع بين التحكم في الأجهزة والرؤية الحاسوبية، مما وفر تجربة عملية في التفاعل المدمج بين البرمجيات والأجهزة.
رغم أن المشروع يتكوّن من تجارب صغيرة، إلا أنه ساعدني على ترسيخ فهمي لبرمجة Arduino والتكامل مع التقنيات البرمجية. `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588053/33_fonohb.jpg",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588052/22_w2qcqn.gif",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588054/3_rf8ozg.mp4",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588053/1_qdwwaw.mp4",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588054/2_mdi9xx.mp4",
    ],
  },

  //unity
  {
    slug: "unity-basics",
    weight: 0,
    title: {
      ko: "Unity Basics",
      en: "Unity Basics",
      tr: "Unity Temelleri",
      ar: "أساسيات Unity",
    },
    blurb: {
      ko: "Unity와 C#를 활용한 기초 실습 프로젝트입니다.",
      en: "A basic Unity project for practicing with C#.",
      tr: "C# ile pratik yapmak için temel Unity projesi.",
      ar: "مشروع Unity أساسي للتدرب على C#.",
    },
    tags: ["Unity", "C#", "Study"],
    area: "Other",
    status: "Study",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588122/3_qh1yeu.jpg",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588120/2_atvftn.mp4",
    mainVideo: "",
    body: {
      ko: `
Unity와 C#를 활용한 기초 실습 프로젝트입니다.
- 오브젝트 생성 및 간단한 조작
- 장애물 피하기 게임 구현
- Unity 엔진 기본 이해
    `,
      en: `
Basic Unity practice project using C#.
- Creating and manipulating objects
- Simple obstacle avoidance game
- Understanding Unity engine fundamentals
    `,
      tr: `
C# kullanılarak yapılan temel Unity uygulama projesi.
- Nesne oluşturma ve basit kontroller
- Engellerden kaçınma oyunu
- Unity motorunun temellerini anlama
    `,
      ar: `
مشروع تدريب أساسي على Unity باستخدام C#.
- إنشاء وتحرير الكائنات
- لعبة تجنب العقبات البسيطة
- فهم أساسيات محرك Unity
    `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588123/1_hsxjgl.mp4",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588120/2_atvftn.mp4",
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588120/5_ifqtcd.mp4",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588120/4_m662vp.png",
    ],
  },
  //mediapipe
  {
    slug: "mediapipe-sign-language",
    weight: 0,
    title: {
      ko: "Mediapipe",
      en: "Mediapipe",
      tr: "Mediapipe",
      ar: "Mediapipe",
    },
    blurb: {
      ko: "Mediapipe, TensorFlow, Numpy를 활용한 손 인식 실습",
      en: "A hand gesture recognition practice project using Mediapipe, TensorFlow, and Numpy.",
      tr: "Mediapipe, TensorFlow ve Numpy kullanarak el hareketleri tanıma deneme projesi.",
      ar: "مشروع تدريبي للتعرف على إيماءات اليد باستخدام Mediapipe وTensorFlow وNumpy.",
    },
    tags: ["Python", "Mediapipe", "TensorFlow", "Numpy", "Study"],
    area: "Other",
    status: "Study",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588113/hand_p_xaqqss.jpg",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588115/IMG_2952_snlyl9.mov",
    mainVideo: "",
    body: {
      ko: `
Mediapipe와 TensorFlow, Numpy를 활용하여 손 인식을 연습한 프로젝트입니다.
- 손 동작 추적 및 실습
- 수어(Sign Language) 번역 시뮬레이션
- ML 모델 학습 및 데이터 전처리 실습
    `,
      en: `
A practice project for hand gesture recognition using Mediapipe, TensorFlow, and Numpy.
- Hand motion tracking and experiments
- Simulated Sign Language translation
- ML model training and data preprocessing practice
    `,
      tr: `
Mediapipe, TensorFlow ve Numpy kullanarak el hareketlerini tanıma deneme projesi.
- El hareketlerini izleme ve deneme
- İşaret dili çeviri simülasyonu
- ML modeli eğitimi ve veri ön işleme denemesi
    `,
      ar: `
مشروع تدريبي للتعرف على إيماءات اليد باستخدام Mediapipe وTensorFlow وNumpy.
- تتبع حركة اليد والتجارب
- محاكاة ترجمة لغة الإشارة
- تدريب نموذج ML وتجربة معالجة البيانات
    `,
    },
    gallery: [
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588115/IMG_2952_snlyl9.mov",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588113/hand_eng_nfqmwz.png",
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588111/mediapipe_hand_num_jmgrsx.png",
    ],
  },
];
