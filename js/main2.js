// JavaScript Document
$('.section3').find('p').mouseover(function(ev){
       ev.target.style.fontSize = "40px";
});
$('.section3').find('h3').mouseover(function(ev){
		ev.target.style.color = "pink";
});
$('.section3').find('h3').mouseout(function(ev){
		ev.target.style.color = "#2ECBC4";
});
$('.section3').find('p').mouseout(function(ev){
       ev.target.style.fontSize = "25px";
});