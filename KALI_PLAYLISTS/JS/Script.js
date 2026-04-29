const videosList = [
    {
        video: 'VIDEO/AlanWalker-Alone.mp4',
        title: 'Alan Walker - Alone'
    },
    {
        VIDEO: 'VIDEO/AlanWalker-Play(Lyrics)ft.K-391,Tungevaag,Mangoo.mp4',
        title: 'emoji falling animation'
    },
    {
        video: 'VIDEO/arijitsingsong.mp4',
        title: 'house flood animation'
    },
    {
        video: 'VIDEO/hashibangayeho(female).mp4',
        title: 'zoombie walking animation'
    },
    {
        video: 'file:///C:/Users/HP/Documents/Code%20Project/html,css,java%20script/Project%20Kali/SOURCES/SOUND/Arash&Helena-OneDay(Remix).mp3',
        title: 'Arash Helena - OneDay ( Remix ) mp3'
    },
    {
        video: 'file:///C:/Users/HP/Documents/Code%20Project/html,css,java%20script/Project%20Kali/SOURCES/SOUND/nanasong.mp3',
        title: 'nana song mp3'
    },
    {
        video: 'file:///C:/Users/HP/Documents/Code%20Project/html,css,java%20script/Project%20Kali/SOURCES/SOUND/Arash&Helena-DneDay.mp3',
        title: 'Arash Helena - Dne Day mp3'
    },
    {
        video: 'VIDEO/AlanWalker-Play(Lyrics)ft.K-391,Tungevaag,Mangoo.mp4',
        title: 'Alan Walker - Play (Lyrics) ft. K-391, Tungevaag, Mangoo mp4'
    },
    {
        video: 'file:///C:/Users/HP/Documents/Code%20Project/html,css,java%20script/Project%20Kali/SOURCES/SOUND/alonemix.mp3',
        title: 'best of alone mix mp3 song'
    },
    {
        video: 'VIDEO/arijitsingsong.mp4',
        title: 'knight chasing virus animation'
    },
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
    var { video, title } = item;
    return (
        `<div class="list active">
            <video src=${video} class="list-video"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
    )
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
});
console.log('Script loaded successfully!');