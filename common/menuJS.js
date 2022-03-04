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