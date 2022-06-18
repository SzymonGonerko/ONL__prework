/*
  Callbacks
*/

 function asynchronousResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}



let responses = [];
const arr =[]

function getAsyncNumber(number) {
  
asynchronousResponse(number, myFun = number => {

  responses[number] = {number: number, isDone: false}

  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === undefined) {
      return;
    }

    if (!responses[i].isDone) {
      console.log(responses[i].number);
      responses[i].isDone = true;
    }
  }
  // console.log(arr.sort((a,b) => a-b))
})

  /* 
    Add implementation of getAsyncNumber function in a way that numbers
    appear on a console in order in which they have been called.

   Use asynchronousResponse to generate this responses.
  */
 
}

getAsyncNumber(0)
getAsyncNumber(1)
getAsyncNumber(2)
getAsyncNumber(3)
getAsyncNumber(4)
