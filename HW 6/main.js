// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// Стрінгові значення
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
function characterCounter(string){
    return string.length;
}
console.log(characterCounter(str1));
console.log(characterCounter(str2));
console.log(characterCounter(str3));

//Перевести до великого регістру наступні стрінгові значення
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
function strToUpperCase(string){
    return string.toUpperCase();
}
let upperStr1 = strToUpperCase(str1);
let upperStr2 = strToUpperCase(str2);
let upperStr3 = strToUpperCase(str3);
console.log(upperStr1);
console.log(upperStr2);
console.log(upperStr3 );

//Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';
let strToLowerCase = (string) => string.toLowerCase()
let lowerStr1 = strToLowerCase(str1);
let lowerStr2 = strToLowerCase(str2);
let lowerStr3 = strToLowerCase(str3);
console.log(lowerStr1);
console.log(lowerStr2);
console.log(lowerStr3);

//Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let strCleaner = (string) => string.trim();
let cleanedStr = strCleaner(str);
console.log(cleanedStr);

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
function stringToArray(str) {
    return str.split(' ');
}
let arr = stringToArray(str);
console.log(arr);
// OR
let str = 'Ревуть воли як ясла повні';
const stringToArray = str => str.split(' ');
let arr = stringToArray(str);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers = [10,8,-7,55,987,-1011,0,1050,0];
function convertToString(arrayElement) {
    return arrayElement.toString();
}
let arrayOfStrings = arrayOfNumbers.map(convertToString);
console.log(arrayOfStrings);


