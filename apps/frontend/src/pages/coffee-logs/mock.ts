export type BrewMethod = "POUR_OVER" | "OTHER";

export type BrewStep = {
  stepNumber: number;
  cumulativeAmount: number; // g
  timeSeconds: number; // sec
};

export type CoffeeLog = {
  id: number;
  brewedAt: string; // ISO string

  // main
  title: string; // 원두 이름 (ex. 케냐 AB 캉고초)
  subtitle?: string; // 로스터/카페/메모 한 줄 (ex. Counter Culture, Stumptown)

  // list hints
  recipeName?: string; // 리스트에 간단히 표시할 레시피 이름 (ex. 테츠카츠야 4:6)
  tags: string[]; // ["산미", "고소", "진함"] 처럼

  // schema-ish fields
  method: BrewMethod;
  rating?: 1 | 2 | 3 | 4 | 5;
  note?: string;

  dripper?: string;
  filterType?: string;
  grindSize?: string;

  coffeeAmount?: number; // g
  waterAmount?: number; // g
  waterTemp?: number; // °C
  brewTimeSec?: number; // sec

  steps: BrewStep[];
};

export const mockCoffeeLogs: CoffeeLog[] = [
  {
    id: 1,
    brewedAt: "2026-02-28T09:10:00.000Z",
    title: "케냐 AB 캉고초",
    subtitle: "Counter Culture",
    method: "POUR_OVER",
    dripper: "V60",
    recipeName: "테츠카츠야 4:6",
    tags: ["산미", "클린", "베리", "중간바디"],
    coffeeAmount: 15,
    waterAmount: 240,
    waterTemp: 93,
    brewTimeSec: 210,
    rating: 4,
    note: "산미가 선명하고 끝맛이 깨끗함. 다음엔 1차 붓기 양을 조금 줄여보기.",
    steps: [
      { stepNumber: 1, cumulativeAmount: 40, timeSeconds: 30 },
      { stepNumber: 2, cumulativeAmount: 120, timeSeconds: 90 },
      { stepNumber: 3, cumulativeAmount: 200, timeSeconds: 150 },
      { stepNumber: 4, cumulativeAmount: 240, timeSeconds: 210 },
    ],
  },
  {
    id: 2,
    brewedAt: "2026-02-26T08:40:00.000Z",
    title: "에티오피아 예가체프",
    subtitle: "Parlor Coffee",
    method: "POUR_OVER",
    dripper: "Kalita Wave",
    recipeName: "데일리 1:15 (내 기본)",
    tags: ["꽃향", "자스민", "가벼움", "산뜻"],
    coffeeAmount: 16,
    waterAmount: 250,
    waterTemp: 92,
    brewTimeSec: 180,
    rating: 5,
    note: "향이 폭발. 식으면서 단맛이 올라옴. 오늘 컨디션에 이 조합이 최고.",
    steps: [
      { stepNumber: 1, cumulativeAmount: 50, timeSeconds: 35 },
      { stepNumber: 2, cumulativeAmount: 150, timeSeconds: 110 },
      { stepNumber: 3, cumulativeAmount: 250, timeSeconds: 180 },
    ],
  },
  {
    id: 3,
    brewedAt: "2026-02-25T19:25:00.000Z",
    title: "과테말라 안티구아",
    subtitle: "Stumptown",
    method: "POUR_OVER",
    dripper: "V60",
    recipeName: "4:6 변형 (1차 45g)",
    tags: ["고소", "초콜릿", "중후", "진함"],
    coffeeAmount: 15,
    waterAmount: 225,
    waterTemp: 91,
    brewTimeSec: 190,
    rating: 4,
    note: "고소함이 잘 나옴. 바디가 두꺼워서 우유랑도 잘 맞을 듯.",
    steps: [
      { stepNumber: 1, cumulativeAmount: 45, timeSeconds: 30 },
      { stepNumber: 2, cumulativeAmount: 120, timeSeconds: 110 },
      { stepNumber: 3, cumulativeAmount: 180, timeSeconds: 150 },
      { stepNumber: 4, cumulativeAmount: 225, timeSeconds: 190 },
    ],
  },
  {
    id: 4,
    brewedAt: "2026-02-21T09:00:00.000Z",
    title: "콜롬비아 수프리모",
    subtitle: "Local Roaster",
    method: "POUR_OVER",
    dripper: "Origami",
    recipeName: "빠른 추출 (굵게 갈기)",
    tags: ["밸런스", "견과", "연함"],
    coffeeAmount: 15,
    waterAmount: 240,
    waterTemp: 94,
    brewTimeSec: 200,
    rating: 3,
    note: "무난한데 조금 밋밋. 다음엔 분쇄도를 더 곱게.",
    steps: [
      { stepNumber: 1, cumulativeAmount: 40, timeSeconds: 30 },
      { stepNumber: 2, cumulativeAmount: 140, timeSeconds: 120 },
      { stepNumber: 3, cumulativeAmount: 240, timeSeconds: 200 },
    ],
  },
  {
    id: 5,
    brewedAt: "2026-02-18T14:10:00.000Z",
    title: "블렌드 (테스트)",
    subtitle: "Home",
    method: "OTHER",
    recipeName: "기록만 간단히",
    tags: ["고소", "진함"],
    rating: 3,
    note: "오늘은 디테일 없이 느낌만. 다음엔 드리퍼/수치도 남기기.",
    steps: [],
  },
];
