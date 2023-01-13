function prime(n){
    if(n<2)return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
function armstrong(n){
    let str=n.toString();
    str=str.length();
    let out=0;
    const temp=n;
    while(n>0){
        let rem=n%10;
        out+=Math.pow(rem,str);
        n/=10;
    }
    return out===n ? true:false;
}
function both(n){
    if(prime(n) && armstrong(n)){
        console.log("Yes, the number is prime and armstrong");
    }else{
        console.log("No, the number is not both prime and armstrong");
    }
}