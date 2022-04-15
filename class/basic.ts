class GoodGreeter {
  _name: string;
 
    //define intializer of name
  constructor(x:string) {
    this._name = x;
  }

  // get 
  get name() : string { return this._name; }

  // set _name
  set name(value:string) {
    this._name = value;
  }


}


const test = new GoodGreeter('Bank');


(() => {

    console.log(test.name)
})()



