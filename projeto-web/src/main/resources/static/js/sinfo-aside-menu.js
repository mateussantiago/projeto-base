(function($){

	var asideMenu = $('.sf-aside-left');

	// if not found exit
	if ( asideMenu.length == 0 ) return;

    var preparaAsideMenuSize = function () {
        
        var width = $(window).width();
        if ( width <= BS_BREAKPOINT_FLOAT ) { // mobile size
            if ( !asideMenu.hasClass('in') ){
                asideMenu.addClass( 'in' );
            }
        } else {
            asideMenu.removeClass('in'); // large size
        }
    };

    // evita que a função seja chamada repetidamente
    var throttledResize = _.throttle( preparaAsideMenuSize , 500);
	$(window).on("resize", throttledResize );


	/** fixa o menu caso possua a classe '.fixme' **/
	if ( asideMenu.hasClass("fixme") ) {

        var fixmeTop = asideMenu.offset().top;

        var preparaASideFixed = function () {

            var currentScroll = $(window).scrollTop(); // get current position
            var $e = asideMenu;

            if (currentScroll >= fixmeTop) {           // apply position: fixed if you
                if (!$e.hasClass("sf-aside-fixed"))
                    $e.addClass("sf-aside-fixed");
            } else {                                   // apply position: static
                $e.removeClass("sf-aside-fixed");
            }

        };

        // evita que a função seja chamada repetidamente
        var throttledScroll = _.throttle( preparaASideFixed , 300);
        $(window).on("scroll", throttledScroll );

	}
	
})(jQuery);