console.log("rock-paper-sissors");

const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
let computerChoice = 0;
const resultList = document.querySelector(".result ul");

const appendItemn = function (className) {
  const appendItem = document.createElement("li");
  appendItem.classList.add(className);
  appendItem.textContent = className.subString(0, 1);
  resultList.appendChild(appendItem);
};

// console.log("🚀 ~ file: main.js:4 ~ computerList:", computerList);

const makeRandom = function () {
  computerList[2].style.display = "none";
  computerList[1].style.display = "none";
  computerList[0].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3); //난수 발생
  computerList[computerChoice].style.display = "block"; //발생한 난수로
};
//5번만 할 수 있는 게임
let i = 0;
let gameidx = 0;
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    clearInterval(computeridx);

    i++;
    console.log(i);
    if (i >= 5) {
      //   clearInterval(computeridx);
      clearTimeout(gameidx);
    } else {
      gameidx = setTimeout(() => {
        computeridx = setInterval(makeRandom, "300ms");
      }, 500);
    }

    //seTimeout(함수, 2000);

    if (idx === computerChoice) {
      appendItemn("draw");
    } else if (idx === 0 && computerChoice === 1) {
      appendItemn("lose");
    } else if (idx === 1 && computerChoice === 2) {
      appendItemn("lose");
    } else if (idx === 2 && computerChoice === 0) {
      appendItemn("lose");
    } else {
      appendItemn("win");
    }
  });
});
humanList[0].addEventListener("click", () => {
  clearInterval(computeridx);
});

let computeridx = setInterval(makeRandom, "300ms"); // !=clearInterval
makeRandom();
//setInterval로 함수를 반복할때는 함수명만 작성하고 소괄호는 생략할것

// console.log("🚀 ~ file: main.js:9 ~ computerChoice:", computerChoice);
// 0*3 < Math.random()*3 < 1*3
