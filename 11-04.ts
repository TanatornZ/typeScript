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

const fruits: template[] = [
  { name: "apple", price: 250 },
  { name: "orange", price: 150 },
  { name: "melon", price: 350 },
];

// HOF build in

// const cheap = fruits.filter(fruit => fruit.price < 300) ;
// console.log(cheap)

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

type template = {
  name: string;
  price: number;
};

const func = (arg: number): template[] | undefined => {
  const result: template[] = [];
  fruits.forEach((fruit) => {
    if (fruit.price <= arg) {
      result.push(fruit);
    }
  });

  // return result
  return result;
};

const fakeFilter = (
  arr: template[],
  callback: (x: number) => template[] | undefined
) => {
  const result : template [] = [];
};

const findFruit = fakeFilter(fruits, func );

console.log(findFruit);


fruits.filter


// filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];