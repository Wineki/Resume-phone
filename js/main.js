// JavaScript Document
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#7BAABE','#f90','#7BAABE','#f90','#7BAABE'],
		anchors: ['page0','page1', 'page2', 'page3', 'page4','page5','page6','page7','page8'],
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 3){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 5){
				$('.section4').find('p').fadeIn(2000);
			}
			if(index == 6){
				$('.section5').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 7){
				$('.section6').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 8){
				$('.section7').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '3'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index =='5'){
				$('.section4').find('p').fadeOut(2000);
			}
			if(index == '6'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '7'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index =='8'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	});
});