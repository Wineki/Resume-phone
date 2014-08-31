// JavaScript Document
$('.section1').find('a').mouseover(function(ev){
		ev.target.style.fontsize = "30px";
});
$('.section1').find('a').mouseout(function(ev){
		ev.target.style.fontsize = "20px;";
})
$('.section3').find('p').mouseover(function(ev){
       ev.target.style.fontsize = "40px";
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
