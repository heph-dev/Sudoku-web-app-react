import { isNumValid } from "./generator.js";


function solve(puzzle_grid, amount_of_solutions = 0) {

    for(let row = 0; row < 9; row++) {
        
        for(let column = 0; column < 9; column++) {

            if(puzzle_grid[row][column] == " ") {

                let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                // Loop throw the numbers to check if there are valid to put in a specific cell, and then puts them
                // Backtracks if not
                for(let num of numbers) {

                    if(isNumValid(row, column, puzzle_grid, num)) {
                        puzzle_grid[row][column] = num;
                        amount_of_solutions = solve(puzzle_grid, amount_of_solutions); 
                        puzzle_grid[row][column] = " ";

                        // Short-circuit if the amount of solutions is more than 1
                        if(amount_of_solutions > 1) return amount_of_solutions;
                    }

                }
                
                return amount_of_solutions;
            }
        }
    }

    amount_of_solutions++;
    return amount_of_solutions;

}

export default solve;