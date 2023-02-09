//================================problem_2

//The function name evenOdd that takes string as input. If the input is a string, It checks the length of the string and returns "even" if the length is an even number, or "odd" if the length is an odd number. If the Input is not a string, it returns a message telling the user to enter a string type input.


function evenOdd(str) {
  if (typeof str === 'string'){
    if(str.length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  else{
    return("Pls enter a string type input");
  }
}


let output = evenOdd(20);
console.log(output);