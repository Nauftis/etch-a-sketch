const container = document.querySelector(".container")
const gridSizeBtn = document.querySelector("button")

gridSizeBtn.addEventListener("click", () => {
    let input = prompt("Enter desired squares per side:");
    while (input > 100) {
        input = prompt("Squares per side have a max. of 100");
    };
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeGrid(input);
});


function makeGrid(cellNum) {
    for (let i = 0; i < cellNum; i++) {
        makeRows(cellNum)
    }
}

function makeRows(cellNum) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    // add cells into row
    for (let i = 0; i < cellNum; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        // register mouse event handler
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hover")
        });
    }
}

makeGrid(32)