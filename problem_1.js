//================================problem_1

//The function name mindGame that takes number as input. Then the input number is given in to a formula. The expression is (((num * 3) + 10) / 2) - 5. The function multiplies the number by 3, adds 10, divides the result by 2, and then subtracts 5. Then return the result


function mindGame(num) {

    if ( Number.isInteger(num)){
        return (((num * 3) + 10) / 2) - 5;
    }
    else{
        return ('Its a invalid input.Pls Input a Number')
    }
    
  }



let output = mindGame("arafat");
console.log(output);