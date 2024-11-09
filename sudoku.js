 "use strict";
// var EASY_PUZZLE="1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
// var MEDIUM_PUZZLE="-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
// var HARD_PUZZLE="8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--";
// var TESTABLE=true;

// var SodukuSolver=function(testable){
//     var solver;

//     function solve(boardString){
//         var boardArray=boardString.split("");
//         if(boardsInvalid(boardArray)){
//             return false;
//         }
//         return recursiveSolve(boardString);
//     }

//     function solvePrint(boardString){
// var solveBoard=solve(boardString);

// console.log(toString(solvedBoard.split("")));

// return solveBoard;

//     }

//     function recursiveSolve(boardString){
        
//         var boardArray=boardString.split("");
//         if(boardsSolved(boardArray)){
//             return boardArray.join("");
//         }

//         var cellPosibilities=getNextCellAndPossibilities(boardArray);
//         var nextUnsolverCellIndex=cellPosibilities.index;
//         var possibilities=cellPosibilities.choices;
//         for(var i=0; i<possibilities.length;i++){
//             boardArray[nextUnsolverCellIndex]=possibilities[i];
//             var solvedBoard=recursiveSolve(boardArray.join(""));

//             if(solvedBoard){
//                 return solvedBoard;
//             }
//         }

//         return false;
//     }
//     function boardsInvalid(boardArray){
//         return !boardsValid(boardArray);
//     }

//     function boardsValid(boardArray){
//         return allRowsValid(boardArray) && allColumsValid(boardArray) && allBoxesValid(boardArray);
//     }

//     function boardsSolved(boardArray){
//     for(var i=0;i<boardArray.length;i++){
//         if(boardArray[i]==="-"){
//             return false;
//         }
//     }

//     return true;

//     }
//     function getNextCellAndPossibilities(boardArray){

//         for(var i=0;i<boardArray.length;i++){

//             if(boardArray[i]==="-"){
//                 var existingValue=getAllIntersection(boardArray,i);

//                 var choices=["1", "2", "3", "4", "5", "6", "7", "8", "9"].filter(function(num){
//                 return existingValue.indexOf(num)<0;
//             });

//             return {index: i, choices: choices};
//             }
//         }
//     }
//     function getAllIntersection(boardArray, i){

//         return getRow(boardArray, i).concat(getColum(boardArray,i)).concat(getBox(boardArray,i));
//     }

//     function allRowsValid(boardArray){
//         return [0,9,18,27,36,45,54,63,72].map(function (i){
//             return getRow(boardArray, i);
//         }).reduce(function (validity, row){
//             return collectionIsValid(row) && validity;
//         }, true);
//     }

//     function getRow(boardArray, i){
//         var startingE1=Math.floor(i/9) * 9;
//         return boardArray.slice(startingE1, startingE1+9);
//     }
//     function allColumsValid(boardArray){

//         return [0,1,2,3,4,5,6,7,8].map(function (i){
//             return getColum(boardArray,i);
//         }).reduce(function(validity, row){
//             return collectionIsValid(row) && validity;
//         }, true)
//     }
//     function getColum(boardArray,i){
//      var startingE1=Math.floor(i%9);

//      return [0,1,2,3,4,5,6,7,8].map(function (num){
//         return boardArray[startingE1 +num*9];
//      });
//     }
//     function allBoxesValid(boardArray){

//         return [0,3,6,27,30,33,54,57,60].map(function (i){
//             return getBox(boardArray, i);
//         }).reduce(function (validity, row){
//             return collectionIsValid(row) && validity;
//         }, true);
//     }
//     function getBox(boardArray,i){

//         var boxCol=Math.floor(i/3)%3;
//         var boxRow=Math.floor(i/27);
//         var startingIndex=boxCol *3 +boxRow*27;
//         return [0,1,2,9,10,11,18,19,20].map(function (num){
//             return boardArray[startingIndex+num];
//         });
//     }

//     function collectionIsValid(collection){

//         var numCounts={};
//         for(var i=0;i<collection.length;i++) {
//             if(collection[i]!="-"){
//                 if(numCounts[collection[i]]===undefined){
//                     numCounts[collection[i]]=1;
//                 }else{
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }

//     function toString(boardArray){
      
//         return [0,9,18,27,36,45,54,63,72].map(function(i){
//             return getRow(boardArray, i).join(" ");
//         }).join("\n");
//     }

//     if(testable){
//         solver={
//             solve: solve,
//             solvePrint: solvePrint,
//             recursiveSolve: recursiveSolve,
//             boardsInvalid: boardsInvalid,
//             boardsValid:boardsValid,
//             boardsSolved:boardsSolved,
//             getNextCellAndPossibilities: getNextCellAndPossibilities,
//             getAllIntersection: getAllIntersection,
//             allRowsValid: allRowsValid,
//             getRow: getRow,
//             allColumsValid: allColumsValid,
//             getColum: getColum,
//             allBoxesValid: allBoxesValid,
//             getBox: getBox,
//             collectionIsValid:collectionIsValid,
//             toString: toString

//         };

//     }else{
//         solver= {
//             solve: solve,
//             solvePrint: solvePrint
//         };
//     }
// return solver;
// }(TESTABLE)



