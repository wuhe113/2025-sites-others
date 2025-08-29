let cursor = document.getElementById("cursor");
let leftBar = document.getElementById("left-bar");

let originalWidth = cursor.offsetWidth + "px";
let originalHeight = cursor.offsetHeight + "px";

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

function changeLeftBarCursor(){

leftBar.onmouseenter = function(e) {
    cursor.style.width = "200px";
    cursor.style.height = "120px";
};

leftBar.onmouseleave = function(e) {
    cursor.style.width = originalWidth;
    cursor.style.height = originalHeight;
};

}

// changeLeftBarCursor();


document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll("div").forEach(div => {
        div.onmouseenter = function(e){
            const hasImage = div.querySelector("img") !== null;
            const hasText = div.textContent.trim().length > 0;

            if (hasImage){
                cursor.style.width = "200px";
                cursor.style.height = "300px";
            } else if(hasText){
                cursor.style.width = "200px";
            } else{
                cursor.style.width = originalWidth;
                }
            };

            div.onmouseleave = function(e){
                cursor.style.width = originalWidth;
            }
     });
});

const infoButton = document.getElementById("info");
const infoText = document.getElementById("info-full");


// infoButton.onclick = function(event){
//     event.preventDefault();

//     let currentInfo = window.getComputedStyle(infoText).display;

//     if (currentInfo === "none"){
//         infoText.style.display = "block";
//     } else {
//         infoText.style.display = "none";
//     }

// }


infoButton.onclick = function(event) {
    event.preventDefault();
    infoText.classList.toggle("hidden");
};