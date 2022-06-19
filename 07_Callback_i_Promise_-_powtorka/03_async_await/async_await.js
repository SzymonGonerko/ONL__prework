/*
  Async-Await
*/

function promiseResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}

function getAsyncNumber(number) {
  return new Promise ((resolve, reject) => {
    promiseResponse(number, resolve)
  })
  
}



const number0Promise = getAsyncNumber(0);
const number1Promise = getAsyncNumber(1);
const number2Promise = getAsyncNumber(2);
const number3Promise = getAsyncNumber(3);
const number4Promise = getAsyncNumber(4);

async function getAsyncValue () {
  await number0Promise.then((data) => {console.log(data)})
  await number1Promise.then((data) => {console.log(data)})
  await number2Promise.then((data) => {console.log(data)})
  await number3Promise.then((data) => {console.log(data)})
  await number4Promise.then((data) => {console.log(data)})
}

getAsyncValue()