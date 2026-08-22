export function getValidGrid() {

    let grid = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Loop through enitre grid
    for(let row = 0; row < 9; row++) {
        
        for(let column = 0; column < 9; column++) {

            if(grid[row][column] == " ") {

                let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                
                // Shuffle numbers for randomness
                for (let i = numbers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                }

                // Loop throw the numbers to check if there are valid to put in a specific cell, and then puts them
                // Backtracks if not
                for(let num of numbers) {

                    if(isNumValid(row, column, grid, num)) {
                        grid[row][column] = num;
                        if(getValidGrid(grid)) {

                            // Returns true when Grid is complete
                            return true;
                        }
                        grid[row][column] = " ";
                    }

                }

                // Returns false if no number is valid to put in a specific cell
                return false;
            }
        }
    }

    // Returns true when Grid is complete
    return true;
}

// Check if Number is valid to put in a specific cell
export function isNumValid(row, column, grid, num) {
    let in_row;
    let in_column;
    let in_subgrid;

    // Check if the num is in the row already
    if(grid[row] != undefined) {
        in_row = grid[row].includes(num);
    }
    else in_row = false;

    // Check if the num is in the column already
    in_column = grid.some(subArray => subArray[column] == num);

    // Check if the num is in the subgrid already
    in_subgrid = inSubgrid(row, column, grid, num); 

    // Checks if number already exists in row, column and subgrid
    if(in_row == false && in_column == false && in_subgrid == false) {
        return true;
    }
    else return false;
      
}

// Check if the number is in a specific subgrid
function inSubgrid(row, column, grid, num) {
    const startRow = Math.floor(row / 3) * 3;
    const startColumn = Math.floor(column / 3) * 3;

    for(let i = startRow; i < startRow + 3; i++) {
        for(let j = startColumn; j < startColumn + 3; j++) {
            if(num == grid[i][j]) {
                return true;
            }
        }
    }
    return false;
} 