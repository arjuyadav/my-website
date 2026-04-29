// ---------------------------------------------------
// variables
// ---------------------------------------------------
const checkBtnType2 = document.querySelectorAll('input[name="optionType2"]');
const checkBtnType1 = document.querySelectorAll('input[name="optionType1"]');
const checkBtnType3 = document.querySelectorAll("in_Wifi");
const checkBtnType4 = document.getElementById("in_BT");
const open_wifi_widgets = document.getElementById("wifiopen");
const main_widgets = document.getElementById("mySidenav");
const open_BT_widgets = document.getElementById("BTOpen");
const open_AC_widgets = document.getElementById("ACopen");
const wifibutton = document.getElementById("Wifi");
const BTbutton = document.getElementById("BT");
let wifion = localStorage.getItem("wifion");
let BTon = localStorage.getItem("BTon");

// ---------------------------------------------------
// events
// ---------------------------------------------------

checkBtnType1.forEach(radio => {
  radio.addEventListener('change', () => {
    wifion = localStorage.setItem("wifion","false")
    if (wifion == "false") {
      wifibutton.classList.add('togle-on');
      localStorage.setItem("wifion", "true")
    }
    else {
      wifibutton.classList.remove('togle-on');
      localStorage.setItem("wifion", "false")
    }
  });
});

checkBtnType2.forEach(radio => {
  radio.addEventListener('change', () => {
    ToggleEvent.apply()
    if (BTon == "false") {
      BTbutton.classList.add('togle-on');
      localStorage.setItem("BTon", "true")
    }
    else {
      localStorage.setItem("BTon", "false")
      wifibutton.classList.remove('togle-on');
    }
  });
});

// ---------------------------------------------------
// functions
// ---------------------------------------------------
function openNav() {
  if (main_widgets.classList.length == 1) {
    main_widgets.classList.add("animate1")
  }
  else {
    open_wifi_widgets.classList.remove('animate2')
    open_BT_widgets.classList.remove('animate2')
    open_AC_widgets.classList.remove('animate2')
    main_widgets.classList.remove('animate1')
  }
}

function openWifi() {
  open_wifi_widgets.classList.add('animate2')
}
function closeWifi() {
  open_wifi_widgets.classList.remove('animate2')
}
function openBT() {
  open_BT_widgets.classList.add('animate2')
}
function closeBT() {
  open_BT_widgets.classList.remove('animate2')
}
function openAC() {
  open_AC_widgets.classList.add('animate2')
}
function closeAC() {
  open_AC_widgets.classList.remove('animate2')
}

//For Loop for Multiple functions 
let i = 0;
let funcArr = [
  // ["funcIMG ","function name","status",];
  ["IMG/ICON/explore.PNG", "magnifier", "off"],
  ["IMG/ICON/explore.PNG", "magnifier", "off"],
  ["IMG/ICON/explore.PNG", "magnifier", "off"],
  ["IMG/ICON/explore.PNG", "magnifier", "off"],
  ["IMG/ICON/explore.PNG", "mono audio", "off"],
  ["IMG/ICON/explore.PNG", "magnifier", "off"],
  ["IMG/ICON/explore.PNG", "magnifier", "off"]
]

let len = funcArr.length;
let text = "";
for (; i < len; i++) {
  text += `
<div class="box_AC">
          <section class="function_name">
            <img src="` + funcArr[i][0] + `" width="30" height="30" alt="asdf">
            <p class="function">` + funcArr[i][1] + `</p>
          </section>
          <section class="status">
            <p class="status_name">` + funcArr[i][2] + `</p>
            <iframe src="Chackbox.html" frameborder="0"></iframe>
          </section>
        </div>
    `
}
document.getElementById("cont3").innerHTML = text;