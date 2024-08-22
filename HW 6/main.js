// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// Стрінгові значення
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
function characterCounter(string){
    return string.length;
}
// OR let characterCounter = string => string.length;
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
let stringToArray = str => str.split(' ');
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
// OR
let arrayOfNumbers = [10,8,-7,55,987,-1011,0,1050,0];
let arrayOfStrings =
    arrayOfNumbers.map(arrayElement => arrayElement.toString());
console.log(arrayOfStrings);

//створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
};
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));  // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

//- є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

let filteredArray = coursesAndDurationArray.filter(a => a.monthDuration > 5);
console.log(filteredArray);

let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedArray);