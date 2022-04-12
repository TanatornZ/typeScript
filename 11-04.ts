// Promise Async

function checkNumber() {
  return new Promise((resolve, reject) => {
    const number = Math.ceil(Math.random() * 10);
    if (number % 2 === 0) {
      return resolve(number);
    } else {
      return reject(number);
    }
  });
}

checkNumber()
  .then((num) => console.log(`${num} is even`))
  .catch((num) => console.log(`${num} is odd`));

// HOF

const fruits = [
  { fruit: "apple", price: 250 },
  { fruit: "orange", price: 150 },
  { fruit: "melon", price: 350 },
];

// HOF build in 

const cheap = fruits.filter(fruit => fruit.price < 300) ;
console.log(cheap)

// create HOF 

// const myFilter = <T>(arr : T[], callback:void) : T[] => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i]
//         if (callback(element)) {
//             result.push(element)
//         }
//     }
//     return result ;
// }

// const test = myFilter(fruits, fruit => fruit.price < 300)

// console.log(test)