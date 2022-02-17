// Завдання на практику
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в
// інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл
// видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і
// файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно
// їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const path = require('path');
const fs = require('fs');

const task_1 = () => {
    fs.writeFile(path.join(__dirname, 'text.txt'), 'data', (err) => {
        if (err) {
            console.log(err);
            return
        }
    });
    fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        fs.writeFile(path.join(__dirname, 'text2.txt'), data, (err) => {
            if (err) {
                console.log(err);
                return
            }
        });
    });
}
task_1();

// const task_2 = () => {
//     fs.writeFile(path.join(__dirname, 'task_2.txt'), 'text by task_2', (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
//     fs.readFile(path.join(__dirname, 'task_2.txt'), 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         fs.mkdir(path.join(__dirname, 'task_2Folder1', 'task_2Folder2'), {recursive: true}, (err) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             fs.writeFile(path.join(__dirname, 'task_2Folder1', 'task_2Folder2', 'task_2File.txt'), data, (err) => {
//                 if (err) {
//                     console.log(err);
//                     return
//                 }
//             });
//         });
//     });
//     fs.unlink(path.join(__dirname, 'task_2.txt'), (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
// }
// task_2();

//task 3

// fs.mkdir(path.join(__dirname, 'task_3Main', 'folder_1'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     fs.writeFile(path.join(__dirname, 'task_3Main', 'folder_1', 'task_3Folder_1.txt'), 'data by task 3 from folder 1', (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
//     fs.mkdir(path.join(__dirname, 'task_3Main', 'folder_1', 'folder_1_2'), (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
// });
// fs.mkdir(path.join(__dirname, 'task_3Main', 'folder_2'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     fs.writeFile(path.join(__dirname, 'task_3Main', 'folder_2', 'task_3Folder_2.txt'), 'data by task 3 from folder 2', (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
//     fs.mkdir(path.join(__dirname, 'task_3Main', 'folder_2', 'folder_2_2'), (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
// });


// function listObjects(path) {
//     fs.readdir(path, (err, files) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             fs.stat(`${path}/${file}`, (err, stats) => {
//                 if (err) {
//                     console.log(err);
//                     return
//                 }
//                 if (stats.isDirectory()) {
//                     fs.rename(`${path}/${file}`, `${path}/new_${file}`, (err) => {
//                         if (err) {
//                             console.log(err);
//                             return
//                         }
//                         listObjects(`${path}/new_${file}`);
//                     });
//                 } else if (stats.isFile()) {
//                     fs.truncate(`${path}/${file}`, (err) => {
//                         if (err) {
//                             console.log(err);
//                             throw err
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }
// listObjects(path.join(__dirname, 'task_3Main'));
