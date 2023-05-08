const sliderData = [
  { url: "../upload/focus1.png" },
  { url: "../upload/recom_03.jpg" },
  { url: "../upload/q.jpg" },
  { url: "../upload/q1.jpg" },
];

const slider = document.querySelector(".focus");

let i = 0; // 信号量 控制图片的张数

//开启定时器
setInterval(function () {
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }
  slider.style.backgroundImage.src = sliderData[i].url;

  document.querySelector(".focus .li-active").classList.remove("li-active");

  document
    .querySelector(`.focus ul li:nth-child(${i + 1})`)
    .classList.add("li-active");
}, 1000);
