const Options = document.getElementById("Options");

function Show_Contextmenu(Element_Path) {
    document.addEventListener('mousemove', (e) => {
        let mouse = {
            x: e.pageX - Element_Path.getBoundingClientRect().left,
            y: e.pageY - Element_Path.getBoundingClientRect().top
        };
        Element_Path.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            Options.focus();
            showOptions(mouse.x, mouse.y);
        });
    });
}

function showOptions(left, top) {
    Options.style.top = top + "px";
    Options.style.left = left + "px";
    Options.classList.add('Contextmenu')
    Options.style.display = "inherit";
}