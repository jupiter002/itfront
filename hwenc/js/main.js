// const menu01 = document.querySelector(".master-piece .menu li:nth-child(1)");
// menu01.addEventListener("click", function () {
//   // 익명함수 : 선언만 되어있고 사용자가 이벤트를 발생시킬때 나중에 호출된다. callback함수
//   alert("menu01을 눌렀습니다");
// });

// const menu02 = document.querySelector(".master-piece .menu li:nth-child(2)");
// menu01.addEventListener("click", callFunc); // 기명함수 : () 소괄호를 쓰면 이벤트를 발생시키전에 호출됨

// const menu03 = document.querySelector(".master-piece menu li:nth-child(3)");
// menu03.addEventListener("click", fucntion){
//     alert{}
// }
// function callFunc() {
//   console.log("함수를 실행합니다.");
// }
// callFun();

const header = document.querySelector(".header");
const menu = document.querySelectorAll(".master-piece .menu li");
const gnbList = document.querySelectorAll(".gnb .list > li");
gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});
// 진짜 배열은 아님. 그러므로 배열의 메소드는 쓸 수 없음.
//console.log(menu);
// for (let i = 0; i <= menu.length; i++) {
//   menu[i].addEventListener("click", function () {
//     alert(i + 1 + "번째 입니다.");
//   });
// }

const fruits = ["apple", "melon", "peach"];
