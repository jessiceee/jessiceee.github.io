// const sliderData = [
//   { url: "../upload/focus1.png" },
//   { url: "../upload/recom_03.jpg" },
//   { url: "../upload/q.jpg" },
//   { url: "../upload/q1.jpg" },
// ];

// const slider = document.querySelector(".focus");

// let i = 0; // 信号量 控制图片的张数

// //开启定时器
// setInterval(function () {
//   i++;
//   if (i >= sliderData.length) {
//     i = 0;
//   }
//   slider.style.backgroundImage.src = sliderData[i].url;

//   document.querySelector(".focus .li-active").classList.remove("li-active");

//   document
//     .querySelector(`.focus ul li:nth-child(${i + 1})`)
//     .classList.add("li-active");
// }, 1000);

const sliderData = [
  { url: "./upload/focus1.png" },
  { url: "./upload/focus2.jpg" },
  { url: "./upload/focus3.jpg" },
  { url: "./upload/focus4.jpg" },
  { url: "./upload/focus2.jpg" },
];

let focus = document.querySelector(".focus img");
let slider = document.querySelector(".focus ul ");

// console.log(focus.src)

let i = 0; // 信号量 控制图片的张数

//切换图片
function toggle() {
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }

  // console.log(focus.style.background.url)
  // console.log(sliderData[i].url)
  focus.src = sliderData[i].url;

  document.querySelector(".focus .li-active").classList.remove("li-active");

  document
    .querySelector(`.focus ul li:nth-child(${i + 1})`)
    .classList.add("li-active");
}

let timer = setInterval(toggle, 1800);

//鼠标停留，停止更换
focus.addEventListener("mouseenter", function () {
  clearInterval(timer);
});

focus.addEventListener("mouseleave", function () {
  timer = setInterval(toggle, 2000);
});
