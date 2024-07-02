var noFoDrum = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < noFoDrum ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
var drumKey = this.innerHTML
makeSound(drumKey); 

buttonAnimation(drumKey);

});
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key);

  });

function makeSound (key) {

    switch (key) {
        case "W":var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    
        case "A" :var audio = new Audio("sounds/tom-2.mp3");
        audio.play();  
        break;
    
        case "S" :var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
        break;
    
        case "D" :var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    
        case "J" :var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    
        case "K" : var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    
        case "L" : var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    
        default :console.log(key)
}
}
function buttonAnimation (currentKey){
    var activebutton = document.querySelector("."+ currentKey.toLowerCase());
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100)
}   



