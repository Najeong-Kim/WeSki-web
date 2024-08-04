interface Resort {
  name: string;
  tag?: string;
  map: string;
  weather: number;
  temperature: number;
  congestion: string;
  spots?: Spot[];
}

export interface Spot {
  tag: string;
  name: string;
  level: string;
  isAvailable: boolean;
}

export const ResortList: Resort[] = [
  {
    name: '곤지암리조트 스키장',
    tag: 'konjiam',
    map: 'konjiam.jpg',
    weather: 24,
    temperature: 21,
    congestion: '다소 혼잡해요',
    spots: [
      {
        tag: 'top',
        name: '정상 휴게소',
        level: '중급',
        isAvailable: true,
      },
      {
        tag: 'top-slope',
        name: '정상부 슬로프',
        level: '상급',
        isAvailable: true,
      },
      {
        tag: 'middle-slope',
        name: '중간 슬로프',
        level: '중급',
        isAvailable: false,
      },
      {
        tag: 'beginner-base',
        name: '초중급 베이스',
        level: '초급',
        isAvailable: true,
      },
      {
        tag: 'intermediate-base',
        name: '중상급 베이스',
        level: '중급',
        isAvailable: true,
      },
    ],
  },
  {
    name: '용평스키장 모나',
    tag: 'yongpyong',
    map: 'yongpyong.png',
    weather: 21,
    temperature: 18,
    congestion: '원활해요',
    spots: [
      {
        tag: 'entrance',
        name: '모나 용평 진입로',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'forest',
        name: '발왕산 천년주목숲길(동쪽)',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'red-slope',
        name: '베이스전경 / 레드 슬로프',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'sky-walk',
        name: '발왕산 氣 스카이워크',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'starlight',
        name: '별이 빛나는 밤에',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'yellow-slope',
        name: '옐로우 슬로프 / 용평루지',
        level: '',
        isAvailable: true,
      },
    ],
  },
  {
    name: '휘닉스파크',
    tag: 'phoenix',
    map: 'phoenix.png',
    weather: 26,
    temperature: 24,
    congestion: '혼잡해요',
    spots: [
      {
        tag: 'phoenix',
        name: '휘닉스CC',
        level: '',
        isAvailable: false,
      },
      {
        tag: 'taegi',
        name: '태기산CC',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'luge',
        name: '루지랜드',
        level: '',
        isAvailable: true,
      },
      {
        tag: 'montblanc',
        name: '몽블랑광장',
        level: '',
        isAvailable: true,
      },
    ],
  },
  {
    name: '비발디파크 소노벨',
    tag: 'vivaldi',
    map: 'vivaldi.png',
    weather: 23,
    temperature: 19,
    congestion: '다소 혼잡해요',
    spots: [
      {
        tag: 'rock',
        name: '락',
        level: '최상급',
        isAvailable: false,
      },
      {
        tag: 'techno',
        name: '테크노',
        level: '상급',
        isAvailable: false,
      },
      {
        tag: 'classic',
        name: '클래식',
        level: '중상급',
        isAvailable: false,
      },
      {
        tag: 'ballad',
        name: '발라드',
        level: '초급',
        isAvailable: false,
      },
    ],
  },
];