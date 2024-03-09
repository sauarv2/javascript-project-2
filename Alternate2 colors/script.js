const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const myBoxEl = document.getElementById("my_box");

//  need toa add function  name/..........
startEl.addEventListener("click", changeColor);
stopEl.addEventListener("click", stopchageColor);

let AnimeId;

function changeColor() {
  // check if an interval has already been set up
  if (!AnimeId) {
    AnimeId = setInterval(chageBox, 1000);
  }
}

function chageBox() {
  myBoxEl.className = myBoxEl.className === "go" ? "stop" : "go";
}

function stopchageColor() {
  clearInterval(AnimeId);
  AnimeId = null;
}
