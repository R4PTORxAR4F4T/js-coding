//================================problem_3

//This code is a function that takes an integer as an input and returns a statement based on the value of the argument. If the argument is less than 7, the statement will show the difference between the argument and 7. If the argument is greater than 7, the statement will show the double of the argument. If the argument is not an integer, the statement will show an error message.


function isLGSeven(int) {

    if ( Number.isInteger(int)){
        if ((int-7) < 7) {
            return ("Input: " + int + ", Difference: " + (int - 7));
          } else {
            return ("Input: " + int + ", Double of input: " + (int*2));
          }
    }
    else{
        return ('Its a invalid input.Pls Input a Number')
    }
}

  
  let output = isLGSeven(-15);
  console.log(output);
