/**
 *
 */

/**
 * Constantes utilizadas pelos diversos scripts
 * @type {number}
 */
BS_BREAKPOINT_FLOAT = 768; // tamanho no qual ocorre a quebra do layout p/ modo mobile

$(function(){
    //inicializa o menu da barra de navegação
    $('[data-submenu]').submenupicker();


    //adiciona scrollspy no menu do currículo
    $('body').scrollspy({ target: '.bs-scroll-spy' });
});

