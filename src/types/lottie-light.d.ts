// lottie-web은 경량 플레이어 경로에 타입을 붙여두지 않아서 직접 선언한다.
// 전체 빌드(760KB) 대신 light 빌드(164KB)를 쓰기 위한 딥 임포트.
declare module "lottie-web/build/player/esm/lottie_light.min.js" {
  const lottie: import("lottie-web").LottiePlayer;
  export default lottie;
}
