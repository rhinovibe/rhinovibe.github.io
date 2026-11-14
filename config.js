/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * [*]로 표시된 곳은 아직 채우지 않은 자리입니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/gallery/thumb/1.jpg, ...   - 갤러리 썸네일
 *   images/gallery/display/1.jpg, ... - 갤러리 화면용
 *   images/gallery/full/1.jpg, ...    - 갤러리 팝업용
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 *
 * 사진 원본: Wedding\모청\모청 사진 (opening → 메인 사진, 1~29 → 갤러리 순서)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 섹션 보이기/숨기기 (true: 보임, false: 숨김) ──
  sections: {
    information: false,  // 예식 안내 카드 (공지할 내용이 생기면 true)
    guestbook: false,    // 축하 전하기
    rsvp: false          // 참석 여부 전달
  },

  // ── 이미지 리소스 ──
  // 사진 교체 시 count를 실제 파일 수에 맞춰 주세요.
  images: {
    gallery: {
      count: 29,
      thumbPath: "images/gallery/thumb",
      displayPath: "images/gallery/display",
      fullPath: "images/gallery/full"
    }
  },

  // ── 메인 (히어로) ──
  groom: {
    name: "서규원",
    nameEn: "Seo Kyuwon",
    openingName: "Kyuwon",   // 오프닝 화면에 크게 나오는 영문 이름 (대문자로 표시)
    father: "서원욱",
    mother: "이창열",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김여정",
    nameEn: "Kim Yeojung",
    openingName: "Yeojung",
    father: "김정우",
    mother: "박미향",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-03-28",
    time: "11:00",
    venue: "서울대학교 교수회관",
    hall: "웨딩홀",
    address: "서울특별시 관악구 관악로 1 서울대학교 65동 교수회관",
    tel: "02-3285-2115",
    // 지도 버튼 링크. 비워두면 해당 버튼이 숨겨집니다. (티맵은 사용 안 함)
    mapLinks: {
      kakao: "https://place.map.kakao.com/11477726",
      naver: "https://naver.me/GSDAppGR",
      tmap: ""
    },
    // 오시는 길 안내
    //  - description: 일반 문장 (줄바꿈은 \n)
    //  - routes: 역 이름 꼬리표 + 설명
    //  - bullets: 점(•) 목록, { text, strong: true } 이면 굵게
    transportation: [
      {
        title: "대중교통",
        routes: [
          { label: "2호선 낙성대역", text: "4번 출구에서 GS주유소를 끼고 좌회전 후 우회전 → 제과점 앞에서 마을버스 2-1번 → '공동기기원' 정류장 하차" },
          { label: "2호선 서울대입구역", text: "3번 출구에서 5511번 버스 → '공동기기원' 정류장 하차" },
          { label: "신림선 관악산역", text: "1번 출구에서 5516번 버스 → '공동기기원' 또는 '교수회관입구' 정류장 하차" }
        ]
      },
      {
        title: "주차 안내",
        description: "교수회관 내 주차장 이용 가능\n(하객 주차권으로 2시간 무료)"
      },
      {
        title: "유의 사항",
        bullets: [
          "서울대입구역, 낙성대역에서 택시로 5~10분 소요됩니다.",
          "서울대 후문을 지나 기숙사 삼거리에서 왼쪽으로 올라오십시오.",
          "서울대 정문 진입 후 좌회전 – 직진 – 기숙사 삼거리에서 오른쪽 직진.",
          { text: "낙성대 근처의 호암교수회관이 아닙니다.", strong: true }
        ]
      }
    ]
  },

  // ── 예식 안내 카드 ──
  information: [
    {
      title: "[*]",
      description: "[*]"
    },
    {
      title: "[*]",
      description: "[*]"
    }
  ],

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로의 삶에 천천히 스며들어,\n어느새 가장 소중한 행복이 되었습니다.\n\n이제 우리의 내일을 나란히 그려가려 합니다.\n\n함께한 날들보다 더 많은 날들을 약속하는 이 봄,\n저희의 새로운 시작을 함께해 주시면 감사하겠습니다."
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "서규원", bank: "신한은행", number: "110-451-654907" },
      { role: "아버지", name: "서원욱", bank: "[*]", number: "[*]" },
      { role: "어머니", name: "이창열", bank: "[*]", number: "[*]" }
    ],
    bride: [
      { role: "신부", name: "김여정", bank: "[*]", number: "[*]" },
      { role: "아버지", name: "김정우", bank: "[*]", number: "[*]" },
      { role: "어머니", name: "박미향", bank: "[*]", number: "[*]" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "서규원 ♥ 김여정 결혼합니다",
    description: "2027년 3월 28일 일요일 오전 11시\n서울대학교 교수회관"
  },

  // ── 축하 전하기 (방명록) ──
  // 우리 구글 시트에 Apps Script를 웹 앱으로 배포한 뒤 /exec 주소를 입력하세요.
  // 비워두면 "축하글 기능을 준비 중입니다"로 표시됩니다.
  guestbook: {
    apiUrl: "https://script.google.com/macros/s/AKfycbx1oLctwHi5msaN2RIQLa4jfpgLoiak3GciXEyGfAbqOwHg40cRDOjjM2K6vAfQ9R6t/exec",
    pageSize: 5
  },

  // ── 참석 여부 전달 ──
  // 방명록과 같은 /exec 주소를 사용합니다. enabled를 false로 바꾸면 이 섹션이 숨겨집니다.
  // autoPrompt: true면 하객이 방명록을 지나 내려갈 때 입력 창이 저절로 뜨고, false면 버튼을 눌러야만 뜹니다.
  rsvp: {
    enabled: true,
    autoPrompt: false,
    apiUrl: ""
  },

  // ── 카카오톡 공유 ──
  // Kakao Developers에서 우리 앱의 JavaScript 키를 발급받아 입력하고,
  // 우리 GitHub Pages 주소를 카카오 앱 설정의 도메인에 등록해야 합니다.
  kakaoShare: {
    javascriptKey: "4677e6d32b86959c8a067d932bce8c9b",
    url: "https://rhinovibe.github.io/",
    // 카톡 썸네일: 오프닝 사진을 정사각형(1:1)으로 미리 자른 그림
    imageUrl: "https://rhinovibe.github.io/images/og/1.jpg?v=20261114-3",
    imageWidth: 800,
    imageHeight: 800,
    buttonTitle: "청첩장 보기"
  }
};
