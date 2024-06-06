var menubar = document.getElementById("menu");

menubar.addEventListener("click", openMenu);

var hide = document.getElementById("aside");

var rot = document.getElementById("menu");

function openMenu() {
    hide.classList.toggle("hidden");
    rot.classList.toggle("rotation");
}

function bg1() {
    document.getElementById("color").style.color = "#0344EA";
    document.body.style.backgroundImage = "url(2022-Volkswagen-T-Roc-R-001-1440w.jpg)";
}
function bg2() {
    document.getElementById("color").style.color="#BBB4BC";
    document.body.style.backgroundImage = "url(2024-Tesla-Cybertruck-001-1440w.jpg)";
}

function bg3() {
    document.getElementById("color").style.color="#FFAE00";
    document.body.style.backgroundImage = "url(2024-Audi-RS4-Avant-25-Years-Edition-006-1440w.jpg)";
}
function bg4() {
    document.getElementById("color").style.color="#0285C8";
    document.body.style.backgroundImage = "url(2023-BMW-M2-M-Performance-Parts-004-1440w.jpg)";
}
function bg5() {
    document.getElementById("color").style.color="#C7C5D0";
    document.body.style.backgroundImage = "url(13643.jpg)";
}
function bg6() {
    document.getElementById("color").style.color="#BD3B19";
    document.body.style.backgroundImage = "url(2025-Lamborghini-Urus-SE-001-1440sw.jpg)";
}
function bg7() {
    document.getElementById("color").style.color="#7B5B5A";
    document.body.style.backgroundImage = "url(2022-Land-Rover-Range-Rover-002-1440w.jpg)";
}
function bg8() {
    document.getElementById("color").style.color="#5A7088";
    document.body.style.backgroundImage = "url(2023-Mercedes-AMG-C63-S-E-Performance-003-1440w.jpg)";
}
function bg9() {
    document.getElementById("color").style.color="#CB4B29";
    document.body.style.backgroundImage = "url(mini.jpg)";
}

function bg10() {
    document.getElementById("color").style.color="#DFB94C";
    document.body.style.backgroundImage = "url(2022-Porsche-911-Carrera-GTS-006-1440w.jpg)";
}
