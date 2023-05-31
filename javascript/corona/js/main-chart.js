const ldsEllipsis = document.querySelector(".lds-ellipsis");
const coronaList = document.querySelector(".coronaList ul");

const remove = () => {
  const imgItem = document.querySelectorAll(".chart");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};

const loadCoronaData = async (date) => {
  ldsEllipsis.classList.remove("off");
  // jquery : select, manipulation, ajax (explorer)
  // ios, android 동시에 사용 할 수 있게 만드는 프레임워크 react-native, flutter, angular, react, vue, (svelte)

  const corona = await fetch(
    //서버에 있는 코로나 확진자 데이터를 가져옴
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=nd9T52S050FnwVNNghjYFj%2B%2BQfEHhhumJhgt9Hj7RfjitJxTjw7U%2BXz1hhusmOrO%2BYTsYrSy9HO49Wfb4BJmZA%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json(); //json으로 변환

  const items = response.items;
  ldsEllipsis.classList.add("off"); //ldsEllipsis에 off클래스 추가

  const cities = [];
  const values = [];
  const sortedItems = _.sortBy(items, ["gubun"]); //원본을 훼손하지 않는 메서드

  sortedItems.forEach((item, idx) => {
    cities.push(item.gubun);
    values.push(item.incDec);
  });
  makeChart(cities, values);
};

var picker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    // console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
picker.setDate(new Date());
let myChart = null;
const makeChart = (cities, values) => {
  //차트 라이브러리 Chart.js
  const ctx = document.querySelector(".chart");

  if (myChart !== null) myChart.destroy();
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: cities,
      datasets: [
        {
          label: "# of Votes",
          data: values,
          borderWidth: 1,
          backgroundColor: ["#9BD0F5", "#ff00cc", "#ccff33"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
