// java script

let i = 0;
let scArr = [
  //["1stboxtitle [0]","2stboxtitle [1]","3stboxtitle [2]","4stboxtitle [3]","1code[4]","2code[5]","3code[6]","4code[7]","id" [8]" ,"filters [9]"],
  ["CONSOLE LOG", "no_pre", "no_pre", "no_pre", "/GLOBAL/TEXT_FILES/dinogame.txt ", "                      ", "              ", "        ", "webhacks", "WEB HACK'S"],
  ["HTML css js", "no_pre", "no_pre ", "preview         ", "/GLOBAL/TEXT_FILES/DigitalWatch.txt", "            ", "        ", "/WaTCHS/DIGITAL/", "DigitalWatch", "Digital Watch"],
  ["EXISTS IN HTML", "EXISTS IN CSS", "no_pre MOST USE IN JS", "html elements", "/GLOBAL/TEXT_FILES/most_uses_in_html.txt", "/GLOBAL/TEXT_FILES/most_uses_in_css.txt", "      ", "/GLOBAL/TEXT_FILES/ComprehensiveList.txt", "html,css,js", "HTML,CSS,JS"],
  ["HTML", "CSS", "JAVA SCRIPT", "preview", "/GLOBAL/TEXT_FILES/Simple_watch.txt", "/WATCHS/GERNAL/CSS/style.css", "/WATCHS/GERNAL/JS/Script.js ", "/WATCHS/GERNAL/", "SimpleWatch", "Simple Watch"],
  ["no_pre", "no_pre", "no_pre", "no_pre", "                ", "          ", "            ", "        ", "Unknown", "Coming Soon.."]
]
let len = scArr.length;
let text = "";

for (; i < len; i++) {
  text += `
        <div class="kvtube">
        <h2 id="` + scArr[i][8] + `" class="filter"> ` + scArr[i][9] + `</h2>
      <div class="card   ` + scArr[i][0] + `">
        <div class="card_header">` + scArr[i][0] + `</div>
        <div class="card_body">
          <iframe name="card" title="` + scArr[i][0] + `" src="` + scArr[i][4] + `" frameborder="0"></iframe>
        </div>
      </div>

      <div class="card   ` + scArr[i][1] + ` ">
        <div class="card_header">` + scArr[i][1] + `</div>
        <div class="card_body">
          <iframe name="card" title="` + scArr[i][1] + `" src="` + scArr[i][5] + `" frameborder="0"></iframe>
        </div>
      </div>

      <div class="card  ` + scArr[i][2] + ` ">
        <div class="card_header">` + scArr[i][2] + `</div>
        <div class="card_body">
          <iframe name="card" title="` + scArr[i][2] + `" src="` + scArr[i][6] + `" frameborder="0"></iframe>
        </div>
      </div>
      <div  class="card ` + scArr[i][3] + `">
        <div class="card_header">` + scArr[i][3] + `</div>
        <div class="card_body">
          <iframe name="card" title="` + scArr[i][3] + `" src="` + scArr[i][7] + `" frameborder="0"></iframe>
          </div>
      </div>
    </div>
  `
}
// not previvw name = no_pre;

document.getElementById("container").innerHTML = text;

function openNav() {
  document.getElementById("mySidenav").style.width = "230px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function searchwidth() {
  document.getElementById("search").style.width = "20%";
}
function withdown() {
  document.getElementById("search").style.width = "10%";
}