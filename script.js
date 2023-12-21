'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//SLICE METHOD (doesn't mutate the original arrays)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
//these are below the same, it's up to the developer preference
console.log(arr.slice());
console.log([...arr]);
///////////////////////////////////////////////////////////////

//SPLICE METHOD (does mutate the original arrays)
const arr2 = arr.splice(-1);
console.log(arr);
const arr3 = arr.splice(1, 3);
console.log(arr, arr2, arr3);

//REVERSE METHOD (does mutate the original arrays)
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr4 = ['l', 'k', 'j', 'i', 'h', 'g'];
console.log(arr4.reverse());
console.log(arr4);

//CONCAT METHOD (doesn't mutate the original arrays)
//these are below the same, it's up to the developer preference
const letters = arr.concat(arr4);
console.log(letters);
console.log([...arr, ...arr4]);
/////////////////////////////////////////////////////////////

//JOIN METHOD (doesn't mutate the original arrays)
console.log(letters.join(' - '));