var EASY_PUZZLE = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
var MEDIUM_PUZZLE = "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
var HARD_PUZZLE = "8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--";

// Set this variable to true to publicly expose otherwise private functions inside of SudokuSolver
var TESTABLE = true;

var SudokuSolver = function (testable) {
  var solver;

  // PUBLIC FUNCTIONS
  function solve(boardString) {
    var boardArray = boardString.split("");
    if (boardIsInvalid(boardArray)) {
      return false;
    }
    return recursiveSolve(boardString);
  }

  function solveAndPrint(boardString) {
    var solvedBoard = solve(boardString);
    console.log(toString(solvedBoard.split("")));
    return solvedBoard;
  }

  // PRIVATE FUNCTIONS
  function recursiveSolve(boardString) {
    var boardArray = boardString.split("");
    if (boardIsSolved(boardArray)) {
      return boardArray.join("");
    }
    var cellPossibilities = getNextCellAndPossibilities(boardArray);
    var nextUnsolvedCellIndex = cellPossibilities.index;
    var possibilities = cellPossibilities.choices;
    for (var i = 0; i < possibilities.length; i++) {
      boardArray[nextUnsolvedCellIndex] = possibilities[i];
      var solvedBoard = recursiveSolve(boardArray.join(""));
      if (solvedBoard) {
        return solvedBoard;
      }
    }
    return false;
  }

  function boardIsInvalid(boardArray) {
    return !boardIsValid(boardArray);
  }

  function boardIsValid(boardArray) {
    return allRowsValid(boardArray) && allColumnsValid(boardArray) && allBoxesValid(boardArray);
  }

  function boardIsSolved(boardArray) {
    for (var i = 0; i < boardArray.length; i++) {
      if (boardArray[i] === "-") {
        return false;
      }
    }
    return true;
  }

  function getNextCellAndPossibilities(boardArray) {
    for (var i = 0; i < boardArray.length; i++) {
      if (boardArray[i] === "-") {
        var existingValues = getAllIntersections(boardArray, i);
        var choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].filter(function (num) {
          return existingValues.indexOf(num) < 0;
        });
        return { index: i, choices: choices };
      }
    }
  }

  function getAllIntersections(boardArray, i) {
    return getRow(boardArray, i).concat(getColumn(boardArray, i)).concat(getBox(boardArray, i));
  }

  function allRowsValid(boardArray) {
    return [0, 9, 18, 27, 36, 45, 54, 63, 72].map(function (i) {
      return getRow(boardArray, i);
    }).reduce(function (validity, row) {
      return collectionIsValid(row) && validity;
    }, true);
  }

  function getRow(boardArray, i) {
    var startingEl = Math.floor(i / 9) * 9;
    return boardArray.slice(startingEl, startingEl + 9);
  }

  function allColumnsValid(boardArray) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
      return getColumn(boardArray, i);
    }).reduce(function (validity, row) {
      return collectionIsValid(row) && validity;
    }, true);
  }

  function getColumn(boardArray, i) {
    var startingEl = Math.floor(i % 9);
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (num) {
      return boardArray[startingEl + num * 9];
    });
  }

  function allBoxesValid(boardArray) {
    return [0, 3, 6, 27, 30, 33, 54, 57, 60].map(function (i) {
      return getBox(boardArray, i);
    }).reduce(function (validity, row) {
      return collectionIsValid(row) && validity;
    }, true);
  }

  function getBox(boardArray, i) {
    var boxCol = Math.floor(i / 3) % 3;
    var boxRow = Math.floor(i / 27);
    var startingIndex = boxCol * 3 + boxRow * 27;
    return [0, 1, 2, 9, 10, 11, 18, 19, 20].map(function (num) {
      return boardArray[startingIndex + num];
    });
  }

  function collectionIsValid(collection) {
    var numCounts = {};
    for(var i = 0; i < collection.length; i++) {
      if (collection[i] != "-") {
        if (numCounts[collection[i]] === undefined) {
          numCounts[collection[i]] = 1;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  function toString(boardArray) {
    return [0, 9, 18, 27, 36, 45, 54, 63, 72].map(function (i) {
      return getRow(boardArray, i).join(" ");
    }).join("\n");
  }

  if (testable) {
    // These methods will be exposed publicly when testing is on.
    solver = { 
      solve: solve,
      solveAndPrint: solveAndPrint,
      recursiveSolve: recursiveSolve,
      boardIsInvalid: boardIsInvalid,
      boardIsValid: boardIsValid,
      boardIsSolved: boardIsSolved,
      getNextCellAndPossibilities: getNextCellAndPossibilities,
      getAllIntersections: getAllIntersections,
      allRowsValid: allRowsValid,
      getRow: getRow,
      allColumnsValid: allColumnsValid,
      getColumn: getColumn,
      allBoxesValid: allBoxesValid,
      getBox: getBox,
      collectionIsValid: collectionIsValid,
      toString: toString };
  } else {
    // These will be the only public methods when testing is off.
    solver = { solve: solve,
      solveAndPrint: solveAndPrint };
  }

  return solver;
}(TESTABLE);