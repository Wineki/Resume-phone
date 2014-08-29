// JavaScript Document
$(document).ready(function() {
	$('.section0').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
	$('#huojian').delay(1500).animate({
					left:'500',bottom:'500'
				}, 1500,'easeOutExpo');
	$.fn.fullpage({
		slidesColor: [ '#2ECBC4','#4BBFC3', '#7BAABE', '#BDD1CF','#FF828E','#97C853','#1299AC','#AACBE7','#1bbc9b'],
		anchors: ['page0','page1', 'page2', 'page3', 'page4','page5','page6','page7','page8'],
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section0').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1500).animate({
					left:'500',bottom:'500'
				}, 1500,'easeOutExpo');
			}
			if(index == 2){
				$('.section1').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				$('.niu').animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section2').find('.hend').delay(500).animate({
					left: '-300'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-100'
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
			if(index == '1'){
				$('.section0').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1000).animate({
					left:'-500',bottom:'-500'
				}, 1500,'easeOutExpo');
			}
			if(index == '2'){
				$('.section1').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				$('.niu').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				/*$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');*/
				$('.section2').find('.hend').delay(800).animate({
					left: '-150%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-150%'
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