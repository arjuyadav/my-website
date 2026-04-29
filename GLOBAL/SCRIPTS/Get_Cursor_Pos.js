let Cursor_offsetX = 5;
let Cursor_offsetY = -3;
const MouseCursor = document.querySelector('.cursor');
document.addEventListener("mousemove", (e) => {
    const x = e.clientX - Cursor_offsetX;
    const y = e.clientY - Cursor_offsetY;
    MouseCursor.style.left = `${x}px`;
    MouseCursor.style.top = `${y}px`;
});