// let currentFocusedWindow = null;

// // Function to handle window dragging
// let isDragging = false;
// let offsetX, offsetY;

// function makeDraggable(windowElement) {
//     windowElement.onmousedown = function(event) {
//         isDragging = true;
//         offsetX = event.clientX - windowElement.getBoundingClientRect().left;
//         offsetY = event.clientY - windowElement.getBoundingClientRect().top;

//         windowElement.style.zIndex = 1000; // Bring the dragged window to the front

//         document.onmousemove = function(event) {
//             if (isDragging) {
//                 windowElement.style.left = event.clientX - offsetX + 'px';
//                 windowElement.style.top = event.clientY - offsetY + 'px';
//             }
//         };

//         document.onmouseup = function() {
//             isDragging = false;
//             document.onmousemove = null;
//             document.onmouseup = null;
//         };
//     };
// }

// // Function to focus and highlight the clicked window
// function focusWindow(windowNumber) {
//     const windows = document.querySelectorAll('.window');

//     // Reset focus and blur on all windows
//     windows.forEach(window => {
//         window.classList.add('window-blur');
//         window.style.zIndex = 1;
//     });

//     // Focus the clicked window
//     const focusedWindow = document.getElementById(`window${windowNumber}`);
//     focusedWindow.classList.remove('window-blur');
//     focusedWindow.style.zIndex = 2;
//     currentFocusedWindow = windowNumber;
// }

// // Make all windows draggable
// document.querySelectorAll('.window').forEach(window => makeDraggable(window));
let currentFocusedWindow = null;

// Function to handle window dragging
let isDragging = false;
let offsetX, offsetY;

function makeDraggable(windowElement) {
    windowElement.onmousedown = function(event) {
        isDragging = true;
        offsetX = event.clientX - windowElement.getBoundingClientRect().left;
        offsetY = event.clientY - windowElement.getBoundingClientRect().top;

        windowElement.style.zIndex = 1000; // Bring the dragged window to the front

        document.onmousemove = function(event) {
            if (isDragging) {
                windowElement.style.left = event.clientX - offsetX + 'px';
                windowElement.style.top = event.clientY - offsetY + 'px';
            }
        };

        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

// Function to focus and highlight the clicked window
function focusWindow(windowNumber) {
    const windows = document.querySelectorAll('.window');

    // Reset focus and blur on all windows
    windows.forEach(window => {
        window.classList.add('window-blur');
        window.style.zIndex = 1; // Reset z-index for all windows
    });

    // Focus the clicked window by removing blur and bringing it to the top
    const focusedWindow = document.getElementById(`window${windowNumber}`);
    focusedWindow.classList.remove('window-blur');
    focusedWindow.style.zIndex = 9999; // Bring the clicked window to the front
    currentFocusedWindow = windowNumber;
}

// Make all windows draggable
document.querySelectorAll('.window').forEach(window => makeDraggable(window));
