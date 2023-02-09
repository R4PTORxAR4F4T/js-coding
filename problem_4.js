//================================problem_4

//This code takes an array as an input and checks for any bad data (or negative numbers) in the array. It then returns the count of bad data found in the array. If the given input is not an array, it returns a message asking the user to enter an array type input.


function findingBadData(arr){
    let badDataCount = 0;

    if(Array.isArray(arr)){
        for(let i=0; i<arr.length; i++){
            if(arr[i] < 0){
              badDataCount++;
            }
          }
          return badDataCount;
    }
    else{
        return("Pls enter a array type input");
    }
  }
  
  
  let arr = findingBadData([ -4, -9, -5, -33, -55 ]);
  console.log(arr);