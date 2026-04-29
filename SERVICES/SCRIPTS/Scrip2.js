let cont_2 = document.getElementById("container_2")
let tab_4 = document.querySelector(".ratting")
let i = 0;
let ytArr = [
  //["card-name[0]         ", "link1[1]                                      ","link2[2]                            ","link3[3]                    ","link4[4]                  ","link5[5]         ","link6[6]       ", "link7[7]       ", "link8[8]     ", " linkname1[9]                  ", " linkname2[10]              "," linkname3[11]              "," linkname4[12]                 "," linkname5[13]             "," linkname5[14]               ", " linkname7[16]             ", " linkname8[17]          ","id[118]          "],
  ["Created By Arju        ", "/KALI_TUBE                                    ", "/KALI_PLAYLISTS                    ", "/KALI_VIDEO_PLAYER         ", "/REFERENCE               ", "/ABOUT          ", "/WINDOW_MEDIA ", "/KALI_CHAT_BOT ", "/GAMES/TYPING ", "KVTUBE kali Cource Videos     ", "kali video play list        ", "video player kali.          ", "Kali apps,websites Souces    ", "ai genrated for kali intro", "win media created by arju   ", "this is chat bot by arju   ", "Increase Your Typing Speed", "kaliWebsites   "],
  ["Kali apps              ", "#                                             ", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "coming soon links             ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "kaliapps       "],
  ["Video Editer App, Web  ", "https://www.videosoftdev.com/free-video-editor", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "pc,app:VSDC free video edit   ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "videoediter    "],
  ["Bast For Code App, Web ", "#                                             ", "https://zzzcode.ai/code-generator  ", "https://web.dev/           ", " #                       ", "#               ", "#             ", "#              ", "#             ", "web:pycharm code editer       ", "web:zzz ai code-generator   ", "web.dev help for web create ", "dounload latast python       ", "c#,cpp MINGW compiler      ", "pc app:c,c++ for idle dev-c", "Pc app:bast idle VS code   ", "                         ", "bastforcode    "],
  ["Hacking websites,app   ", "#                                             ", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "coming soon links             ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "hacking        "],
  ["Hacking Corces         ", "#                                             ", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "coming soon links             ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "hackingcources "],
  ["AI Apps , wbsites      ", "https://chat.openai.com                       ", "https://pika.art/                  ", "https://www.futurepedia.io/", "https://replit.com/      ", "#               ", "#             ", "#              ", "              ", "web:chat-GPT chat with ai     ", "web:Imagica genate pictures ", "web:ai pika art gemaretor   ", "web:Futurepedia-Find AI      ", "web:zzz ai code-generator  ", "web:replit code with ai    ", "                           ", "                         ", "aiapps         "],
  ["Kali courecs           ", "#                                             ", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "coming soon links             ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "kalicourecs    "],
  ["hack's and prank       ", "#                                             ", "#                                  ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "coming soon links             ", "                            ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "kalicourecs    "],
  ["Recommended apps       ", "https://en.softonic.com/s/tally-prime         ", "https://fonts.google.com           ", "#                          ", " #                       ", "#               ", "#             ", "#              ", "              ", "pc,education:tally-prime      ", "  font-family:google-fonts  ", "                            ", "                             ", "                           ", "                           ", "                           ", "                         ", "recommendedapps"]
]
let len = ytArr.length;
let text = "";
for (; i < len; i++) {
  text += `
     <div class="card" id="` + ytArr[i][15] + `">
        <div id="card_header">
          `+ ytArr[i][0] + `
        </div>
        <div id="card_body">
          <ul>
            <li><a href="`+ ytArr[i][1] + `">` + ytArr[i][9] + `</a></li>
            <li><a href="`+ ytArr[i][2] + `">` + ytArr[i][10] + `</a></li>
            <li><a href="`+ ytArr[i][3] + `">` + ytArr[i][11] + `</a></li>
            <li><a href="`+ ytArr[i][4] + `">` + ytArr[i][12] + `</a></li>
            <li><a href="`+ ytArr[i][5] + `">` + ytArr[i][13] + `</a></li>
            <li><a href="`+ ytArr[i][6] + `">` + ytArr[i][14] + `</a></li>
            <li><a href="`+ ytArr[i][7] + `">` + ytArr[i][15] + `</a></li>
            <li><a href="`+ ytArr[i][8] + `">` + ytArr[i][16] + `</a></li>
          </ul>
        </div>
      </div>
    `
}
document.getElementById("container").innerHTML = text;
function openRatting() {
  if (cont_2.style.display == "none") {
    tab_4.innerHTML = "&times;"
    cont_2.style.display = "flex";
    setTimeout(() => {
      cont_2.style.opacity = "1";
    }, 10);
  }
  else {
    tab_4.innerHTML = "Ratting";
    cont_2.style.opacity = "0";
    setTimeout(() => {
      cont_2.style.display = "none";
    }, 1000);
  }
}

let element = document.querySelectorAll('a font');
Array.from(element).forEach(e => {
  get_color(e, 70);
})