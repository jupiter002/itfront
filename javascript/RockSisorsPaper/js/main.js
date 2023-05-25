//1. computer li 2개중에 하나만 보이게 하기...
//2. 밑에 human li에 클릭 이벤트 생성
//3. computer li를 무작위 나오게 setInterval만들기
//4. human li 클릭했을때 멈추게 하기. clearInerval
//5. 승패 확인하기

const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const li = document.createElement("li");
resultList.append(li);
li.textContent = "w";
li.classList.add("win");
let computerChoice = 0;

const makeRandom = function () {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3); //0~1
  computerList[computerChoice].style.display = "block";
};

const computeridx = setInterval(makeRandom, 100);
makeRandom();

humanList.forEach((item, idx) => {
  item.addEventListener("click", function () {
    clearInterval(computeridx);
    if (computerChoice === idx) {
      console.log("draw");
    } else if ((computerChoice === 0 && idx === 1) || (computerChoice === 1 && idx === 2) || (computerChoice === 2 && idx === 0)) {
      console.log("win");
    } else {
      console.log("lose");
    }
  });
});

// humanList[0].addEventListener("click", function () {
//   clearInterval(computeridx);
//   if (computerChoice === 0) {
//     console.log("draw");
//   } else if (computerChoice === 1) {
//     console.log("lose");
//   } else if (computerChoice === 2) {
//   }
// });
