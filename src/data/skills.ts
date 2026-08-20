import type { LocalizedString } from "./projects";

export type SkillLevel = "core" | "strong" | "working";

export type Skill = {
  name: string;
  level: SkillLevel;
  /** 이 스킬을 실제로 쓴 프로젝트 slug (projects.ts와 연결) */
  used?: string[];
};

export type SkillGroup = {
  id: string;
  label: LocalizedString;
  caption: LocalizedString;
  /** tailwind.config.js의 accent 컬러 키 */
  accent:
    | "accent-blue"
    | "accent-green"
    | "accent-yellow"
    | "accent-orange"
    | "accent-purple"
    | "accent-cyan";
  skills: Skill[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    accent: "accent-green",
    label: {
      ko: "프론트엔드",
      en: "Frontend",
      ja: "フロントエンド",
      ar: "الواجهة الأمامية",
    },
    caption: {
      ko: "예쁘게, 그리고 60fps로 움직이게",
      en: "make it pretty — and make it run at 60fps",
      ja: "見た目よく、そして60fpsでなめらかに",
      ar: "اجعله جميلاً — وبسرعة 60 إطاراً",
    },
    skills: [
      { name: "React 18 · 19", level: "core", used: ["dangseon", "dangseon-admin", "maple-step", "toss-time", "ddphoto", "nowtoilet", "portfolio-site", "infocompany", "woodongseol"] },
      { name: "Next.js 16 (App Router)", level: "core", used: ["dangseon", "maple-step", "seobuds"] },
      { name: "TypeScript", level: "core", used: ["toss-time", "maple-step", "portfolio-site"] },
      { name: "JavaScript", level: "core", used: ["dangseon", "woodongseol"] },
      { name: "TailwindCSS v3 · v4", level: "core", used: ["dangseon", "maple-step", "portfolio-site"] },
      { name: "Styled-Components", level: "strong", used: ["woodongseol"] },
      { name: "Vite", level: "core", used: ["toss-time", "ddphoto", "nowtoilet", "life-dash"] },
      { name: "Framer Motion", level: "strong", used: ["portfolio-site"] },
      { name: "CSS Modules", level: "strong", used: ["movie-collection"] },
      { name: "반응형 · 다국어(i18n)", level: "core", used: ["toss-time", "portfolio-site"] },
    ],
  },
  {
    id: "backend",
    accent: "accent-blue",
    label: {
      ko: "백엔드 · 데이터",
      en: "Backend & Data",
      ja: "バックエンド・データ",
      ar: "الخلفية والبيانات",
    },
    caption: {
      ko: "권한과 실시간까지 직접 설계",
      en: "I design the permissions and the realtime layer myself",
      ja: "権限とリアルタイム層まで自分で設計します",
      ar: "أصمم الصلاحيات وطبقة الزمن الحقيقي بنفسي",
    },
    skills: [
      { name: "Supabase Auth", level: "core", used: ["dangseon", "maple-step"] },
      { name: "PostgreSQL · RLS", level: "core", used: ["dangseon", "nowtoilet"] },
      { name: "Supabase Realtime", level: "core", used: ["maple-step", "dangseon"] },
      { name: "Supabase Storage", level: "strong", used: ["ddphoto", "dangseon", "dangseon-admin"] },
      { name: "Firebase (Auth · Firestore · RTDB)", level: "strong", used: ["random-mong", "sns-clone"] },
      { name: "Drizzle ORM", level: "working", used: ["maple-step"] },
      { name: "Route Handlers · Webhooks", level: "strong", used: ["dangseon", "dangseon-admin"] },
      { name: "FCM 푸시 알림", level: "strong", used: ["dangseon", "dangseon-admin"] },
      { name: "배치 집계 · 페이지네이션", level: "strong", used: ["dangseon-admin", "nowtoilet"] },
      { name: "공공데이터 API · 지오코딩", level: "strong", used: ["nowtoilet"] },
      { name: "FastAPI (Python)", level: "working", used: ["senior-cctv"] },
    ],
  },
  {
    id: "mobile",
    accent: "accent-purple",
    label: {
      ko: "모바일 · 앱 출시",
      en: "Mobile & Shipping",
      ja: "モバイル・アプリ公開",
      ar: "الموبايل والنشر",
    },
    caption: {
      ko: "웹으로 만들어서 스토어까지 올려봤어요",
      en: "built on the web, shipped to the stores",
      ja: "Webで作って、ストア公開まで経験しました",
      ar: "بُني على الويب، ونُشر في المتاجر",
    },
    skills: [
      { name: "Capacitor 8", level: "core", used: ["dangseon"] },
      { name: "App Store 출시", level: "strong", used: ["dangseon"] },
      { name: "Google Play 출시", level: "strong", used: ["dangseon"] },
      { name: "Apps in Toss (Granite)", level: "strong", used: ["toss-time", "ddphoto", "nowtoilet"] },
      { name: "Flutter · Dart", level: "working", used: ["flutter-practice"] },
      { name: "Geolocation · Camera 권한", level: "strong", used: ["nowtoilet", "ddphoto"] },
    ],
  },
  {
    id: "infra",
    accent: "accent-orange",
    label: {
      ko: "인프라 · 배포",
      en: "Infra & Deploy",
      ja: "インフラ・デプロイ",
      ar: "البنية التحتية والنشر",
    },
    caption: {
      ko: "만든 걸 실제로 굴리는 데까지",
      en: "from build to actually running in production",
      ja: "作ったものを本番で動かすところまで",
      ar: "من البناء إلى التشغيل الفعلي",
    },
    skills: [
      { name: "Vercel", level: "core", used: ["dangseon", "dangseon-admin", "seobuds", "maple-step", "life-dash"] },
      { name: "Cloudflare Pages", level: "strong", used: ["portfolio-site"] },
      { name: "AWS S3 정적 배포", level: "strong", used: ["woodongseol"] },
      { name: "Firebase Hosting", level: "strong", used: ["random-mong", "infocompany"] },
      { name: "환경변수 · 시크릿 분리", level: "core", used: ["dangseon", "dangseon-admin", "nowtoilet"] },
      { name: "정적 Export 빌드 파이프라인", level: "strong", used: ["dangseon"] },
      { name: "Vercel Cron 스케줄링", level: "strong", used: ["dangseon-admin"] },
      { name: "Slack Webhook 운영 알림", level: "strong", used: ["dangseon-admin"] },
    ],
  },
  {
    id: "quality",
    accent: "accent-cyan",
    label: {
      ko: "품질 · 관측",
      en: "Quality & Observability",
      ja: "品質・観測",
      ar: "الجودة والمراقبة",
    },
    caption: {
      ko: "버그를 사람이 아니라 스크립트가 찾게",
      en: "let scripts find the bugs, not people",
      ja: "バグは人ではなくスクリプトに見つけさせる",
      ar: "دع السكربتات تجد الأخطاء بدل البشر",
    },
    skills: [
      { name: "Vitest · node:test", level: "strong", used: ["life-dash", "toss-time"] },
      { name: "자동 레벨 검증 스크립트", level: "core", used: ["toss-time"] },
      { name: "Sentry", level: "strong", used: ["dangseon"] },
      { name: "Vercel Analytics · Speed Insights", level: "strong", used: ["dangseon"] },
      { name: "Google Analytics", level: "strong", used: ["dangseon", "woodongseol", "infocompany", "seobuds"] },
      { name: "ESLint · oxlint · Prettier", level: "core", used: ["toss-time", "ddphoto"] },
      { name: "순수 로직 분리 설계", level: "core", used: ["toss-time", "life-dash"] },
    ],
  },
  {
    id: "growth",
    accent: "accent-yellow",
    label: {
      ko: "그로스 · 수익화",
      en: "Growth & Monetization",
      ja: "グロース・収益化",
      ar: "النمو وتحقيق الدخل",
    },
    caption: {
      ko: "만들고 끝이 아니라, 찾아오게 만들기",
      en: "shipping isn't the end — getting found is",
      ja: "公開して終わりではなく、見つけてもらうところまで",
      ar: "النشر ليس النهاية — أن تُكتشف هو المهم",
    },
    skills: [
      { name: "SEO (메타데이터 · 사이트맵 · robots)", level: "core", used: ["maple-step", "dangseon", "seobuds", "woodongseol", "infocompany"] },
      { name: "JSON-LD 구조화 데이터", level: "strong", used: ["maple-step"] },
      { name: "구글 · 네이버 서치콘솔", level: "core", used: ["dangseon", "seobuds", "woodongseol"] },
      { name: "Google AdSense", level: "strong", used: ["maple-step"] },
      { name: "카카오 애드핏 · Toss Ads", level: "strong", used: ["maple-step", "nowtoilet", "toss-time"] },
      { name: "인앱 재화 · 확률형 아이템 설계", level: "strong", used: ["toss-time"] },
      { name: "PortOne 결제 연동", level: "strong", used: ["woodongseol"] },
    ],
  },
  {
    id: "game",
    accent: "accent-purple",
    label: {
      ko: "게임 · 인터랙션",
      en: "Game & Interaction",
      ja: "ゲーム・インタラクション",
      ar: "الألعاب والتفاعل",
    },
    caption: {
      ko: "규칙을 만들고, 그 규칙을 코드로 증명하기",
      en: "invent the rules, then prove them in code",
      ja: "ルールを作り、そのルールをコードで証明する",
      ar: "ضع القواعد ثم أثبتها بالشيفرة",
    },
    skills: [
      { name: "Phaser 3", level: "strong", used: ["life-dash"] },
      { name: "턴제 퍼즐 엔진 설계", level: "core", used: ["toss-time"] },
      { name: "데이터 주도 밸런싱", level: "strong", used: ["life-dash", "toss-time"] },
      { name: "레벨 디자인 · 난이도 커브", level: "strong", used: ["toss-time", "life-dash"] },
      { name: "픽셀아트 파이프라인", level: "working", used: ["life-dash"] },
      { name: "Unity · C#", level: "working", used: ["unity-basics"] },
    ],
  },
  {
    id: "ai",
    accent: "accent-blue",
    label: {
      ko: "AI · 컴퓨터비전",
      en: "AI & Computer Vision",
      ja: "AI・コンピュータビジョン",
      ar: "الذكاء الاصطناعي والرؤية الحاسوبية",
    },
    caption: {
      ko: "모델을 쓰는 것보다, 결과를 믿을 수 있게 만드는 쪽에 관심이 많아요",
      en: "more interested in making the output trustworthy than in calling the model",
      ja: "モデルを呼ぶことより、出力を信頼できる形にすることに関心があります",
      ar: "يهمّني جعل المخرجات جديرة بالثقة أكثر من مجرّد استدعاء النموذج",
    },
    skills: [
      { name: "OpenAI Responses API", level: "strong", used: ["dangseon-admin"] },
      { name: "구조화 출력 (JSON Schema strict)", level: "strong", used: ["dangseon-admin"] },
      { name: "프롬프트 설계 · 가드레일", level: "strong", used: ["dangseon-admin"] },
      { name: "이미지 생성 파이프라인", level: "strong", used: ["dangseon-admin"] },
      { name: "휴먼 인 더 루프 승인 설계", level: "strong", used: ["dangseon-admin"] },
      { name: "RSS 수집 · 정규화", level: "strong", used: ["dangseon-admin"] },
      { name: "Python", level: "strong", used: ["senior-cctv", "card_game"] },
      { name: "OpenCV", level: "strong", used: ["senior-cctv", "line-tracing-car"] },
      { name: "YOLO", level: "working", used: ["senior-cctv"] },
      { name: "TensorFlow", level: "working", used: ["senior-cctv", "mediapipe-sign-language"] },
      { name: "Mediapipe", level: "working", used: ["mediapipe-sign-language"] },
      { name: "NumPy", level: "working", used: ["mediapipe-sign-language"] },
      { name: "AI 페어 프로그래밍", level: "core" },
    ],
  },
  {
    id: "hardware",
    accent: "accent-orange",
    label: {
      ko: "하드웨어 · 로보틱스",
      en: "Hardware & Robotics",
      ja: "ハードウェア・ロボティクス",
      ar: "العتاد والروبوتات",
    },
    caption: {
      ko: "화면 밖에서도 움직이게 만들기",
      en: "making things move outside the screen too",
      ja: "画面の外でも動くものを作る",
      ar: "تحريك الأشياء خارج الشاشة أيضاً",
    },
    skills: [
      { name: "ROS", level: "working", used: ["line-tracing-car"] },
      { name: "Arduino", level: "working", used: ["arduino"] },
      { name: "Raspberry Pi", level: "working", used: ["card_game"] },
      { name: "서보모터 · GPIO · PWM", level: "working", used: ["card_game", "arduino"] },
      { name: "PID 제어", level: "working", used: ["line-tracing-car"] },
    ],
  },
  {
    id: "design",
    accent: "accent-green",
    label: {
      ko: "디자인 · 기획",
      en: "Design & Planning",
      ja: "デザイン・企画",
      ar: "التصميم والتخطيط",
    },
    caption: {
      ko: "기획서부터 컴포넌트까지 혼자 굴려요",
      en: "from the spec doc to the component library, solo",
      ja: "企画書からコンポーネントまで一人で回します",
      ar: "من المستند إلى مكتبة المكونات، بمفردي",
    },
    skills: [
      { name: "Figma", level: "strong", used: ["figma-designs"] },
      { name: "디자인 시스템 · 컴포넌트 설계", level: "strong", used: ["figma-designs", "toss-time"] },
      { name: "UI/UX 프로토타이핑", level: "strong", used: ["figma-designs"] },
      { name: "게임 기획서(GDD) 작성", level: "strong", used: ["life-dash", "toss-time"] },
      { name: "IR Deck · 사업계획서", level: "strong", used: ["gov-irdeck"] },
    ],
  },
];

export const SKILLS_COPY = {
  title: {
    ko: "Skills",
    en: "Skills",
    ja: "スキル",
    ar: "المهارات",
  },
  subtitle: {
    ko: "태그를 누르면 그 스킬을 쓴 프로젝트가 나와요.",
    en: "Tap a tag to see the projects that use it.",
    ja: "タグを押すと、そのスキルを使ったプロジェクトが出ます。",
    ar: "اضغط على أي وسم لتظهر المشاريع التي تستخدمه.",
  },
} as const;
