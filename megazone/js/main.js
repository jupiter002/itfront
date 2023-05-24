Splitting();
AOS.init();

const header = document.querySelector(".header");
//header.classList.add("on");
// html과 js가 잘 연결되어 있는지 확인하려면
//브라우저에서 개발자도구의 network을 볼것
console.log(header);
//사용자가 scroll을 해서 스크롤의 높이가 0보다 커지면 on을 켠다

window.addEventListener("scroll", () => {
  // event매개변수
  const Y = window.scrollY;

  console.log(Y);

  if (Y > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

gsap.from(".main-visual .content .txt .char", { y: 100, opcaity: 0, ease: "power3", duration: 1, delay: 1 });

new Swiper(".service .mask", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    prevEl: ".service .mask .btn-prev",
    nextEl: ".service .mask .btn-next",
  },
  pagination: {
    el: ".service .mask .pagination",
    clickable: true,
  },
});

new Swiper(".partner .brand", {
  slidesPerView: "auto",
  speed: 1000,
  loop: true,
  loopedSlides: 5,

  autoplay: {
    delay: 10,
    disableOnInteraction: false,
  },
});

new Swiper(".recruit .txt-box .rolling", {
  direction: "vertical",
  effect: "slide",
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 2000,
    reverseDirection: false,
  },
}); //Swiper생성자안에는 swiper-wrapper의 부모클래스를 넣는다.
