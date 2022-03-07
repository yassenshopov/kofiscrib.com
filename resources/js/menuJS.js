var click = true;

function animate_menu(x) {
    x.classList.toggle("change");
    click = !click;
    if (click == false) {
        document.getElementById("myNav").style.height = "100%";
    } else {
        document.getElementById("myNav").style.height = "0%";
    }
    
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