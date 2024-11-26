//Проверка имени для 3 формы
function check_name() {
    let name1 = document.getElementById("name1").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(name1)) {
        document.getElementById("name_Check").style.color = "green";
        document.getElementById("name_Check").innerHTML = "Верно!";
        //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("name_pizza").style.opacity = "0.5";
        return true;
    }
    else {
        document.getElementById("name_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("name_Check").innerHTML = "Неверно. Пожалуйста введите, от 2 до 15 символов";
        return false;
    }
}


//Проверка фамилии для 3 формы
function check_surname() {
    let surname = document.getElementById("surname").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(surname)) {
        document.getElementById("surname_Check").style.color = "green";
        document.getElementById("surname_Check").innerHTML = "Верно!";
        //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("surname_pizza").style.opacity = "0.5";
        return true;
    }
    else {
        document.getElementById("surname_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("surname_Check").innerHTML = "Неверно. Пожалуйста введите, от 2 до 20 символов";
        return false;
    }
}

//Проверка почты для 3 формы
function check_email() {
    let email = document.getElementById("email").value;
    let regex = /^[a-zA-Z\s\.\,\@\d\ 0-9]{5,50}$/;

    if (regex.test(email)) { // if testing of dest is true
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Верно!";
        //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("email_pizza").style.opacity = "0.5";
        return true;
    }
    else {// if it's not
        document.getElementById("email_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("email_Check").innerHTML = "Неверно. Пожалуйста введите, от 5 до 50 символов";
        return false;
    }
}

//Проверка телефона для 3 формы
function check_Phone() {
    let phone = document.getElementById("phone").value;
    let regex = /^[6-9][0-9]{9}$/; // обязательно 1 цифра начинается с 7-9

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Верно!";
        //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("phone_pizza").style.opacity = "0.5";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("phone_Check").innerHTML = "Введено неверно. Подсказка: вводим без + и без пробелов";
        return false;
    }
}
//Проверка размера Пиццы для формы
function check_Size_pizza() {
    let size = document.getElementById("size").value;
    let regex = /^[30-45]{2}$/;

    if (regex.test(size)) {
        document.getElementById("size_Check").style.color = "green";
        document.getElementById("size_Check").innerHTML = "Верно!";
       //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("size_pizza").style.opacity = "0.5";
        return true;
    }
    else {
        document.getElementById("size_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("size_Check").innerHTML = "размер пиццы от 30-45 см";
        return false;
    }
}
function check_quantity_pizza() {
    let quantity = document.getElementById("quantity").value;
    let regex = /^[1-9]{1}$/;

    if (regex.test(quantity)) {
        document.getElementById("quantity_Check").style.color = "green";
        document.getElementById("quantity_Check").innerHTML = "Верно!";
        //при верном заполнении поля прозрачность повышается до 50%
        document.getElementById("quantity_pizza").style.opacity = "0.5";
        return true;
    }
    else {
        document.getElementById("quantity_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("quantity_Check").innerHTML = "неверно введено, попробуйте ещё раз";
        return false;
    }
}

//Отчетные данные для 3 формы
function outputData() {
    let vkus = document.getElementById("vkus").value;
    let size = document.getElementById("size").value;
    let name1 = document.getElementById("name1").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let dateAndTime = date + " в " + time;
    let quantity = document.getElementById("quantity").value;
    let paymethod = document.getElementById("paymethod").value;

    if (name1 != "" && surname != "" && email != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Привет, " + name1 + " " + surname + "!";
        document.getElementById("summary").innerHTML += "<p>Твоя пицца готова, но перед тем, как мы её тебе отправим, давай проверим твои данные</p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Допольнительный контакт: " + email + ".</br>";
        document.getElementById("summary").innerHTML += "Вы выбрали пиццу: " + vkus + ".</br>";
        document.getElementById("summary").innerHTML += "Размер пиццы: " + size + "см" +".</br>";
        document.getElementById("summary").innerHTML += "Количество: " + quantity + "шт" +".</br>";
        document.getElementById("summary").innerHTML += "Дата и время доставки заказа: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Если все верно нажми на кнопку и заказ полетит к тебе, если нет, то повторно введи данные</p>";
        document.getElementById("result").style.backgroundColor = "white";
    }
    else {
        document.getElementById("summary").style.color="rgb(110, 1, 1)";
        document.getElementById("summary").innerHTML = "Необходимо ввести все данные";
    }
}


console.log()

function forms_forth_login() {
    let login = document.getElementById("login").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(login)) {
        document.getElementById("forms_forth_login_Check").style.color = "green";
        document.getElementById("forms_forth_login_Check").innerHTML = "Верно!";
        return true;
    }
    else {
        document.getElementById("forms_forth_login_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("forms_forth_login_Check").innerHTML = "Неверно. Пожалуйста введите, от 2 до 15 символов";
        return false;
    }
}

function forms_forth_email() {
    let forth_email = document.getElementById("forth_email").value;
    let regex = /^[a-zA-Z\s\.\,\@\d\ 0-9]{5,50}$/;

    if (regex.test(forth_email)) {
        document.getElementById("forms_forth_email_Check").style.color = "green";
        document.getElementById("forms_forth_email_Check").innerHTML = "Верно!";
        return true;
    }
    else {
        document.getElementById("forms_forth_email_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("forms_forth_email_Check").innerHTML = "Неверно. Пожалуйста введите, от 5 до 50 символов";
        return false;
    }
}

function forms_forth_phone() {
    let forth_phone = document.getElementById("forth_phone").value;
    let regex = /^[6-9][0-9]{9}$/; // обязательно 1 цифра начинается с 7-9

    if (regex.test(forth_phone)) {
        document.getElementById("forms_forth_phone_Check").style.color = "green";
        document.getElementById("forms_forth_phone_Check").innerHTML = "Верно!";
        return true;
    }
    else {
        document.getElementById("forms_forth_phone_Check").style.color = "rgb(110, 1, 1)";
        document.getElementById("forms_forth_phone_Check").innerHTML = "Введено неверно. Подсказка: вводим без + и без пробелов";
        return false;
    }
}