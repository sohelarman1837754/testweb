$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop()> 50){
			$(".header_menu").addClass("fixed_top");
		}else{
			$(".header_menu").removeClass("fixed_top");
		}
		
	});
	$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".menu ul li a ").addClass("menu_color");
    } else {
      $(".menu ul li a ").removeClass("menu_color");
    }
  });
  
  
 
$(window).scroll(function(){
	/*skill bar*/

	
});

$(window).scroll(function() {
   var hT = $('#wrapper').offset().top,
       hH = $('#wrapper').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
      $("#skillbar_php").animate({width:'99%'},1500);
$("#skillbar_asp").animate({width:'98%'},1500);
$("#skillbar_jsp").animate({width:'75%'},1500);
$("#skillbar_js").animate({width:'78%'},1500);
   }
});


  
});







