const ldsEllipsis = document.querySelector(".lds-ellipsis");
const coronaList = document.querySelector(".coronaList ul");
const remove = () => {
  const imgItem = document.querySelectorAll(".coronaList ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};

const loadCoronaData = async (date) => {
  remove();
  ldsEllipsis.classList.remove("off");
  // jquery : select, manipulation, ajax (explorer)
  // ios, android 동시에 사용 할 수 있게 만드는 프레임워크 react-native, flutter, angular, react, vue, (svelte)

  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=nd9T52S050FnwVNNghjYFj%2B%2BQfEHhhumJhgt9Hj7RfjitJxTjw7U%2BXz1hhusmOrO%2BYTsYrSy9HO49Wfb4BJmZA%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();

  const items = response.items;
  ldsEllipsis.classList.add("off");
  const sortedItems = _.sortBy(items, ["gubun"]); //원본을 훼손하지 않는 메서드
  // items.sort(function (a, b) {
  //   if (a.incDec > b.incDec) return 1;
  //   if (a.incDec === b.incDec) return 0;
  //   if (a.incDec < b.incDec) return -1;
  // });
  sortedItems.forEach((item, idx) => {
    // console.log(item.gubun + "====" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");

    region.textContent = item.gubun;
    incDec.textContent = item.incDec;
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
  gsap.from(".coronaList ul li", { scale: 0, duration: 0.5, stagger: 0.02 });
};
var picker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YY-MM-DD",
  onSelect: function (date) {
    // console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
picker.setDate(new Date());
// loadCoronaData("2023-05-30");
const numbers = [1, 11, 2, 3, 4, 5, 44, 8];
console.log(numbers.sort((a, b) => a - b));
const chars = [1, "a", 3, "b"];

console.log(chars.sort((a, b) => a - b));
//오름차순 정렬

//js에서 값을 정렬할때는 비교함수를 넣어줄것
// if (a > b) return 1;
// if (a === b) return 0;
// if (a < b) return -1;
const animals = ["chicken", "cat", "puppy"];
const MyAnimals = animals;
animals.push("camel");
console.log(MyAnimals); //참조형 변수는 주소를 참조하기 때문에 Myanimal가 camel이 추가된 결과를 보여준다

let a = 100;
let b = a;
a += 100;
console.log(b + "===" + a); //일반변수는 주소를 참조하지 않기 때문에 값이 바뀐 a의 결과를 출력하지 않는다

const person = { name: "아무개", age: "30" };
const person2 = { nickName: "마동석", ...person }; //...spread operator >> 새로운 배열에 값을 복사함
//배열 또는 객체의 원본을 훼손하지 않고 복사할때 많이 사용
person.name = "장동건";
console.log(person2); // 얕은 복사(shallow copy)
