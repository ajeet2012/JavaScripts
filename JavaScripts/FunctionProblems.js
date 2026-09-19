console.log("Create a function that takes a string as an argument & returns the number of vowels in the string.");

function countOfVowels(inputString){ 
  const vowels = "aeiou";
    let count = 0;
  
  for(const char of inputString ){
     if (vowels.includes(char)) {
        count++
     }
  }

  console.log("Count of vowels ", count);

}

const countVowels = (inputStr) => {

    const vowels = "aeiou";
    let count = 0;
  
  for(const char of inputString ){
     if (vowels.includes(char)) {
        count++
     }
  }

  console.log("Count of vowels ", count);


}