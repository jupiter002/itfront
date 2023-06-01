const camping = document.querySelector(".camping");
const mapContainer = document.querySelector(".map"); // 지도를 표시할 div
const search = document.querySelector(".input");
mapOption = {
  center: new kakao.maps.LatLng(37.541, 126.986), // 지도의 중심좌표
  level: 13, // 지도의 확대 레벨
};

const map = new kakao.maps.Map(mapContainer, mapOption);
var geocoder = new kakao.maps.services.Geocoder();
search.addEventListener("keyup",(e)=>{
if(e.key==="Enter",)

})



geocoder.addressSearch("서울시 관악구 남부순환로 1820 에그옐로우빌딩 14층", function (result, status) {
  // 정상적으로 검색이 완료됐으면
  let coords;

  if (status === kakao.maps.services.Status.OK) {
    coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    const marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:6px 0;"></div>',
    });
    infowindow.open(map, marker);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  }
});

const searchcampingplace = async (place) => {
  const request = await fetch(
    `https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=camping&serviceKey=nd9T52S050FnwVNNghjYFj%2B%2BQfEHhhumJhgt9Hj7RfjitJxTjw7U%2BXz1hhusmOrO%2BYTsYrSy9HO49Wfb4BJmZA%3D%3D&_type=json&keyword=%EA%B8%80%EB%9E%A8%ED%95%91`
  );
  const response = await request.json();
  const campingList = await response.response;
  console.log("🚀 ~ file: camping.js:14 ~ searchcampingplace ~ campingList:", campingList);
  const markers = [];
  campingList.forEach((item, idx) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });
  });
};
searchcampingplace();
