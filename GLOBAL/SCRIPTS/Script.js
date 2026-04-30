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