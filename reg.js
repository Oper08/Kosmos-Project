document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена, проверяем сохранённые данные...");

    const form = document.getElementById("support-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Загружаем данные из localStorage
    if (localStorage.getItem("name")) {
        nameInput.value = localStorage.getItem("name");
        console.log("Загружено имя:", nameInput.value);
    }
    if (localStorage.getItem("email")) {
        emailInput.value = localStorage.getItem("email");
        console.log("Загружен email:", emailInput.value);
    }
    if (localStorage.getItem("message")) {
        messageInput.value = localStorage.getItem("message");
        console.log("Загружено сообщение:", messageInput.value);
    }

    // Сохраняем данные в localStorage при отправке формы
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Отменяем стандартное поведение формы

        // Сохраняем значения полей в localStorage
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("message", messageInput.value);

        console.log("Сохранённые данные:");
        console.log("Имя:", localStorage.getItem("name"));
        console.log("Email:", localStorage.getItem("email"));
        console.log("Сообщение:", localStorage.getItem("message"));

        alert("Ваше сообщение сохранено!");
    });
});


localStorage.removeItem("name");
localStorage.removeItem("email");
localStorage.removeItem("message");