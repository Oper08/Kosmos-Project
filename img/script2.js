const planetImages = {
    mercury: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mercury_transparent.png",
    venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
};

// planeta smena
document.querySelectorAll('.planet-btn').forEach(button => {
    button.addEventListener('click', () => {
        let planetDiv = document.querySelector('.planet');
        let planetName = button.getAttribute('data-planet');
        
        // Меняем текстуру планеты
        planetDiv.style.backgroundImage = `url(${planetImages[planetName]})`;
    });
});

// jer po umalchanyu
document.querySelector('.planet').style.backgroundImage = `url(${planetImages.earth})`;
