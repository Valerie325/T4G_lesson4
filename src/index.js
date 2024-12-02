let num1 =3;
let num2 =2;
let result = num1 + num2;
console.log(result);

function addTwoNumbers(num1, num2) {
    let addition = num1 + num2;
    console.log(addition)
}

addTwoNumbers(123,321);
addTwoNumbers(98, 40);

function multiplyTwoNumbers(num1, num2) {
    let product = num1 * num2;
    console.log(product);
}

multiplyTwoNumbers(5, 7);

function divideTwoNumbers(num1, num2) {
        let quotient = num1 / num2;
        console.log(quotient);
    }

divideTwoNumbers(100, 20);

function cookRice(salt, water, rice ){
    alert(`I cooked ${rice} cups of rice with ${salt} a pich of salt, with ${water} cups of water`);
}
    cookRice("half", "300ml",5);
function order(howmany, size){

    let many = prompt("How many burgers would you like");
    let big =prompt("How big should the burger be");
    alert(`You just ordered ${howmany} and ${size} burger`);

    order(many, big);
}

function checkAge() {
let age= prompt("What is your age?");
if (age<6){
    alert(`You are ${age} years old and you are to young.`);

} else if(age<=6 && age<=7){

alert(`You are ${age} years old and you have limited options.`);

} else if(age >=18) {
    alert(`You are ${age} years old and you can enjoy all the options.`);
} else {
    alert(`Enter an age please.`);
}
}

checkAge();
prompt();

   
