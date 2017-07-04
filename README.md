# mongodb_nodejs
mongodb+nodejs
Работаем с MongoDB из NodeJS
Для работы с Mongo из под NodeJS необходимо выполнить следующие действия:
В рабочей папке установите 
npm install mongodb --save
это добавит драйвер подключения к удаленной базе данных. Напомню, что перед использованием npm нужно выполнить команду npm init.
Далее создайте файл app.js
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://<dbuser>:<dbpassword>@ds143892.mlab.com:43892/t1", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});
Не забудьте поменять dbuser и dbpassword.  Файл, в данный момент может только соединяться с базой и больше ничего. 
Изучите документацию по адресу: http://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs
Задача: выполнить те действия, которые вы выполняли в предыдущей работе с помощью скрипта. Т.е. необходимо создать скрипт, который содержит описанные команды создания и изменения содержимого базы данных. 
