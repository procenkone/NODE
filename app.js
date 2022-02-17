//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з
// обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)
const fs = require('fs');
const path = require('path');

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"}

];
const inPersonUsers = [
    {name: "Oksana", age: 27, city: "Lviv"}

];

onlineUsers.map(item => {
    fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `\nNAME:${item.name} \nAGE: ${item.age} \nCITY: ${item.city}`, {flag: 'w'}, (err) => {
        if (err) {
            console.log(err);
            throw err
        }
    });
});

inPersonUsers.map(item => {
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `\nNAME: ${item.name} \nAGE: ${item.age} \nCITY: ${item.city}`, {flag: 'w'}, (err) => {
        if (err) {
            console.log(err);
            throw err
        }
    });
});

const recurcive = () => {
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), data, {flag: 'w'}, (err) => {
            if (err) {
                console.log(err);
                throw err
            }
        });
    });
    fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), data, {flag: 'w'}, (err) => {
            if (err) {
                console.log(err);
                throw err
            }
        });
    });
}
recurcive();

