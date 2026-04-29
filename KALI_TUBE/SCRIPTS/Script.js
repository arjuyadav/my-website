//For Loop for Multiple Video 
document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    let ytArr = [
        //["thumbnail Name[0]",      "Video Link[1]                                     ",      " Video Title [2]                                   ",          "channel icon limk[3]                 " ,      " channel name   "    ],
        ["wspython1.jpg                       ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["htahrry1.jpg                        ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["code1.png                           ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["blender1.jpg                        ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["pyharry1.jpg                        ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["pyharry2.jpg                        ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["yt1.jpg                             ", "ujM23hruYGM                                       ", "How To Make a Full Responsive Event ...            ", "profile-pic1.jpg           ", " Tips & tricks   "],
        ["yt2.jpg                             ", "wbJz8A4erMk                                       ", "Arju naam toh suna hoga coder arju kali's admin... ", "profile-pic1.jpg           ", " Coding not game "],
        ["yt3.jpg                             ", "QQYV_X3A4wI                                       ", "How To Make a Full Responsive Traveling ...        ", "profile-pic1.jpg           ", " CofyShop        "],
        ["yt4.jpg                             ", "mNlzrc5A0Ek                                       ", "How to Make a Responsive website                   ", "profile-pic1.jpg           ", " Onlene Coching  "],
        ["yt5.jpg                             ", "LDabs-XHeA4                                       ", "How To Make a Responsive Coffee Shop               ", "profile-pic1.jpg           ", " Kali India      "],
        ["yt9.jpg                             ", "dP2IuOhBPxg                                       ", "How To Create Barber Website Using HTML ...        ", "profile-pic1.jpg           ", " Mksirinsprition "],
        ["yt6.jpg                             ", "LaEmeVZcKF8                                       ", "How to Make A Portfolio Website Using HTML ...     ", "profile-pic1.jpg           ", " Codewithharry   "],
        ["yt7.jpg                             ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "How To Create a Responsive Food                    ", "profile-pic1.jpg           ", " Kali instude    "],
        ["yt8.jpg                             ", "SOUND/Arash&Helena-DneDay.mp3                     ", "How To Make a The Wedding WebSite Using ...        ", "profile-pic1.jpg           ", " Coding classes  "],
        ["song1.jpg                           ", "SOUND/nanasong.mp3                                ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song2.jpg                           ", "SOUND/videoplayback1.weba                         ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song3.jpg                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song4.jpg                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song5.png                           ", "SOUND/nanasong.mp3                                ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song6.jpg                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song7.jpg                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song8.png                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["song9.jpg                           ", "SOUND/Arash&Helena-OneDay(Remix).mp3              ", "full mood of English song bass is very cool sing...", "profile-pic1.jpg           ", " Arju@Songs      "],
        ["images (1).jpg                      ", "wbJz8A4erMk                                       ", "Installing VS Code & How Websites Work _ Sigma W...", "download.jpg               ", " Vevo Music      "],
        ["images (2).jpg                      ", "wbJz8A4erMk                                       ", "Basic Structure of an HTML Website _ Sigma Web D...", "alonech1.jpg               ", " Alone wallker   "],
        ["images (3).jpg                      ", "SOUND/nanasong.mp3                                ", "Your First HTML Website _ Sigma Web Development... ", "download (2).jpg           ", " arju gamer      "],
        ["images (4).jpg                      ", "VIDEO/hashibangayeho(female).mp4                  ", "mood fresh song hashi ban gaye ho (female)         ", "profile-pic2.jpg           ", " Ai creater      "],
        ["imeges (6).jpg                      ", "SOUND/nanasong.mp3                                ", "battle ground mobile india is bast game in the s...", "alonech1.jpg               ", " T-Srice         "],
        ["download (1).jpg                    ", "SOUND/AlanWalker-Play(Lyrics)ft.K-391.mp3         ", "Alan Walker - Alone song 4k Hd song                ", "profile-pic2.jpg           ", " Arju editer     "],
        ["download (2).jpg                    ", "wbJz8A4erMk                                       ", "badashah x arijit sing new hindi song oficial mi...", "profile-pic2.jpg           ", " T-Srice         "],
        ["download (3).jpg                    ", "SOUND/nanasong.mp3                                ", "bast of alone walker songs playlist                ", "profile-pic2.jpg           ", " Zeemusiccompy   "],
        ["download (4).jpg                    ", "VIDEO/AlanWalker-Alone.mp4                        ", "darkside,feded,on my wey,alone,la la lala alone mix", "profile-pic1.jpg           ", " 12Kfull Hd video"],
        ["download (5).jpg                    ", "VIDEO/alonemix.mp4                                ", "alone mix mp3 song singer's voice is the very nice!", "KALI VIDEO LIGHT.png       ", " Lenovo sarvice  "],
        ["game1.jpg                           ", "wbJz8A4erMk                                       ", "My Laptop is Repaire swagt toh karo hmar swagse... ", "profile-pic2.jpg           ", " Arjuyadav       "],
        ["game2.jpg                           ", "wbJz8A4erMk                                       ", "html css java script project is so simple hai!     ", "profile-pic2.jpg           ", " Khan sir        "],
        ["game3.jpg                           ", "SOUND/nanasong.mp3                                ", "html css java script project is so simple hai!     ", "profile-pic1.jpg           ", " Khan sir        "],
        ["game4.jpg                           ", "wbJz8A4erMk                                       ", "html css java script project is so simple hai!     ", "volume.svg                 ", " Khan sir        "],
        ["vid1.png                            ", "SOUND/AlanWalker-Play(Lyrics)ft.K-391.mp3         ", "Halke main mat lena mujhe coder bhi hacker bhi...  ", "mic.svg                    ", " Bgmi@oficial    "],
        ["vid2.jpg                            ", "SOUND/alonemix.mp3                                ", "simple mp3 bass full song so please lisnig this ...", "mute.svg                   ", " Arju@Songs      "]
    ]
    let len = ytArr.length;
    let text = "";
    for (; i < len; i++) {
        text += `
    <div class="video">
        <a href="` + ytArr[i][1] + `" target="_blank">
            <img src="/GLOBAL/IMGS/` + ytArr[i][0] + `" class="thumbnail" />
            <div class="content">
                <img src="/GLOBAL/IMGS/ICON/` + ytArr[i][3] + `" class="channel-icon" />
                <div class="info">
                     <h4 class="title" title="` + ytArr[i][2] + `">` + ytArr[i][2] + `</h4>
                     <p class="channel-name" title="` + ytArr[i][4] + `">` + ytArr[i][4] + `</p>
                 </div>
            </div>
        </a>
    </div>
    `
    }
    // ytArr[i][1] is call Video Link in ytArr array 
    // ytArr[i][0] is call Video thumbnail in ytArr array 
    // ytArr[i][2] is call Video Title in ytArr array 
    // ytArr[i][3] is call channel icon in ytArr array 
    // ytArr[i][4] is call channel name in ytArr array 
    document.getElementById("kvtvideo").innerHTML = text
    x = 0;
    let filterArr = [
        //["filters name[i][0]",],
        ["new           "],
        ["all           "],
        ["java Script   "],
        ["python        "],
        ["css           "],
        ["php           "],
        ["html          "],
        ["Marval        "],
        ["Bast video edtiting app"],
        ["Games         "],
        ["c#            "],
        ["Cpp           "],
        ["Songs         "],
        ["git           "],
        ["get hub       "],
        ["Letest news   "],
        ["AI            "],
        [" KALI         "],
        ["mongoDB       "],
        ["Sql           "],
        ["Google        "],
        ["3D games      "]
    ]
    let length = filterArr.length;
    let pass = "";
    for (; x < length; x++) {
        pass += `
    <button class="filter-options">` + filterArr[x][0] + `</button>
    `
    }
    // ytArr[i][0] filterArr array for filters name
    document.getElementById("filters").innerHTML = pass;
});