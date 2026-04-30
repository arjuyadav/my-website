let noti_open = false
function Hide_Noti() {
    Noti_Open_BTN.innerHTML = '📘'
    noti_open = false
    document.getElementById('Notifications').style.transform = 'translateX(295px)'
}
const Noti_Open_BTN = document.querySelector('.Show-Notifi-Btn');
Noti_Open_BTN.addEventListener('click', () => {
    if (noti_open) {
        Hide_Noti()
    }
    else {
        noti_open = true
        Noti_Open_BTN.innerHTML = '📖'
        document.getElementById('Notifications').style.transform = 'translateX(0)'
    }
})