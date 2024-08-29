// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let newDiv = document.createElement('div');

newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');

newDiv.style.backgroundColor = 'lightblue';
newDiv.style.color = 'darkblue';
newDiv.style.fontSize = '20px';
newDiv.style.padding = '20px';
newDiv.style.border = '1px solid black';
newDiv.style.marginBottom = '20px';

newDiv.textContent = 'This is a new div';

document.body.appendChild(newDiv);

let clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);

// Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let items = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
for (let item of items) {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let container = document.createElement('div');
for (let course of coursesAndDurationArray) {
    let courseBlock = document.createElement('div');
    courseBlock.style.border = '1px solid black';
    courseBlock.style.padding = '10px';
    courseBlock.style.marginBottom = '10px';
    let titleElement = document.createElement('h2');
    titleElement.textContent = course.title; // Устанавливаем текст заголовка
    let durationElement = document.createElement('p');
    durationElement.textContent = `Duration: ${course.monthDuration} months`;
    courseBlock.appendChild(titleElement);
    courseBlock.appendChild(durationElement);
    container.appendChild(courseBlock);
}
document.body.appendChild(container);

//Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let container = document.createElement('div');
container.id = 'courses-container';
document.body.appendChild(container);

for (let course of coursesAndDurationArray) {
    let itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    let heading = document.createElement('h1');
    heading.className = 'heading';
    heading.textContent = course.title;

    let description = document.createElement('p');
    description.className = 'description';
    description.textContent = `Duration: ${course.monthDuration} months`;

    itemDiv.appendChild(heading);
    itemDiv.appendChild(description);

    container.appendChild(itemDiv);
}
