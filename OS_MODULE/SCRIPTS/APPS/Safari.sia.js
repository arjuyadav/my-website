let Safari_Body = `
<section class="UrlSec">
<input type="url" class="Safari-Url-Box" name="Url" placeholder="Enter Your Url">
<button class="Safari-Search-Btn">🔍</button>
</section>
</section>
<section class="PageSec">
<iframe src="" class="Safari-Page" frameborder="0"></iframe>
</section>
<section class="DevSec"></section>
`;

let Safari_Styles = `
.Safari .app-body{
    background: rgb(72, 72, 72);
    color: white;
}
.UrlSec {
    width: 100%;
    border-bottom: 1px solid #9292929c;
    padding: 10px;
}

.Safari-Url-Box {
    height: 34px;
    border-radius: 12px;
    padding: 5px;
    border: 1px solid rgba(92, 95, 95, 0.609);
    outline: none;
    width: 80%;
}
    
.Safari-Search-Btn {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(83, 83, 83, 0.494);
}

.PageSec {
    width: 100%;
    height: calc(100% - 60px);
}

.Safari-Page {
    width: 100%;
    height: 100%;
}
`;
let Safari_Scripts = `
document.querySelector('.Safari-Search-Btn').addEventListener('click', () => {
let Text = document.querySelector('.Safari-Url-Box').value;
if (Text != '') {
    document.querySelector('.Safari-Page').src = Text;
    }
});

document.addEventListener('keydown', e => {
    let Text = document.querySelector('.Safari-Url-Box').value;
    if (e.key === 'Enter' && Text != '') {
        document.querySelector('.Safari-Page').src = Text;
    }
})
`;

let Safari_Tabs_Cont = {
    Name: "New Tab",
    TabId: "NewTab",
    NoOfTabs: 0
};

let App_Safari = {
    id:'Safari',
    Name: 'Safari',
    Type: 'app',
    Logo: '🍎',
    LogoType: 'text',
    Installed_on: '0-0-2026',
    MyltyOpen: true,
    Tabs: true,
    'Tabs_Cont': Safari_Tabs_Cont,
    DeskPin: true,
    TaskPin: true,
    isOpen: false,
    Startup: false,
    Body: Safari_Body,
    Styles: Safari_Styles,
    script: Safari_Scripts,
    pos: {
        x: 20,
        y: 30,
    },
}