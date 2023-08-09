//Iterative

function powerN(base, n){
  if(base == 0 && n <= 0){
    throw new Error ("Invalid input. 0 to the power of 0 or a negative number is undefined");
  }else if(base == 0 && n > 0){
    return 0;
  }else if(base > 0 && n == 0){
    return 1;
  }else{
    let result = 1
    for(let i = 1; i <= Math.abs(n); i++){
      result = result * base;
    }
    if(base > 0 && n < 0){ // handle negative exponent
      result = 1 / result;
    }
    return result;
  }
}

console.log(powerN(5, 2));
console.log(powerN(0, 1));
console.log(powerN(3, 0));
console.log(powerN(3, -2));
console.log(powerN(0, 0));
console.log(powerN(0, -2));



//Recursive

function powerN(base, n) {
  if (base == 0 && n <= 0) {
    throw new Error("Invalid input. 0 to the power of 0 or a negative number is undefined");
  } else if (base == 0 && n > 0) {
    return 0;
  } else if (base > 0 && n == 0) {
    return 1;
  } else if (n > 0) {
    return base * powerN(base, n - 1);
  } else { // negative exponent
    return 1 / powerN(base, -n);
  }
}