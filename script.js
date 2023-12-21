'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

//AT METHOD
const arr5 = [1, 2, 3, 4, 5]
//these are below the same, it's up to the developer preference, with the at method looks modern
console.log(arr5[1]);
console.log(arr5.at(1));

//if we want to get the last element of the array
console.log(arr5[arr5.length - 1]);
console.log(arr5.slice(-1)[0]);
console.log(arr5.at(-1));
//this method works with strings as well
console.log('Barbara'.at(-1));

//forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//solution with for-of loop
console.log('solution with for-of loop'.padStart(35, '-').padEnd(55, '-'));

for (const [i, movement] of movements.entries()) {
  movement > 0
    ?
    console.log(`Movement ${i + 1}: You just deposited ${movement} euro`)
    :
    console.log(`Movement ${i + 1}: You just withdrew ${movement.toString().slice(1)} euro`)
}

//solution with forEach ==> THERE IS NO POSSIBILITY TO USE BREAK OR CONTINUE WITH FOREACH!!!!!!!!!!!!!!
console.log('solution with forEach'.padStart(35, '-').padEnd(55, '-'));

movements.forEach((mov, i, arr) => mov > 0
  ?
  console.log(`Movement ${i + 1}: You just deposited ${mov} euro`)
  :
  console.log(`Movement ${i + 1}: You just withdrew ${Math.abs(mov)} euro`))