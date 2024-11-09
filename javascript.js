function makeColumns(colNum) {
    const container = document.querySelector(".container");

    for (i = 0; i < colNum; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

function makeRows(rowNum) {
    container = document.querySelector(".container");

    for (j = 0; j < rowNum; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }
}

// makeColumns(4)
// makeRows(4)