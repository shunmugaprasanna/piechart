
"use strict"
const canvas = document.querySelector("#piechart");
const context = canvas.getContext('2d');
//data assigned
var datagiven = [ [ "Sujai", 30 ], [ "Subash", 50 ], [ "Yuva", 60 ], [ "Vishnu", 40 ], [ "Andrew", 60, ], ["Aff", 40]  ];
// canvas drawing and giving background color
context.fillStyle = "aqua";
context.fillRect(0,0,500,500);
// Adding colors and calculating data
var colors = ["Red", "orange", "black", "green", "blue", "indigo", "violet"];
var total = 0;
//calculating data
for(var i=0; i < datagiven.length; i++){
   total += datagiven[ i ][ 1 ]; 
}
//drawing pie chart
var previousAngle = 0;
for(var i=0; i<datagiven.length; i++){
var fraction = datagiven[i][1]/total;
var angle = previousAngle + fraction*Math.PI*2 ; 
//drawing the pie and adding colors
context.fillStyle = colors[i];
//draw a pie
context.beginPath();
context.arc(250,250,100,previousAngle,angle );
context.lineTo(250,250);
context.moveTo(250,250);
//fill it
context.fill();
//draw a line
context.strokeStyle = "black";
context.stroke();
//updating for next loop
previousAngle = angle;

 //draw labels for each element 
 context.rect( 0, 25 * i, 15, 15 ); 
 context.fill(); 
 context.fillStyle = "black"; 
 context.fillText( datagiven[ i ][ 0 ] + " (" + datagiven[ i ][ 1 ] + ")", 20, 25 * i + 15 ); 
}



// let text = [red ,orange]
// context.filltext("red","orange")

// var data = [ [ "John", 60 ], [ "Bob", 50 ], [ "Beth", 30 ], [ "Rick", 20 ], [ "liza", 70, ], ["aff", 40]  ]; 
// var colors = [ "blue", "red", "yellow", "green", "black", "pink"]; 
 
// var canvas = document.getElementById( "piechart" ); 
// var context = canvas.getContext( "2d" ); 
 
// // get length of data array 
// var dataLength = data.length; 
// // declare variable to store the total of all values 

// var total = 0; 
 
// // calculate total 
// for( var i = 0; i < dataLength; i++ ){ 
//     // add data value to total 
//     total += data[ i ][ 1 ]; 
// } 
 
// // declare X and Y coordinates of the mid-point and radius 
// // declare starting point (right of circle) 
// var startingPoint = 0; 
// for( var i = 0; i < dataLength; i++ ){ 
//     // calculate percent of total for current value 
//     var percent = data[ i ][ 1 ] * 100 / total; 
 
//     // calculate end point using the percentage (2 is the final point for the chart) 
//     var endPoint = startingPoint + ( 2 / 100 * percent ); 
 
//     // draw chart segment for current element 
//     context.beginPath();    
//     // select corresponding color 
//     context.fillStyle = colors[ i ]; 
//     context.moveTo( 250, 250 ); 
//     context.arc( 250, 250, 100, startingPoint * Math.PI, endPoint * Math.PI );     
//     context.fill(); 
 
//     // starting point for next element 
//     startingPoint = endPoint;  
  
//     // draw labels for each element 
//     context.rect( 220, 25 * i, 15, 15 ); 
//     context.fill(); 
//     context.fillStyle = "black"; 
//     context.fillText( data[ i ][ 0 ] + " (" + data[ i ][ 1 ] + ")", 245, 25 * i + 15 ); 
// }  
  
// // draw title 
// context.font = "20px Arial"; 
// context.textAlign = "center"; 
// context.fillText( "Awards", 100, 225 );