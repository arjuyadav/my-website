let Thame_Button = document.querySelector('.theme-mode');
let currentThame = localStorage.getItem("Theme");

if (currentThame == "light") {
    document.querySelector('html').setAttribute('data-Theme',"light");
    Thame_Button.innerHTML = 'Dark Mode';
}
else {
    document.querySelector('html').setAttribute('data-Theme',"dark");
    Thame_Button.innerHTML = 'Light Mode';
}

Thame_Button.addEventListener('click', () => {
    let currentThame = localStorage.getItem("Theme");
    if (currentThame != "light") {
        Thame_Button.innerHTML = 'Dark Mode';
        localStorage.setItem("Theme", "light")
        document.querySelector('html').setAttribute('data-Theme',"light");
    }
    else {
        localStorage.setItem("Theme", "dark")
        Thame_Button.innerHTML = 'Light Mode';
        document.querySelector('html').setAttribute('data-Theme',"dark");
    }
});