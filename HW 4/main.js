//створити функцію яка обчислює
// та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return 'Sides must be positive!';
    }
}
// console.log('Площа прямокутника: ' + square(5, 8));
//OR
let result = square(5, 8);
console.log('Площа прямокутника: ' + result);

//творити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    const pi = 3.14;
    if (r > 0) {
        return pi * r * r;
    } else {
        return 'R must be > 0';
    }
}
let result = circleArea(5);
console.log('Площа кола: ' + result);

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function circleArea(r) {
    const pi = 3.14;
    if (r > 0) {
        return pi * r * r;
    } else {
        return 'R must be > 0';
    }
}
let result = circleArea(6);
console.log('Площа циліндру: ' + result);

//створити функцію яка приймає масив та виводить кожен його елемент
function arrayChecker(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let someArray = [1, 2, 3];
arrayChecker(someArray);

//створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function createParagraph (text) {
    document.write('<p>' + text + '</p>');
}
createParagraph('Okten School');

//створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function createList(text) {
    let ul = '<ul>';
    for (let i = 1; i <= 3; i++) {
        ul = ul + '<li>' + text + '</li>';
    }
    ul = ul + '</ul>';
    document.write(ul);
}
createList("Текст li задати через аргумент всім однаковий");

//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write
function createList(text, counter){
    let ul = '<ul>';
    for (let i = 1; i <=counter; i++){
        ul = ul + '<li>' + text + '</li>';
    }
    ul = ul + '</ul>';
    document.write(ul);
}
createList('Create Function', 10);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function createList(array) {
    let ul = '<ul>';
    for(let i = 0; i < array.length; i++) {
        ul = ul + '<li>' + array[i] + '</li>';
    }
    ul = ul + '</ul>';
    document.write(ul)
}
let newArray = [true, "text", 2345];
createList(newArray);
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
//
function displayUsers(users) {
    for (let i = 0; i < users.length; i++) {
        document.write(
            "<div>" +
            "<p>id: " + users[i].id + "</p>" +
            "<p>name: " + users[i].name + "</p>" +
            "<p>age: " + users[i].age + "</p>" +
            "<p>&nbsp;</p>" +
            "</div>"
        );
    }
}
const usersArray = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 20 }
];
displayUsers(usersArray);

//створити функцію яка повертає найменьше число з масиву
let newArray = [-65, 25, 89, 5, 0];
function minNumber(array) {
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
console.log(minNumber(newArray));

// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад sum([1,2,10]) //->13
let newArray = [-65, 25, 89, 5, 0];
function sumArray(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
        // sum = sum + array[i];
    }
    return sum;
}
console.log(sumArray(newArray));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1)); // => [22, 11, 33, 44]

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    return 0;
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));


