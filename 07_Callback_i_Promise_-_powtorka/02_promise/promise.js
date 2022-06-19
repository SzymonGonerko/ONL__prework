/*
  Promises
*/

function promiseResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}

async function getAsyncNumber(number) {
  

  return new Promise((resolve, reject) => {
    promiseResponse(number, resolve)
  })


}

const number0Promise = getAsyncNumber(0);
const number1Promise = getAsyncNumber(1);
const number2PRomise = getAsyncNumber(2);
const number3PRomise = getAsyncNumber(3);
const number4PRomise = getAsyncNumber(4);

number0Promise
  .then((data0) => {console.log(data0)})
  .then(() => {number1Promise.then((data1) => {console.log(data1)})
  .then(() => {number2PRomise.then((data2) => {console.log(data2)})
  .then(() => {number3PRomise.then((data3) => {console.log(data3)})
  .then(() => {number4PRomise.then((data4) => {console.log(data4)})})})})})
