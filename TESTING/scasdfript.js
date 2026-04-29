let windows = Array.from(document.querySelectorAll('.window'));
let zList = []; // To track recent window order (max length 5)

// Give initial positions
windows.forEach((win, i) => {
  win.style.top = `${60 + i * 30}px`;
  win.style.left = `${80 + i * 30}px`;
  win.style.zIndex = i + 1;
  zList.push(win);
  makeDraggable(win);
});

function focusWindow(target) {
  // Remove it from zList if it exists already
  zList = zList.filter(w => w !== target);
  // Push it to the end (top)
  zList.push(target);

  // Update zIndex from bottom to top
  zList.forEach((win, i) => {
    win.style.zIndex = i + 1;
    // win.classList.add('blur');
  });

  // Remove blur from top (focused)
  zList[zList.length - 1].classList.remove('blur');
}

// Draggable function
function makeDraggable(win) {
  const titleBar = win.querySelector('.title-bar');
  let isDragging = false;
  let offsetX, offsetY;

  titleBar.onmousedown = (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    focusWindow(win);
  };

  document.onmousemove = (e) => {
    if (!isDragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${e.clientY - offsetY}px`;
  };

  document.onmouseup = () => {
    isDragging = false;
  };
}
