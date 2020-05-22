/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // var solution = undefined; //fixme

  var board = new Board( { 'n': n } );

  var maxIdx = n - 1;
  var placeRooks = function(n) {
    if (n < 0) {
      return board.rows();
    }
    board.togglePiece(n, n);

    return placeRooks(n - 1);

  };
  var solution = placeRooks(maxIdx);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = undefined; //fixme
  //n factorial

  var factorial = function (n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  var solutionCount = factorial(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //var solution = undefined; //fixme

  // create a new board
  var newBoard = new Board({ 'n': n });



  // declare helper function (recursive)
  var placeQueens = function (row = 0) {
    // Base case
    // check if the counter is equal to n
    //console.log('this is n: ', n);
    // var sum = function () {
    //   var sum = 0;
    //   newBoard.forEach(row.forEach(ele => sum + ele));
    //   return sum;
    // };

    // sum = 0;
    // for (var i =0; i <  )

    if (row === n ) {
      // if counter is equal to n, then return new board (= solution)
      return newBoard.rows();
    }
    for (var i = 0; i < n; i++) {
      //place the first rook on the board
      newBoard.togglePiece(row, i);
      //iterate through each place on the board for 2nd rook
      // check if there is any hasAnyRooksConflicts (column and row conflicts)

      if (!newBoard.hasAnyQueenConflictsOn(row, i)) {
        // newBoard.togglePiece(row + 1, i);
        console.log('this is our board: ', newBoard.rows());
        return placeQueens(row + 1);
        newBoard.togglePiece(row, i);
      } else {
        newBoard.togglePiece(row, i);
      }
      // How to go to next i in same first row
      //}
    }
    //}

    // if there is not any conflict, increment the counter by 1
    // then we iterate / recurse starting from the next row
  };

  var solution = placeQueens(0);

  // for (var i = 0; i < n; i++) {

  // }
  // if (n === 0) {
  //   var solution = [];
  // } else if (n === 1) {
  //   var solution = [[1]];
  // } else {
  //   if (n % 2 === 0 && n > 3) {
  //     newBoard.togglePiece(0, 1);
  //   } else if ( n % 2 !== 0 && n > 3) {
  //     newBoard.togglePiece(0, 0);
  //   }
  //   var solution = placeQueens(1);
  // }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

