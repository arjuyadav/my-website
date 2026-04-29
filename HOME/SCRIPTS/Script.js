let Thame_Button = document.querySelector('.theme-mode')

let currentThame = localStorage.getItem("Thame");
if (currentThame == "light") {
    document.body.classList.add("light");
}
else {
    document.body.classList.remove("light");
}
Thame_Button.addEventListener('click', () => {
    let currentThame = localStorage.getItem("Thame");
    if (currentThame != "light") {
        localStorage.setItem("Thame", "light")
        document.body.classList.add("light");
    }
    else {
        localStorage.setItem("Thame", "dark")
        document.body.classList.remove("light");
    }
});