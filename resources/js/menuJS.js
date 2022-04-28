var click = true;

function animate_menu(x) {
    x.classList.toggle("change");
    click = !click;
    if (click == false) {
        document.getElementById("myNav").style.height = "100%";
        document.body.style.overflowY = "hidden";
    } else {
        document.getElementById("myNav").style.height = "0%";
        document.body.style.overflowY = "visible";
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