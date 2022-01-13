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

function baseFunc(baseNumber) {
  return (N) => {
    return baseNumber + N;
  };
}

var addSix = baseFunc(6);
var addFive = baseFunc(5);

output = addSix(10) + addFive(-25);

appDiv.innerHTML = JSON.stringify(output);
