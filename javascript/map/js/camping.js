const camping = document.querySelector(".camping");
const mapContainer = document.querySelector(".map"); // 지도를 표시할 div
const search = document.querySelector(".input");
mapOption = {
  center: new kakao.maps.LatLng(37.541, 126.986), // 지도의 중심좌표
  level: 13, // 지도의 확대 레벨
};

const map = new kakao.maps.Map(mapContainer, mapOption);

const clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 13, // 클러스터 할 최소 지도 레벨
});

let coords;

var geocoder = new kakao.maps.services.Geocoder();
geocoder.addressSearch(function (result, status) {
  // 정상적으로 검색이 완료됐으면

  if (status === kakao.maps.services.Status.OK) {
    coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    // const marker = new kakao.maps.Marker({
    //   map: map,
    //   position: coords,
    // });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:6px 0;"></div>',
    });
    infowindow.open(map, marker);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  }
});
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keycode === 13) {
  }
});
const searchcampingplace = async (place) => {
  const request = await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=camping&serviceKey=nd9T52S050FnwVNNghjYFj%2B%2BQfEHhhumJhgt9Hj7RfjitJxTjw7U%2BXz1hhusmOrO%2BYTsYrSy9HO49Wfb4BJmZA%3D%3D&_type=json&keyword=%EA%B8%80%EB%9E%A8%ED%95%91`
  );
  const response = await request.json();
  const campingList = response.response;
  console.log("🚀 ~ file: camping.js:14 ~ searchcampingplace ~ campingList:", campingList);
  const markers = [];
  campingList.forEach((item, idx) => {
    const marker = new kakao.maps.Marker({
      //   map: map,
      //   position: coords,
    });
  });
};
searchcampingplace();
