/* 
   Prompt the user to enter the full name. Generate a username 
   for them based on input. Start username with @, followed by their fullname
   and ending with fullName length
*/

console.log("Prompt the user to enter the full name. Generate a username for them based on input. Start username with @, followed by their fullname and ending with fullName length");

let fullName = prompt("Enter your full name");

let userName = `@${fullName}${fullName.length}`;

console.log("userName - ", userName);