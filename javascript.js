const container = document.querySelector(".container")

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
        cell.addEventListener("mouseover",() => {
            cell.classList.add("hover")
        });
    }
}

makeGrid(16)
