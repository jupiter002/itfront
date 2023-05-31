// ajax(asynchronous javascript and xml)
// console.log("01");
// console.log("02");
// setTimeout(()=>{
//   console.log("03");

// });

const thumbsList = document.querySelector(".thumbs-box ul");
const search = document.querySelector(".search");
const btnSearch = document.querySelector(".btn-search");
search.addEventListener("keyup", (e) => {
  //엔터키 눌렀을때 이미지 불러오기
  if (e.key === "Enter" || e.Keycode === 13) {
    searchword = search.value; //apple
    searchImg(searchword);
  }
});

btnSearch.addEventListener("click", (e) => {
  //엔터키 눌렀을때 이미지 불러오기
  searchword = search.value; //apple
  searchImg(searchword);
});

const removeItem = () => {
  //이미지 불러올때마다 이미지리스트 초기화
  const imgItem = document.querySelectorAll(".thumbs-box ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};

const searchImg = async (searchword) => {
  // 기존 이미지 없애기...li태그 없애기
  // promise   홍대역 8번출구() //약속이 이행되면 >fullfield 약속이 이행도지 않으면> rejected
  removeItem();
  const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/image?query=apple${searchword}`, {
    headers: { Authorization: "KakaoAK 0cb3626cfd41cc904af909ce97391d0a" },
  });
  const imgJson = await imgResponse.json();
  const imgList = imgJson.documents;
  // .catch(function (error) {
  //   console.log(error);
  // })
  imgList.forEach(function (item, idx) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.thumbnail_url; // 작은 이미지 파일경로
    const a = document.createElement("a");
    a.href = item.image_url; // 큰 이미지 파일경로
    a.setAttribute("data-fancybox", "gallery");
    a.append(img);
    li.append(a);
    thumbsList.append(li);
  });
  gsap.from(".thumbsList li", { scale: 0, duration: 2, stagger: 0.02 });
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });
};
