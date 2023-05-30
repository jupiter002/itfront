//1.주어진 단어를 하나 만든다. 배열에다 값을 넣고 그 중에 하나 골라서 뿌리기
const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");

const wordArray = []; //배열은 주소를 참조한다  reference
const firstWords = ["강아지", "소나기", "기함", "함구", "구관조"];
let rnd = Math.floor(Math.random() * firstWords.length);
const firstWord = firstWords[rnd];

wordArray.push(firstWord);

const appendWord = (inputWord) => {
  // word-list 안에 ul 안에 li를 생성하는 메서드
  const li = document.createElement("li");
  li.textContent = inputWord; // textContent: li태그안에 글자를 집어넣는 메서드
  wordList.append(li);
  wordArray.push(inputWord);
};
appendWord(firstWord);

const fault = () => {
  word.value = "";
  gsap.from(".input-box", { x: 200, duration: 0.5, ease: "elastic.out(1, 0.3)" }); //to from
};

//2. word에 글자를 입력하고 enter쳤을때 입력받은 첫 글자와 마지막 단어의 마지막글자를 대조할것

word.addEventListener("keyup", (e) => {
  //키보드를 눌렀다 뗐을 때 발생하는 이벤트
  console.log(e);
  if (e.key === "Enter" || e.keycode === 13) {
    if (word.value.length !== 3) {
      // console.log(word.value.substring(2, 3));
      // console.log(word.value.charAt(2));
      fault();
      return;
    }
    const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
    const lastChar = lastWord.substring(2); //  subString(index, index1): index부터 index1전 까지의 문자열을 반환한다.
    // console.log(lastWord + "===" + lastChar);
    if (word.value.substring(0, 1) !== lastChar) {
      fault();
      console.log(lastWord);
      console.log(lastChar);
      return;
    }
    if (wordArray.includes(word.value)) {
      fault();
      return;
    }
    fetch(`https://opendict.korean.go.kr/api/search?key=E2AF70816C36FFB716413DEB16095E5B&q=${word.value}&req_type=json`) //  요청변수 입력해줄때는 ?로 시작
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.channel.total <= 0) {
          fault();
          word.value = "";
        } else {
          appendWord(word.value);
          word.value = "";
        }
      });
  }
});

//배열을 하나 만듬
//배열에 중복을 따져서 중복이 아니면 값을 입력

// const checkDic = (question) => {
// fetch(`https://opendict.korean.go.kr/api/search?key=E2AF70816C36FFB716413DEB16095E5B&q=${question}&req_type=json`) //  요청변수 입력해줄때는 ?로 시작
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     // console.log(data.channel.total);
//     return data.channel.total;
//   });
// };
