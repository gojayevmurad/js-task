// TASK 1
// let arr = prompt("ededleri daxil edin").split(",");

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   total += +arr[i];
// }

// document.getElementById("root").innerHTML = total;

// TASK 2

// let arr = prompt('Ədədləri daxil edin').split(',');
// let total=0;

// for(let i = 0; i<arr.length; i++){

//     arr[i] > 0 ? total += Number(arr[i]): true;

// }

// document.getElementById("root").innerHTML = total;

// TASK 3

// let num = +prompt('Ədəd daxil edin')

// value = 'sifir'

// if(num>0){
//     value = 'musbet'
// }else if(num<0){
//     value = 'menfi'
// }

// document.getElementById('root').innerHTML= value;

// TASK 4

// let num1 = +prompt('Enter number');
// let num2 = +prompt('Enter number');

// let value=num2;
// if(num1>num2){
//     value = num1
// }

// document.getElementById('root').innerHTML = value;

// TASK 5

let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");
let x1 = 0,
  x2 = 0;

let diskriminant = b ** 2 - 4 * a * c;

if (diskriminant > 0) {
  x1 = (-b + diskriminant ** 0.5) / (2 * a);
  x2 = (-b - diskriminant ** 0.5) / (2 * a);
} else if (diskriminant == 0) {
  x1 = -b / (2 * a);
  x2 = x1;
} else {
  x1 = "Həqiqi ədədlər çoxluğunda kökü yoxdur.";
  x2 = x1;
}

document.getElementById("root").innerHTML = `x1 = ${x1} <br/> x2 = ${x2}`;
