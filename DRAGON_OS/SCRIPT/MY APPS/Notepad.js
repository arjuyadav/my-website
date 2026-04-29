let appslist = {
    Naa: `<textarea placeholder="You can type here...">a</textarea>`,
    hii: `<textarea placeholder="You can type here...">b</textarea>`
};
// console.log(appslist);

function openApplication(appId) {
    // if (appId in appslist) {
    //     var content = appslist;
    // }
    // else {
    //     var content = "adsfasdf"
    // }
    var content = "adsfasdf"
    let window = document.createElement("div");
    let window_Head = document.createElement("div");
    let window_title = document.createElement("div");
    let window_controls = document.createElement("div");
    let window_close = document.createElement("button");
    let window_minimize = document.createElement("button");
    let window_restore = document.createElement("button");
    let window_content = document.createElement("div");
    window.setAttribute("id", appId)
    window.setAttribute("class", "window");
    window_Head.setAttribute("class", "header");
    window_title.setAttribute("class", "app-title");
    window_title.innerText = appId;
    window_controls.setAttribute("class", "controls");
    window_minimize.innerText = "--";
    window_restore.innerText = "▢";
    window_close.innerText = "x";
    window_minimize.setAttribute("onclick", `minimizeWindow('${appId}')`);
    window_restore.setAttribute("onclick", `restoreWindow('${appId}')`);
    window_close.setAttribute("onclick", `closeWindow('${appId}')`);
    window_content.setAttribute("id", "content");
    window_content.innerHTML = content;
    // output form
    document.getElementById("Desktop-Windows").append(window);
    window.append(window_Head);
    window_Head.append(window_title, window_controls);
    window_controls.append(window_minimize, window_restore, window_close);
    window.append(window_content);
}