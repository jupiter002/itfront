/*
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("fail");
  }, 1000);
});
myPromise
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("이건 무조건 출력");
  });
*/

const user = {
  id: 1,
  name: "아무개",
};

// async / await 비동기적 신호를 동기적으로 바꾼다

function fetchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then((response) => response.json());
}

async function checkName() {
  const user = await fetchUser();
  //   console.log(user);
  if (user.id === 1) {
    // console.log(user.name);
  }
}
// checkName();
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => data.userId)
  .then(function (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then(function (user) {
        console.log(user.name);
      });
  });

async function fetchUserName(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`); //fetch()는 비동기 방식이어서 response.json이 먼저 실행되서
  const post = await response.json();
  const userId = post.userId;
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
  return user.name;
}
fetchUserName(1).then(function (name) {
  console.log(name);
});
