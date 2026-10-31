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
 * ※ 사진은 아직 친구 청첩장 사진 그대로입니다. 공개 전에 반드시 교체하세요.
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 이미지 리소스 ──
  // 사진 교체 시 count를 실제 파일 수에 맞춰 주세요.
  images: {
    gallery: {
      count: 21,
      thumbPath: "images/gallery/thumb",
      displayPath: "images/gallery/display",
      fullPath: "images/gallery/full"
    }
  },

  // ── 메인 (히어로) ──
  groom: {
    name: "서규원",
    nameEn: "Seo Kyuwon",
    openingName: "Kyuwon",   // 첫 화면에 크게 나오는 영문 이름
    father: "서원욱",
    mother: "이창열",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김여정",
    nameEn: "Kim Yeojeong",
    openingName: "Yeojeong",
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
    tel: "[*]",
    // 지도 버튼 링크. 비워두면 해당 버튼이 숨겨집니다. (티맵은 사용 안 함)
    mapLinks: {
      kakao: "https://place.map.kakao.com/11477726",
      naver: "https://naver.me/GSDAppGR",
      tmap: ""
    },
    transportation: [
      {
        title: "셔틀버스",
        description: "[*]"
      },
      {
        title: "지하철·버스",
        description: "2호선 서울대입구역 3번 출구에서 5511번 버스 승차 후 '공동기기원' 하차\n신림선 관악산역 1번 출구에서 5516번 버스 승차 후 '공동기기원' 또는 '교수회관입구' 하차"
      },
      {
        title: "주차 안내",
        description: "서울대학교 교내 주차장을 이용하실 수 있으며,\n하객 주차권으로 2시간 무료 주차가 가능합니다."
      },
      {
        title: "유의 사항",
        description: "낙성대역 인근의 '호암교수회관'과는 다른 곳이니\n오실 때 꼭 확인해 주세요."
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
    content: "[*]"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "서규원", bank: "[*]", number: "[*]" },
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
    description: "2027년 3월 28일 일요일 오전 11시, 서울대학교 교수회관"
  },

  // ── 축하 전하기 (방명록) ──
  // 우리 구글 시트에 Apps Script를 웹 앱으로 배포한 뒤 /exec 주소를 입력하세요.
  // 비워두면 "축하글 기능을 준비 중입니다"로 표시됩니다.
  guestbook: {
    apiUrl: "",
    pageSize: 5
  },

  // ── 참석 여부 전달 ──
  // 방명록과 같은 /exec 주소를 사용합니다. 비워두면 이 섹션은 숨겨집니다.
  rsvp: {
    enabled: true,
    apiUrl: ""
  },

  // ── 카카오톡 공유 ──
  // Kakao Developers에서 우리 앱의 JavaScript 키를 발급받아 입력하고,
  // 우리 GitHub Pages 주소를 카카오 앱 설정의 도메인에 등록해야 합니다.
  kakaoShare: {
    javascriptKey: "4677e6d32b86959c8a067d932bce8c9b",
    url: "https://rhinovibe.github.io/",
    imageUrl: "https://rhinovibe.github.io/images/og/1.jpg",
    buttonTitle: "청첩장 보기"
  }
};
