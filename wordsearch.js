// Pair Programming with Donny, Mar 29 2021 cohort

const wordSearch = (letters, word) => { 

    if (letters.length < 1 || word === undefined || word === "") {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));

    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    };

    const transpose = function(matrix) {
        // Put your solution here
        let newMatrix = [];
        for (let x = 0; x < matrix[0].length; x++) {
            let newArray = [];
            for (const array of matrix) {
                newArray.push(array[x]);
            }
            newMatrix.push(newArray);
        }
        return newMatrix;
    };

    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    };

    return false;

};


wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

module.exports = wordSearch;