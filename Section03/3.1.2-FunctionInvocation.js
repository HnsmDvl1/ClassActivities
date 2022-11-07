// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}
console.log(myNumberFunction);

//undefined

// now, invoke the myNumberFunction function
myNumberFunction();

//42
//undefined

// print just the function of console.log (no invocation)
console.log(myNumberFunction);

//undefined
