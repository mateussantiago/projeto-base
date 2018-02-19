/**
 * Created by thiago on 18/04/16.
 * 
 * Realiza a rolagem de tela de maneira suave até o elemento alvo desejado.
 * 
 * COMO USAR:
 * 
 * <a href="#" data-target="#id-element" >...</a>
 * <div id="id-element">...</div>
 * 
 * $( '[data-target]' ).scrollingTo( { parametros } );
 * 
 * PARAMETROS:
 *  {
 *  	animationTime : int , 					// Tempo de duração da rolagem
 *  	callbackBeforeTransition : function , 	// Função chamada antes de realizar a transição 
 *  	callbackAfterTransition : function  	// Função chamada após realizar a transição
 *  	target : string 						// id do elemento para rolagem da tela. Caso não informado, será utilizado a propriedade 'data-target'
 *  }
 * 
 */
(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){},
            target : null
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $target = config.target != null ? $(config.target) : $(document).find( $(this).data('target') );  
            
            if ( $target.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $target.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $target);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $target);
            });
        });
    };
}(jQuery));


jQuery(document).ready(function(){
    jQuery('a[data-target]').scrollingTo();
});
