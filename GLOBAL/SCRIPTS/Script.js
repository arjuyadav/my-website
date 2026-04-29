let heading = document.querySelector('h1');
let main = document.querySelector('main');
let container = document.querySelector('.AI-container');
let Open_ai = document.querySelector('.AI_Window_open_btn');
let element2 = document.querySelectorAll('.MyWebsites a');
Array.from(element2).forEach(e => {
    get_Normal_background(e)
})

get_background(heading)
setInterval(() => {
    let color = get_randomColor()
    main.style.boxShadow = ` 0 0 5vw ${color}`;
    Open_ai.style.boxShadow = ` 0 0 5vw ${color}`;
    Open_ai.style.background = `${color}`;
    if (container.classList.contains('Show-Ai-in-Welcome')) {
        container.style.boxShadow = ` 0 0 5vw ${color}`;
    }
    else {
        container.style = ``;
    }
}, 1500);

Open_ai.addEventListener('click', (e) => {
    e.stopPropagation()
    container.classList.toggle('Show-Ai-in-Welcome');
});

container.addEventListener('click',e=>{e.stopPropagation()})

document.addEventListener('click',()=>{
    if (container.classList.contains('Show-Ai-in-Welcome')) {
        container.classList.remove('Show-Ai-in-Welcome');
    }
})
// let User_Name = prompt("Enter Your Name If You Can Listen Your Name With Kali: ")
let User_Name = 'Arju'
User_Name.toString()

function Speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = .9 + Math.random()
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

let Great = [
    `Hello ${User_Name}, Welcome to our website!`,
    `Hello ${User_Name}, Welcome in Kali.`,
    `Hi ${User_Name} G, Welcome in Kali.`,
    `thanks for visit my site ${User_Name} G.`,
    `Kali coalab's With ${User_Name}.`,
    `${User_Name} G You are the proude owener of kali.`,
    `Hi ${User_Name} how are you`,
    `Hey ${User_Name} What's Up`,
    `Hi ${User_Name} let's enjoy our site.`,
]
if (User_Name) {
    text = Great[Math.ceil(Math.random() * (Great.length - 1))]
    Speak(text)
}