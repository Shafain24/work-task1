//1
//this being he first line of code aswell as a synchronus code will gt executd first
console.log('1: Start');
//6
//now thi function will run a the code is Aync but takes less priority then a promise
setTimeout(() => {

  console.log('2: Timeout 0ms');

}, 0);
//4
//this is an async code but also due to being aan aynce it is a prmoise it takes higher priority as we learned the other day
Promise.resolve().then(() => {

  console.log('3: Promise 1');

});
//2
//aas thhis is the secing=d synch cod this will get execued aas the one before this aare async
console.log('4: Synchronous');
//7
//this will run a e very end
setTimeout(() => {

  console.log('5: Timeout 10ms');

}, 10);
//5
//then this code will run due to being A promie

Promise.resolve().then(() => {

  console.log('6: Promise 2');

});
//3
//then this line of code will get executed bcause of being a sync code,

console.log('7: End');
