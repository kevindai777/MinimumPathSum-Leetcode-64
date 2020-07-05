//Objective is to find the minimum path sum in a 2-D matrix.

let matrix = 
[[1,3,1],
 [1,5,1],
 [4,2,1]]



//O(n * m) solution that uses dynamic programming to update the sums
//of every element in the matrix.

//Update the first column w/ possible sums
for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0]
}
//[1,3,1]
//[2,5,1]
//[6,2,1]

//Update the first row w/ possible sums
for (let j = 1; j < grid[0].length; j++) {
    grid[0][j] += grid[0][j - 1]
}
//[1,4,5]
//[2,5,1]
//[6,2,1]

//Update the inner matrix, marked by *, by choosing the min between the top and left
//and adding it on
for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
}
//[1,4,5]
//[2,7*,6*]
//[6,8*,7*]

//Return the last element
return grid[grid.length - 1][grid[0].length - 1]