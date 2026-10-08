const container = document.querySelector(".container");
const newButton = document.querySelector("button");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide){
    container.textContent = "";
    const cellSizePercentage = 100/squaresPerSide;
    const totalCells = squaresPerSide * squaresPerSide;

    for(let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flex = `0 0 ${cellSizePercentage}%`;
        cell.style.height = `${cellSizePercentage}%`;

        // Track the darkening steps (0 to 10)
        cell.dataset.darkness = "0";

        container.appendChild(cell);

        cell.addEventListener("mouseenter", () => {
            let myColor = parseInt(cell.dataset.darkness);

            if (myColor === 0) {
                cell.style.backgroundColor = getRandomColor();
            }

            // Progressively darken up to 10 passes
            if (myColor < 10) {
                myColor++;
                cell.dataset.darkness = myColor;
            
            // Reduces brightness by 10% each time (100% -> 90% -> 80% ... -> 0%)
            let brightnessValue = 100 - (myColor * 10);
            cell.style.filter = `brightness(${brightnessValue}%)`;
            }
        });
    }
}

newButton.addEventListener("click", () => {
    let input = prompt("Enter the number of squares(Max:100): ");
    let newSize = parseInt(input);
    if(Number.isInteger(newSize) && (newSize > 0 || newSize < 100)) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.")
    }
})

createGrid(16);