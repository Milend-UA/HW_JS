//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
for (let i = 1; i <= 10; i++) {
    let user = new User(i, `Вася${i}`, `Пупкiн${i}`,
        `мило${i}@гугле.com`, `123-456-789${i}`);
    users.push(user);
}
console.log(users);
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);
// let filteredUsers = users.filter(user => user.id % 2 === 0);
// filteredUsers.forEach(user => console.log(user));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a.id - b.id);
console.log(users);

//- створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}

let clients = [];
let clientData = [
    { id: 1, name: 'Jack', surname: 'Taylor', email: 'jack@example.com', phone: '012-345-6789', products: ['Cereal', 'Milk', 'Apples'] },
    { id: 2, name: 'Grace', surname: 'Miller', email: 'grace@example.com', phone: '789-012-3456', products: ['Pasta'] },
    { id: 3, name: 'Alice', surname: 'Smith', email: 'alice@example.com', phone: '123-456-7890', products: ['Bananas', 'Juice', 'Cheese', 'Tomatoes'] },
    { id: 4, name: 'David', surname: 'Jones', email: 'david@example.com', phone: '456-789-0123', products: ['Chicken', 'Rice'] },
    { id: 5, name: 'Ivy', surname: 'Moore', email: 'ivy@example.com', phone: '901-234-5678', products: ['Fish', 'Vegetables', 'Eggs'] },
    { id: 6, name: 'Hank', surname: 'Wilson', email: 'hank@example.com', phone: '890-123-4567', products: ['Butter'] },
    { id: 7, name: 'Bob', surname: 'Johnson', email: 'bob@example.com', phone: '234-567-8901', products: ['Bread', 'Milk', 'Honey', 'Cheese'] },
    { id: 8, name: 'Frank', surname: 'Davis', email: 'frank@example.com', phone: '678-901-2345', products: ['Yogurt', 'Honey'] },
    { id: 9, name: 'Charlie', surname: 'Williams', email: 'charlie@example.com', phone: '345-678-9012', products: ['Tomatoes', 'Cheese'] },
    { id: 10, name: 'Eve', surname: 'Brown', email: 'eve@example.com', phone: '567-890-1234', products: ['Juice', 'Butter', 'Eggs', 'Cereal'] }
];

for (let data of clientData) {
    let client = new Client(data.id, data.name, data.surname, data.email,
        data.phone, data.products);
    clients.push(client);
}

for (const client of clients) {
    console.log(`ID: ${client.id}`);
    console.log(`Name: ${client.name}`);
    console.log(`Surname: ${client.surname}`);
    console.log(`Email: ${client.email}`);
    console.log(`Phone: ${client.phone}`);
    console.log(`Products: ${client.products}`);
    console.log(` `);
}
console.log(`------------------------ NEXT TASK ------------------------------`);
console.log(` `);

//- Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedProducts = clients.sort((a, b) => a.products.length - b.products.length);
for (const client of sortedProducts) {
    console.log(`ID: ${client.id}`);
    console.log(`Name: ${client.name}`);
    console.log(`Surname: ${client.surname}`);
    console.log(`Email: ${client.email}`);
    console.log(`Phone: ${client.phone}`);
    console.log(`Products: ${client.products}`);
    console.log(` `);
}

//Створити функцію конструктор яка дозволяє створювати об'єкти car,
//з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
function Car(model, manufacturer, yearOfManufacture, topSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.topSpeed = topSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = {};
}
//drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
};
//info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function() {
    console.log(`Model - ${this.model}`);
    console.log(`Manufacturer - ${this.manufacturer}`);
    console.log(`Year of Manufacture - ${this.yearOfManufacture}`);
    console.log(`Top Speed - ${this.topSpeed}`);
    console.log(`Engine Capacity - ${this.engineCapacity}`);
};
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.topSpeed += newSpeed;
};
//changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function(newValue) {
    this.yearOfManufacture = newValue;
};
//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
Car.prototype.addDriver = function(driver) {
    this.driver = driver;
};

//Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class Car {
    // Конструктор для инициализации свойств
    constructor(model, manufacturer, yearOfManufacture, topSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.topSpeed = topSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = {}; // Инициализация пустым объектом
    }

    // drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
    }

    // info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year of Manufacture - ${this.yearOfManufacture}`);
        console.log(`Top Speed - ${this.topSpeed}`);
        console.log(`Engine Capacity - ${this.engineCapacity}`);
    }

    //increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.topSpeed += newSpeed;
    }

    //changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    }

    //addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
    // і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
    }
}
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let arrayOfCinderellas = [];
for (let i = 1; i <= 10; i++) {
    let cinderella = new Cinderella(`Cinderella ${i}`, i + 16, i + 35);
    arrayOfCinderellas.push(cinderella);
}
console.log(arrayOfCinderellas);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
let prince = new Prince("Prince Vasya", 25, 45);
console.log(prince);
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of arrayOfCinderellas) {
    if (cinderella.footSize === prince.foundShoeSize) {
        console.log(`Принц знайшов свою Попелюшку: ${cinderella.name}`);
        break;
    }
}
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = arrayOfCinderellas.find(cinderella =>
    cinderella.footSize === prince.foundShoeSize);
if(findCinderella) {
    console.log(`Принц знайшов свою Попелюшку: ${findCinderella.name}`);
}

//Через Array.prototype. створити власний foreach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let numbers = [1, 2, 3, 4, 5];

numbers.myForEach(function(element, index, array) {
    console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});

//Через Array.prototype. створити власний filter
Array.prototype.myFilter = function(callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.myFilter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers);
