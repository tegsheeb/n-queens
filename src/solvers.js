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
  // create a new board
  var newBoard = new Board({ 'n': n });
  var solution = null;

  // declare helper function (recursive)

  var placeQueens = function (row = 0) {
    // Base case
    // check if the counter is equal to n
    if (row === n) {
      // if counter is equal to n, then return new board (= solution)
      solution = newBoard.rows().map(row => row.slice());
    } else {
      for (var i = 0; i < n; i++) {
        //place the first rook on the board
        newBoard.togglePiece(row, i);
        //iterate through each place on the board for 2nd rook
        // check if there is any hasAnyRooksConflicts (column and row conflicts)
        if (!newBoard.hasAnyQueenConflictsOn(row, i)) {
          placeQueens(row + 1);
        }
        newBoard.togglePiece(row, i);
        // then we iterate / recurse starting from the next row
        // How to go to next i in same first row
      }
    }
  };

  if (n === 0 || n === 2 || n === 3) {
    solution = newBoard.rows();
  } else {
    placeQueens(0);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var newBoard = new Board({'n': n});
  var solutionCount = 0;

  var placeQueens = function(row = 0) {
    if (row === n) {
      solutionCount += 1;
    } else {
      for (var i = 0; i < n; i += 1) {
        newBoard.togglePiece(row, i);

        if (!newBoard.hasAnyQueenConflictsOn(row, i)) {
          placeQueens(row + 1);
        }
        newBoard.togglePiece(row, i);
      }
    }
  };

  if (n === 2 || n === 3) {
    solutionCount = 0;
  } else if (n === 0) {
    solutionCount = 1;
  } else {
    placeQueens(0);
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};