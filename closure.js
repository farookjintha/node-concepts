// function makeAdder(x) { //outer function
//     return function(y) { //inner function 
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5); //global scope
//   // var add5 = function(y){
//   //   return 5 + y;
//   // }



//   var add10 = makeAdder(10);
  
//   console.log(add5(2)); //7 
//   console.log(add10(10)); //12


  let arr = [1, 2, 3, 4, 5] //Array 1D

  //Matrix 2D
  let  matrix = [[1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  [100, 200, 300, 400, 500]]
  
console.log(matrix[1][2], ": Matrix");
//2D Array
console.log(typeof matrix)
