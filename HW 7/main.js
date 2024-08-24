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
