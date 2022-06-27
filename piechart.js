
"use strict"
const canvas = document.querySelector("#piechart");
const context = canvas.getContext('2d');
//data assigned
var datagiven = [60,50,30,20,70,40,60];
// canvas drawing and giving background color
context.fillStyle = "aqua";
context.fillRect(0,0,500,500);
// Adding colors and calculating data
var colors = ["Red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var total = 0;
//calculating data
for(var i=0; i < datagiven.length; i++){
    total = total + datagiven[i];
}
//drawing pie chart
var previousAngle = 0;
for(var i=0; i<datagiven.length; i++){
var fraction = datagiven[i]/total;
var angle = previousAngle + fraction*Math.PI*2; 
//drawing the pie and adding colors
context.fillStyle = colors[i];
//draw a pie
context.beginPath();
context.arc(250,250,100,previousAngle,angle,);
context.lineTo(250,250);
context.moveTo(250,250);
//fill it
context.fill();
//draw a line
context.strokeStyle = "black";
context.stroke();
//updating for next loop
previousAngle = angle;
}
