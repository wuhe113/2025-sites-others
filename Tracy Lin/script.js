let cursor = document.getElementById("cursor");
let leftBar = document.getElementById("left-bar");

let originalWidth = cursor.offsetWidth + "px";
let originalHeight = cursor.offsetHeight + "px";

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

leftBar.onmouseenter = function(e) {
    cursor.style.width = "200px";
    cursor.style.height = "120px";
};

leftBar.onmouseleave = function(e) {
    cursor.style.width = originalWidth;
    cursor.style.height = originalHeight;
};