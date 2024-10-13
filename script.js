// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const table = document.getElementById('grid');
    const newRow = document.createElement('tr');
    
    // new cells
    for (let i = 0; i < numCols; i++) {
        const newCell = document.createElement('td');
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        newRow.appendChild(newCell);
    }

    // If it's the first row, set initial column count
    if (numCols === 0) {
        const newCell = document.createElement('td');
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        newRow.appendChild(newCell);
        numCols = 1;
    }

    table.appendChild(newRow);
    numRows++;
}

// Add a column
function addC() {
    const table = document.getElementById('grid');
    const rows = table.getElementsByTagName('tr');

    // add new cells
    for (let row of rows) {
        const newCell = document.createElement('td');
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        row.appendChild(newCell);
    }

    if (numRows === 0) {
        addR();
    } else {
        numCols++;
    }
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        const table = document.getElementById('grid');
        table.deleteRow(-1); // Delete the last row
        numRows--;
        
        // Reset columns if no rows left
        if (numRows === 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        const table = document.getElementById('grid');
        const rows = table.getElementsByTagName('tr');

        // Remove the last cell in each row
        for (let row of rows) {
            row.deleteCell(-1);
        }

        numCols--;

        // Reset rows if no cols
        if (numCols === 0) {
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill uncolored
function fillU() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        if (cell.style.backgroundColor === '' || cell.style.backgroundColor === 'white') {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all
function fillAll() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all
function clearAll() {
    const cells = document.getElementsByTagName('td');
    for (let cell of cells) {
        cell.style.backgroundColor = 'white';
    }
}