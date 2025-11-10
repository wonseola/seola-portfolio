export type LocalizedString = {
  [langCode: string]: string; // ex: 'en', 'ko', 'tr', 'ar'
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
  area?: "React" | "AI" | "ROS/Arduino" | "Other";
  status?: "Active" | "In Progress" | "Paused" | "Study" | "Complete";
  active?: boolean;
  body?: LocalizedString; // long writeup per language
  gallery?: string[]; // additional images in public/media
};

export const PROJECTS: Project[] = [
  //placeholder
  {
    slug: "card-game",
    title: { ko: "", en: "", tr: "", ar: "" },
    blurb: { ko: "", en: "", tr: "", ar: "" },
    tags: [],
    area: "Other",
    status: "Complete",
    thumb: "",
    previewVideo: "",
    mainVideo: "",
    body: { ko: "", en: "", tr: "", ar: "" },
    gallery: [],
  },
  //portfolio-site
  {
    slug: "portfolio-site",
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
    tags: ["React", "TypeScript", "TailwindCSS", "study"],
    area: "React",
    status: "Active",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588118/port_at4zcs.png",
    previewVideo: "",
    mainVideo: "",
    links: {
      code: "https://github.com/wonseola/seola-portfolio",
      link: "https://wonseola.netlify.app",
    },
    body: {
      ko: `
- 다국어 지원 구현 (한국어, 영어, 터키어, 아랍어)
- 언어별 UI/UX 최적화
- 반응형 디자인 적용
`,
      en: `
- Multi-language support implemented (KO, EN, TR, AR)
- Optimized UI/UX per language
- Responsive design applied
`,
      tr: `
- Çoklu dil desteği uygulandı (KO, EN, TR, AR)
- Dile özel UI/UX optimizasyonu
- Duyarlı tasarım uygulandı
`,
      ar: `
- تم تنفيذ دعم لغات متعددة (KO, EN, TR, AR)
- تحسين واجهة المستخدم وتجربة الاستخدام لكل لغة
- تم تطبيق تصميم متجاوب
`,
    },
    gallery: [],
  },
  //infocompany
  {
    slug: "infocompany",
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
    tags: ["React", "Web", "Firebase", "javaScript"],
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
    tags: ["React", "Next.js", "SSR", "Movie Info", "study"],
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
      "study",
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
      "study",
    ],
    area: "AI",
    status: "Study",
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
      "study",
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
    tags: ["ROS", "Computer Vision", "Autonomous", "Python", "OpenCV", "study"],
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

  //arduino study
  {
    slug: "arduino",
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
    tags: ["Arduino", "Electronics", "DIY", "Programming", "study"],
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
    title: {
      ko: "Unity Basics",
      en: "Unity Basics",
      tr: "Unity Temelleri",
      ar: "أساسيات Unity",
    },
    blurb: {
      ko: "Unity와 C++를 활용한 기초 실습 프로젝트입니다.",
      en: "A basic Unity project for practicing with C++ integration.",
      tr: "C++ entegrasyonu ile pratik yapmak için temel Unity projesi.",
      ar: "مشروع Unity أساسي للتدرب على التكامل مع C++.",
    },
    tags: ["Unity", "C++", "Study"],
    area: "Other",
    status: "Study",
    thumb:
      "https://res.cloudinary.com/dlomu8nah/image/upload/v1762588122/3_qh1yeu.jpg",
    previewVideo:
      "https://res.cloudinary.com/dlomu8nah/video/upload/v1762588120/2_atvftn.mp4",
    mainVideo: "",
    body: {
      ko: `
Unity와 C++를 활용한 기초 실습 프로젝트입니다.
- 오브젝트 생성 및 간단한 조작
- 장애물 피하기 게임 구현
- Unity 엔진 기본 이해
    `,
      en: `
Basic Unity practice project with C++ integration.
- Creating and manipulating objects
- Simple obstacle avoidance game
- Understanding Unity engine fundamentals
    `,
      tr: `
C++ entegrasyonu ile temel Unity uygulama projesi.
- Nesne oluşturma ve basit kontroller
- Engellerden kaçınma oyunu
- Unity motorunun temellerini anlama
    `,
      ar: `
مشروع تدريب أساسي على Unity مع تكامل C++.
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
