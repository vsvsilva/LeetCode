/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let columns = matrix.length;
    let rows = matrix[0].length;
    const mat = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  
    for (var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++){ 
          let tmp = matrix[j][i];
          mat[i][j] = tmp;
        }
    }
    return mat;
};
