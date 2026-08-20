export type LocalizedString = {
  [langCode: string]: string; // ex: 'en', 'ko', 'ja', 'ar'
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
  /** public/logo/ 안의 정사각 로고·파비콘 파일명 (예: "dangseon.png").
      없으면 data/projectIcons.ts의 lucide 아이콘으로 떨어진다. */
  logo?: string;
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
  //   title: { ko: "", en: "", ja: "", ar: "" },
  //   blurb: { ko: "", en: "", ja: "", ar: "" },
  //   tags: [],
  //   area: "Other",
  //   status: "Complete",
  //   thumb: "",
  //   previewVideo: "",
  //   mainVideo: "",
  //   body: { ko: "", en: "", ja: "", ar: "" },
  //   gallery: [],
  // },

  //메렌 로묘 발판 도우미
  {
    slug: "maple-step",
    logo: "maple-step.png",
    weight: 2,
    title: {
      ko: "메렌 로묘 발판 도우미",
      en: "Maple Romeo Helper",
      ja: "Maple Romeo ヘルパー",
      ar: "مساعد Maple Romeo",
    },
    blurb: {
      ko: "메이플랜드 로미오·줄리엣 파퀘의 발판 단계를 4명이 같은 화면에서 맞추는 실시간 도우미. 방 코드 4자리만 공유하면 끝.",
      en: "A realtime helper that lets a 4-player MapleLand party sync their platform picks on one shared board. Share a 4-digit room code and go.",
      ja: "MapleLandのロミオとジュリエットPQの足場ステージを、4人が同じ画面で同期できるリアルタイム補助ツール。4桁のルームコードを共有するだけです。",
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
      ko: "기획 · 디자인 · 개발 · 배포 · 운영",
      en: "Planning · Design · Development · Deploy · Ops",
      ja: "企画 · デザイン · 開発 · デプロイ · 運用",
      ar: "التخطيط والتصميم والتطوير والنشر والتشغيل",
    },
    thumb: "media/maple-04-board.webp",
    links: { link: "https://maple-help.xyz" },
    metrics: [
      {
        value: "4",
        label: { ko: "명 실시간 동시 접속", en: "realtime players", ja: "リアルタイム参加者", ar: "لاعبون متزامنون" },
      },
      {
        value: "10",
        label: { ko: "층 발판 보드", en: "floor board", ja: "階分の足場ボード", ar: "طوابق في اللوحة" },
      },
      {
        value: "#0000",
        label: { ko: "4자리 방 코드로 입장", en: "4-digit room code", ja: "4桁のルームコード", ar: "رمز غرفة من 4 أرقام" },
      },
      {
        value: "FREE",
        label: { ko: "무료 팬메이드", en: "free fan-made tool", ja: "無料ファンメイド", ar: "أداة مجانية" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", ja: "フロントエンド", ar: "الواجهة الأمامية" },
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript", "TailwindCSS v4", "Turbopack"],
      },
      {
        group: { ko: "실시간 · 데이터", en: "Realtime & Data", ja: "リアルタイム・データ", ar: "الزمن الحقيقي والبيانات" },
        items: ["Supabase Realtime Channel", "Supabase Postgres", "Drizzle ORM", "Route Handlers"],
      },
      {
        group: { ko: "인프라 · 운영", en: "Infra & Ops", ja: "インフラ・運用", ar: "البنية والتشغيل" },
        items: ["Cloudflare (vinext · D1 · Wrangler)", "인라인 콘텐츠 에디터", "관리자 페이지"],
      },
      {
        group: { ko: "그로스", en: "Growth", ja: "グロース", ar: "النمو" },
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
      ja: `💡 MapleLand「ロミオとジュリエット」パーティークエストの**足場ステージ**向けリアルタイム補助ツールです。
このステージは4人がそれぞれ違う番号（1〜4）を踏むと早く終わりますが、実際のプレイ中はパーティーチャットが戦闘や報酬の話で流れて、「誰が何番を踏んだっけ？」を何度も確認することになります。その混乱だけをなくすために作りました。

🔗 **4桁のルームコードを共有するだけ。** ホストが部屋を開くと、10階分の足場ボードとアイテム順が参加者全員にリアルタイムで同じように表示されます。ニックネームは任意で、ログインや会員登録はありません。

⚡ Supabase Realtimeチャンネルで足場の選択状態を同期しました。各階で自分が踏んだマスを押すと、すでに選ばれたマスは自動でスキップされます。ボードが一定以上埋まると**ホストだけに**リセットボタンが表示され、すぐ消すのではなく**10秒のカウントダウン**を挟むようにしました。

📄 ツールだけでなく、**攻略コンテンツも一緒に運用**しています。入場条件、全体の進行順、足場のコツ、よくあるミス、報酬情報、FAQを用意し、これらの文章はコードではなく管理画面の**インラインエディタ**で直せます。誤字ひとつのために再デプロイしたくなかったからです。

🔍 SEOは最初から設計に入れました。JSON-LD構造化データ（WebSite / Organization / WebApplication）で検索エンジンに「無料のWebゲーム補助ツール」と理解させ、sitemap、robots、manifest、OG画像もコードで生成します。**実際に提供していない機能は構造化データに入れていません。**

💰 運用費はGoogle AdSenseとKakao AdFitのレスポンシブバナーでまかなっています。`,
      ar: `💡 أداة فورية لمرحلة **المنصات** في مهمة "روميو وجولييت" الجماعية داخل MapleLand.
تنتهي هذه المرحلة أسرع عندما يقف كل من اللاعبين الأربعة على رقم مختلف (1–4)، لكن محادثة الفريق تمتلئ عملياً بالحديث عن القتال والمكافآت فيتكرر السؤال: "من أخذ أي رقم؟" وُجدت هذه الأداة لإزالة هذا الالتباس تحديداً.

🔗 **شارك رمز الغرفة المكوّن من 4 أرقام فقط.** عندما يفتح المضيف غرفة، تظهر لوحة الطوابق العشرة وترتيب العناصر بالشكل نفسه لكل من ينضم وفي الوقت الحقيقي. الاسم المستعار اختياري — لا يوجد تسجيل دخول أو اشتراك إطلاقاً.

⚡ تتم مزامنة الاختيارات عبر قناة Supabase Realtime. يضغط كل لاعب على منصته في كل طابق، وتُتخطى المنصات المحجوزة تلقائياً. وعندما تمتلئ اللوحة بنسبة معينة يظهر زر إعادة التعيين **للمضيف فقط**، ولا يمسح فوراً بل يمنح **عدّاً تنازلياً من 10 ثوانٍ** حتى لا يُفاجأ من كان ينظر إلى الشاشة.

📄 لا أقدّم الأداة وحدها، بل أُشغّل **محتوى الدليل** معها: شروط الدخول، ترتيب المراحل كاملاً، نصائح المنصات، الأخطاء الشائعة، ومعلومات المكافآت، إضافة إلى الأسئلة الشائعة. تُحرَّر هذه النصوص عبر **محرّر مدمج في لوحة الإدارة** وليس في الشيفرة، فلا حاجة لإعادة نشر لتصحيح خطأ مطبعي.

🔍 كان تحسين محركات البحث جزءاً من التصميم منذ البداية: بيانات JSON-LD المهيكلة (WebSite / Organization / WebApplication)، مع توليد sitemap وrobots وmanifest وصور OG برمجياً. **وتعمّدت عدم إدراج ميزات لا يوفرها الموقع فعلاً.**

💰 تُغطى تكاليف التشغيل عبر Google AdSense ولافتة Kakao AdFit المتجاوبة.`,
    },
    gallery: [
      "media/maple-04-board.webp",
      "media/maple-02-room.webp",
      "media/maple-01-home.webp",
    ],
  },

  //도토리사진관
  {
    slug: "ddphoto",
    logo: "ddphoto.png",
    weight: 2,
    title: {
      ko: "도토리사진관",
      en: "Dotori Photo Studio",
      ja: "どんぐり写真館",
      ar: "استوديو دوتوري للصور",
    },
    blurb: {
      ko: "토스 앱 안에서 돌아가는 네컷사진 편집기. 사진 고르고 · 보정하고 · 스티커로 꾸며서 한 장으로 저장.",
      en: "A photo-booth style editor running inside the Toss app. Pick, adjust, decorate with stickers, export as one sheet.",
      ja: "Tossアプリ内で動くフォトブース風エディタ。写真を選び、調整し、ステッカーで飾って1枚のシートとして保存できます。",
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
      ko: "기획 · 디자인 · 개발 · 심사 제출",
      en: "Planning · Design · Development · Store submission",
      ja: "企画 · デザイン · 開発 · 審査提出",
      ar: "التخطيط والتصميم والتطوير وتقديم المراجعة",
    },
    thumb: "media/ddphoto-05-composite.webp",
    metrics: [
      {
        value: "300+",
        label: { ko: "스티커 에셋", en: "sticker assets", ja: "ステッカー素材", ar: "ملصق" },
      },
      {
        value: "6",
        label: { ko: "스티커 카테고리", en: "sticker categories", ja: "ステッカーカテゴリ", ar: "فئات ملصقات" },
      },
      {
        value: "4",
        label: { ko: "단계 편집 플로우", en: "step editing flow", ja: "段階の編集フロー", ar: "خطوات في مسار التحرير" },
      },
      {
        value: "0",
        label: { ko: "서버 업로드 (기기 내 처리)", en: "server uploads (on-device)", ja: "サーバーアップロード（端末内処理）", ar: "رفع للخادم (على الجهاز)" },
      },
    ],
    stack: [
      {
        group: { ko: "앱", en: "App", ja: "アプリ", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 6", "Apps in Toss Web Framework (Granite)", "Phosphor Icons"],
      },
      {
        group: { ko: "에셋 파이프라인", en: "Asset pipeline", ja: "アセットパイプライン", ar: "خط الأصول" },
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
      ja: `💡 Tossアプリの中でそのまま開く**フォトブース風エディタ**です。別アプリのインストールなしで、ミニアプリとして動きます。

🧩 編集フローは4段階です。
- **レイアウト選択** — 何カットの写真にするか選ぶ
- **写真を配置・調整** — ギャラリーから読み込み、各フレーム内で拡大・移動
- **デコレーション** — ステッカーとテキストを重ねる
- **保存** — すべてを1枚の画像に合成して書き出す

🎨 **300点以上のステッカー**を自分で整理し、文言、顔まわり小物、ポイント、アイテム、落書きに分類しました。最近使ったものタブも加えて、6つのタブで表示しています。

☁️ 最初はステッカーをすべてアプリに同梱していましたが、それだとステッカーを1つ追加するたびに審査が必要になります。そこで**原本をSupabase Storage/DBへ移し**、アプリは起動時にカタログを取得する形に変えました。重要なのは、**DBリクエストが失敗したり空で返った場合は、コード内のローカルカタログへ自動フォールバック**することです。通信が不安定でも編集画面が空になりません。

🔐 service roleキーはStorageへの一括アップロードだけに使い、\`VITE_\`や\`NEXT_PUBLIC_\`の接頭辞を付けないことで**バンドルに絶対入らないように**分離しました。カテゴリ再分類やカタログ同期もすべてスクリプト化しています。

📸 写真権限は読み取り専用で要求し、合成処理は端末内で完結します。

🚀 Apps in Tossコンソールへの審査提出まで完了しました。審査要件に合わせて、ブランドアイコンURLと縦横スクリーンショット素材も用意しました。`,
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
      "media/ddphoto-05-composite.webp",
      "media/ddphoto-01-count.webp",
      "media/ddphoto-02-adjust.webp",
      "media/ddphoto-03-decorate.webp",
      "media/ddphoto-04-stickers.webp",
    ],
  },

  //타임 클론
  {
    slug: "toss-time",
    logo: "toss-time.svg",
    weight: 2,
    title: {
      ko: "타임 클론",
      en: "Time Clone",
      ja: "Time Clone",
      ar: "Time Clone",
    },
    blurb: {
      ko: "과거의 나(클론)와 함께 푸는 격자 턴제 퍼즐. 54스테이지 · 6개 언어 · 스킨 뽑기까지 붙인 앱인토스 미니게임.",
      en: "A grid-based turn puzzle you solve together with your past self. 54 stages, 6 languages, and a skin gacha — built as a Toss mini game.",
      ja: "過去の自分（クローン）と一緒に解くグリッド型ターン制パズル。54ステージ、6言語、スキンガチャまで入れたTossミニゲームです。",
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
      ko: "게임 기획 · 엔진 설계 · 레벨 디자인 · 개발",
      en: "Game design · Engine architecture · Level design · Development",
      ja: "ゲーム企画 · エンジン設計 · レベルデザイン · 開発",
      ar: "تصميم اللعبة وبنية المحرك وتصميم المراحل والتطوير",
    },
    thumb: "media/tosstime-01-home.webp",
    metrics: [
      {
        value: "54",
        label: { ko: "스테이지 (튜토리얼 6 + 본편 48)", en: "stages (6 tutorial + 48 main)", ja: "ステージ（6 + 48）", ar: "مرحلة (6 + 48)" },
      },
      {
        value: "6",
        label: { ko: "지원 언어", en: "languages", ja: "対応言語", ar: "لغات" },
      },
      {
        value: "50",
        label: { ko: "수집 스킨 · 12등급", en: "collectible skins · 12 tiers", ja: "収集スキン · 12等級", ar: "شكل · 12 فئة" },
      },
      {
        value: "62→54",
        label: { ko: "검증으로 걸러낸 레벨", en: "levels after verification", ja: "検証後に残したレベル", ar: "مراحل بعد التحقق" },
      },
    ],
    stack: [
      {
        group: { ko: "게임 코어", en: "Game core", ja: "ゲームコア", ar: "نواة اللعبة" },
        items: ["순수 함수 엔진 (React 비의존)", "useReducer 상태 + 언두 스택", "ASCII 맵 레벨 정의", "자동 검증 스크립트"],
      },
      {
        group: { ko: "앱", en: "App", ja: "アプリ", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 8", "순수 CSS (3D·셰이더 없음)", "i18n 6개 언어"],
      },
      {
        group: { ko: "플랫폼 · 수익화", en: "Platform & Monetization", ja: "プラットフォーム・収益化", ar: "المنصة والدخل" },
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
      ja: `💡 **自分の移動記録が次の回でクローンになり、まったく同じように再生されます。** そのクローンがスイッチを踏んでいる間に、自分が開いた扉を通るように解くグリッド型ターン制パズルです。

🧠 **エンジンをReactから完全に分離したことが、このプロジェクトの核です。** ゲームロジックはUIを一切知らない純粋関数なので、ブラウザなしでNode上でもそのまま動きます。これにより**レベル検証の自動化**が可能になりました。

🔍 \`verify\`スクリプトは各レベルの正解ルートを実際のエンジンで再生し、クリア可否とparを確認します。目視ではほぼ見えない設計ミスも静的に検出します。
- 扉が同じグループの**唯一の**スイッチのすぐ隣にある → スイッチを踏んだ本人が同じターンで通れてしまい、クローンの意味がなくなる
- パズル要素をすべて無視して出口まで歩ける → パズルが飾りになる
- マップは違って見えるのに**解答入力が完全に同じ**ステージペア → プレイヤーには同じ面に感じられる

👉 この検証で、**62個あったレベルを54個に整理**しました。4つのステージは扉がスイッチの隣にあるだけでクローンなしに突破でき、3組は見た目を変えたのに解答キー入力が1文字も違いませんでした。**手作業のレビューでは見つけられなかったものです。**

⚖️ 仕様書にないルールは自分で決めて文書化しました。たとえば**待機（wait）アクション**を追加しました。これがないとクローンを先に送れず、「同時に2か所にいる」タイプのパズルが成立しません。**塞がれた移動ではターンを消費しない**のも意図的です。壁にぶつかるだけで時間が進むと、予測が難しくなるからです。

🎨 トーンはやわらかいパステルにしつつ、ひとつだけ硬いルールを置きました。**パズルゲームなので、盤面の情報は必ず明確であること。** 判断基準は「目を半分閉じても危険なマスが分かるか？」です。

🌍 韓国語、英語、日本語、フランス語、スペイン語、アラビア語の6言語に対応し、ブラウザ言語を検知して自動選択します。

🎁 コインでスキンを引く収集要素も入れ、**等級別の確率は画面上でそのまま公開**しています。広告はアダプターパターンで包み、SDK差し替え時に触る場所を2ファイルに絞りました。`,
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
      "media/tosstime-02-play.webp",
      "media/tosstime-06-board.webp",
      "media/tosstime-01-home.webp",
      "media/tosstime-03-gacha.webp",
      "media/tosstime-04-bag.webp",
      "media/tosstime-05-records.webp",
    ],
  },

  //지금화장실
  {
    slug: "nowtoilet",
    logo: "nowtoilet.svg",
    weight: 1,
    title: {
      ko: "지금화장실",
      en: "NowToilet",
      ja: "NowToilet",
      ar: "NowToilet",
    },
    blurb: {
      ko: "지금 내 주변에서 실제로 열려 있는 개방화장실을 찾아주는 앱인토스 미니앱. 공공데이터 5만여 건을 직접 정제했어요.",
      en: "A Toss mini app that finds public restrooms actually open near you right now — built on 50k+ rows of public data I cleaned myself.",
      ja: "今いる場所の近くで、実際に今開いている公衆トイレを探せるTossミニアプリ。5万件以上の公共データを自分で整備しました。",
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
      ko: "기획 · 데이터 파이프라인 · 개발",
      en: "Planning · Data pipeline · Development",
      ja: "企画 · データパイプライン · 開発",
      ar: "التخطيط وخط البيانات والتطوير",
    },
    thumb: "media/toilet-01-list.webp",
    metrics: [
      {
        value: "50K+",
        label: { ko: "공공데이터 화장실", en: "restrooms from open data", ja: "公共データのトイレ", ar: "دورة مياه من البيانات المفتوحة" },
      },
      {
        value: "5",
        label: { ko: "필터 (24시간 · 기저귀 · 장애인 · 비상벨)", en: "filters", ja: "フィルター", ar: "مرشحات" },
      },
      {
        value: "3",
        label: { ko: "단계 바텀시트 스냅 (직접 구현)", en: "hand-built sheet snap points", ja: "手作りのシートスナップ", ar: "نقاط التصاق مبنية يدوياً" },
      },
    ],
    stack: [
      {
        group: { ko: "앱", en: "App", ja: "アプリ", ar: "التطبيق" },
        items: ["React 19", "TypeScript", "Vite 6", "Apps in Toss Web Framework", "Kakao Map SDK", "Lucide Icons"],
      },
      {
        group: { ko: "데이터", en: "Data", ja: "データ", ar: "البيانات" },
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
      ja: `急いでいるときに、**今開いている**トイレを近い順に探せるTossミニアプリです。

- **一番大きな仕事はデータでした。** 韓国の公衆トイレ公共データは2025年2月から座標提供が止まり、住所だけが残りました。住所をKakaoジオコーディングで座標に変換するバッチパイプラインを別途作り、5万件以上を地域や件数単位で分割して処理できるようにしました。
- **開放時間の形式がばらばら。** 文字列を解析して「今開いているか」を判定する専用ロジックを置きました。24時間、ベビーベッド、バリアフリー、非常ベルのフィルターも同じ層につなげています。
- **ボトムシートはライブラリなしで自作。** peek / half / full の3段階スナップをポインタードラッグで実装し、full状態ではスクロールを完全にブラウザへ戻してネイティブの慣性スクロールを活かしました。
- **空画面にしない。** ネットワークやDBが不安定な場合はサンプルデータへフォールバックし、データ出典と「現地状況と異なる場合があります」という注意書きを常に表示します。
- **ユーザーが埋める情報。** 星評価レビューとエラー報告を入れ、公共データが取りこぼす「実際には閉まっている」などの情報を利用者が補完できるようにしました。
- **審査対策。** service roleキーは同期スクリプト専用で、テスト広告IDがバンドルに入るとリジェクトされるため、値がない場合は広告自体を描画しません。`,
      ar: `تطبيق Toss مصغّر يعثر على دورات المياه **المفتوحة الآن** مرتّبة من الأقرب، عند الحاجة الملحّة.

- **العمل الحقيقي كان في البيانات.** توقّفت بيانات دورات المياه العامة في كوريا عن توفير الإحداثيات في فبراير 2025، ولم يبقَ سوى العناوين. بنيت خط معالجة دفعي يحوّل العناوين إلى إحداثيات عبر Kakao، قابلاً للتقسيم حسب المنطقة وعدد السجلات بدل تشغيل أكثر من 50 ألف سجل دفعة واحدة.
- **أوقات العمل تأتي بصيغ شديدة التباين.** كتبت منطقاً مخصّصاً يحلّل هذه النصوص ويقرّر ما إذا كان المكان مفتوحاً الآن، وعليه تُبنى مرشّحات 24 ساعة وتغيير الحفاضات وذوي الإعاقة وجرس الطوارئ.
- **الورقة السفلية مبنية يدوياً بلا مكتبات.** ثلاث نقاط التصاق — peek / half / full — عبر سحب المؤشر، وفي الحالة الكاملة يُعاد التمرير بالكامل إلى المتصفح ليبقى التمرير بالقصور الذاتي الأصلي.
- **لا شاشة فارغة أبداً.** عند عدم استقرار الشبكة أو قاعدة البيانات يتراجع إلى بيانات نموذجية، مع إبقاء مصدر البيانات وتنبيه "قد يختلف الوضع الفعلي" ظاهرين.
- **المستخدمون يسدّون الفجوات.** المراجعات بالنجوم وبلاغات الأخطاء تصحّح ما تغفله البيانات المفتوحة.
- **جاهز لمراجعة المتجر.** مفتاح service role في سكربت المزامنة فقط، ولأن شحن معرّف إعلان تجريبي يعني الرفض، لا يُعرض أي إعلان عند غياب القيمة.`,
    },
    gallery: [
      "media/toilet-01-list.webp",
      "media/toilet-02-filters.webp",
      "media/toilet-03-detail.webp",
      "media/toilet-05-review.webp",
      "media/toilet-06-report.webp",
    ],
  },

  //Life Dash
  {
    slug: "life-dash",
    weight: 1,
    title: {
      ko: "라이프 대시",
      en: "Life Dash",
      ja: "Life Dash",
      ar: "Life Dash",
    },
    blurb: {
      ko: "떨어지는 똥을 피하며 아기부터 유령까지 인생 12단계를 살아내는 원버튼 생존 아케이드. Phaser로 만드는 중.",
      en: "A one-button survival arcade where you dodge falling poop through 12 stages of life — from baby to ghost. Built with Phaser.",
      ja: "落ちてくるうんちを避けながら、赤ちゃんから幽霊まで人生12段階を生き抜くワンボタン生存アーケード。Phaserで制作中です。",
      ar: "لعبة أركيد بزر واحد تتفادى فيها السقوط عبر 12 مرحلة من الحياة — من الرضاعة إلى الشبح.",
    },
    tags: ["Phaser 3", "TypeScript", "Vite", "Vitest", "Game Design", "Pixel Art"],
    area: "Game",
    status: "In Progress",
    period: "2026",
    role: {
      ko: "게임 기획(GDD) · 개발 · 밸런싱 · 에셋 파이프라인",
      en: "Game design (GDD) · Development · Balancing · Asset pipeline",
      ja: "ゲーム企画（GDD）· 開発 · バランス調整 · アセットパイプライン",
      ar: "تصميم اللعبة (GDD) والتطوير والموازنة وخط الأصول",
    },
    thumb: "media/gamelife-02-play.webp",
    metrics: [
      {
        value: "12",
        label: { ko: "인생 스테이지 (기획)", en: "life stages (designed)", ja: "人生ステージ（設計）", ar: "مرحلة حياة (مصمّمة)" },
      },
      {
        value: "9",
        label: { ko: "능력 카드 (데이터로만 정의)", en: "ability cards (data-defined)", ja: "能力カード", ar: "بطاقة قدرة" },
      },
      {
        value: "15s",
        label: { ko: "마다 능력 3택 1", en: "between each 3-card pick", ja: "ごとに3択能力選択", ar: "بين كل اختيار من 3 بطاقات" },
      },
      {
        value: "270×480",
        label: { ko: "논리 해상도 고정", en: "fixed logical resolution", ja: "固定論理解像度", ar: "دقة منطقية ثابتة" },
      },
    ],
    stack: [
      {
        group: { ko: "게임", en: "Game", ja: "ゲーム", ar: "اللعبة" },
        items: ["Phaser 3.90", "TypeScript", "Vite 7", "Vitest", "DOM 기반 HUD"],
      },
      {
        group: { ko: "설계", en: "Architecture", ja: "設計", ar: "البنية" },
        items: ["Phaser 비의존 순수 시스템", "JSON 데이터 주도 밸런싱", "결정론적 RNG", "스폰 디렉터 · 난이도 커브"],
      },
      {
        group: { ko: "에셋 · 테스트", en: "Assets & Testing", ja: "アセット・テスト", ar: "الأصول والاختبار" },
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
      ja: `💡 指一本でキャラクターを動かし、空から落ちてくるものを避けるゲームです。**あえて子どもっぽい題材に人生12段階を重ねたことが、このゲームの個性**です。笑って始まり、後半では少し静かになる落差を狙っています。

📐 コードを書く前に、企画書へ3つの原則を固定しました。
- **死は必ずプレイヤーの責任であること。** 画面外から突然の即死要素は出さず、すべての落下物に着地予告の影を付ける
- **ネタはネタ、感情は真剣に。** プレイ中はコミカルにしても、ステージクリア演出では茶化さない
- **60秒以内に完結する感情。** 1ステージが短編アニメのように感じられること

🧪 **\`src/systems\`フォルダはPhaserをimportしない純粋ロジックです。** そのため、バランスの不変条件をユニットテストで固定できます。たとえば「ギャンブラー能力を3重複しても最小反応時間0.85秒を下回らない」ことをテストで強制しています。能力の組み合わせが増えてもゲームが静かに壊れないための安全装置です。

🎚️ **数値はすべてJSONにあり、コードには置いていません。** 移動速度、ライフ、難易度カーブ、目標値、パターン重みはデータファイルにあり、保存するとすぐホットリロードされます。9種類の能力も\`{target, op, value}\`モディファイアだけで表現し、**新しい能力を追加してもコード修正が不要**です。

📱 縦方向は480論理ピクセルで**固定**しました。この高さ自体が反応時間になるため、端末ごとに変わってはいけないからです。横幅だけ画面比率に合わせて225〜360の間で変化し、広がった分だけ**スポーン密度を比例して上げる**ことで、体感難易度をそろえました。スケールはデバイスピクセル基準で**整数のみ**使います。

🖼️ 元のアートは「ピクセルアート風」に見える高解像度画像で、実際のピクセルグリッドがありませんでした。そこで**論理解像度グリッドへ再量子化するPythonツール**を作り、新しいアートが来たら1コマンドでゲーム解像度へ変換できるようにしました。

🔗 実機テストはCloudflare Quick Tunnelで行いました。トンネル越しでもHMRが生きているので、スマホを持ったまま数値を変えるとすぐ反映されます。

📌 現在は1ステージ「First Steps — Baby」がプレイ可能で、バランス調整中です。`,
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
    gallery: ["media/gamelife-02-play.webp", "media/gamelife-01-title.webp"],
  },

  //portfolio-site
  {
    slug: "portfolio-site",
    weight: 0,
    title: {
      ko: "개인 포트폴리오 사이트",
      en: "Personal Portfolio Site",
      ja: "個人ポートフォリオサイト",
      ar: "موقع محفظة شخصية",
    },
    blurb: {
      ko: "다국어 지원과 반응형 UI를 적용한 개인 포트폴리오 사이트입니다.",
      en: "Personal portfolio site with multi-language support and responsive UI.",
      ja: "多言語対応とレスポンシブUIを備えた個人ポートフォリオサイトです。",
      ar: "موقع محفظة شخصية مع دعم لغات متعددة وتصميم واجهة متجاوبة.",
    },
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "i18n", "RTL"],
    area: "React",
    status: "Active",
    active: true,
    role: {
      ko: "기획 · 디자인 · 개발 · 배포",
      en: "Planning · Design · Development · Deploy",
      ja: "企画 · デザイン · 開発 · デプロイ",
      ar: "تخطيط · تصميم · تطوير · نشر",
    },
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588118/port_at4zcs.png",
    previewVideo: "",
    mainVideo: "",
    links: {
      code: "https://github.com/wonseola/seola-portfolio",
      link: "https://wonseola.xyz",
    },
    metrics: [
      {
        value: "4",
        label: { ko: "지원 언어 (RTL 포함)", en: "languages (incl. RTL)", ja: "対応言語（RTL含む）", ar: "لغات (تشمل RTL)" },
      },
      {
        value: "0",
        label: { ko: "런타임 의존 CMS (전부 타입 데이터)", en: "runtime CMS (all typed data)", ja: "ランタイムCMS依存", ar: "نظام محتوى وقت التشغيل" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", ja: "フロントエンド", ar: "الواجهة الأمامية" },
        items: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "React Router"],
      },
      {
        group: { ko: "구조", en: "Architecture", ja: "構造", ar: "البنية" },
        items: ["타입 안전 다국어 데이터", "에셋 프리로더", "Cloudinary 자동 최적화"],
      },
    ],
    body: {
      ko: `💡 지금 보고 계신 사이트예요 :) 이력서를 PDF로 돌리는 대신, **프로젝트를 실제로 만져볼 수 있는 형태**로 두고 싶어서 만들었습니다.

🌍 **한국어 · 영어 · 일본어 · 아랍어 4개 언어**를 지원합니다. 단순 번역이 아니라 아랍어에서는 정렬 방향까지 바꿔서 RTL로 읽히도록 했어요. 모든 콘텐츠는 언어 코드를 키로 갖는 타입 안전한 데이터로 관리해서, **언어를 빼먹으면 타입 에러가 납니다.**

⚡ 첫 화면 체감 속도에 신경 썼습니다. 로딩 스크린에서 핵심 에셋을 미리 받고, Cloudinary 이미지는 URL을 가로채 f_auto·q_auto·리사이즈 파라미터를 자동으로 붙여 내려받습니다. 이미지와 영상은 전부 lazy 로딩 + 페이드인이라 레이아웃이 튀지 않아요.

🎨 인터랙션은 과하지 않게 넣었습니다. 커서를 따라다니는 글로우, 상태 메시지 글리치 전환, 타이핑 효과, 프로젝트 갤러리 라이트박스 정도예요. 모바일에서는 글리치 스크램블을 끄고 부드러운 페이드만 남겨서 배터리와 가독성을 챙겼습니다.

🦖 콘솔을 열어보시면 뭔가 있을지도 몰라요.`,
      en: `💡 The site you're looking at right now :) I built it because I'd rather hand someone **projects they can actually click through** than a PDF résumé.

🌍 It supports **four languages — Korean, English, Japanese, and Arabic.** Not just translated strings: Arabic flips the text alignment so it reads properly right-to-left. All content is stored as type-safe data keyed by language code, which means **forgetting a locale is a type error**, not a silent blank.

⚡ I cared about perceived load time. Critical assets are prefetched behind the loading screen, and Cloudinary image URLs are intercepted to append f_auto, q_auto, and resize parameters automatically. Every image and video lazy-loads with a fade-in so the layout never jumps.

🎨 The interactions stay on the restrained side: a glow that trails the cursor, a glitch transition on the status line, a typing effect, and a lightbox for project galleries. On mobile the glitch scramble is disabled in favor of a plain fade — better for battery and readability.

🦖 There might be something waiting in the console.`,
      ja: `💡 今見ているこのサイトです :) PDFの履歴書だけではなく、**実際にクリックして触れるプロジェクト**として見せたくて作りました。

🌍 **韓国語、英語、日本語、アラビア語の4言語**に対応しています。単なる翻訳だけでなく、アラビア語ではテキストの向きも変えてRTLで読めるようにしました。すべてのコンテンツは言語コードをキーにした型付きデータで管理しています。

⚡ 初回表示の体感速度にも気を配りました。ローディング画面の裏で重要なアセットを先読みし、Cloudinary画像URLにはf_auto、q_auto、リサイズパラメータを自動で付けます。画像と動画はすべてlazy loading + fade-inなので、レイアウトが跳ねません。

🎨 インタラクションは控えめに入れています。カーソルを追うグロー、ステータスメッセージのグリッチ遷移、タイピング効果、プロジェクトギャラリーのライトボックスくらいです。モバイルではグリッチのスクランブルを切り、読みやすさとバッテリーを優先してフェードだけ残しました。

🦖 コンソールを開くと、何かあるかもしれません。`,
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
    logo: "woodongseol.png",
    weight: 3,
    title: {
      ko: "우리동네 설명회",
      en: "WoodongSeol",
      ja: "WoodongSeol",
      ar: "WoodongSeol",
    },
    blurb: {
      ko: "기업과 개인이 설명회를 등록하고 예약·결제·인증까지 진행할 수 있는 플랫폼입니다.",
      en: "A platform where companies and individuals can host, book, and pay for seminars with authentication.",
      ja: "企業や個人が説明会を登録し、予約・決済・本人認証まで進められるプラットフォームです。",
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
    period: "2025",
    role: {
      ko: "프론트엔드 전담 · 백엔드 1명과 협업",
      en: "Sole frontend developer · paired with one backend developer",
      ja: "フロントエンド専任 · バックエンド開発者1名と協業",
      ar: "مطوّرة الواجهة الأمامية الوحيدة · بالتعاون مع مطوّر خلفية",
    },
    metrics: [
      {
        value: "4",
        label: {
          ko: "연결 플로우 (예약 · 결제 · 인증 · 관리)",
          en: "connected flows (booking · payment · auth · admin)",
          ja: "連携フロー",
          ar: "مسارات مترابطة",
        },
      },
      {
        value: "2",
        label: { ko: "검색엔진 노출 (구글 · 네이버)", en: "search engines indexed", ja: "検索エンジン掲載", ar: "محركات بحث" },
      },
      {
        value: "PortOne",
        label: { ko: "실결제 연동", en: "live payment integration", ja: "実決済連携", ar: "تكامل دفع حقيقي" },
      },
    ],
    stack: [
      {
        group: { ko: "프론트엔드", en: "Frontend", ja: "フロントエンド", ar: "الواجهة الأمامية" },
        items: ["React", "JavaScript", "Styled-Components"],
      },
      {
        group: { ko: "연동 · 배포", en: "Integrations & Deploy", ja: "連携・デプロイ", ar: "التكاملات والنشر" },
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
💡 기업이 설명회를 열고 참가자가 신청까지 한 번에 끝내는 플랫폼입니다. **개인 회원과 기업 회원이 구조부터 분리**돼 있고, 제가 프론트엔드를 전담했어요.

**기업이 쓰는 기능**

- **기업 등록 · 사업자 인증** - 국세청 사업자등록정보 진위확인 API로 사업자번호 · 대표자명 · 개업일자를 검증한 뒤에야 기업 계정이 열립니다
- **설명회 등록** - Quill 에디터로 본문을 쓰고, 임시저장했다가 이어서 작성할 수 있어요
- **신청자 관리** - 회차별 신청 명단을 보고 **엑셀로 내보냅니다**. 현장에서 명단이 필요하다는 요청이 실제로 있었어요
- **사전질문 · 문의 응대** - 참가자가 미리 남긴 질문에 답을 달아둡니다
- **통계** - 설명회별 조회수와 취소 건수를 봅니다

**참가자가 쓰는 기능**

- 관심 분야를 등록해두면 맞는 설명회가 열릴 때 알림을 받습니다
- 찜해둔 설명회를 모아 보고, 신청 · 취소를 직접 합니다
- 궁금한 건 사전질문으로 남겨두면 기업이 답을 달아줍니다
- 커뮤니티에서 후기와 질문을 주고받습니다

🔐 **인증은 붙이는 게 아니라 막는 장치로 설계했습니다.** 사업자 인증을 통과하지 못하면 설명회를 올릴 수 없어요. 아무나 설명회를 등록하면 참가자가 헛걸음하게 되니까, 기업 생성 단계에서 한 번 걸러냅니다.

💰 **결제는 광고 상품에 붙어 있습니다.** 설명회를 더 노출시키고 싶은 기업이 배너 · 라인 · 검색 등 지면을 삽니다. 상품은 세 갈래예요.

- **일일권** - 고른 기간만큼 일수로 계산
- **기간권** - 묶음 단위
- **구독** - 정기 결제

PortOne으로 붙였는데, **결제를 클라이언트에서 끝내지 않습니다.** 먼저 서버에 결제를 사전 등록하고, 끝난 뒤 서버가 다시 검증하는 순서예요. 금액을 프론트에서 만들면 위조할 수 있어서입니다.

🔗 **로그인은 카카오 · 네이버 소셜과 이메일을 함께 씁니다.** 소셜에서 돌아올 때 어떤 유형(개인/기업)으로 가입하려던 건지를 들고 다녀야 해서, 인가 요청 전에 세션에 담아두고 콜백에서 꺼내 씁니다.

📱 **모바일은 반응형이 아니라 화면을 따로 만들었습니다.** 기업이 쓰는 신청자 관리나 결제 화면은 표와 단계가 많아서, 같은 마크업을 좁은 폭에 밀어 넣으면 쓸 수가 없었어요. \`isMobile\`로 기기를 판별해 전용 화면으로 보냅니다.

**관리자 화면**

- **기업 승인 · 반려** - 사업자 인증을 통과해도 관리자가 한 번 더 봅니다
- **게시글 승인 대기** - 커뮤니티 글을 걸러서 공개합니다
- **신고 처리** - 신고된 글과 댓글을 확인하고 조치합니다
- **회원 · 매니저 관리**, **특성화고 등록**, **입시 일정 관리**

**설명회 말고도 들어간 것**

- **커뮤니티** - 후기와 질문을 글·댓글·대댓글·좋아요로 주고받고, 신고 기능이 붙어 있습니다
- **특성화고 정보** - 지역과 관심 분야로 학교를 찾습니다
- **입시 일정 캘린더** - 챙겨야 할 일정을 달력으로 봅니다

🔍 **S3 정적 배포라 SSR이 없어서, 크롤러용 페이지를 따로 만들었습니다.** SPA는 첫 HTML이 비어 있어 검색엔진이 읽을 게 없습니다. 그래서 홈 · 커뮤니티 · 교육 세 경로에 제목과 설명이 들어간 정적 HTML을 두고, **사람이 열면 스크립트가 실제 화면으로 넘기고 크롤러는 그대로 읽게** 했어요. 서버 없이 할 수 있는 선에서의 타협이었습니다.

🚀 AWS S3 정적 배포. 메타데이터를 페이지마다 넣어 구글 · 네이버 노출을 잡았습니다.

🤝 백엔드 개발자 1명과 협업했고, 서비스 구조와 UX는 같이 설계했습니다.
`,
      en: `
💡 A platform where companies run seminars and attendees sign up in one flow. **Individual and company accounts are separated at the structural level**, and I owned the frontend.

**What companies get**

- **Company registration with business verification** - the account only opens after the national tax service API validates the business number, owner name, and start date
- **Seminar authoring** - a Quill editor with drafts you can come back to
- **Applicant management** - per-session rosters, **exported to Excel**, because staff actually needed the list on site
- **Pre-questions and inquiries** - answer what attendees asked before the event
- **Stats** - views and cancellations per seminar

**What attendees get**

- Register your interests and get notified when a matching seminar opens
- Keep a saved list, and sign up or cancel yourself
- Leave pre-questions for the company to answer before the event
- Trade reviews and questions in the community

🔐 **Verification is a gate, not a badge.** You cannot publish a seminar until business verification passes. If anyone could post one, attendees would show up to nothing — so the check sits at company creation.

💰 **Payment rides on ad products.** A company that wants more visibility buys placements: banner, line, search. Three shapes:

- **Day pass** - priced by the number of days selected
- **Duration pass** - fixed bundles
- **Subscription** - recurring

Built on PortOne, and **the payment never completes on the client.** The server registers it first, then verifies it afterward — an amount computed in the browser can be forged.

🔗 **Login is Kakao and Naver social plus email.** The account type you picked has to survive the round trip to the provider, so it's stashed in session before the authorize call and read back in the callback.

📱 **Mobile is a separate set of screens, not a breakpoint.** Applicant tables and the payment steps have too much structure to squeeze into a narrow column, so \`isMobile\` decides which set of views you get.

**Admin**

- **Approve or reject companies** - business verification passes first, then a human looks again
- **Post moderation queue** - community posts are reviewed before they go public
- **Reports** - review and act on reported posts and comments
- **Member and manager management**, **school registry**, **admissions calendar**

**Beyond seminars**

- **Community** - posts, comments, replies, likes, and reporting
- **Vocational school directory** - browse by region and interest
- **Admissions calendar** - the dates you have to keep track of

🔍 **Static hosting on S3 means no SSR, so crawlers get their own pages.** An SPA ships an empty first HTML — there is nothing for a search engine to read. So three routes (home, community, education) have static HTML carrying a real title and description, and **a script forwards human visitors to the app while crawlers read what they were served.** It was the compromise available without a server.

🚀 Static deploy on AWS S3, with per-page metadata for Google and Naver visibility.

🤝 Worked with one backend developer; we designed the service structure and UX together.
`,
      ja: `
💡 企業が説明会を開き、参加者が申し込みまで一度に終えられるプラットフォームです。**個人会員と企業会員は構造から分かれて**おり、フロントエンドを担当しました。

**企業向けの機能**

- **企業登録・事業者認証** - 国税庁の事業者登録情報真偽確認APIで事業者番号・代表者名・開業日を検証してから企業アカウントが開きます
- **説明会の作成** - Quillエディタで本文を書き、下書き保存して続きから書けます
- **申込者管理** - 回次ごとの名簿を確認し、**Excelに書き出します**
- **事前質問・問い合わせ対応** - 参加者が事前に残した質問に回答します
- **統計** - 説明会ごとの閲覧数とキャンセル件数

**参加者向けの機能**

- 関心分野を登録しておくと、合う説明会が開かれたときに通知が届きます
- 気になる説明会をまとめて見て、申し込み・キャンセルを自分で行います
- 気になることは事前質問として残しておくと企業が回答します
- コミュニティで感想や質問をやり取りします

🔐 **認証は飾りではなく門として設計しました。** 事業者認証を通らなければ説明会を掲載できません。誰でも掲載できると参加者が無駄足になるため、企業作成の段階でふるいにかけます。

💰 **決済は広告商品に紐づいています。** 露出を増やしたい企業がバナー・ライン・検索などの枠を購入します。商品は三種類です。

- **日割券** - 選んだ期間の日数で計算
- **期間券** - まとめ単位
- **サブスク** - 定期課金

PortOneで実装し、**決済をクライアントで完結させません。** 先にサーバーへ事前登録し、完了後にサーバーが再検証します。金額をフロントで作ると偽造できるからです。

🔗 **ログインはカカオ・ネイバーのソーシャルとメールです。** どの種別で登録しようとしていたかを往復のあいだ保持する必要があるため、認可リクエスト前にセッションへ入れ、コールバックで取り出します。

📱 **モバイルはレスポンシブではなく画面を別に作りました。** 申込者管理や決済は表と手順が多く、同じマークアップを狭い幅に押し込むと使えなくなるため、\`isMobile\`で振り分けます。

**管理者画面**

- **企業の承認・却下** - 事業者認証を通っても管理者がもう一度確認します
- **投稿の承認待ち** - コミュニティ投稿を確認してから公開します
- **通報対応** - 通報された投稿とコメントを確認して処置します
- **会員・マネージャー管理**、**特性化高校の登録**、**入試日程の管理**

**説明会以外に入っているもの**

- **コミュニティ** - 感想や質問を投稿・コメント・返信・いいねでやり取りし、通報機能もあります
- **特性化高校情報** - 地域と関心分野で学校を探します
- **入試日程カレンダー** - 押さえるべき日程をカレンダーで確認します

🔍 **S3の静的デプロイでSSRがないため、クローラー用のページを別に作りました。** SPAは最初のHTMLが空で、検索エンジンに読むものがありません。そこでホーム・コミュニティ・教育の3経路にタイトルと説明を持つ静的HTMLを置き、**人が開いた場合はスクリプトが実画面へ送り、クローラーはそのまま読む**ようにしました。

🚀 AWS S3で静的デプロイ。ページごとのメタデータでGoogle・Naverの露出を確保しました。

🤝 バックエンド開発者1名と協業し、サービス構造とUXを一緒に設計しました。
`,
      ar: `
💡 منصة تنظّم فيها الشركات ندواتها ويكمل المشاركون التسجيل في مسار واحد. **حسابات الأفراد والشركات منفصلة بنيوياً**، وقد توليت الواجهة الأمامية.

**ما تحصل عليه الشركات**

- **تسجيل الشركة والتحقق من السجل التجاري** - لا يُفتح الحساب إلا بعد التحقق من رقم السجل واسم المالك وتاريخ البدء عبر واجهة هيئة الضرائب
- **إنشاء الندوات** - محرر Quill مع حفظ المسودات
- **إدارة المتقدمين** - قوائم لكل جلسة مع **تصدير إلى Excel**
- **الأسئلة المسبقة والاستفسارات** - الرد على ما يطرحه المشاركون قبل الفعالية
- **إحصاءات** - المشاهدات والإلغاءات لكل ندوة

**ما يحصل عليه المشاركون**

- سجّل اهتماماتك لتصلك إشعارات عند فتح ندوة مناسبة
- احفظ الندوات في قائمة، وسجّل أو ألغِ بنفسك
- اترك أسئلة مسبقة تجيب عنها الشركة قبل الفعالية
- تبادل الانطباعات والأسئلة في المجتمع

🔐 **التحقق بوابة لا شارة.** لا يمكن نشر ندوة قبل اجتياز التحقق من السجل التجاري، وإلا حضر الناس إلى لا شيء.

💰 **الدفع مرتبط بالمنتجات الإعلانية.** تشتري الشركة مساحات: بانر، سطر، بحث. وثلاثة أشكال:

- **تذكرة يومية** - تُحسب بعدد الأيام
- **تذكرة مدة** - باقات ثابتة
- **اشتراك** - دفع دوري

بُني على PortOne، و**لا تكتمل عملية الدفع على العميل**: يسجلها الخادم أولاً ثم يتحقق منها بعد الانتهاء، لأن مبلغاً يُحسب في المتصفح قابل للتزوير.

🔗 **تسجيل الدخول عبر كاكاو ونيفر إضافة إلى البريد.** يُحفظ نوع الحساب في الجلسة قبل طلب التفويض ويُقرأ في الاستدعاء الراجع.

📱 **نسخة الجوال شاشات مستقلة لا نقطة توقف.** جداول المتقدمين وخطوات الدفع أكثر تعقيداً من أن تُحشر في عمود ضيق، فيتكفّل \`isMobile\` بالتوجيه.

**لوحة الإدارة**

- **قبول الشركات أو رفضها** - يمر التحقق من السجل أولاً، ثم يراجع مشرف بشري
- **قائمة انتظار المنشورات** - تُراجع منشورات المجتمع قبل نشرها
- **البلاغات** - مراجعة المنشورات والتعليقات المبلّغ عنها واتخاذ إجراء
- **إدارة الأعضاء والمديرين**، **سجل المدارس**، **تقويم القبول**

**ما وراء الندوات**

- **المجتمع** - منشورات وتعليقات وردود وإعجابات وإبلاغ
- **دليل المدارس المهنية** - التصفح حسب المنطقة والاهتمام
- **تقويم القبول** - المواعيد التي يجب تتبعها

🔍 **الاستضافة الثابتة على S3 تعني غياب العرض من الخادم، فصُنعت صفحات خاصة بالزواحف.** يبدأ تطبيق الصفحة الواحدة بـ HTML فارغ لا تجد فيه محركات البحث ما تقرأه. لذلك تحمل ثلاثة مسارات (الرئيسية، المجتمع، التعليم) صفحات ثابتة بعنوان ووصف حقيقيين، و**يحوّل سكربت الزائر البشري إلى التطبيق بينما تقرأ الزواحف ما وصلها**.

🚀 نشر ثابت على AWS S3، مع بيانات وصفية لكل صفحة لظهور أفضل في جوجل ونيفر.

🤝 تعاونت مع مطوّر خلفية واحد على بنية الخدمة وتجربة المستخدم.
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
    logo: "dangseon.png",
    weight: 3,
    title: {
      ko: "당신의 선택 - 당선",
      en: "Your Choice - Dangseon",
      ja: "あなたの選択 - Dangseon",
      ar: "اختيارك - Dangseon",
    },
    blurb: {
      ko: "실시간 투표와 커뮤니티로 사람들의 선택을 모으는 웹·앱 서비스. Next.js 웹 + Capacitor로 iOS·Android 앱까지 출시.",
      en: "A web and app service that gathers people's choices through realtime polls and community. Next.js web app + shipped to iOS & Android via Capacitor.",
      ja: "リアルタイム投票とコミュニティで人々の選択を集めるWeb・アプリサービス。Next.jsのWebに加え、CapacitorでiOS・Androidアプリまで公開しました。",
      ar: "خدمة ويب وتطبيق تجمع خيارات الناس عبر التصويت الفوري والمجتمع. تطبيق ويب Next.js ونشر على iOS وAndroid عبر Capacitor.",
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
    period: "2026 – 현재",
    role: {
      ko: "기획 · 디자인 · 웹/앱 개발 · 배포 · 운영",
      en: "Planning · Design · Web & app development · Deploy · Live ops",
      ja: "企画 · デザイン · Web/アプリ開発 · デプロイ · 運用",
      ar: "التخطيط والتصميم وتطوير الويب والتطبيق والنشر والتشغيل",
    },
    thumb: "media/dangseon-00-web.webp",
    links: { link: "https://dangseon.com" },
    metrics: [
      {
        value: "3",
        label: { ko: "출시 플랫폼 (웹 · iOS · Android)", en: "shipped platforms", ja: "公開プラットフォーム", ar: "منصات منشورة" },
      },
      {
        value: "7",
        label: {
          ko: "서비스 축 (투표 · 숏픽 · 토너먼트 · 커뮤니티 · 인사이트 · 이벤트 · 랭킹)",
          en: "product pillars",
          ja: "サービス軸",
          ar: "محاور المنتج",
        },
      },
      {
        value: "RLS",
        label: { ko: "DB 레벨 권한 제어", en: "row-level security", ja: "DBレベル権限制御", ar: "أمان على مستوى الصف" },
      },
      {
        value: "24/7",
        label: { ko: "Sentry · Analytics 관측", en: "monitored with Sentry", ja: "Sentryで監視", ar: "مراقبة عبر Sentry" },
      },
    ],
    stack: [
      {
        group: { ko: "웹", en: "Web", ja: "Web", ar: "الويب" },
        items: ["Next.js 16 App Router", "React 19", "React Compiler", "TailwindCSS v4", "Recharts", "Lottie"],
      },
      {
        group: { ko: "백엔드 · 데이터", en: "Backend & Data", ja: "バックエンド・データ", ar: "الخلفية والبيانات" },
        items: ["Supabase Auth", "PostgreSQL + RLS", "Supabase Realtime", "Route Handlers", "Webhooks"],
      },
      {
        group: { ko: "모바일", en: "Mobile", ja: "モバイル", ar: "الموبايل" },
        items: ["Capacitor 8", "Android (com.dangseon.app)", "iOS (com.dangseon.ios)", "FCM 푸시 알림"],
      },
      {
        group: { ko: "운영 · 관측", en: "Ops & Observability", ja: "運用・観測", ar: "التشغيل والمراقبة" },
        items: ["Vercel", "Sentry", "Vercel Analytics · Speed Insights", "Google Analytics", "어드민 대시보드"],
      },
    ],
    body: {
      ko: `운영에서 투표를 올리면 사람들이 참여하고 의견을 나누는 커뮤니티입니다. 투표 하나로 시작해 지금은 **숏픽 · 토너먼트 · 커뮤니티 · AI 인사이트 · 포인트/등급 · 이벤트**까지 붙었습니다. 웹 · iOS · Android 모두 출시해 운영 중이에요.

**서비스에 들어간 것들**
- **숏픽** - 세로로 넘기면서 바로 투표하는 쇼츠형 피드
- **픽 토너먼트** - 이상형 월드컵 방식의 대진과 완주 통계
- **투표 인사이트** - 마감된 투표를 AI가 읽을거리로 바꿔 커뮤니티에 발행 (어드민 콘솔 프로젝트에서 자세히)
- **포인트 · 등급** - 출석·참여·작성으로 SEED부터 FOREST까지 6단계
- **이벤트 · 쿠폰** - 출석체크, 선착순 기프티콘, 포인트 랜덤박스
- **추천인 파트너** - 추천 실적 정산과 전자 서명 약정서
- **알림함 · 공지 모달 · 게스트 모드 · 투표 제안**

**만들면서 신경 쓴 것**
- **웹 하나로 세 플랫폼.** Next.js 16 + React 19를 Vercel에 올리고 Capacitor 8로 감싸 스토어에 출시했습니다. 앱이 dangseon.com을 로드하는 구조라 **웹을 배포하면 앱도 같이 최신**이 됩니다.
- **권한은 앱이 아니라 DB에서.** Supabase RLS로 "누가 무엇을 읽고 쓰는지"를 테이블 정책에 못 박았어요. 클라이언트에서 조건문을 빼먹어도 데이터가 새지 않게 하려는 선택입니다.
- **앱 빌드 우회.** Capacitor는 정적 export가 필요한데 서버 Route Handler가 있어서 그대로는 빌드가 안 됩니다. 빌드 스크립트가 **API 라우트를 임시로 숨기고 export한 뒤 종료 시 원복**하게 만들었어요. 성공하든 실패하든 복구돼서 작업 트리가 더러워지지 않습니다.
- **실시간 · 푸시.** 참여·좋아요·댓글은 Supabase Realtime으로 즉시 반영되고, 푸시는 FCM + firebase-admin으로 서버에서 발송합니다. 결과 카드는 html-to-image로 이미지화해 공유할 수 있어요.
- **관측.** Sentry로 에러를, Vercel Analytics · Speed Insights · GA로 흐름을 봅니다. 가입 전환은 프로필 설정이 끝나는 시점으로 맞췄어요.

[App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · [Google Play](https://play.google.com/store/apps/details?id=com.dangseon.app) · [웹으로 바로가기](https://dangseon.com)`,
      en: `A community built around polls: we publish them, and people vote and talk about the results. It started with a single poll and now carries it now carries **short picks, tournaments, community boards, AI insights, points/tiers, and events**. Shipped and running on web, iOS, and Android.

**What's in the service**
- **Short picks** - a vertical shorts-style feed you vote in directly
- **Pick tournaments** - bracket-style matchups with completion stats
- **Poll insights** - closed polls turned into readable articles by AI and published to the community (see the admin console project)
- **Points & tiers** - six levels from SEED to FOREST, earned by attendance, participation, and posting
- **Events & coupons** - attendance check-ins, first-come gift cards, point random boxes
- **Referral partners** - payout settlement and e-signed agreements
- **Notification inbox, announcement modals, guest mode, poll suggestions**

**What I cared about building it**
- **One web codebase, three platforms.** Next.js 16 + React 19 on Vercel, wrapped with Capacitor 8 for the stores. The app loads dangseon.com, so **deploying the web updates the apps too**.
- **Authorization lives in the database, not the app.** Supabase RLS pins down who can read and write what at the table level - so a forgotten conditional in client code can't leak data.
- **Working around the app build.** Capacitor needs a static export, but server Route Handlers block that. The build script **hides the API routes, exports, and restores them on exit** - on success and failure alike, so the working tree never ends up dirty.
- **Realtime & push.** Votes, likes, and comments propagate instantly over Supabase Realtime; push goes out server-side via FCM + firebase-admin. Result cards render to images with html-to-image for sharing.
- **Observability.** Sentry for errors; Vercel Analytics, Speed Insights, and GA for flow. Signup conversion is measured when profile setup completes, not before.

[App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · [Google Play](https://play.google.com/store/apps/details?id=com.dangseon.app) · [Open the web app](https://dangseon.com)`,
      ja: `運営が投票を出し、ユーザーが参加して意見を交わすコミュニティです。ひとつの投票から始まり、今は今は**ショートピック、トーナメント、コミュニティ、AIインサイト、ポイント/等級、イベント**まで広がりました。Web、iOS、Androidで公開・運用中です。

**サービスに入っているもの**
- **ショートピック** - 縦にめくりながらすぐ投票できるショート動画風フィード
- **ピックトーナメント** - 理想型ワールドカップ形式の対戦と完走統計
- **投票インサイト** - 終了した投票をAIが読み物に変換してコミュニティへ公開（詳しくは管理コンソールプロジェクト）
- **ポイント・等級** - 出席、参加、投稿でSEEDからFORESTまで6段階
- **イベント・クーポン** - 出席チェック、先着ギフト券、ポイントランダムボックス
- **紹介パートナー** - 紹介実績の精算と電子署名契約書
- **通知ボックス、告知モーダル、ゲストモード、投票提案**

**作るときに重視したこと**
- **ひとつのWebコードベースで3プラットフォーム。** Next.js 16 + React 19をVercelに載せ、Capacitor 8で包んでストア公開しました。アプリはdangseon.comを読み込む構造なので、**Webをデプロイするとアプリ側も最新**になります。
- **権限はアプリではなくDBで。** Supabase RLSで「誰が何を読めて書けるか」をテーブルポリシーに固定しました。クライアント側の条件分岐を忘れてもデータが漏れないようにするためです。
- **アプリビルドの迂回。** Capacitorは静的exportが必要ですが、サーバーRoute Handlerがあるとそのままではビルドできません。ビルドスクリプトが**APIルートを一時的に隠し、export後に終了時復元**するようにしました。成功しても失敗しても作業ツリーが汚れません。
- **リアルタイム・プッシュ。** 投票、いいね、コメントはSupabase Realtimeで即時反映し、プッシュはFCM + firebase-adminでサーバーから送ります。結果カードはhtml-to-imageで画像化して共有できます。
- **観測。** エラーはSentry、利用の流れはVercel Analytics、Speed Insights、GAで見ています。登録コンバージョンはプロフィール設定が完了した時点に合わせました。

[App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · [Google Play](https://play.google.com/store/apps/details?id=com.dangseon.app) · [Webで開く](https://dangseon.com)`,
      ar: `مجتمع يقوم على الاستطلاعات: ننشرها، ويصوّت الناس ويتحدثون عن النتائج. بدأت باستطلاع واحد، وتضم اليوم وتضم اليوم **اختيارات سريعة وبطولات ولوحات مجتمع ورؤى بالذكاء الاصطناعي ونقاطاً ومستويات وفعاليات**. منشورة وتعمل على الويب وiOS وAndroid.

**ما تحتويه الخدمة**
- **الاختيارات السريعة** - تدفّق رأسي على غرار الفيديوهات القصيرة تصوّت فيه مباشرة
- **بطولات الاختيار** - مواجهات على شكل أقواس مع إحصاءات الإكمال
- **رؤى الاستطلاعات** - تحويل الاستطلاعات المنتهية إلى مقالات يكتبها الذكاء الاصطناعي وتُنشر في المجتمع (انظر مشروع لوحة الإدارة)
- **النقاط والمستويات** - ست مراتب من SEED إلى FOREST عبر الحضور والمشاركة والنشر
- **الفعاليات والقسائم** - تسجيل الحضور وبطاقات هدايا لأول المشاركين وصناديق نقاط عشوائية
- **شركاء الإحالة** - تسوية المستحقات واتفاقيات موقّعة إلكترونياً
- **صندوق الإشعارات ونوافذ الإعلانات ووضع الضيف واقتراح الاستطلاعات**

**ما اهتممت به أثناء البناء**
- **قاعدة شيفرة ويب واحدة لثلاث منصات.** Next.js 16 و React 19 على Vercel، مغلّفة بـ Capacitor 8 للمتاجر. ولأن التطبيق يحمّل dangseon.com فإن **نشر الويب يحدّث التطبيقات أيضاً**.
- **الصلاحيات في قاعدة البيانات لا في التطبيق.** تثبّت سياسات Supabase RLS من يقرأ ومن يكتب ماذا على مستوى الجدول، فلا يتسبب شرط منسي في العميل بتسريب البيانات.
- **الالتفاف حول بناء التطبيق.** يتطلب Capacitor تصديراً ثابتاً بينما تمنعه Route Handlers على الخادم. لذا **يخفي سكربت البناء مسارات الـ API ثم يصدّر ويستعيدها عند الخروج** - في النجاح والفشل معاً، فلا تتّسخ شجرة العمل.
- **الزمن الحقيقي والإشعارات.** تنتشر الأصوات والإعجابات والتعليقات فوراً عبر Supabase Realtime، وتُرسل الإشعارات من الخادم عبر FCM و firebase-admin.
- **المراقبة.** Sentry للأخطاء، و Vercel Analytics و Speed Insights و GA لتتبّع الاستخدام.

[App Store](https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%84%A0%ED%83%9D-dangseon/id6762179353) · [Google Play](https://play.google.com/store/apps/details?id=com.dangseon.app) · [افتح نسخة الويب](https://dangseon.com)`,
    },
    gallery: [
      "media/dangseon-01-home.webp",
      "media/dangseon-02-vote-detail.webp",
      "media/dangseon-08-shortpick.webp",
      "media/dangseon-06-worldcup.webp",
      "media/dangseon-05-insight-detail.webp",
      "media/dangseon-04-insight-list.webp",
      "media/dangseon-03-community.webp",
      "media/dangseon-09-rank.webp",
      "media/dangseon-10-events.webp",
    ],
  },

  //dangseon admin console
  {
    slug: "dangseon-admin",
    logo: "dangseon.png",
    weight: 2,
    title: {
      ko: "당선 어드민 콘솔 - AI 운영 파이프라인",
      en: "Dangseon Admin Console - AI Ops Pipeline",
      ja: "Dangseon管理コンソール - AI運用パイプライン",
      ar: "لوحة إدارة Dangseon - خط تشغيل بالذكاء الاصطناعي",
    },
    blurb: {
      ko: "투표 서비스 운영을 위해 만든 관리자 콘솔. 뉴스에서 투표 초안을 만들고, 마감된 투표를 읽을거리로 바꾸는 AI 파이프라인 두 개가 크론으로 돌아갑니다.",
      en: "The admin console I built to run the voting service. Two AI pipelines run on cron: one drafts polls from the news, the other turns closed polls into readable articles.",
      ja: "投票サービスの運用のために作った管理コンソール。ニュースから投票草案を作るAIと、終了した投票を読み物に変えるAIの2つのパイプラインがcronで動きます。",
      ar: "لوحة الإدارة التي بنيتها لتشغيل خدمة التصويت. خطّان بالذكاء الاصطناعي يعملان عبر cron: أحدهما يصوغ استطلاعات من الأخبار، والآخر يحوّل الاستطلاعات المنتهية إلى مقالات.",
    },
    tags: [
      "Next.js 16",
      "AI",
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
    period: "2026 – 현재",
    role: {
      ko: "설계 · 개발 · 운영",
      en: "Design · Development · Operations",
      ja: "設計 · 開発 · 運用",
      ar: "التصميم والتطوير والتشغيل",
    },
    links: { link: "https://dangseon.com" },
    thumb: "media/dangseon-admin-01-aipolls.webp",
    galleryLayout: "wide",
    gallery: [
      "media/dangseon-admin-01-aipolls.webp",
      "media/dangseon-admin-02-insight.webp",
      "media/dangseon-admin-03-coupons.webp",
      "media/dangseon-admin-04-events.webp",
      "media/dangseon-admin-05-overview.webp",
    ],
    metrics: [
      {
        value: "20+",
        label: { ko: "운영 화면", en: "admin screens", ja: "運用画面", ar: "شاشات إدارية" },
      },
      {
        value: "2",
        label: {
          ko: "AI 파이프라인 (투표 초안 · 결과 인사이트)",
          en: "AI pipelines",
          ja: "AIパイプライン",
          ar: "خطوط ذكاء اصطناعي",
        },
      },
      {
        value: "3",
        label: { ko: "Vercel Cron 자동 실행", en: "scheduled cron jobs", ja: "定期cronジョブ", ar: "مهام cron مجدولة" },
      },
      {
        value: "2단계",
        label: {
          ko: "관리자 인증 (middleware + admins 테이블)",
          en: "layers of admin auth",
          ja: "管理者認証レイヤー",
          ar: "طبقتا تحقّق للمشرف",
        },
      },
    ],
    stack: [
      {
        group: { ko: "콘솔", en: "Console", ja: "コンソール", ar: "اللوحة" },
        items: ["Next.js 16 App Router", "React 19", "TailwindCSS v4", "Recharts", "Phosphor Icons"],
      },
      {
        group: { ko: "AI", en: "AI", ja: "AI", ar: "الذكاء الاصطناعي" },
        items: ["OpenAI Responses API", "JSON Schema strict 모드", "이미지 생성 모델", "RSS 수집·정규화", "프롬프트 가드레일"],
      },
      {
        group: { ko: "자동화 · 연동", en: "Automation & Integrations", ja: "自動化・連携", ar: "الأتمتة والتكاملات" },
        items: ["Vercel Cron", "Slack Webhook", "FCM 예약 발송", "기프티쇼 API", "Supabase Storage"],
      },
      {
        group: { ko: "보안", en: "Security", ja: "セキュリティ", ar: "الأمان" },
        items: ["middleware + admins 테이블", "CRON_SECRET Bearer", "service role 서버 전용", "Supabase RLS"],
      },
    ],
    body: {
      ko: `[당신의 선택](https://dangseon.com) 운영을 위해 만든 관리자 콘솔입니다. 투표 등록부터 신고 처리, 알림 발송, 정산까지 20개가 넘는 화면이 하나의 사이드바 아래 묶여 있어요.

**AI 파이프라인 ① - 뉴스에서 투표 초안 만들기**
- 구글 뉴스 RSS 5개에서 기사 후보를 모아 중복을 걷어냅니다.
- OpenAI Responses API에 **JSON Schema strict 모드**로 요청해서 제목 · 설명 · 선택지 · 카테고리 · 푸시 문구 · 이미지 프롬프트를 한 번에 구조화해 받아요. 형식이 어긋난 응답이 애초에 나오지 않게 하려는 선택입니다.
- 최근 3일 초안 제목을 프롬프트에 같이 넣어 **같은 주제가 반복되지 않게** 막았어요.
- 초안마다 이미지 모델로 4:5 썸네일을 생성해 Supabase Storage에 올립니다. 실존 인물 묘사 · 언론사 로고 · 워터마크는 프롬프트에서 금지했습니다.
- 생성이 끝나면 **Slack으로 알림**이 가고, 운영자가 어드민에서 확인하고 승인해야 실제 투표로 발행됩니다. **AI가 바로 게시하지 않는 구조**예요.
- 오전 8시 · 오후 2시(KST)에 Vercel Cron으로 자동 실행됩니다.

**AI 파이프라인 ② - 마감된 투표를 읽을거리로**
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
- Overview 대시보드 - 지표를 **count 쿼리로만** 집계해서 전체 row를 내려받지 않습니다.

**권한과 안전장치**
- 관리자 판별은 **middleware와 \`admins\` 테이블 두 곳**에서 확인합니다.
- 크론 엔드포인트는 \`CRON_SECRET\` Bearer 토큰으로 막았어요.
- service role 키 · OpenAI 키 · Slack 웹훅은 전부 서버 Route Handler 안에서만 씁니다.
- 푸시는 **밤에 울리지 않게** 07~22시 밖이면 다음 날 아침으로 자동으로 밀립니다.`,
      en: `The admin console I built to run [Dangseon](https://dangseon.com) - over 20 screens under one sidebar, from creating polls to handling reports, sending notifications, and settling partner payouts.

**AI pipeline ① - drafting polls from the news**
- Collects article candidates from five Google News RSS feeds and dedupes them.
- Calls the OpenAI Responses API in **JSON Schema strict mode**, getting title, description, options, category, push copy, and image prompt back as one structured payload - so a malformed response can't happen in the first place.
- Feeds the last three days of draft titles into the prompt so **the same topic doesn't come around again**.
- Generates a 4:5 thumbnail per draft with an image model and uploads it to Supabase Storage. Real-person likeness, media logos, and watermarks are forbidden in the prompt.
- When generation finishes a **Slack notification** goes out, and an operator has to review and approve in the admin before anything publishes. **The AI never posts directly.**
- Runs automatically at 8am and 2pm KST via Vercel Cron.

**AI pipeline ② - turning closed polls into articles**
- Aggregates responses from closed polls by **age, gender, and region**, paginating 1,000 rows at a time to cover the whole set.
- On that basis the AI writes a title, summary, body, and key takeaways, published as a community insight post.
- The prompt pins down rules like **"never introduce statistics that aren't in the data", "don't draw conclusions from segments under 20 respondents", and "don't take a side"** - invented numbers or a slanted read are the biggest risks here.
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
- Push sends are held back so **nothing buzzes at night** - outside 07:00–22:00 they roll to the next morning.`,
      ja: `[Dangseon](https://dangseon.com)の運用のために作った管理コンソールです。投票作成から通報処理、通知送信、精算まで、20以上の画面をひとつのサイドバー配下にまとめています。

**AIパイプライン① - ニュースから投票草案を作る**
- 5つのGoogle News RSSから記事候補を集め、重複を取り除きます。
- OpenAI Responses APIを**JSON Schema strictモード**で呼び、タイトル、説明、選択肢、カテゴリ、プッシュ文言、画像プロンプトをひとつの構造化レスポンスとして受け取ります。形式が崩れた応答がそもそも出ないようにするためです。
- 直近3日間の草案タイトルをプロンプトに入れ、**同じ話題が繰り返されないように**しました。
- 各草案ごとに画像モデルで4:5のサムネイルを生成し、Supabase Storageへアップロードします。実在人物の描写、メディアロゴ、ウォーターマークはプロンプトで禁止しました。
- 生成が終わると**Slack通知**が飛び、運用者が管理画面で確認・承認して初めて実際の投票として公開されます。**AIが直接投稿しない構造**です。
- 午前8時・午後2時（KST）にVercel Cronで自動実行されます。

**AIパイプライン② - 終了した投票を読み物にする**
- 終了した投票の回答を**年齢、性別、地域**ごとに集計します。1,000件ずつページネーションして全体を走査します。
- この統計をもとに、AIがタイトル、要約、本文、重要ポイントを書き、コミュニティのインサイト記事として公開します。
- プロンプトには**「データにない外部統計は絶対に入れない」「標本20人未満の区間は断定しない」「特定の立場を支持しない」**といったルールを固定しました。数字を作ったり、片側に寄った記事になることが一番大きなリスクだからです。
- 統計用語ではなく「10人中9人」のように書かせ、**本文の60%は論点の文脈、40%だけを統計解釈**に使うよう比率も指定しました。

**運用機能**
- 会員管理、プロフィール変更承認、制裁・ペナルティ状況
- 通報処理（投票コメント、コミュニティ投稿/コメント）
- バナー、告知、プッシュ送信と予約
- イベント、クーポン、ギフティショー連携（ビズマネー残高と商品照会）
- 紹介パートナー精算と電子署名契約書
- Overviewダッシュボード - 指標は**countクエリのみ**で集計し、全rowを取得しません。

**権限と安全装置**
- 管理者判定は**middlewareと\`admins\`テーブルの2か所**で確認します。
- cronエンドポイントは\`CRON_SECRET\` Bearerトークンで保護しています。
- service roleキー、OpenAIキー、Slack WebhookはすべてサーバーRoute Handler内だけで使います。
- プッシュは**夜に鳴らないように**07〜22時以外なら翌朝へ自動で送ります。`,
      ar: `لوحة الإدارة التي بنيتها لتشغيل [Dangseon](https://dangseon.com) - أكثر من 20 شاشة تحت شريط جانبي واحد، من إنشاء الاستطلاعات إلى معالجة البلاغات وإرسال الإشعارات وتسوية مستحقات الشركاء.

**خط الذكاء الاصطناعي ① - صياغة استطلاعات من الأخبار**
- يجمع المقالات المرشّحة من خمس تغذيات RSS لأخبار Google ويزيل المكرّر.
- يستدعي OpenAI Responses API في **وضع JSON Schema الصارم**، فيعود العنوان والوصف والخيارات والتصنيف ونص الإشعار وموجّه الصورة في حمولة واحدة منظّمة - بحيث يستحيل أصلاً ورود استجابة مشوّهة.
- تُضاف عناوين مسودات آخر ثلاثة أيام إلى الموجّه كي **لا يتكرّر الموضوع نفسه**.
- يولّد لكل مسودة صورة مصغّرة بنسبة 4:5 عبر نموذج صور ويرفعها إلى Supabase Storage، مع منع تصوير أشخاص حقيقيين وشعارات المؤسسات الإعلامية والعلامات المائية في الموجّه.
- عند انتهاء التوليد يصل **إشعار Slack**، ولا يُنشر شيء قبل مراجعة المشرف وموافقته في اللوحة. **الذكاء الاصطناعي لا ينشر مباشرة.**
- يعمل تلقائياً في الثامنة صباحاً والثانية ظهراً بتوقيت كوريا عبر Vercel Cron.

**خط الذكاء الاصطناعي ② - تحويل الاستطلاعات المنتهية إلى مقالات**
- يجمّع استجابات الاستطلاعات المنتهية حسب **العمر والجنس والمنطقة**، مع ترقيم صفحات بألف سجل في كل مرة لتغطية المجموعة كاملة.
- على هذا الأساس يكتب الذكاء الاصطناعي عنواناً وملخصاً ومتناً ونقاطاً أساسية، ويُنشر كمقال رؤى في المجتمع.
- يثبّت الموجّه قواعد مثل **"لا تُضف إحصاءات غير موجودة في البيانات"، و"لا تجزم من شرائح أقل من 20 مشاركاً"، و"لا تنحَز لطرف"** - فالأرقام المختلقة أو القراءة المنحازة هما أكبر خطر هنا.
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
    logo: "seobuds.svg",
    weight: 1,
    title: {
      ko: "서부디에스 홈페이지",
      en: "SeobuDS Website",
      ja: "SeobuDSサイト",
      ar: "موقع SeobuDS",
    },
    blurb: {
      ko: "Next.js로 제작한 회사 소개 페이지. SEO 최적화와 구글·네이버 등록까지 완료.",
      en: "Company website built with Next.js. Fully SEO-optimized with Google and Naver indexing.",
      ja: "Next.jsで制作した会社紹介サイト。SEO最適化とGoogle・Naver登録まで完了しました。",
      ar: "موقع تعريفي للشركة مبني بـ Next.js مع تحسين كامل لمحركات البحث وتسجيل على Google وNaver.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "SEO"],
    area: "React",
    status: "Active",
    active: true,
    role: {
      ko: "기획 · 디자인 · 개발 · 배포",
      en: "Planning · Design · Development · Deploy",
      ja: "企画 · デザイン · 開発 · デプロイ",
      ar: "التخطيط والتصميم والتطوير والنشر",
    },
    stack: [
      {
        group: { ko: "웹", en: "Web", ja: "Web", ar: "الويب" },
        items: ["Next.js", "TypeScript", "TailwindCSS"],
      },
      {
        group: { ko: "배포 · 그로스", en: "Deploy & Growth", ja: "デプロイ・グロース", ar: "النشر والنمو" },
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
      ja: `
💡 会社紹介とサービス案内のための公式Webサイトです。

🧩 Next.js + TypeScript + TailwindCSSで開発し、Vercelへデプロイしました。

🔍 Google・Naver Search Consoleへの登録とメタデータ最適化で、検索エンジンへの露出を整えました。

📱 モバイルからデスクトップまで対応するレスポンシブデザインです。
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
    logo: "infocompany.png",
    weight: 0,
    title: {
      ko: "인포컴퍼니",
      en: "InfoCompany",
      ja: "InfoCompany",
      ar: "InfoCompany",
    },
    blurb: {
      ko: "React로 만든 회사 소개 페이지",
      en: "Company info page built with React",
      ja: "Reactで制作した会社紹介ページ",
      ar: "صفحة تعريف الشركة مصممة بـ React",
    },
    tags: ["React", "Firebase", "JavaScript"],
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
      ja: `
Reactで制作した会社紹介ページです。
- 会社情報、サービス、問い合わせセクションを実装
- シンプルなレスポンシブレイアウト
- デプロイ済み・運用中
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
      ja: "Random Mong",
      ar: "راندوم مونج",
    },
    blurb: {
      ko: "Firebase Realtime Database를 활용한 실시간 랜덤 채팅 사이트",
      en: "A real-time random chat platform using Firebase Realtime Database",
      ja: "Firebase Realtime Databaseを活用したリアルタイムランダムチャットサイト",
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
      ja: `
Random MongはFirebase Realtime DatabaseとReactで作ったリアルタイムランダムチャットサイトです。
- ユーザー名の保存と入退室処理
- リアルタイムでのメッセージ送受信
- 絵文字選択機能
- Firebase Realtime Databaseによるメッセージ同期
- TypeScriptとReact Hooksで実装
- 学習・実習用プロジェクト
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
      ja: "Flutter実習プロジェクト",
      ar: "مشروع تجريبي فلاتر",
    },
    blurb: {
      ko: "Flutter/Dart 로 만든 간단한 실습 프로젝트 모음",
      en: "A collection of simple practice projects made with Flutter/Dart",
      ja: "Flutter/Dartで作った簡単な実習プロジェクト集",
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
      ja: `
Flutter/Dartで作った複数の実習アプリをまとめたポートフォリオ用サンプルです。
- 映画コレクター（映画リストと詳細表示）
- タイマーアプリ（ポモドーロタイマー）
- 今日のWebtoon（WebtoonリストとUI）
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
      ja: "映画コレクション",
      ar: "مجموعة الأفلام",
    },
    blurb: {
      ko: "다양한 영화 정보를 한눈에 볼 수 있는 페이지 예시입니다.",
      en: "A sample page to view various movie information at a glance.",
      ja: "さまざまな映画情報を一目で見られるサンプルページです。",
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
      ja: `
映画コレクションプロジェクトです。
- Next.js + Reactベース
- Suspenseとdynamic importを活用
- 映画詳細、キャスト、予告編などを表示
- CSS Modulesでスタイリング
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
      ja: "SNSクローン",
      ar: "نسخة SNS",
    },
    blurb: {
      ko: "TypeScript와 React, Firebase를 활용해 만든 SNS 클론 프로젝트. 로그인과 게시글 CRUD 기능을 구현.",
      en: "A SNS clone built with TypeScript, React, and Firebase. Implements login and CRUD operations for posts.",
      ja: "TypeScript、React、Firebaseで作ったSNSクローン。ログインと投稿CRUD機能を実装しました。",
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
      ja: `
SNSクローンプロジェクトです。
- Firebase Authenticationによるログイン/会員登録
- 投稿の作成、読み取り、更新、削除
- ユーザー別投稿表示
- Firebase Firestoreによるリアルタイムデータ反映
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
      ja: "高齢者行動検知スマートCCTV",
      ar: "كاميرات مراقبة ذكية لاكتشاف سلوك كبار السن",
    },
    blurb: {
      ko: "고령층의 낙상 및 이상행동을 실시간으로 감지하는 AI 기반 스마트 CCTV 시스템",
      en: "An AI-powered smart CCTV system that detects falls and abnormal behaviors of the elderly in real-time.",
      ja: "高齢者の転倒や異常行動をリアルタイムで検知するAIベースのスマートCCTVシステム。",
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
        group: { ko: "모델 · 비전", en: "Model & Vision", ja: "モデル・ビジョン", ar: "النموذج والرؤية" },
        items: ["YOLO", "TensorFlow", "OpenCV", "AI-HUB 시니어 이상행동 데이터셋"],
      },
      {
        group: { ko: "서버", en: "Server", ja: "サーバー", ar: "الخادم" },
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

      ja: `AI-HUBの高齢者異常行動データセットを活用し、介護施設内の高齢者の転倒や徘徊などの異常行動をリアルタイムで検知するスマートCCTVシステムを開発しました。

このプロジェクトは**高齢者の安全のための迅速な対応システム**を目標にし、PythonとFastAPIでサーバーを構築し、OpenCV、YOLO、TensorFlowを使って**リアルタイム転倒検知**機能を実装しました。  
CCTVカメラから取得した映像を継続的に解析し、異常行動が検知されると**管理者や保護者へ即時通知**を送るようにしました。

最新のAI技術と画像処理アルゴリズムを組み合わせ、高齢者の安全を補助し、事故発生時に素早く対応できるよう設計しました。`,

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
      ja: "Raspberry Pi自動ホールデムカード配布機",
      ar: "آلة توزيع بطاقات بوكر أوتوماتيكية تعتمد على Raspberry Pi",
    },
    blurb: {
      ko: "라즈베리파이와 서보모터를 이용해 인원 수를 입력하면 자동으로 카드를 분배",
      en: "A Raspberry Pi–powered system that automatically deals cards based on the number of players entered.",
      ja: "人数を入力すると、Raspberry Piとサーボモーターで自動的にカードを配るシステム。",
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

      ja: `Raspberry Piとサーボモーターを使って、ホールデム用の自動カード配布機を制作しました。  

全体構造を自分で図面化し、アクリル板とハードボードで外形を作りました。  
Raspberry Pi上のPythonコードから2つのMG995サーボモーター（360°回転可能）を制御し、主軸の回転部とカード排出部の動きを調整しました。  

ゲーム開始前に人数を入力すると、システムが人数に合わせて配布回数を自動計算し、GPIOピンとPWM信号で2つのモーターを制御してカードを順番に配ります。  
セブンポーカーのルールをもとにコードロジックを作成し、実際の物理装置と連動させて動作を確認しました。`,

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
      ja: "ROSライントレーシングロボット",
      ar: "روبوت تتبع الخط باستخدام ROS",
    },
    blurb: {
      ko: "ROS 환경에서 카메라로 검은 선을 인식해 주행하는 자율주행 로봇 프로젝트입니다.",
      en: "A ROS autonomous driving robot that detects and follows black lines using a camera.",
      ja: "ROS環境でカメラから黒い線を認識し、追従走行する自律走行ロボットプロジェクトです。",
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
      ja: `ROS（Robot Operating System）を使ってライントレーシングロボットを実装しました。  
Webカメラで入力された映像を処理して黒い線を認識し、線の位置に応じて左右の車輪速度を制御して走行経路を維持しました。  

主な機能:
- OpenCVによるライン認識と画像処理  
- ROSノード間通信による速度制御  
- PID制御を使ったなめらかな走行  
- リアルタイムデバッグとログ監視`,
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
      ja: "Figma UI",
      ar: "Figma",
    },
    blurb: {
      ko: "서비스 런칭 전 UI/UX 프로토타이핑과 컴포넌트 시스템 설계",
      en: "Prototyping and component system design for pre-launch services",
      ja: "サービスローンチ前のUI/UXプロトタイピングとコンポーネントシステム設計",
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
      ja: "Figmaでユーザーフロー、ワイヤーフレーム、インタラクティブプロトタイプを設計しました 🎨",
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
      ja: "政府支援事業IRデック・提案書",
      ar: "عرض وملف تمويلي حكومي (IR Deck & Proposal)",
    },
    blurb: {
      ko: "정부지원사업을 위한 제안서, 사업계획서, IR 자료 기획 및 디자인",
      en: "Planned and designed proposals and IR decks for startup funding programs",
      ja: "政府支援事業向けの提案書、事業計画書、IR資料の企画・デザイン",
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
      ja: "事業概要の整理からビジュアル構成、発表用IRスライド制作まで担当しました 💼",
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
      ja: "Arduino Study",
      ar: "دراسة أردوينو",
    },
    blurb: {
      ko: "아두이노를 배우며 진행한 프로젝트와 실습 기록 모음.",
      en: "Collection of Arduino projects and exercises.",
      ja: "Arduinoを学びながら進めたプロジェクトと実習記録のまとめ。",
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
      ja: `
Arduinoを使ってさまざまなハードウェアコンポーネントを制御し、実験した記録です。
基礎回路からセンサー、モーター、LED、ボタン、ピエゾブザー、抵抗まで扱い、
自分で配線を組み、デジタル/アナログ入出力、抵抗計算、デバウンス処理などを学びました。

シリアルモニターとPuTTYログでデータ通信の流れを確認し、
タイマー制御やサーボモーター角度制御など、さまざまな実習を行いました。
また、Pythonを使ってArduinoとのシリアル通信を実装し、
OpenCVベースの顔認識が人を検知するとモーターが自動回転するシステムも構成しました。

これにより、ハードウェア制御とソフトウェアによる視覚認識を組み合わせる統合制御の基礎を経験しました。
小さな実験の連続ですが、Arduinoプログラミングとハードウェア制御の基礎を固める過程でした。
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
      ja: "Unity Basics",
      ar: "أساسيات Unity",
    },
    blurb: {
      ko: "Unity와 C#를 활용한 기초 실습 프로젝트입니다.",
      en: "A basic Unity project for practicing with C#.",
      ja: "UnityとC#を使った基礎実習プロジェクトです。",
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
      ja: `
UnityとC#を使った基礎実習プロジェクトです。
- オブジェクト生成と簡単な操作
- 障害物避けゲームの実装
- Unityエンジンの基本理解
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
      ja: "Mediapipe",
      ar: "Mediapipe",
    },
    blurb: {
      ko: "Mediapipe, TensorFlow, Numpy를 활용한 손 인식 실습",
      en: "A hand gesture recognition practice project using Mediapipe, TensorFlow, and Numpy.",
      ja: "Mediapipe、TensorFlow、Numpyを使った手認識の実習プロジェクト。",
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
      ja: `
Mediapipe、TensorFlow、Numpyを使って手の認識を練習したプロジェクトです。
- 手の動きの追跡と実験
- 手話翻訳シミュレーション
- MLモデル学習とデータ前処理の実習
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
