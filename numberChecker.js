function isPrime(input){
    if(input<2)return false;
    for(let itr=2;itr<=Math.sqrt(input);itr++){
        if(input%itr===0) return false;
    }
    return true;
}

const checkPrime=(input) =>{
    if(input<2)return false;
    for(let itr=2;itr<=Math.sqrt(input);itr++){
        if(input%itr===0) return false;
    }
    return true;
}
function isArmstrong(input){
    let stringForm=input.toString();
    let numberSize=stringForm.length();
    let out=0;
    const temp=input;
    while(input>0){
        let reminder=input%10;
        out+=Math.pow(reminder,numberSize);
        input/=10;
    }
    return out===temp ? true:false;
}

const checkArmstrong=(input)=>{
    let stringForm=input.toString();
    let numberSize=stringForm.length;
    let out=0;
    const temp=input;
    while(input>0){
        let reminder=input%10;
        out+=Math.pow(reminder,numberSize);
        input/=10;
    }
    return out===temp ? true:false;
}
console.log(isPrime(13));
console.log(isArmstrong(153));

// do it by arrow function