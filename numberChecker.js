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

const checkArmstrong=(input)=>{
    let stringForm=input.toString();
    let numberSize=stringForm.length;
    let out=0;
    const temp=input;
    let itr=0;

    while(itr<numberSize){
        let reminder=input%10;
        out+=Math.pow(reminder,numberSize);
        itr++;
        input/=10;
    }
    console.log(out);
    return out===temp ? true:false;
}
console.log(checkPrime(13));
console.log(checkArmstrong(153));

// do it by arrow function