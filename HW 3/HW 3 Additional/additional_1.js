// --створити масив з:
//     - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNumber = [8, 11, 1973, 2024, 1];
let arrString = ['Ukraine', 'city', 'okten', 'school', 'hometown'];
let arrMix = [true, 1973, 'Ukraine', 8, false];
console.log(arrMix);
console.log(arrString);
console.log(arrNumber);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = 'Ukraine';
arr[3] = 8;
arr[4] = false;
console.log(arr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}
//     2. перебрати його циклом for
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 1;
while(i < arr.length) {
    console.log(arr[i]);
    i+=2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 1; i < arr.length; i+=2) {
    console.log(arr[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i+=2;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 0; i < arr.length; i+=2) {
    console.log(arr[i]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 ===0)
        arr[i] = 'okten';
    console.log(arr[i]);
}
// 8. вивести масив в зворотньому порядку.
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//9.1
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = arr.length - 1;
while(i >=0) {
    console.log(arr[i]);
    i--;
}
//9.2
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
//9.3
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = arr.length - 1;
while(i >= 0) {
    console.log(arr[i]);
    i-=2;
}
//9.4
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = arr.length - 1; i >=0; i-=2) {
    console.log(arr[i]);
}
//9.5
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length - 2;
// while(i >= 0) {
//     console.log(arr[i]);
//     i-=2;
// }
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
if (i % 2 !== 0) {
    i--; //на всякий случай, если последний индекс не парный
}
while (i >= 0) {
    console.log(arr[i]);
    i -= 2;
}
//9.6
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = arr.length - 1; i >= 0; i-=2) {
    if (i % 2 !== 0) {
        i--; //на всякий случай, если последний индекс не парный
    }
    console.log(arr[i]);
}
//9.7
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] % 3 ===0)
        arr[i] = 'okten';
    console.log(arr[i]);
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumber = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < arrNumber.length; i++) {
    console.log(arrNumber[i]);
}
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for(let i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i]);
}
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrMix = [1973, "hello", true, null, undefined, {name: "John"}, [8, 11,
    2024], 3.14, "okten", false];

for (let i = 0; i < arrMix.length; i++) {
    console.log(arrMix[i]);
}
//Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arr = [true, 1973, "okten", false, "school", 3.14, true, 100,
    "JavaScript", false];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") {
        console.log(arr[i]);
    }
}
//Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr = [true, 1973, "okten", false, "school", 3.14, true, 100,
    "JavaScript", false];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        console.log(arr[i]);
    }
}
//Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arr = [true, 1973, "okten", false, "school", 3.14, true, 100,
    "JavaScript", false];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log(arr[i]);
    }
}
//Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів.Вивести в консоль всі його елементи в циклі.
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 1; i <= 10; i++) {
    console.log("Крок " + i);
    document.write("Крок " + i + " ; " + "<br>");
}

//Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 1; i <= 100; i++) {
    console.log("Крок " + i);
    document.write("Крок " + i + " ; " + "<br>");
}
//Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 1; i <= 100; i+=2) {
    console.log("Крок " + i);
    document.write("Крок " + i + " ; " + "<br>");
}
//Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log("Крок " + i);
        document.write("Крок " + i + " ; " + "<br>");
    }
}

//Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
let arr = [];
arr[0] = true;
arr[1] = 1973;
arr[2] = "okten";
arr[3] = false;
arr[4] = "school";
arr[5] = 3.14;
arr[6] = true;
arr[7] = 100;
arr[8] = "JavaScript";
arr[9] = false;
for(let i = 1; i <= 100; i++) {
    if(!i % 2 === 0) {
        console.log("Крок " + i);
        document.write("Крок " + i + " ; " + "<br>");
    }
}

//стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: ["Malcolm"],
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: ["genre1"]
    },
    {
        title: "book44",
        pages: 350,
        author: ["Mike"],
        genre: ["genre1", "genre2"]
    }
]

//знайти наібльшу книжку.
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: ["Malcolm"],
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: ["genre1"]
    },
    {
        title: "book44",
        pages: 350,
        author: ["Mike"],
        genre: ["genre1", "genre2"]
    }
]
let max = books[0];
for (let i = 1; i < books.length; i++) {
    if(books[i].pages > max.pages){
        max = books[i];
    }
}
console.log(max.title);

//знайти книжку/ки з найбільшою кількістю жанрів
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: ["Malcolm"],
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: ["genre1"]
    },
    {
        title: "book44",
        pages: 350,
        author: ["Mike"],
        genre: ["genre1", "genre2"]
    }
]
let max = books[0];
for (let i = 1; i < books.length; i++) {
    if(books[i].genre.length > max.genre.length){
        max = books[i];
    }
}
console.log(max.title);



//знайти книжку/ки з найдовшою назвою
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: "Malcolm",
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: "genre1"
    },
    {
        title: "book44",
        pages: 350,
        author: "Mike",
        genre: ["genre1", "genre2"]
    }
]
let max = books[0];
for (let i = 1; i < books.length; i++) {
    if(books[i].title.length > max.title.length){
        max = books[i];
    }
}
console.log(max.title);
// если книг две и более
// let max = books[0].title.length;
// for (let i = 1; i < books.length; i++) {
//     if (books[i].title.length > max) {
//         max = books[i].title.length;
//     }
// }
// for (let i = 0; i < books.length; i++) {
//     if (books[i].title.length === max) {
//         console.log(books[i].title);
//     }
// }

//знайти книжку/ки які писали 2 автори
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: ["Malcolm"],
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: ["genre1"]
    },
    {
        title: "book44",
        pages: 350,
        author: ["Mike"],
        genre: ["genre1", "genre2"]
    }
]
for (let i = 0; i < books.length; i++) {
    if (books[i].author.length === 2) {
        console.log(books[i].title);
    }
}

//знайти книжку/ки які писав 1 автор
let books = [
    {
        title: "book13",
        pages: 100,
        author: ["Peter", "Bob"],
        genre: ["genre1", "genre2", "genre3"]
    },
    {
        title: "book2666",
        pages: 130,
        author: ["Malcolm"],
        genre: ["genre1", "genre2"]
    },
    {
        title: "book37",
        pages: 70,
        author: ["Olga", "John"],
        genre: ["genre1"]
    },
    {
        title: "book44",
        pages: 350,
        author: ["Mike"],
        genre: ["genre1", "genre2"]
    }
]
for (let i = 0; i < books.length; i++) {
    if (books[i].author.length === 1) {
        console.log(books[i].title);
    }
}