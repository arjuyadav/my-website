const Button = document.querySelector(".OpenBTN");
const main = document.querySelector("main");
const Ai_Open = document.querySelector('.AI_Open');
const Ai_Close = document.querySelector('.closeAI');
const Ai_Card = document.querySelector('.AI-Bot');

setTimeout(() => {
    Button.textContent = "Scroll";
}, 1000);

Ai_Open.addEventListener('click', () => {
    Ai_Card.style.display = "inherit";
    Ai_Open.style.display = "none";
});

Ai_Close.addEventListener('click', () => {
    Ai_Card.style.display = "none";
    Ai_Open.style.display = "flex";
});

Button.addEventListener('click', () => {
    const currentText = Button.textContent;
    if (currentText === "Scroll" || currentText === "Close") {
        Button.textContent = "Open";
        main.scrollTo({ top: 500, behavior: "smooth" });
    } else {
        Button.textContent = "Close";
        main.scrollTo({ top: 0, behavior: "smooth" });
    }
});
