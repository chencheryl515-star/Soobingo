const tasks = [
  "Aerobics","看电影","收拾","早睡","听播客",
  "看书","游戏","采购食材","Loin","释放",
  "AO","Language","丢垃圾","洗漱","吃维生素",
  "洗碗","看剧","拉伸","收衣服","Mange",
];

let state = Array(25).fill(false);

const bingo = document.getElementById("bingo");
const progressInner = document.getElementById("progress-inner");
const progressText = document.getElementById("progress-text");

function render() {
  bingo.innerHTML = "";
  tasks.forEach((task, i) => {
    const cell = document.createElement("div");
    cell.className = "cell" + (state[i] ? " done" : "");
    cell.textContent = task;
    cell.onclick = () => toggle(i);
    bingo.appendChild(cell);
  });

  updateProgress();
}

function toggle(i) {
  state[i] = !state[i];
  render();
}

function updateProgress() {
  const done = state.filter(x => x).length;
  const percent = done * 4; // 25 格，每格 4%
  progressInner.style.width = percent + "%";
  progressText.textContent = percent + "%";
}

document.getElementById("reset").onclick = () => {
  state = Array(25).fill(false);
  render();
};

document.getElementById("random").onclick = () => {
  tasks.sort(() => Math.random() - 0.5);
  render();
};

render();
