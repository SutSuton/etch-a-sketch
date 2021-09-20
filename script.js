const container = document.querySelector(".grid-container");
let cell = container.childNodes;
const root = document.documentElement;

let n = 16
makeGrid(n);
enableDraw('black');

function getInputValue() {
  let n = document.getElementById("rows").value;
  if  (n < 1 || n > 100) alert("Please input a number between 1 and 100");
  else if (n != Math.floor(n)) alert("Input must be a whole number");
  else {
    clearGrid();
    makeGrid(n);
    enableDraw('black');
  }
}

function clearGrid() {
  container.innerHTML = "";
}

function makeGrid(rows) {
  container.style.setProperty('--grid-columns', rows);
  container.style.setProperty('--grid-rows', rows);
  for (let i = 1; i <= rows ** 2; i++) {
    let newCell = document.createElement("div");
    container.appendChild(newCell);
    newCell.className = "cell";
  }
}

function reset() {
  cell.forEach(item => {
    item.classList.remove("colored");
    item.className = "cell";
  })
}


function enableDraw(color) {
  cell.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.className = "colored";
      root.style.setProperty('--cell-color', color)
    })
  })
}
