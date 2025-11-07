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
  area?: "Robotics" | "Embedded" | "ROS/Arduino" | "Other";
  status?: "Active" | "In Progress" | "Paused" | "Archived" | "Complete";
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
    tags: [""],
    area: "Other",
    status: "Complete",
    thumb: "",
    previewVideo: "",
    mainVideo: "",
    body: { ko: "", en: "", tr: "", ar: "" },
    gallery: [],
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
    tags: ["Raspberry Pi", "Servo Motor", "Python", "Automation", "Mechanics"],
    area: "ROS/Arduino",
    status: "Complete",
    thumb: "media/cardgame/IMG_3127.jpg",
    links: {
      code: "https://github.com/wonseola/GitCollabo_Auto_Card_Game/tree/Control_moter",
    },
    mainVideo: "media/cardgame/card.mp4",
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
      "media/cardgame/IMG_2578.jpg",
      "media/cardgame/IMG_2591.jpg",
      "media/cardgame/IMG_2594.JPG",
      "media/cardgame/card.mp4",
      "media/cardgame/IMG_2743.jpg",
      "media/cardgame/IMG_2745.jpg",
      "media/cardgame/IMG_3127.jpg",
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
    tags: ["ROS", "Computer Vision", "Autonomous", "Python", "OpenCV"],
    area: "ROS/Arduino",
    status: "Complete",
    thumb: "media/car/IMG_2335.JPG",
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
      "media/car/IMG_2346.jpg",
      "media/car/car1.mp4",
      "media/car/car2.mp4",
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
    tags: ["Arduino", "Electronics", "DIY", "Programming"],
    area: "ROS/Arduino",
    status: "Complete",
    thumb: "media/arduino/123.gif",
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
      "media/arduino/33.jpeg",
      "media/arduino/22.gif",
      "media/arduino/3.mp4",
      "media/arduino/1.mp4",
      "media/arduino/2.mp4",
    ],
  },
];
