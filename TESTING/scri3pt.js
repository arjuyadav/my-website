let zCounter = 1;

function focusWindow(clickedWindow) {
  // Increase z-index for the focused window
  zCounter++;
  clickedWindow.style.zIndex = zCounter;

  // Apply blur to others
  document.querySelectorAll('.window').forEach(win => {
    win.classList.add('blur');
  });

  // Remove blur from clicked one
  clickedWindow.classList.remove('blur');
}

// Make all windows draggable by title bar
// document.querySelectorAll('.window').forEach(win => {
//   const titleBar = win.querySelector('.title-bar');

//   let isDragging = false;
//   let offsetX, offsetY;

//   titleBar.onmousedown = (e) => {
//     isDragging = true;
//     offsetX = e.clientX - win.offsetLeft;
//     offsetY = e.clientY - win.offsetTop;
//     win.style.zIndex = ++zCounter; // bring to front while dragging
//     focusWindow(win);
//   };

//   document.onmousemove = (e) => {
//     if (!isDragging) return;
//     win.style.left = `${e.clientX - offsetX}px`;
//     win.style.top = `${e.clientY - offsetY}px`;
//   };

//   document.onmouseup = () => {
//     isDragging = false;
//   };
// });
