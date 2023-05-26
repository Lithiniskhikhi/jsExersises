 let Name= "Lithini";
 console.log(Name)

 function fullName (){
   firstName ="lee";
   let  surname ="skhikhi";
    return firstName + " " +surname


}
console.log(fullName());

function age (){
    let myAge = "19";
    return myAge 
}
console.log(age());

function subjects(){
    let array =["eng","math","afrikaans"]
    return array
}
console.log(subjects());

function living(){
    let myAddress =["Mowbray","Montreal","two street"]
    return myAddress
}
console.log(living());

//  Question 1 
    
//  a variable is a value that can change, depending on conditions or on information passed to the program. 
//  Values coding is a method of coding that delves into the subjective nature of the human experience. 
//  A data type is a classification of data which tells the compiler or interpreter how the programmer intends to use the data. 
//   to set (something, such as a computer program counter) to a starting position, value, or configuration. 
//   Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared .  var and let can be reassigned but variables declared with const can't be reassigned. 
// scope of a variable is its lifetime in the program. This means that the scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified.  
//  Use a for loop to iterate over an array.
// Use a for loop when you know the loop should execute n times.
// Use a while loop for reading a file into a variable.
// Use a while loop when asking for user input.
// Use a while loop when the increment value is nonstandard. -->
//  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

function display() {
    let number2 = document.getElementById('numb2');
    let number1 = document.getElementById('numb1');
    let operator = document.getElementById('op');
    let result;
    switch (operator.value) {
      case '+':
        console.log(typeof number1.value)
        result = parseInt(number1.value) + parseInt(number2.value);
        break;
      case '-':
        result = number1.value - number2.value;
        break;
      case '*':
        result = number1.value * number2.value;
        break;
      case '/':
        result = number1.value / number2.value;
        break;
      default:
        result = 'Invalid operator';
    }
  
    document.getElementById('results').value = 'Answer: ' + parseInt(result);
  }