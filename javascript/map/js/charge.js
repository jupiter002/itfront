const container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.541, 126.986), //지도의 중심좌표.
  level: 13, //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커 클러스터러를 생성합니다
const clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 13, // 클러스터 할 최소 지도 레벨
});

// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다
const content = `<div class="wrap">
          <div class="info">
              <div class="title">
                  카카오 스페이스닷원
                  <div class="close" onclick="closeOverlay()" title="닫기"></div>
              </div>
              <div class="body">
                  <div class="desc">
                      <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
                      <div class="type ellipsis"></div>
                  </div>
              </div>
          </div>
      </div>`;
// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
const overlay = new kakao.maps.CustomOverlay({
  content: content,
  //   map: map,
  //position: marker.getPosition(),
});

const searchChargePlace = async (place) => {
  console.log("🚀 ~ file: charge.js:47 ~ searchChargePlace ~ place:", place);

  clusterer.clear();
  const charge = await fetch(
    //비동기식을 async/await로 데이터가 불러오기전에 함수가 호출되는것을 방지함
    `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=1000&cond%5Baddr%3A%3ALIKE%5D=${place}&serviceKey=nd9T52S050FnwVNNghjYFj%2B%2BQfEHhhumJhgt9Hj7RfjitJxTjw7U%2BXz1hhusmOrO%2BYTsYrSy9HO49Wfb4BJmZA%3D%3D`
  );
  const response = await charge.json();
  const evChargeList = response.data;
  console.log("🚀 ~ file: charge.js:52 ~ searchChargePlace ~ evChargeList:", evChargeList);
  const markers = [];
  evChargeList.forEach((item, idx) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(item.lat, item.longi),
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);
      overlay.setPosition(marker.getPosition());
      overlay.setContent(
        `<div class="wrap">
      <div class="info">
          <div class="title">
              ${item.csNm}
              <div class="close" onclick="closeOverlay()" title="닫기"></div>
          </div>
          <div class="body">
              <div class="desc">
                  <div class="ellipsis">${item.addr}</div>
                  <div class="type ellipsis">${item.cpNm}</div>
              </div>
          </div>
      </div>
  </div>`
      );
      map.setCenter(marker.getPosition());
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    function closeOverlay() {
      overlay.setMap(null);
    }
    markers.push(marker);
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다

    // 클러스터러에 마커들을 추가합니다
  });
  clusterer.addMarkers(markers);
};

//searchChargePlace("서울");
const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "Enter" || e.keycode === 13) {
    searchChargePlace(search.value);
  }
});
function closeOverlay() {
  overlay.setMap(null);
}
