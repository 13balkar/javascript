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