$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu').slideToggle(1000);
		return false;
	});
}); 

$(document).ready(function(){
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		console.log(value);
		if(value > 500){
			 $('.header-section').addClass('fixedMenu');
		}else{
			$('.header-section').removeClass('fixedMenu');
		}
	});
});