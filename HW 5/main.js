//зробити їх потрібно за допомоги стрілочних функцій
//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => {
    if (a <= 0 || b <= 0) {
        return "Sides must be positive!";
    }
    return a * b;
};
let result = square(10, 20)
console.log(result);