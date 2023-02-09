//================================problem_5

//The function takes three numbers as input (num1, num2 and num3), which represent the number of each type of gem. The function then multiplies those numbers by their corresponding values (21, 32 and 43) and adds those numbers together.if the total is greater than or equal to 2000 then subtracts 2000.else returns the total value of sum.


function gemsToDiamond(num1, num2, num3) {
    let sum = (num1 * 21) + (num2 * 32) + (num3 * 43);
    if (sum >= 2000) {
      sum = sum- 2000;
      return sum;
    } else {
      return sum;
    }
  }
  
    
    let output = gemsToDiamond(1, 1, 1);
    console.log(output);
  