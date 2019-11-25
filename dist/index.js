console.log("Hello Typescript");
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
// function calculateTax(amount){
//     return amount * 1.2;
// }
function calculateTax(amount) {
    return `$${(amount * 1.2).toFixed(2)}`;
}
console.log(`${12} = ${calculateTax(12)}`);
// console.log(`${"Hello"} = ${calculateTax("Hello")}`);
// console.log(`${true} = ${calculateTax(true)}`)
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Full Amount in tax ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);
function calculateTaxFormat(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTaxFormat(100, false);
let taxstring = calculateTaxFormat(100, true);
/**Usong Type Unions */
// console.log(`Number Value: ${taxNumber.toFixed(2)}`)
// console.log(`String Value: ${taxstring.charAt(0)}`)
console.log("Using Type Assertions");
let taxNumber2 = calculateTaxFormat(100, false);
let taxString2 = calculateTaxFormat(100, true);
console.log(`Number value: ${taxNumber2.toFixed(2)}`);
console.log(`String Value: ${taxString2.charAt(0)}`);
// let taxBoolean = calculateTaxFormat(100,false) as boolean;
// console.log(`Boolean Value: ${taxBoolean}`)
let taxBoolean = calculateTaxFormat(100, false);
console.log(`Boolean Value: ${taxBoolean}`);
let taxValue = calculateTaxFormat(100, false);
if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
}
else if (typeof taxValue === "string") {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("value is null");
        }
        else {
            console.log(typeof taxValue);
            let value = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
// let newResult:unknown = calculateTaxFormat(200,false);
// let myNumber: number = newResult;
// console.log(`Number Value: ${myNumber.toFixed(2)}`)
let newResult = calculateTaxFormat(200, false);
let myNumber = newResult;
console.log(`Number Value: ${myNumber.toFixed(2)}`);
console.log("Using Nullable Types");
let taxValue2 = calculateTaxFormat(0, false);
switch (typeof taxValue2) {
    case "number":
        console.log(`Number Value: ${taxValue2.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue2.charAt(0)}`);
        break;
    default:
        if (taxValue2 === null) {
            console.log("value is null");
        }
        else {
            let value = taxValue2;
            console.log(`Unexpected type for value: ${value}`);
        }
}
let newResult2 = calculateTaxFormat(200, false);
let myNumber2 = newResult2;
console.log(`Number Value: ${myNumber2.toFixed(2)}`);
let taxValue3 = calculateTaxFormat(100, false);
if (taxValue3 !== null) {
    let nonNullTaxValue = taxValue3;
    switch (typeof taxValue3) {
        case "number":
            console.log(`Number value: ${taxValue3.toFixed(2)}`);
            break;
        case "string":
            console.log(`String value: ${taxValue3.charAt(0)}`);
            break;
    }
}
else {
    console.log("Value is not a string or number");
}
let taxValue4;
eval("taxValue4 = calculateTaxFormat(100,false)");
console.log(`Tax value 4 is ${taxValue4}`);
console.log("Chapter 8");
// function calculateTax(amount,discount){
//     return calculateTax(amount) - discount;
// }
function calculateTaxWithDiscount(amount, discount) {
    return (amount * 1.2) - discount;
}
let taxValueDiscount = calculateTaxWithDiscount(100, 0);
console.log(`2 args: ${taxValueDiscount}`);
// let taxValueDiscount2 = calculateTaxWithDiscount(100);
// console.log(`1 arg: ${taxValueDiscount2}`);
console.log("Using Optional Parameters");
function calculateTaxOptParameters(amount, discount) {
    return (amount * 1.2) - (discount || 0);
}
let taxParams = calculateTaxOptParameters(100, 10);
console.log(`2 args: ${taxParams}`);
console.log(`1 arg: ${taxParams}`);
console.log("Using Rest Parameters");
function calculateTaxWithRest(amount, discount = 0, ...extraFees) {
    if (amount != null) {
        return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
    }
    else {
        return undefined;
    }
}
const taxValueRest = calculateTaxWithRest(100, 10, 20);
console.log(`3 args: ${taxValueRest}`);
let taxValueRest2 = calculateTaxWithRest(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValueRest2}`);
let taxValueRest3 = calculateTaxWithRest(null, 0);
console.log(`Tax Value with null parameter: ${taxValueRest3}`);
function calculateTaxReturnNumber(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
}
function writeValue(label, value) {
    console.log(`${label}:${value}`);
}
writeValue("Tax Valuueee", calculateTaxReturnNumber(100, 0));
console.log("Overloading Function Types");
function calculateTax6(amount) {
    if (amount != null) {
        return amount * 1.2;
    }
    return null;
}
let taxAmount6 = calculateTax6(100);
if (typeof taxAmount6 === "number") {
    writeValue("Tax Value6 ", taxAmount6);
}
console.log("Chapter 9");
function calculateTax9(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hatPrice = 100;
let glovePrice = 75;
let umbrellaPrice = 42;
writePrice("Hat", calculateTax9(hatPrice));
writePrice("Gloves", calculateTax9(glovePrice));
writePrice("Umbrella", calculateTax9(umbrellaPrice));
let prices9 = [100, 75, 42];
let names9 = ["Hat", "Gloves", "Umbrella"];
console.log("Write Price Method");
writePrice(names9[0], calculateTax9(prices9[0]));
writePrice(names9[1], calculateTax9(prices9[1]));
writePrice(names9[2], calculateTax9(prices9[2]));
prices9.forEach((price, index) => {
    writePrice(names9[index], calculateTax9(price));
});
