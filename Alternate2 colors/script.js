const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const myBoxEl = document.getElementById("my_box");

//  need toa add function  name/..........
startEl.addEventListener("click", changeColor);
stopEl.addEventListener("click", stopchageColor);

let AnimeId;
let op = true;

function changeColor() {
  // check if an interval has already been set up
  if (!AnimeId) {
    AnimeId = setInterval(chageBox, 1000);
  }
}

function chageBox() {
  // myBoxEl.className = myBoxEl.className === "go" ? "stop" : "go";
    if (op) {
    myBoxEl.className = "go";
    boxx.className = "goA";
    op = !op;
  } else if (!op) {
    myBoxEl.className = "stop";
    boxx.className = "goB";

    op = true;
  }
  
}

function stopchageColor() {
  clearInterval(AnimeId);
  AnimeId = null;
}
