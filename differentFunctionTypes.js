var a = 'Yash';

const userDetails = {
    username: 'Joe',
    abc() {
        console.log(this)
    this.thisInArrow()
      (() => {
        console.log(1, this)
        console.log(`Username is ${this.username}`);
      })()  
    },
    thisInArrow: () => {
        console.log(a)
    //   console.log(2, this)
    //   console.log(`Username is ${this.username}`);
    },
    thisInRegular() {
      console.log(3, this)
      console.log(`Username is ${this.username}`);
    },
  };
  

// userDetails.thisInArrow()

console.log(this);



var stores = "store-1";
// console.log(stores);

// 1. scope - var: global, let: scope
// 2. initial - var: undefined, let: uninit
// 3. var and let - change, const - final
// 4. arrays - reference to the value - const

let index = 1;

const nextIndex = 1;
// nextIndex = nextIndex + 1;
const array = [1,2,3]
array.push(4);

// array = [5,6,7]
console.log(array);
let def;

{
    console.log(stores);
    console.log(array);
    console.log(index);
    var abc = 1;
    const def = 1;
    // let ghi = 1;
}

console.log(abc);
console.log(def);

// are null and undefined same?

console.log(null == undefined);
console.log(null === undefined);
console.log(2 == '2');
console.log(2 === '2');
console.log(2 === 2);

