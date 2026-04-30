const Settings_body = `
<div>hey I am friest app</div>
<button class="ThemeBtn">Change Theme To Light</button>
`;

const Settings_Styles = `
.Settings .app-body{
background: #333;
}
.Settings .ThemeBtn{
color:white;
border-radius:10px;
padding:10px;
}
`;

const Explorer_Styles = `
.Explorer .app-body{
background: #333;
color:#f4f4f4;
}
.Explorer .app-header{
background: #333;
}
`;

const Settings_Scripts = `
document.querySelector('.Settings .ThemeBtn').addEventListener('click',()=>{
    const Theme = document.querySelector('html').getAttribute('data-Theme');
    if (Theme == 'Dark'){
        document.querySelector('html').setAttribute('data-Theme','Light');
        document.querySelector('.Settings .ThemeBtn').innerHTML = 'Change Theme To Dark';
    }
    
    else {
            document.querySelector('html').setAttribute('data-Theme','Dark');
            document.querySelector('.Settings .ThemeBtn').innerHTML = 'Change Theme To Light';
    }
});
`;
const Explorer_Scripts = `
// Explorer Scripts Apear hear
`;
const Explorer_body = `
<h1>i am Explorer</h1>
`;

let App_Settings = {
    Name: 'Settings',
    id: 'Settings',
    Type: 'app',
    Logo: '⚙️',
    LogoType: 'text',
    Installed_on: '0-0-2026',
    MyltyOpen: false,
    Tabs: false,
    isOpen: false,
    DeskPin: true,
    TaskPin: false,
    Startup: false,
    Body: Settings_body,
    Styles: Settings_Styles,
    script: Settings_Scripts,
    pos: {
        x: 20,
        y: 30,
    }
};
About_Styles = `
.About .app-header{
color: #444;
background: #f5f5f5;}
.About .app-body{
color: #333;
background: #f1f1f1;}
.About .Window-Opration-Btns button{
background: aqua;
color: #222;
}
.About{
--app-active-body-header: #000000;
--app-Seperator: #222;
}
`
About_scripts = ''
About_body = `<h1>This is our About Page</h1>
<p>hey This Page Is under Mantaining Thangs</p>`
let App_About = {
    Name: 'About This Page',
    id: 'About',
    Type: 'app',
    Logo: '❔',
    LogoType: 'text',
    Installed_on: '0-0-2026',
    MyltyOpen: true,
    Tabs: false,
    isOpen: false,
    DeskPin: true,
    TaskPin: true,
    Startup: false,
    Body: About_body,
    Styles: About_Styles,
    script: About_scripts,
};

let Explorer_Tabs_Cont = {
    Name: "Explorer",
    TabId: "NewTab",
    NoOfTabs: 0
};

let App_Explorer = {
    Name: 'Files Explorer',
    id: 'Explorer',
    Type: 'app',
    Logo: '🗃️',
    LogoType: 'text',
    Installed_on: '0-0-2026',
    MyltyOpen: true,
    Tabs: true,
    isOpen: false,
    DeskPin: true,
    'Tabs_Cont': Explorer_Tabs_Cont,
    TaskPin: true,
    Startup: false,
    Body: Explorer_body,
    Styles: Explorer_Styles,
    script: Explorer_Scripts,
    pos: {
        x: 20,
        y: 30,
    }
};

const To_Do_body = `
<iframe src="/Os-Sia/Todo.html" style="height: calc(100% - 17px); width: 100%; zoom: 103%;"></iframe>
`

let App_To_Do_Projects = {
    Name: 'To Do Projects',
    id: 'To_Do_Projects',
    Type: 'app',
    Logo: '📲',
    LogoType: 'text',
    MyltyOpen: true,
    Tabs: false,
    isOpen: false,
    DeskPin: true,
    TaskPin: true,
    Startup: true,
    Body: To_Do_body,
    Styles: '',
    script:``,
};

let All_Apps_open = {
    Name: 'Show all apps',
    id: 'All_Apps',
    Type: 'app',
    Logo: '✉️',
    LogoType: 'text',
    TaskPin: true,
    Startup: true,
};

let Control_Sec = {
    Name: 'Task Bar Control',
    id: 'Control',
    Type: 'section',
    Logo: '🛞',
    LogoType: 'text',
    TaskPin: true,
    Startup: true,
};

let sperator = {
    Name: 'taskSeperator',
    Type: 'Seperator',
    TaskPin: true,
    Startup: true
}

const Space = {
    Name: 'taskSpace',
    Type: 'Space',
    TaskPin: true,
    Startup: true,
}