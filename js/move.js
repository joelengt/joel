/* Smooth scrolling para anclas */
$('.goTop').click(
      function()
      {
            $('html,body').animate({scrollTop:'0px'}, 1000);return false;
      }
);
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});
$(document).ready(function(){
	var altura = $('.barra-movil').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.barra-movil').addClass('menu-fixed');
		} else {
			$('.barra-movil').removeClass('menu-fixed');
		}
	});
});
$(document).ready(function(){
	var altura = $('.nav_movil').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.nav_movil').addClass('menu-fixed2');
		} else {
			$('.nav_movil').removeClass('menu-fixed2');
		}
	});
});
var $form= $('#formulario'),
	$button= $('#mostrar-form'),
	$post =$('.item').first();
function mostrarFormulario()
{
	$form.slideToggle();
	return false;
	// Al retornarlo false evita el scroll de la pagina
	// del link original
	// SlideToggles es que lo hace oculto o muestra
}
// EVENTOS
$button.click(mostrarFormulario);
var $haf= $('.linking');
$haf.on("click",Ocultar);
function Ocultar(){
	$form.slideToggle();
}


