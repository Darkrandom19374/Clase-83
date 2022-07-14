
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("My_canvas");
ctx= canvas.getContext("2d");
color= "red";
ancho_de_linea= 1;
var width= screen.width;
var new_widht=screen.width-70;
var new_height=screen.height-300;

if (width < 992) {
    document.getElementById("My_canvas").width=new_widht;
    document.getElementById("My_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
     color = document.getElementById("color").value;
     console.log(color);
     ancho_de_linea= document.getElementById("ancho_de_linea").value;
 console.log ("my_touchstart");
 last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
 last_position_of_y = e.touches[0].clientY - canvas.offsetTop;     
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidht=ancho_de_linea
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    console.log ("my_touchmove");
    ctx.moveTo(last_position_of_x, last_position_of_y)
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y)
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
    ctx.stroke();
    last_position_of_x= current_position_of_touch_x;
    last_position_of_y= current_position_of_touch_y
}
function clear_area() {
    ctx.clearRect(0, 0,ctx.canvas.width,ctx.canvas.height);
}