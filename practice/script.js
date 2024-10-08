let btns = document.querySelectorAll(".btn");
let btnReset = document.querySelector(".reset");
let msgBlock = document.querySelector(".mshBlock");
let msg = document.querySelector(".msgWinner");
let btnStartGame = document.querySelector(".startNew");

let turnO = true;

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//  put the value of click on every buttons and change turn
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

// check winner
const checkWinner = () => {
  for (let pattern of winningPattern) {
    let posiVal1 = btns[pattern[0]].innerText;
    let posiVal2 = btns[pattern[1]].innerText;
    let posiVal3 = btns[pattern[2]].innerText;
    if (posiVal1 != "" && posiVal2 != "" && posiVal3 != "")
      if (posiVal1 === posiVal2 && posiVal2 === posiVal3) {
        showWinner(posiVal1);
        btnDisable();
      }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation the winner is "${winner}"`;
  msgBlock.classList.remove("hide");
};

// to disable btn

const btnDisable = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

// to enable btn
const btnEnable = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

//  reset the game
const resetGame = () => {
  turnO = true;
  msgBlock.classList.add("hide");
  btnEnable();
};

btnReset.addEventListener("click", resetGame);
btnStartGame.addEventListener("click", resetGame);
