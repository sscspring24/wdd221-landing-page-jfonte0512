let year = 2024;
let fName = 'Jonathan';
let yrKMI = year - 40;
console.log('WOW ' + fName + ', you were born in the year: ' + yrKMI + '!');
document.write('WOW ' + fName + ', you were born in the year: ' + yrKMI + '!');

//addition
//for the sake of time, no need to incorporate a message in the log
x = 400;
y = 600;
sum = x + y;
console.log(sum);

//modulus
a = 5;
b = 3;
answer = a % b;
console.log(answer)

//logical operators

c = 5;
d = 8;
e = c ==d; //is c equal to d
console.log(e) //answer is false

let m = 3;
let n = -2;

console.log(a > 0 && b > 0);

console.log(a > 0 || b > 0);

console.log(!(a > 0 || b > 0));

console.log(m > n);

//Operator Precedence

let num1 = 10;
let num2 = 50;
let ans1 = (num2 + num1) / (8 + 2);
console.log(ans1);

let num3 = 20;
let num4 = 75;
let ans2 = num4 / num3 + 8 -3;
console.log(ans2);

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);
console.log(profit);

//Escape Characters
//Use the backslash (\) escape character turns special characters into string characters
//let msg = 'It's alright';
//the above code needs help
let msg - 'It\'s alright!';
console.log(msg);