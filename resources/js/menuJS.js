var click = true;
var click2 = true;
var click3 = true;
var click4 = true;

function animate_menu(x) {
    x.classList.toggle("change");
    click = !click;
    if (click == false) {
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("bar1").style.backgroundColor = "#ffffff";
        document.getElementById("bar2").style.backgroundColor = "#ffffff";
        document.getElementById("bar3").style.backgroundColor = "#ffffff";
        document.body.style.overflowY = "hidden";
    } else {
        document.getElementById("myNav").style.height = "0%";
        document.getElementById("myNav2").style.height = "0%";
        document.getElementById("myNav3").style.height = "0%";
        document.getElementById("myNav4").style.height = "0%";
        document.getElementById("bar1").style.backgroundColor = "#000000";
        document.getElementById("bar2").style.backgroundColor = "#000000";
        document.getElementById("bar3").style.backgroundColor = "#000000";
        document.body.style.overflowY = "visible";
    }
}

function overlayMenu2() {
    click2 = !click2;
    if (click2 == false) {
        document.getElementById("myNav2").style.height = "100%";
    } else {
        document.getElementById("myNav2").style.height = "0%";
    }
}

function overlayMenu3() {
    click3 = !click3;
    if (click3 == false) {
        document.getElementById("myNav3").style.height = "100%";
    } else {
        document.getElementById("myNav3").style.height = "0%";
    }
}

function overlayMenu4() {
    click4 = !click4;
    if (click4 == false) {
        document.getElementById("myNav4").style.height = "100%";
    } else {
        document.getElementById("myNav4").style.height = "0%";
    }
}

function switchMenu1() {
    let listN = document.getElementById("listN").children;
    console.log(listN);
    listN.item(1).innerHTML = "🤖 CREATIVE VIRGO";
    listN.item(1).href = "https://kofiscrib.com/blog/creative-virgo";
    listN.item(2).innerHTML = "🎶 LO-FI-SCRIB";
    listN.item(2).href = "https://kofiscrib.com/blog/lofiscrib";
    listN.item(0).style.display = "none";
    listN.item(3).style.display = "none";
}

function switchMenu2() {
    let listN = document.getElementById("listN").children;
    console.log(listN);
    listN.item(0).innerHTML = "DIGITAL ART ❤️";
    listN.item(0).href = "https://kofiscrib.com/digital-art";
    listN.item(1).innerHTML = '"TALE OF SEQUOYAH" 💛';
    listN.item(1).href = "https://kofiscrib.com/tale-of-sequoyah";
    listN.item(3).innerHTML = 'PROGRAMMING 💚';
    listN.item(3).href = "https://kofiscrib.com/programming";
    listN.item(2).style.display = "none";
}

function switchMenu3() {
    let listN = document.getElementById("listN").children;
    console.log(listN);
    listN.item(0).innerHTML = "COMMISSIONS 🍋";
    listN.item(0).href = "https://kofiscrib.com/commissions";
    listN.item(1).innerHTML = 'PATREON 🍊';
    listN.item(1).href = "https://patreon.com/kofiscrib";
    listN.item(2).innerHTML = 'MERCH 🍎';
    listN.item(2).href = "https://www.redbubble.com/people/kofiscrib/explore?asc=u&page=1&sortOrder=recent";
    listN.item(3).style.display = "none";
}

function onHoverMenu1() {
    document.getElementById("dropMenu1").style.display = "flex";
}

function onHoverAwayMenu1() {
    document.getElementById("dropMenu1").style.display = "none";
}

function onHoverMenu2() {
    document.getElementById("dropMenu2").style.display = "flex";
}

function onHoverAwayMenu2() {
    document.getElementById("dropMenu2").style.display = "none";
}

function onHoverMenu3() {
    document.getElementById("dropMenu3").style.display = "flex";
}

function onHoverAwayMenu3() {
    document.getElementById("dropMenu3").style.display = "none";
}
function fontSpecify() {
    let ToS_Check = document.getElementById("body").className;
    if (ToS_Check == "ToS") {
        document.getElementById("topnav1").style.color = '#f1f1f1';
        document.getElementById("topnav2").style.color = '#f1f1f1';
        document.getElementById("topnav3").style.color = '#f1f1f1';
        document.getElementById("topnav4").style.color = '#f1f1f1';
    }
}