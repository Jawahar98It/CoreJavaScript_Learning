const prompt = require("prompt-sync")();
console.log("Hello javascript")
let name = "Fair";
console.log(name);
let firstName = "Delma"; 
let lastName = "Baker";
console.log(firstName+" "+lastName)
const interestRate = 5.5
console.log(interestRate)
console.log(typeof(name))
console.log(typeof(interestRate))
colorSelected = null
console.log(typeof(colorSelected))
let person ={name:"Doku",age:34}
console.log(person)
person.name = "Goku";
console.log(person.name)
person['name'] = "Mary";
console.log(person.name)
console.log(person)
let selectedColors = ['red','blue'];
console.log(typeof(selectedColors));
console.log(selectedColors[1])
selectedColors[2]='yellow';
selectedColors[3]='orange';
console.log(selectedColors)
selectedColors[4]=22
selectedColors[5]=90.5
console.log(selectedColors)
console.log(selectedColors.length)
function greet(firstName,lastName)
{
    firstName = 'Stewart';
    lastName='Sony';
    return firstName+""+lastName
}
console.log(greet(firstName,lastName))
function squareNumber(num)
{
    return num * num
}
let num = prompt("Enter the number:")
num = Number(num)
const squareValue = squareNumber(num)
console.log(squareValue)

let number_value = [1,2,3,5,6,-2,-3,-9]
const filtered_data = number_value.filter(function(value)
{
    return value>=0;
})
console.log(filtered_data)
const filtered = number_value.filter(n => n<= 0)
console.log(filtered)
const items = filtered_data.map(n=>'<li>'+n+'</li>')
const straw ='<ul>'+ items.join('')+'</ul>';
console.log(items)
console.log(straw)
