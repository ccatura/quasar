setInterval(function(){ 
var x = document.getElementById("preview-image");
var currWidth = x.clientWidth;
var currHeight = x.clientHeight;

document.getElementById("dimensions").innerHTML = ("Width: " + currWidth + " - " + "Height:" + currHeight);
}, 500);







document.onkeyup = function(e) {
    if (e.which == 77) {
        console.log("M key was pressed");
    } else if (e.ctrlKey && e.which == 66) {
        console.log("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 89) {
        console.log("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        console.log("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
};

// Press M key on keyboard(Single key)
// Press Ctrl + B shortcut key (Double key combination)
// Press Ctrl + Alt + Y shortcut key (Multiple key combination)
// Press Ctrl + Alt + Shift + U shortcut key (Multiple key combination)