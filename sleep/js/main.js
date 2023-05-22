const gnbList = document.querySelectorAll(".gnb .list > li");
gnbList.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    header.classList.add("on");
  });
});
header.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});

new Swiper(".media .mask", {
  slidesPerView: "auto",
  centeredSlide: true,
  spaceBetween: 20,
  loop: true,
});
