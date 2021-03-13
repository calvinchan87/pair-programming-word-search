//pair programmed with Calvin, Elliott, Sasha

const transpose = function(matrix) {
    // Put your solution here
    let newArray = [];
    
    // for each column (values in nested array at [0]), add an array to newArray
    for (let x = 0; x < matrix[0].length; x++) {
      newArray.push([]);

      // add each element by column into each new array (all 1st elements to array at[0], 2nd elements to array at [1], ...)
      for (let y = 0; y < matrix.length; y++) {
        newArray[x].push(matrix[y][x]);
          }
    return newArray;
    }
}

  // Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

const wordSearch = (letters, word) => { 
    let array = [];

    const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) return true        
        } 

        const vertical = transpose(letters);
    

        const verticalJoin = vertical.map(ls => ls.join(''))
        for (l of verticalJoin) {
            if (l.includes(word)) return true
            
        }
    
    
    return false
}

module.exports = { wordSearch };