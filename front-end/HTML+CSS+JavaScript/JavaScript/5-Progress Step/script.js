const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    //到顶了就会停留在最后一个元素
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//更新DOM
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      // 该圆索引是否小于当前活动值
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 处理进度条
  const actives = document.querySelectorAll(".active");

  //   console.log(actives.length, circles.length);
  //进度条
  //长度要取33%，66%，可以取圆的长度和有效长度，从中减去1来解决问题
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
