// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}



function reverseString(string){
  if(string.length === 1){
    return string;
  }else{
    return string[string.length-1] + reverseString(string.substr(0,string.length-1));
  }
}


function isPalindrome(word){
  if(word.toLowerCase() === reverseString(word.toLowerCase())){

    return true;
  }else{
    return false;
  }
}

// console.log(recursivePalindrome('dkajdslfkjad'));
