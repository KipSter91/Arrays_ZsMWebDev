'use strict';

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
  console.log(`Movement ${i + 1}: You just withdrew ${Math.abs(mov)} euro`));

//forEach with Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//MAP
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//SET (A Set has no index so the standard arguments will be value, _, set)
const currenciesUnique = new Set(['GBP', 'GBP', 'USD', 'USD', 'EUR', 'USD', 'EUR', 'USD', 'EUR', 'EUR', 'EUR', 'GBP']);
currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});



//Data transformations: map, filter, reduce
//1) MAP METHOD
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//with map method
const movementUSD = movements2.map(function (mov) {
  return mov * eurToUsd
})
console.log(movementUSD);

//with map and arrow
const movementsUSD2 = movements2.map(mov => mov * eurToUsd)
console.log(movementsUSD2);

//with for of loop
const movementsUSD3 = []
for (const mov of movements2) {
  movementsUSD3.push(mov * eurToUsd);
}
console.log(movementsUSD3);

const movementsDescriptions = movements2.map((mov, i, arr) => {
  return mov > 0
    ?
    (`Movement ${i + 1}: You deposited ${mov} euro`)
    :
    (`Movement ${i + 1}: You withdrew ${mov.toString().slice(1)} euro`)
});
console.log(movementsDescriptions);

//shorter version
const movementsDescriptions2 = movements2.map((mov, i) => {
  return `Movement ${i + 1}: You ${(mov > 0 ? 'deposited' : 'withdrew')} ${Math.abs(mov)} euro`
})
console.log(movementsDescriptions2);

//2) FILTER METHOD
//shorter (arrow style)
const deposits = movements2.filter((mov) => mov > 0)

//longer standard style
const deposits2 = movements2.filter(function (mov) {
  return mov > 0
});
console.log(deposits, deposits2);


const withdrawals = movements2.filter((mov) => mov < 0);
console.log(withdrawals);

//3) REDUCE METHOD
//accumulator ==> SNOWBALL ( It's a good practice to always provide an initial value when using reduce() to ensure predictable behavior, especially if the array might be empty.)
//standard length and style
const balance = movements2.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur
}, 0);
console.log(balance);

//shorter style with arrow function
const balance2 = movements2.reduce((acc, cur) => acc + cur, 0)
console.log(balance2);

//Manually with for-of loop
let balance3 = 0;
for (const movement of movements2) {
  balance3 += movement;
}
console.log(balance3);

//define with reduce method the maximum value of the array
//standard style
const maxValue = movements2.reduce(function (acc, cur, i, arr) {
  if (acc > cur) {
    return acc;
  } else {
    return cur
  }
}, movements2[0]);
console.log(maxValue);

//shorter style: arrow function and conditional (ternary) operator
const maxValue2 = movements2.reduce((acc, cur) => acc > cur ? acc : cur, movements2[0])
console.log(maxValue2);


///////////////////////////////////////
// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
console.log('Coding challenge 1 (Working with Arrays)'.padStart(35, '-').padEnd(55, '-'));
//data from Julia
const dataJ1 = [3, 5, 2, 12, 7];
const dataJ2 = [9, 16, 6, 8, 3];

//data fron Kate
const dataK1 = [4, 1, 15, 8, 3];
const dataK2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  dogsJulia.splice(-2);
  const corrJulData = dogsJulia.slice(-2);
  const allAges = corrJulData.concat(dogsKate);
  allAges.forEach((age, i, arr) => age >= 3
    ?
    console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
    :
    console.log(`Dog number ${i + 1} is still a puppy 🐶`))
}
console.log('Check data 1'.padStart(35, '-').padEnd(55, '-'));
checkDogs(dataJ1, dataK1)
console.log('Check data 2'.padStart(35, '-').padEnd(55, '-'));
checkDogs(dataJ2, dataK2)

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
//////////////////////*/
///////////////////////

const dataJ = [5, 2, 4, 1, 15, 8, 3];
const dataK = [16, 6, 10, 5, 6, 1, 4];

//detailed way
const calcAverageHumenAge = function (ages) {
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return age * 2
    } else {
      return 16 + age * 4
    }
  });
  console.log(humanAges);
  const filteredHumanAges = humanAges.filter(function (age) {
    return age > 18
  });
  console.log(filteredHumanAges);
  const avarageOfAges = Math.trunc(filteredHumanAges.reduce(function (acc, cur, i, arr) {
    return acc + cur
  }, 0) / filteredHumanAges.length)
  console.log(avarageOfAges);
};

calcAverageHumenAge(dataJ);
calcAverageHumenAge(dataK);

//short, method chained way
const calcAverageHumanAge2 = (ages) => {
  return Math.trunc(ages
    .map(age => age <= 2 ? age * 2 : 16 + age * 4)
    .filter(age => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0))
}

const avg1 = calcAverageHumanAge2(dataJ);
const avg2 = calcAverageHumanAge2(dataK);
console.log(avg1, avg2);

//3) FIND METHOD
// Data
const account1 = {
  owner: 'Zsolt Marku',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Barbara Marku',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

const firstWithdrawal = movements2.find(mov => mov < 0);
console.log(movements2);
console.log(firstWithdrawal);

const findOwner = accounts.find(acc => acc.owner === 'Barbara Marku');
console.log(findOwner);

const findOwner2 = (accounts) => {
  for (const account of accounts) {
    if (account.owner === 'Barbara Marku')
      console.log(account);
  }
};
findOwner2(accounts);

//4) FINDINDEX METHOD
const currentAccount = accounts[2];
const currentAccount2 = accounts.at(0);

const deleteAccount = (accs) => {
  if(currentAccount2){
    const index = accs.findIndex(acc => acc === currentAccount2)
    accounts.splice(index, 1)
  } else {
    console.log('There is no such element in your array!');
  }
}
deleteAccount(accounts);
console.log(accounts);