let today = new Date();
let currentTime = today.getHours();
let greeting;

if(currentTime > 18) {
    greeting = "You're up pretty late!";
} else if (currentTime > 12) {
    greeting = "Are you having a good afternoon?";
} else if (currentTime > 6) {
    greeting = "Up and at em cowboy!";
} else 
    greeting = "Why are you still up its nighttime?"; {    
}

document.write('<p>' + greeting + '</p>');