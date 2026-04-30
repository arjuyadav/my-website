let Apps = {
    'Space1': Space,
    'Control_Sec': Control_Sec,
    'sperator0': sperator,
    'Settings': App_Settings,
    'Explorer': App_Explorer,
    'Safari': App_Safari,
    'To_Do_Projects': App_To_Do_Projects,
    'About': App_About,
    'sperator4': sperator,
    'All_Apps_open': All_Apps_open,
    'Space2': Space,
}

for (const app in Apps) {
    if (!Object.hasOwn(Apps, app)) continue;
    let innerLogo = null
    if (Apps[app].LogoType == 'img') {
        innerLogo = `<img draggable="false" src="/${Apps[app].Logo}" alt="${Apps[app].Logo}">`;
    }
    else {
        innerLogo = `<h1>${Apps[app].Logo}</h1>`;
    }
    
    if (Apps[app].Type == 'app') {
        if (Apps[app].DeskPin) {
            const DesktopIconTemplate = `
            <li class="Destkop-App-Icon DesktopLaucher" data-app="${Apps[app].id}">
            <div class="Dis-f-center">
            ${innerLogo}
            </div>
            <div class="Dis-f-center">
            <p>${Apps[app].Name}</p>
            </div>
            </li>
            `;
            document.getElementById('Desktop_App_Icon_List').insertAdjacentHTML('beforeend', DesktopIconTemplate);
        }
        if (Apps[app].TaskPin) {
            innerLogo = `<h2>${Apps[app].Logo}</h2>`;
            const TaskBar_Icon = `<div class="TaskLaucher TaskIcon ${Apps[app].id}" data-app="${Apps[app].id}">${innerLogo}</div>`;
            document.querySelector('#Taskbar').insertAdjacentHTML('beforeend', TaskBar_Icon);
        }
    }
    
    else if (Apps[app].Type == 'Seperator' || Apps[app].Type == 'Space') {
        if (Apps[app].TaskPin) {
            const TaskBar_Icon = `<div class="${Apps[app].Name}"></div>`;
            document.querySelector('#Taskbar').insertAdjacentHTML('beforeend', TaskBar_Icon);
        }
    }
    
    else if (Apps[app].Type == 'section') {
        if (Apps[app].TaskPin) {
            innerLogo = `<h2>${Apps[app].Logo}</h2>`;
            const TaskBar_Icon = `<div class="TaskLaucher ${Apps[app].id}">${innerLogo}</div>`;
            document.querySelector('#Taskbar').insertAdjacentHTML('beforeend', TaskBar_Icon);
        }
    }
}