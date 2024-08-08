//Масиви та об'єкти:
// Створити масив, наповнити його 10 елементами будь-якого типу,
//    вивести кожен елемент в консоль
let arr = [-3, 'number', false, 100500, 1973, 1, 2 , 3, 4, 'count'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Пан Ніхто",
    pageCount: 320,
    genre: "Фантастика"
};

let book2 = {
    title: "Муравьи",
    pageCount: 410,
    genre: "Научная фантастика"
};

let book3 = {
    title: "Библия",
    pageCount: 1200,
    genre: "Религия"
};
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: "Mr. Nobody",
    pageCount: 320,
    genre: "Spy Novel",
    authors: [
        { name: "Bogomil Raynov", age: 80 }
    ]
};

let book2 = {
    title: "Ants",
    pageCount: 410,
    genre: "Science Fiction",
    authors: [
        { name: "Bernard Werber", age: 60 }
    ]
};

let book3 = {
    title: "The Bible",
    pageCount: 1200,
    genre: "Religion",
    authors: [
        { name: "Various Authors", age: null }
    ]
};
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: "Victor", username: "victor123", password: "password1"},
    {name: "George", username: "george123", password: "password2"},
    {name: "Mary", username: "mary123", password: "password3"},
    {name: "Vasya", username: "vasya123", password: "password4"},
    {name: "Peter", username: "peter123", password: "password5"},
    {name: "Bob", username: "bob123", password: "password6"},
    {name: "Malcolm", username: "malcolm123", password: "password7"},
    {name: "Phil", username: "phil123", password: "password8"},
    {name: "John", username: "john123", password: "password9"},
    {name: "Charlie", username: "charlie123", password: "password10"}
];
    console.log(users[i].password); // i от 0 до 9

// описати масив, в якому буде зберігатись інформація про температуру вранці,
//     вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21
// значенням вичключаємо одразу
//Варинт 1
// let temperatureInfo = [
//     { day: 1, temperature: { morning: 15, afternoon: 25, evening: 20 } },
//     { day: 2, temperature: { morning: 16, afternoon: 27, evening: 21 } },
//     { day: 3, temperature: { morning: 14, afternoon: 26, evening: 19 } },
//     { day: 4, temperature: { morning: 17, afternoon: 28, evening: 22 } },
//     { day: 5, temperature: { morning: 18, afternoon: 29, evening: 23 } },
//     { day: 6, temperature: { morning: 15, afternoon: 26, evening: 20 } },
//     { day: 7, temperature: { morning: 16, afternoon: 27, evening: 21 } }
// ];
//Варинт 2
// let temperatureInfo = [
//     { day: 1, temperature: [15, 25, 20] }, // [morning, afternoon, evening]
//     { day: 2, temperature: [16, 27, 21] },
//     { day: 3, temperature: [14, 26, 19] },
//     { day: 4, temperature: [17, 28, 22] },
//     { day: 5, temperature: [18, 29, 23] },
//     { day: 6, temperature: [15, 26, 20] },
//     { day: 7, temperature: [16, 27, 21] }
// ];
//Варинт 3
let temperatureInfo = [
    { day: 1, temperature: ['morning 15', 'afternoon 25', 'evening 20'] },
    { day: 2, temperature: ['morning 16', 'afternoon 27', 'evening 21'] },
    { day: 3, temperature: ['morning 14', 'afternoon 26', 'evening 19'] },
    { day: 4, temperature: ['morning 17', 'afternoon 28', 'evening 22'] },
    { day: 5, temperature: ['morning 18', 'afternoon 29', 'evening 23'] },
    { day: 6, temperature: ['morning 15', 'afternoon 26', 'evening 20'] },
    { day: 7, temperature: ['morning 16', 'afternoon 27', 'evening 21'] }
];


// для молодого и неокрепшего мозКа было "капец" как тяжело )))) залил
// галоном кофе! )))

