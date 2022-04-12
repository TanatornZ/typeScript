// key of type

type mapish = { [k: string]: boolean };

type M = keyof mapish;

//typeof

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
//  P = {
//       x : number ;
//       y : number ;
//   }

// Indexed Access Types
const MyArray = [
    {name : 'Alice' , age: 14},
    {name : 'Bob' , age: 17},
    {name : 'Nick' , age: 24}
];

type Person = typeof MyArray[number]
type Age = typeof MyArray[number]['age']


//Condition type
//   SomeType extends OtherType ? TrueType : FalseType;


//Mapped type 

type Point = {
    x : number,
    y : number
}

type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

const origin: Readonly<Point> ={
    x: 0 ,
    y: 0
}