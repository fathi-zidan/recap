// Get the world div
const worldDiv = document.getElementById("world");

// Number of rows and columns
const numRows = 15;
const numCols = 20;

// Function to create the grid
function createWorldGrid(numRows, numCols) {
  for (let i = 0; i < numRows; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < numCols; j++) {
      // Create a new grid item
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.id = `tile-${i}-${j}`;

      // Append the grid item to the row
      row.appendChild(gridItem);
    }

    // Append the row to the world div
    worldDiv.appendChild(row);
  }
}

// Call the function to create the grid
createWorldGrid(numRows, numCols);
