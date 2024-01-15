// ไม่ pure function (inputเดิม output เปลี่ยน) ไม่ถูกหลัก
let counter = 0;

function incrementCounter(){
    counter++
    return counter;
}

const value1 = incrementCounter();
const value2 = incrementCounter();

console.log(value1 === value2);

// -----------------------------------------

// pure function (inputเดิม outputเดิม) ถูกหลัก
function add(a, b){
    return a + b;
}

const result1 = add(2,3);
const result2 = add(2,3);

console.log(result1 === result2);

// -----------------------------------------

// imperative style แปลว่า สไตล์ที่ไม่สมดุล ไม่ถูกหลัก
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];
for (let i =0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);

// -----------------------------------------

// Declarative style ถูกหลัก
const myNumbers = [1, 2, 3, 4];
const myEvenNumbers = myNumbers.filter(myNumber => myNumber % 2 === 0);
console.log(evenNumbers);

// -----------------------------------------

// ไม่ High order function (การเรียก function ซ้อน function) ไม่ถูกหลัก 
const meNumbers = [1, 2, 3, 4]
const doubleNumbers = [];
for (let i = 0; i < meNumbers.length; i++){
    doubleNumbers.push(numbers[i] * i);
}

const meEvenNumbers = []
for (let i =0; i < meNumbers.length; i++){
    if (meNumbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

// -----------------------------------------

// High order function (การเรียก function ซ้อน function) ถูกหลัก 

const thisNumbers = [1, 2, 3, 4]

const thisDoubleNumbers = numbers.map(number => number * 2);
const thisEvenNumbers = numbers.filter(number => number % 2 === 0);

const thisNumber = thisNumbers.map(number => number * 2).filter(number => number % 2 ===0);

// หากกรณีไม่ได้ใช้งานร่วมกับ array หรือ object สามารถใช้ function เข้าไปทำงานได้ตรงๆ
// จะเห็นได้ว่า function repeat ไม่ได้ขึ้นอยู่กับ function ใดเลย
function repeat(n, fn){
    for (let i = 0; i < n; i++){
        fn();
    }
}

function logMessage(){
    console.log("Hello");
}

repeat(3, logMessage);

// -----------------------------------------

// Composition คือ เทคนิค ของ functional programming ที่จะช่วยรวม function เข้าด้วยกัน
function double(x){
    return x * 2;
}

function increment(x){
    return x + 1
}

// เขียนได้แต่ไม่ถูกหลัก composition
function doubleAndIncrement(x){
    const doubled = double(x);
    const incremented = increment(doubled);
    return incremented;
}

// เขียนถูกหลัก composition
function doubleThenIncrement(x){
    return increment(double(x));
}

console.log(doubleAndIncrement(3));

// -----------------------------------------

// Curry function ช่วยลดการส่ง argument ซ้ำๆกัน

// เขียนได้แต่ไม่ถูกหลัก Curry function
function applyDiscount(price, discount){
    return price - price * discount;
}

console.log(applyDiscount(100, 0.2));
console.log(applyDiscount(200, 0.2));
console.log(applyDiscount(300, 0.2));

// เขียนถูกหลัก Curry function จะเห็นได้ว่าทำการรวมค่า 0.2 เนื่องจากการเรียกหลายคร้งมีค่าเหมือนกัน
function curriedApplyDiscount(discount){
    return function(price){
        return price - price * discount;
    }
}

const applyTwentyPercentDiscount = curriedApplyDiscount(0.2);

console.log(applyTwentyPercentDiscount(100));
console.log(applyTwentyPercentDiscount(200));
console.log(applyTwentyPercentDiscount(300));

// -----------------------------------------

// Partial สามารถส่ง argument 2 ตัว แต่ curry ต้องส่งทีละตัว
function partialLog(level, message){
    return function(timestamp){
        console.log(`{${level}} ${timestamp}: ${message}`);
    };
}

const infoLogToday = partialLog('INFO', 'This is an informational message');
infoLogToday(new Date().toISOString());