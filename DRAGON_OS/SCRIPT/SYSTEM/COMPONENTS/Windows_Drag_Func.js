// let currentWindow = null; // The active window being dragged
// let offsetX = 0, offsetY = 0;

// // Make headers draggable
// document.querySelectorAll(".header").forEach(header => {
//     header.addEventListener("mousedown", (e) => {
//         currentWindow = header.parentElement;
//         offsetX = e.clientX - currentWindow.offsetLeft;
//         offsetY = e.clientY - currentWindow.offsetTop;
//         document.addEventListener("mousemove", dragWindow);
//         document.addEventListener("mouseup", stopDragging);
//     });
// });

// // Drag the window
// function dragWindow(e) {
//     if (!currentWindow) return;
//     currentWindow.style.left = `${e.clientX - offsetX}px`;
//     currentWindow.style.top = `${e.clientY - offsetY}px`;
// }

// // Stop dragging
// function stopDragging() {
//     currentWindow = null; // Reset the active window
//     document.removeEventListener("mousemove", dragWindow);
//     document.removeEventListener("mouseup", stopDragging);
// }

// document.querySelectorAll(".controls *").forEach(closeBTN => {
//     closeBTN.addEventListener("mousedown", (e) => {
//         e.stopPropagation();
//     });
// });
let currentWindow = null;
let offsetX = 0, offsetY = 0;

// Make headers draggable
document.querySelectorAll(".header").forEach(header => {
    header.addEventListener("mousedown", (e) => {
        currentWindow = header.parentElement;
        const rect = currentWindow.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Add dragging listeners
        document.addEventListener("mousemove", dragWindow);
        document.addEventListener("mouseup", stopDragging);
    });
});

// Drag the window
function dragWindow(e) {
    if (!currentWindow) return;
    currentWindow.style.position = 'absolute';
    currentWindow.style.left = `${e.clientX - offsetX}px`;
    currentWindow.style.top = `${e.clientY - offsetY}px`;
    currentWindow.style.margin = '0'; // Optional: prevent layout shift
}

// Stop dragging
function stopDragging() {
    currentWindow = null;
    document.removeEventListener("mousemove", dragWindow);
    document.removeEventListener("mouseup", stopDragging);
}

// Prevent drag on controls inside headers
document.querySelectorAll(".controls *").forEach(btn => {
    btn.addEventListener("mousedown", (e) => e.stopPropagation());
});
