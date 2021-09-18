const container = document.querySelector(".grid-container");
const cell = container.childNodes;

let n = 8; //for now, will add a user interface to this later
makeGrid(n);

function makeGrid(rows) {
    let idNumber = 0;
    for (let i = 1; i <= rows ** 2; i++) {
        let i = document.createElement("div");
        container.appendChild(i);
        i.className = "cell";
        idNumber += 1;
        i.id = "cell" + idNumber;
    }
}

container.style.setProperty('--grid-columns', n);
container.style.setProperty('--grid-rows', n);

cell.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.className = "colored";
    })
  })