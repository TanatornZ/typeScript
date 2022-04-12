// arrow func
const identify = <Type>(arg: Type): Type => {
  return arg;
};

// function identify<Type>(arg:Type):Type {
//     return arg
// }

//function is flexible can define type in <Type>

//Array
// function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
//     console.log(arg.length); // Array has a .length, so no more error
//     return arg;
//   }

//create type or interface with generics

interface GenericIdentifyFn<Type> {
  (arg: Type): Type;
}

const idenStr = identify<string>("String");
const idenNum = identify<number>(25);

// use interface

(() => {
  let myIdentify: GenericIdentifyFn<string> = identify;

  const test = myIdentify("test");

  console.log("test");
})();

//generics class

//define Type by user
class GenericNumber<Type> {
  zeroValue: Type;
  add: (x: Type, y: Type) => Type;
}

// myGenericNumber == class GenericNumber<Type>
let myGenericNumber = new GenericNumber<number>();
// attribute
myGenericNumber.zeroValue = 0;
// attribute as function
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

//Generic constraints

interface Lengthwise {
  length: number;
}

// arg is type have .length properties
// extends จะเพิ่ม type ให้ตัวที่เรารับมา
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

loggingIdentity<string[]>(["stsdf", "adf"]);

//class
// @strict: false
class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

const test = createInstance(Lion);

console.log(test);
