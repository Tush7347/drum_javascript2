var keys = document.querySelectorAll(".drum");
for (var k = 0; k < keys.length; k++) {
    var q = keys[k];
    q.addEventListener("click", function () {
        var key = this.innerHTML;
        perform(key);
        animation(key);
    });
}

// notice that keyword wevent is out of for loop and is listenint on complete document

document.addEventListener("keypress",function(event){
    perform(event.key);
    animation(event.key);
});

function animation(key){

    var active= document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
    
}



function perform (key) {

    console.log(key);
    switch (key) {
        
        case 'w': new Audio("sounds/tom-1.mp3").play();
            break;

        case 'a': new Audio("sounds/tom-2.mp3").play();
            break;

        case 's': new Audio("sounds/tom-3.mp3").play();
            break;

        case 'd': new Audio("sounds/tom-4.mp3").play();
            break;

        case 'j': new Audio("sounds/snare.mp3").play();
            break;

        case 'k': new Audio("sounds/crash.mp3").play();
            break;

        case 'l': new Audio("sounds/kick-bass.mp3").play();
            break;

        default: console.log("wrong information");
    }

    
}