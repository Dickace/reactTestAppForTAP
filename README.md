# reactTestAppForTAP
Using style guide: Airbnb Style Guide. https://github.com/airbnb/javascript <br/>
Elapsed time: ~ 10 hours.<br/>
Browser compatibility: Chrome, IE11.<br/>
Пояснение к исправлению замечаний:
1) Я не понимаю почему у вас eslint жалуется на окончания строк, вроде даже перечитал сам Airbnb Style Guide по поводу строк, вроде всё правильно ( и ещё вопрос каких именно строк? Вы имелли ввиду строки как string или какие либо другие строки, например в импортах)
Может я неправильно настравиваю elsint, но я вроде действую по инструкции:<br/>
   запускаю npx eslint --init<br/>
   На "How would you like to use ESLint?" выбираю "To check syntax, find problems, and enforce code style"<br/>
   На "What type of modules does your project use?" выбираю "JavaScript modules (import/export)"<br/>
   На " Which framework does your project use?" выбираю "React"<br/>
   На "Does your project use TypeScript?" выбираю "NO"<br/>
   На " Where does your code run?" выбираю "Browser"<br/>
   На "How would you like to define a style for your project?" выбираю "Use a popular style guide"<br/>
   На "Which style guide do you want to follow? " ввожу https://github.com/airbnb/javascript <br/>
   На "What format do you want your config file to be in?" выбираю JSON<br/>
   
2) Добавил новый файл ApiUrls.json, где в значении API_URL храню строку с адресом сервера. 
    