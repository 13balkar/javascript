const {checkPrime,checkArmstrong,isPrime,isArmstrong}=require("./numberChecker");


test('Checks if a number is prime or not',()=>{
    expect(
        checkPrime(13)
    ).toBe(true);
})
test('Checks if a number is prime or not',()=>{
    expect(
        checkPrime(29)
    ).toBe(true);
})
test('Checks if a number is prime or not',()=>{
    expect(
        checkPrime(50)
    ).toBe(false);
})
test('Checks if a number is prime or not',()=>{
    expect(
        checkPrime(42)
    ).toBe(false);
})



test('Checks if a number is prime or not',()=>{
    expect(
        isPrime(13)
    ).toBe(true);
})
test('Checks if a number is prime or not',()=>{
    expect(
        isPrime(29)
    ).toBe(true);
})
test('Checks if a number is prime or not',()=>{
    expect(
        isPrime(50)
    ).toBe(false);
})
test('Checks if a number is prime or not',()=>{
    expect(
        isPrime(42)
    ).toBe(false);
})





test('Checks if a number is armstrong or not',()=>{
    expect(
        checkArmstrong(153)
    ).toBe(true);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        checkArmstrong(370)
    ).toBe(true);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        checkArmstrong(100)
    ).toBe(false);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        checkArmstrong(13)
    ).toBe(false);
})




test('Checks if a number is armstrong or not',()=>{
    expect(
        isArmstrong(153)
    ).toBe(true);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        isArmstrong(370)
    ).toBe(true);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        isArmstrong(13)
    ).toBe(false);
})
test('Checks if a number is armstrong or not',()=>{
    expect(
        isArmstrong(13)
    ).toBe(false);
})

