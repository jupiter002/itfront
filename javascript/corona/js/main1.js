const thumbList = document.querySelector(".thumbList");
const search = document.querySelector(".search");
const btnSearch = document.querySelector(".btn-search");

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keycode === 13) {
    searchword = search.value;
    searchImg(searchword);
  }
});
btnSearch.addEventListener("click", (e) => {
  searchword = search.value;
  searchImg(searchword);
});

const searchImg = async (searchword) => {
  removeItem();
  const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/image?query=apple${searchword}`, {
    headers: { Authorization: "KakaoAK 0cb3626cfd41cc904af909ce97391d0a" },
  });
  const imgJson = await imgResponse.json();
  const imgList = imgJson.documents;

  imgList.foreach(function (item, idx) {
    const li = document.createElement("li");
    const img = documnet.createElement("img");
    img.src = item.thumbnail_url;
    const a = document.createElement("a");
    a.href = item.image_url;
    a.setAttribute("data-fancy", "gallery");
    a.append(img);
    li.append(a);
    thumbList.append(li);
  });
  gsap.from("thumbList li ", { scale: 0, duration: 2, stagger: 0.02 });
  Fancybox.bind(`[data-fancybox="gallery"]`, {});
};
