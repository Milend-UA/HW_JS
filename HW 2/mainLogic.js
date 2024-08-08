// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1973;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// Проверка для значения a = 1
let a = 1;
if (a !== 0) {
    console.log('a = 1: Вірно');
} else {
    console.log('a = 1: Невірно');
}

// Проверка для значения a = 0
a = 0;
if (a !== 0) {
    console.log('a = 0: Вірно');
} else {
    console.log('a = 0: Невірно');
}

// Проверка для значения a = -3
a = -3;
if (a !== 0) {
    console.log('a = -3: Вірно');
} else {
    console.log('a = -3: Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
//     який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 35;
switch (true) {
    case (time >= 0 && time <= 15):
        console.log('First quarter of the hour');
        break;
    case (time >= 16 && time <= 30):
        console.log('Second quarter of the hour');
        break;
    case (time >= 31 && time <= 45):
        console.log('Third quarter of the hour');
        break;
    case (time >= 46 && time <= 59):
        console.log('Fourth quarter of the hour');
        break;
    default:
        console.log('Invalid value');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let d = -3;
if (d >= 1 && d <= 10) {
    console.log('First decade');
} else if (d >= 11 && d <= 20) {
    console.log('Second decade');
} else if (d >= 21 && d <= 31) {
    console.log('Third decade');
} else {
    console.log('Invalid value');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
//     порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день (можна замість плану на день, назву дня англійською).
let dayId = 21;
    switch (true) {
        case (dayId === 1):
            console.log('Monday');
            break;
        case (dayId === 2):
            console.log('Tuesday');
            break;
        case (dayId === 3):
            console.log('Wednesday');
            break;
        case (dayId === 4):
            console.log('Thursday');
            break;
        case (dayId === 5):
            console.log('Friday');
            break;
        case (dayId === 6):
            console.log('Saturday');
            break;
        case (dayId === 7):
            console.log('Sunday');
            break;
        default:
            console.log('Invalid value');
    }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let num1 = 46;
let num2 = -345;
if (num1 > num2) {
    console.log('Максимальне число: ' + num1);
} else if (num1 < num2) {
    console.log('Максимальне число: ' + num2);
} else {
    console.log('Числа рівні: ' + num1);
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined,
//     null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти
// в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// два часа ковырял код, пока не понял, что подтягивает х из первого кода
// ... назвал abc и все заработало ...
let abc = null;
if (abc === null || abc === "") {
    console.log("default");
}
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив
// coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на
// тривалість навчання. У випадку якщо тривалість довша за 5 місяців
// вивести в консоль "Супер".
// Вариант 1
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0]. monthDuration > 5) {
//     console.log("Супер");
// }
// if(coursesAndDurationArray[1]. monthDuration > 5) {
//     console.log("Супер");
// }
// if(coursesAndDurationArray[2]. monthDuration > 5) {
//     console.log("Супер");
// }
// if(coursesAndDurationArray[3]. monthDuration > 5) {
//     console.log("Супер");
// }
// if(coursesAndDurationArray[4]. monthDuration > 5) {
//     console.log("Супер");
// }
// if(coursesAndDurationArray[5]. monthDuration > 5) {
//     console.log("Супер");
// }
// Вариант 2
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray[0].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[1].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[2].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[3].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[4].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[5].monthDuration > 5 ? "Супер" : "");