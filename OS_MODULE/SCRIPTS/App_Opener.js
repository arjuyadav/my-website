let OpeningApp = null;
let Html = null;
let innerHeader = null;
let innerLogo = null;

function Opening(app) {
    if (app.LogoType == 'img') {
        innerLogo = `<img draggable="false" src="/${app.Logo}" alt="${app.Logo}">`
    }

    else {
        innerLogo = `<h2>${app.Logo}</h2>`;
    }

    if (app.Type == 'app') {
        if (app.Tabs) {
            innerHeader = `
            <div class="app-Tabs-Cont">
                <div class="app-Tab Dis-f-center">
                    <div class="Tab-logo">
                        ${innerLogo}
                    </div>
                    <div class="Tab-Title">
                        ${app.Tabs_Cont.Name}
                    </div>
                    <div class="Tab-Oprations Dis-f-center"><button>X</button></div>
                </div>
            </div>`;
        }

        else {
            innerHeader = `
            <div class="app-title">
                <div class="app-logo">
                    ${innerLogo}
                </div>
                <div>
                    ${app.Name}
                </div>
            </div>`;
        }

        Html = `
        <div class="app ${app.id}" data-app="${app.id}">
            <div class="app-header">
                ${innerHeader}
                <div class="Window-Opration-Btns Dis-f-center">
                <button class="Dis-f-center app-Minimize-btn">ー</button><button class="Dis-f-center app-Restore-btn">▢</button><button class="Dis-f-center app-close-btn">X</button></div>
            </div>
            <div class="app-body">
            ${app.Body}
            </div>
        </div>`;
        document.querySelector('.All-Opend-Apps').insertAdjacentHTML('beforeend', Html);
    }
}

function OpenApp(app) {
    if (app in Apps) {
        if (Apps[app].MyltyOpen) {
            if (!Apps[app].isOpen) {
                Opening(Apps[app]);
                Apps[app].isOpen = true
                const style = document.createElement("style");
                style.textContent = `${Apps[app].Styles}`;
                document.head.appendChild(style);
                const Scripts = document.createElement("script");
                Scripts.textContent = `${Apps[app].script}`;
                document.body.appendChild(Scripts);
            }
            else {
                Opening(Apps[app]);
                Apps[app].isOpen = true
            }
        }
        else {
            if (!Apps[app].isOpen) {
                Opening(Apps[app]);
                Apps[app].isOpen = true
                const style = document.createElement("style");
                style.textContent = `${Apps[app].Styles}`;
                document.head.appendChild(style);
                const Scripts = document.createElement("script");
                Scripts.textContent = `${Apps[app].script}`;
                document.body.appendChild(Scripts);
            }
        }
    }

    Header = document.querySelectorAll(".app-header")
    Header.forEach(element => {
        element.addEventListener("mousedown", (e) => {
            currentWindow = element.parentElement;
            offsetX = e.clientX - currentWindow.offsetLeft;
            offsetY = e.clientY - currentWindow.offsetTop;
            document.addEventListener("mousemove", dragWindow);
            document.addEventListener("mouseup", stopDragging);
        });
        element.addEventListener('dblclick', (e) => {
            if (element.parentElement.style.height == '100%') {
                RestoreDown(element.parentElement);
            }
            else{
                RestoreUp(element.parentElement);
            }
        })
    });

    AppElements = document.querySelectorAll(".app");
    AppElements.forEach(element => {
        element.addEventListener('mousedown', () => {
            AppElements.forEach(ele => {
                ele.classList.remove('active-app');
            });
            element.classList.add('active-app');
        });
    });
    document.querySelectorAll('.app-close-btn').forEach(element => {
        element.addEventListener('mouseup', (e) => {
            RemoveFromDOM(element.parentElement.parentElement.parentElement);
        })
    })
    document.querySelectorAll('.app-Restore-btn').forEach(element => {
        element.addEventListener('mouseup', (e) => {
            if (element.parentElement.parentElement.parentElement.style.height == '100%') {
                RestoreDown(element.parentElement.parentElement.parentElement);
            }
            else{
                RestoreUp(element.parentElement.parentElement.parentElement);
            }
        })
    })
    document.querySelectorAll('.app-Minimize-btn').forEach(element => {
        element.addEventListener('mouseup', (e) => {
            Minimize(element.parentElement.parentElement.parentElement);
        })
    })
}

function RemoveFromDOM(App) {
    App.remove();
}
function Minimize(App) {
    App.style.display = 'none';
}
function Maximize(App) {
    App.style.display = 'flex';
}
function RestoreUp(App) {
    App.style.height = '100%';
    App.style.width = '100%';
    App.style.left = '0';
    App.style.top = '0';
}
function RestoreDown(App) {
    App.style.height = '300px';
    App.style.width = '400px';
}
