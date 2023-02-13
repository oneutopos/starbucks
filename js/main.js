////전역뱃지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //상단버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }
  else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //상단버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  };
}, 300)); //ms단위로 부하를 줘서 함수가 한번에 다수 반복되지 않도록 함

//상단뱃지
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0     //스크롤의 위치를 0px로 옮김
  })
});

//// 이미지 페이드인 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, .4, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});

//// 슬라이드
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,     //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이게
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination : {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',  //전 버튼
    nextEl : '.promotion .swiper-next'   //후 버튼
  }
})

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next' 
  }
})

//// 구역 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  if(isHidePromotion)
    promotionEl.classList.remove('hide');
  else
    promotionEl.classList.add('hide');
  
  isHidePromotion = !isHidePromotion;
});

//// 반복 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {  //요소, 시간(1.5~2.5초 사이 랜덤하게 애니메이션 동작), 옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),   //랜덤 시간 딜레이(0~delay초 사이) 후에 시작
  });
};

//실행
floatingObject('.floating1', 1, 15); 
floatingObject('.floating2', .5, 15); 
floatingObject('.floating3', 1.5, 20); 


//// 스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  //아래 명령으로 특정 요소가 보이면 애니메이션을 도입할 수 있음
  //new ScrollMagic.Scene().setClassToggle().addTo();  
    //Scene() : 특정 요소를 감시하는 옵션을 지정해주는 함수
    //setClassToggle() : HTML의 클래스 속성을 제어(토글이니까 '추가,삭제')하는 함수
    //addTo() : js가 필요한 컨트롤러라는 개념을 추가하기 위해 사용하는 함수
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소
      triggerHook: .8         //뷰포트가 시작하는 윗부분이 0, 끝나는 아랫부분이 1.
                              //감시하는 요소가 훅 지점에서 보여지면 아래의 setClassToggle을 실행함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());  //컨트롤러 추가
})


