const container = document.querySelector(".grid-container");

let n = 10;

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

//function changeColor() {
//    cell.style.setProperty('--cell-color', 'blue');
//}

const cell = document.querySelector(".cell");

cell.addEventListener('mouseover', e => {
    cell.style.setProperty('--cell-color', 'blue');
    console.log('hey');
});