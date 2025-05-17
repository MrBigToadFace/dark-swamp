document.addEventListener("DOMContentLoaded", loadTheme);

function loadTheme() {
    var theme = localStorage.getItem("theme");
    var element = document.body;
    var icon = document.getElementById('theme-icon');
    var homeLinkImage = document.querySelector('.homelink img');

    if (theme === "light") {
        element.classList.add("light-mode");
        icon.textContent = "dark_mode";
        homeLinkImage.src = "static/images/homelight.png";
    } else {
        icon.textContent = "light_mode";
        homeLinkImage.src = "static/images/homedark.png";
    }
}

function setTheme() {
    var element = document.body;
    var icon = document.getElementById('theme-icon');
    var homeLinkImage = document.querySelector('.homelink img');
    element.classList.toggle("light-mode");
    if (element.classList.contains("light-mode")) {
        icon.textContent = "dark_mode";
        homeLinkImage.src = "static/images/homelight.png";
        localStorage.setItem("theme", "light");
    } else {
        icon.textContent = "light_mode";
        homeLinkImage.src = "static/images/homedark.png";
        localStorage.setItem("theme", "dark");
    }
}

function soundClick() {
    var audio = document.getElementById('audio');
    audio.volume = 0.3;
    audio.play();
}