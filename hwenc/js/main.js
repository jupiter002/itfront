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

//자바스크립트의 함수는 일급객체 : 함수를 변수에 할당할 수 있다
// 다른함수를 인자(argument)로 전달 받을 수있다.
// 다른함수의 결과로서 리턴 가능하다. 데이터 처럼 다룰 수 있다.

function bb() {
  //함수선언문 호출부터 가능
  console.log("함수 선언문입니다.");
}
const aa = () => console.log("함수 표현식이빈다");

bb();
aa();

const sum = (a, b) => a + b; // 한줄로 작성시에는 중괄호와 return생략가능
console.log(sum(110, 100));

//prettier-ignore 로 num의 소괄호 까지 생략가능
const double = (num) => num * 2;

// 화살표 함수 fat arrow function 자바 lamda

const contentList = document.querySelectorAll(".master-piece .contents li");

menu.forEach((item, idx) => {
  //익명함수, 쿨백함수
  item.addEventListener("mouseenter", () => {
    //console.log(idx + "번째 입니다.");
    contentList.forEach((item02, idx02) => {
      item02.classList.remove("on");
    });
    const target = document.querySelector(`.master-piece .contents li:nth-child(${idx + 1})`); //backtit
    target.classList.add("on");
  });
  item.addEventListener("mouseleave", () => {
    contentList.forEach((item02, idx02) => {
      item02.classList.remove("on");
    });
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
const swiper = new Swiper(".social .mask", {});
