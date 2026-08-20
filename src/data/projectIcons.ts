import {
  Bird,
  Bot,
  Cat,
  Cctv,
  CircuitBoard,
  Clapperboard,
  Dices,
  Gamepad2,
  Ghost,
  Hand,
  MessageCircle,
  Palette,
  Presentation,
  Spade,
  type LucideIcon,
} from "lucide-react";

/**
 * 로고 파일이 없는 프로젝트가 제목 옆에 쓰는 아이콘.
 * 시스템 이모지는 기기마다 모양이 달라져서 lucide로 통일했다.
 * 로고가 있는 프로젝트는 여기 없어도 되고, 있어도 로고가 우선한다.
 */
export const PROJECT_ICONS: Record<string, LucideIcon> = {
  "life-dash": Ghost,
  "portfolio-site": Cat,
  "random-mong": Dices,
  "flutter-practice": Bird,
  "movie-collection": Clapperboard,
  "sns-clone": MessageCircle,
  "senior-cctv": Cctv,
  card_game: Spade,
  "line-tracing-car": Bot,
  "figma-designs": Palette,
  "gov-irdeck": Presentation,
  arduino: CircuitBoard,
  "unity-basics": Gamepad2,
  "mediapipe-sign-language": Hand,
};
