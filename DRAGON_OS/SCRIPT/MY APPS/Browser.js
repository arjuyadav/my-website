// let AppsD = {
//     App_ID: "Flare_browser",
//     AppClass: "Browser",
//     AppTitle: "Flare Browser",
//     Is_Drageble: true,
//     Pop_Up_Window: false,
//     Window_Type: "window",
//     Max_Open_Windows: 50,
//     Open_windows: 0,
//     Tabs_In_Header: true,
//     maxOpenTabs: 50,
// }
// let MyApp_header = `
// <div class="app-title">${AppsD.AppTitle}</div>
// <div class="controls">
//         <button onclick="minimizeWindow('${AppsD.App_ID}${AppsD.Open_windows}')">--</button>
//         <button onclick="restoreWindow('${AppsD.App_ID}${AppsD.Open_windows}')">▢</button>
//         <button class="closeBTN" onclick="close_Window('${AppsD.App_ID}${AppsD.Open_windows}')">x</button>
// </div>
// `;
// let MyApp_Content = `
// Hello World!
// `;

// function Show_Browser() {
//     if (AppsD.Open_windows < 50) {
//         let App = document.createElement("div");
//         let App_Header = document.createElement("div");
//         let App_Content = document.createElement("div");
//         App.setAttribute("id", `${AppsD.App_ID}${AppsD.Open_windows}`);
//         App.classList.add(`${AppsD.Window_Type}`);
//         App_Header.classList.add(`header`);
//         App_Content.classList.add(`content`);
//         App_Header.innerHTML = MyApp_header;
//         App_Content.innerHTML = MyApp_Content;
//         App.append(App_Header)
//         App.appendChild(App_Content)
//         document.getElementById("Desktop-Windows").append(App);
//     }
// }
let AppsD = {
    App_ID: "Flare_browser",
    AppClass: "Browser",
    AppTitle: "Flare Browser",
    Is_Drageble: true,
    Pop_Up_Window: false,
    Window_Type: "window",
    Max_Open_Windows: 50,
    Open_windows: 0,
    Tabs_In_Header: true,
    maxOpenTabs: 50,
};

function Show_Browser() {
    if (AppsD.Open_windows >= AppsD.Max_Open_Windows) return;

    const winId = `${AppsD.App_ID}${AppsD.Open_windows}`;

    // Create window container
    let App = document.createElement("div");
    App.className = `window ${AppsD.AppClass}`;
    App.id = winId;
    App.style.position = "absolute"; // Required for dragging
    App.style.left = "100px";
    App.style.top = "100px";

    // Create header
    let Header = document.createElement("div");
    Header.className = "header";
    Header.innerHTML = `
        <div class="app-title">${AppsD.AppTitle}</div>
        <div class="controls">
            <button onclick="minimizeWindow('${winId}')">--</button>
            <button onclick="restoreWindow('${winId}')">▢</button>
            <button class="closeBTN" onclick="close_Window('${winId}')">x</button>
        </div>
    `;

    // Create content
    let Content = document.createElement("div");
    Content.className = "content";
    Content.innerHTML = `<iframe src="/DRAGON_OS/" frameborder="0" style="width:100%; height:100%;"></iframe>`;

    // Assemble the app window
    App.appendChild(Header);
    App.appendChild(Content);
    document.getElementById("Desktop-Windows").appendChild(App);

    // Make draggable if enabled
    if (AppsD.Is_Drageble) makeDraggable(Header, App);

    AppsD.Open_windows++;
}

function makeDraggable(header, windowElement) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    header.style.cursor = "move";
    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
        if (!isDragging) return;
        windowElement.style.left = `${e.clientX - offsetX}px`;
        windowElement.style.top = `${e.clientY - offsetY}px`;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Prevent dragging on control buttons
    header.querySelectorAll(".controls *").forEach(btn => {
        btn.addEventListener("mousedown", e => e.stopPropagation());
    });
}
