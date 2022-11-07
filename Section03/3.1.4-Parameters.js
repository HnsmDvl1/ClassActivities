// Named Parameters
// write a function that takes two named parameters:
function myFunction(para1, para2) {
// print each named parameter,
  console.log(para1);
  console.log(para2);
// then return the parameters added together
  return para1 + para2;
}


// invoke the function and pass in two numbers

myFunction(4,7);

// invoke the function and pass in more than two numbers

myFunction(3, 6, 9);

// invoke the function and pass in only one number

myFunction(2);

//undefined
//myFunction(4,7);
//3 4
//4 7
//11
//myFunction(3, 6, 9);
//3 3
//4 6
//9
//myFunction(2);
//3 2
//4 undefined
//NaN

// change the function to set default values for the parameters

function myFunction(3, 5) {
    console.log(3);
    console.log(5);
    return 3 + 5;


  }


// again, invoke the function and pass in only one number

myFunction(2);

//Uncaught SyntaxError: Unexpected number
  //myFunction(2);
  //2
  //undefined
  //NaN

// Rest Operator

(...)

// add a rest operator to the function's parameters


function myFunction(para1, ...para2) {
  // print each named parameter,
    console.log(para1);
    console.log(...para2);
  // then return the parameters added together
    return para1 + ...para2;





function myFunction(3, ...5) {
  console.log(3);
  console.log(...5);
  return 3 + 5;

}

// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers

myFunction(3, 4, ...5);


//Uncaught SyntaxError: Unexpected token '...'
//myFunction(3, 4, ...5)
//Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// at <anonymous>:1:1
