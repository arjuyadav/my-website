function SetDateInDOM(params) {
    const now = new Date();
    const time = String(now.toLocaleTimeString())
    const date = String(now.toLocaleDateString())
    html = `<div class="Noti-Date">${date}</div><div class="Noti-Time">${time}</div>`;
    document.querySelector('.Notification-Footer').innerHTML = html;
}
setInterval(() => {
    SetDateInDOM()
}, 1000);