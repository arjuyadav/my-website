let currentWindow = null;
let offsetX = 0, offsetY = 0;

function dragWindow(e) {
    if (!currentWindow) return;
    if (e.clientX > 0 && e.clientX < window.innerWidth) {
        currentWindow.style.left = `${e.clientX - offsetX}px`;
    }
    if (e.clientY > 0 && e.clientY < window.innerHeight) {
        currentWindow.style.top = `${e.clientY - offsetY}px`;
    }

};

function stopDragging() {
    currentWindow = null;
    document.removeEventListener("mousemove", dragWindow);
    document.removeEventListener("mouseup", stopDragging);
};

document.querySelectorAll('.Window-Opration-Btns button').forEach(element => {
    element.addEventListener('mousedown', (e) => {
        e.stopImmediatePropagation()
    });
})

document.querySelectorAll('.DesktopLaucher').forEach(element => {
    element.addEventListener('dblclick', () => {
        OpenApp(element.getAttribute('data-app'));
    });
});

document.querySelectorAll('.TaskLaucher').forEach(element => {
    element.addEventListener('click', () => {
        OpenApp(element.getAttribute('data-app'));
    });
});

document.querySelectorAll('.StopEventBubbling-click').forEach(element => {
    element.addEventListener('click', e => {
        e.stopPropagation();
    })
})

let show_Task = true
function Hide_Task() {
    if (show_Task) {
        document.getElementById('Taskbar').style.transform = 'translateY(100px)';
    }
}

function Show_Task() {
    if (!show_Task) {
        document.getElementById('Taskbar').style.transform = 'translateY(0)';
    }
}

document.addEventListener('click', () => {
    Hide_Noti()
})