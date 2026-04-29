let Thame_Button = document.querySelector('.theme-mode')

Thame_Button.addEventListener('click', () => {
    let currentThame = localStorage.getItem("Thame");
    if (currentThame != "light") {
        console.log("dark");
        localStorage.setItem("Thame", "light")
        document.body.classList.add("light");
    }
    else {
        console.log("light");
        localStorage.setItem("Thame", "dark")
        document.body.classList.remove("light");
    }
});