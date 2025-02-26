// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".stars-container");

//     for (let i = 0; i < 500; i++) { 
//         let star = document.createElement("div");
//         star.classList.add("star");

//         let x = Math.random() * window.innerWidth;
//         let y = Math.random() * window.innerHeight;
//         star.style.left = `${x}px`;
//         star.style.top = `${y}px`;

//         container.appendChild(star);
//     }
// });


// document.addEventListener("mousemove", function (event) {
//     document.querySelectorAll(".star").forEach(star => {
//         let moveX = (event.clientX / window.innerWidth) * 10;
//         let moveY = (event.clientY / window.innerHeight) * 10;

//         star.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     });
// });


const stars = [
    { name: "Солнце", fact: "Центральная звезда Солнечной системы." },
    { name: "Сириус", fact: "Самая яркая звезда на ночном небе." },
    { name: "Бетельгейзе", fact: "Красный сверхгигант в созвездии Ориона." },
    { name: "Полярная звезда", fact: "Расположена близко к северному полюсу мира." },
    { name: "Альфа Центавра", fact: "Ближайшая к Солнцу звездная система." },
    { name: "Вега", fact: "Одна из самых ярких звезд в северном полушарии." },
    { name: "Антарес", fact: "Красный сверхгигант в созвездии Скорпиона." },
    { name: "Арктур", fact: "Самая яркая звезда в созвездии Волопаса." },
    { name: "Ригель", fact: "Голубой сверхгигант в созвездии Ориона." },
    { name: "Альдебаран", fact: "Красный гигант в созвездии Тельца."  },
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const starCardsContainer = document.getElementById("starCards");

function displayStars(filteredStars) {
    starCardsContainer.innerHTML = "";
    filteredStars.forEach(star => {
        const card = document.createElement("div");
        card.className = "star-card";
        card.innerHTML = `
            <h2>${star.name}</h2>
            <p>${star.fact}</p>
        `;
        starCardsContainer.appendChild(card);
    });
}

displayStars(stars);

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredStars = stars.filter(star =>
        star.name.toLowerCase().includes(searchText)
    );
    displayStars(filteredStars);
});

searchButton.addEventListener("click", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredStars = stars.filter(star =>
        star.name.toLowerCase().includes(searchText)
    );
    displayStars(filteredStars);
});


