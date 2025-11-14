// Import stylesheets
import './style.css';

var output = {};

// Write Javascript code!
const appDiv = document.getElementById('app');

/*
var result = [
  { date: '2020-02-01', value: 20 },
  { date: '2020-03-01', value: 20 },
  { date: '2020-04-01', value: 20 },
  { date: '2021-02-01', value: 25 },
  { date: '2021-03-01', value: 23 },
  { date: '2021-04-01', value: 20 },
  { date: '2022-02-01', value: 15 },
  { date: '2022-03-01', value: 13 },
  { date: '2022-04-01', value: 10 },
];

result.map((val, ind) => {
  console.log(val.date.split('-')[0]);
  if (output[val.date.split('-')[0]]) {
    //output[val.date.split('-')[0]].push(val.value);
    output[val.date.split('-')[0]] =
      Number(output[val.date.split('-')[0]]) + val.value;
  } else {
    output[val.date.split('-')[0]] = [val.value];
  }
});

console.log(output);
*/

/*
//start typing here
var a = ['1', 'Test', '2', 'Demo', '3', 'Temp'];
// {1:"Test",2:"Demo",3:"Temp"}
var b = {};
a.forEach((val, i) => {
  if (i % 2 != 0) {
    b[a[i - 1]] = val;
  }
});

output = b;
console.log(b);
*/

// <<<<<<<<<<<<< Creating closure example >>>>>>>>>>>>

// function baseFunc(baseNumber) {
//   return (N) => {
//     return baseNumber + N;
//   };
// }

// var addSix = baseFunc(6);
// var addFive = baseFunc(5);

// output = addSix(10) + addFive(-25);

// appDiv.innerHTML = JSON.stringify(output);

// CLosure is a function which has its own lexical scope / otherway its own memory

// For example, a function returns a function which holds its own memory i.e. default value will be remebered by innerfunction after closExample (i.e. outer function) execution is completed

let closExample = (defaultVal) => {
  return () => {
    console.log(defaultVal);
  };
};

let logHelloAlways = closExample('Hello');
let logHiAlways = closExample('Hi');

logHelloAlways(); // Hello
logHiAlways(); // Hi

// One more example, we can do a counter inside a inner fucntion, which holds its lexical scope

let counter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

counter()(); // 1
counter()(); // 1 , here counter isn't increased, becoz we are always calling counter and then inner function. to acheive counter, we have to assign returned fucntion and execute it continuously to iterate, like below,

let incCounter = counter(); // now incCounter holds inner function with its lexical scope count

incCounter(); // 1
incCounter(); // 2, it memorized its count value increased to 1 so in this step, it incremented to 2

// 1 more example, we can create multipier, which can reused.

let multipier = (multiplyBy) => {
  return (multiplyWith) => {
    return multiplyBy * multiplyWith;
  };
};

let multiplyBySix = multipier(6);

console.log(multiplyBySix(5)); //30, i.e., 6 * 5 = 30 multiplyBySix is a closure which holds its lexical scope i.e. it memorizes multiplyBy as 6

// Same multipier can be reused for other multipier

let multiplyByThree = multipier(3);

console.log(multiplyByThree(5)); // 3 * 5 =15
console.log(multiplyByThree(6)); // 3 * 6 = 18
