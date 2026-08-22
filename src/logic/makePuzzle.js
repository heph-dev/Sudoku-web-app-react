import solve from "./solver.js";


// Removes values from grid to make it a puzzle
function createPuzzle(grid, missing_spaces) {
    let puzzle_grid = grid.map(row => [...row]);
    
    for(let i = 0; i < missing_spaces; i++) {
        const row = Math.floor(Math.random() * 9);
        const column = Math.floor(Math.random() * 9);
        const num = puzzle_grid[row][column];

        if(puzzle_grid[row][column] == " ") {
            i--;
        }
        else {
            puzzle_grid[row][column] = " ";
            let amount_of_solutions = solve(puzzle_grid);
            if(amount_of_solutions != 1) {
                puzzle_grid[row][column] = num;
                i--;
            }
        }
    }

    return puzzle_grid;
}