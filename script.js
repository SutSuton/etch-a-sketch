const container = document.querySelector(".grid-container");


for (let i = 1; i <= 16; i++) {
    let i = document.createElement("div");
    container.appendChild(i);
    i.textContent = "hello";
    i.className = "cell";
}