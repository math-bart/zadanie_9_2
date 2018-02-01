var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var names = femaleNames.concat(maleNames);
console.log(names); 
var newName = prompt("Enter your name");
var indexOfNewName = names.indexOf(newName);
console.log(indexOfNewName);

if (indexOfNewName === -1) {
    names.push(newName);
    console.log(names); 
}