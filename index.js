setInterval(function(){ 
var x = document.getElementById("preview-image");
var currWidth = x.clientWidth;
var currHeight = x.clientHeight;

document.getElementById("dimensions").innerHTML = ("Width: " + currWidth + " - " + "Height:" + currHeight);
}, 500);

