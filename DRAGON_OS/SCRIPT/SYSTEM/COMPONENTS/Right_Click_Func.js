const Desktop = document.getElementById('Desktop');
const Options = document.getElementById("Options");

document.addEventListener('mousemove', (e) => {
    let mouse = {
        x: e.pageX - Desktop.getBoundingClientRect().left,
        y: e.pageY - Desktop.getBoundingClientRect().top
    }
    Desktop.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        Options.focus()
        showOptions(mouse.x, mouse.y)
    });
    // Options.addEventListener('contextmenu', function (event) {
    //     event.preventDefault(); // Prevent the right-click menu from appearing
    //     // alert('Right-click is disabled on this page.');
    //     Options.focus()
    // });
});

function showOptions(left, top) {
    Options.style.top = top + "px";
    Options.style.left = left + "px";
    Options.classList.add('Options')
    Options.style.display = "inherit";
}
