const sliderData = [
  { url: "./upload/focus1.png" },
  { url: "./upload/focus2.jpg" },
  { url: "./upload/focus3.jpg" },
  { url: "./upload/focus4.jpg" },
  { url: "./upload/focus2.jpg" },
];

// console.log(sliderData[0].id);

let focus = document.querySelector(".focus img");
let slider = document.querySelector(".focus ul ");

// console.log(focus.src)

slider.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.tagName === "LI") {
    document.querySelector(".focus .li-active").classList.remove("li-active");
    e.target.classList.add("li-active");

    // console.log(e.target.dataset.id);
    const j = +e.target.dataset.id;
    focus.src = sliderData[j].url;
    clearInterval(timer);
  }
});

// let i = 0; // 信号量 控制图片的张数

//切换图片
function toggle() {
  let i = +document.querySelector(".focus .li-active").dataset.id;
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }

  focus.src = sliderData[i].url;

  document.querySelector(".focus .li-active").classList.remove("li-active");

  document
    .querySelector(`.focus ul li:nth-child(${i + 1})`)
    .classList.add("li-active");
}

//定时器
let timer = setInterval(toggle, 1800);

//鼠标停留，停止更换
focus.addEventListener("mouseenter", function () {
  clearInterval(timer);
});

focus.addEventListener("mouseleave", function () {
  timer = setInterval(toggle, 2000);
});
