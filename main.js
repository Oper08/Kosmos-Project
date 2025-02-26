//fact
document.addEventListener("DOMContentLoaded", function () {
    const facts = [
        "В космосе нет звука, потому что там нет воздуха.",
        "Самая высокая гора Солнечной системы — Олимп на Марсе.",
        "Юпитер и Сатурн — газовые гиганты без твёрдой поверхности.",
        "Свет от Солнца до Земли идёт 8 минут и 20 секунд.",
        "Температура на Луне колеблется от -173°C до +127°C."
    ];

    document.getElementById("fact-btn").addEventListener("click", function () {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("fact-text").textContent = randomFact;
    });
});
//stars
document.addEventListener("mousemove", function (event) {
    const stars = document.querySelector(".stars");
    let moveX = (event.clientX / window.innerWidth) * 10;
    let moveY = (event.clientY / window.innerHeight) * 10;

    stars.style.transform = `translate(-${moveX}px, -${moveY}px)`;
});



//planet.html
document.addEventListener("DOMContentLoaded", function () {
    const planets = document.querySelectorAll(".planet");
    const planetSize = 100; // Размер планеты (ширина и высота)
    const padding = 50; // Минимальное расстояние от краёв экрана
    const placedPositions = []; // Храним координаты уже размещённых планет

    planets.forEach(planet => {
        let randomX, randomY;
        let isOverlapping;

        do {
            isOverlapping = false;

            // Генерируем случайные координаты с учётом границ
            randomX = Math.random() * (window.innerWidth - planetSize - padding * 2) + padding;
            randomY = Math.random() * (window.innerHeight - planetSize - padding * 2) + padding;

            // Проверяем, не пересекается ли с другими планетами
            for (let pos of placedPositions) {
                let dx = pos.x - randomX;
                let dy = pos.y - randomY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < planetSize + padding) {
                    isOverlapping = true;
                    break;
                }
            }
        } while (isOverlapping); // Повторяем, пока не найдём свободное место

        // Сохраняем размещённые координаты
        placedPositions.push({ x: randomX, y: randomY });

        // Применяем координаты к планете
        planet.style.left = `${randomX}px`;
        planet.style.top = `${randomY}px`;
    });
});
//stars
document.addEventListener("mousemove", function (event) {
    const stars = document.querySelector(".stars");
    let moveX = (event.clientX / window.innerWidth) * 10;
    let moveY = (event.clientY / window.innerHeight) * 10;

    stars.style.transform = `translate(-${moveX}px, -${moveY}px)`;
});


document.querySelectorAll(".planet").forEach(planet => {
    planet.addEventListener("mouseenter", function () {
        const name = planet.getAttribute("data-name");
        const info = planet.getAttribute("data-info");

        let tooltip = document.createElement("div");
        tooltip.className = "planet-tooltip";
        tooltip.innerHTML = `<strong>${name}</strong><br>${info}`;
        document.body.appendChild(tooltip);

        planet.addEventListener("mousemove", function (event) {
            tooltip.style.left = event.pageX + 10 + "px";
            tooltip.style.top = event.pageY + 10 + "px";
        });

        planet.addEventListener("mouseleave", function () {
            tooltip.remove();
        });
    });
});