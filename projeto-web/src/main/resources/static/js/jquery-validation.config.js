/**
 * Created by thiago on 28/06/16.
 *
 * Arquivo de configuração para o plugin jquery-validation.
 *  - Customiza métodos para compatibilizar o retorno das mensagens ao padrão bootstrap.
 *  - Adiconia validação de data no formato brasileiro.
 */


/**
 * Adiciona validação para datas no formato: DD/MM/YYYY.
 * Adaptado de: http://stackoverflow.com/questions/24380305/validate-date-in-dd-mm-yyyy-format-using-jquery-validate
 */
/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateBR:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateBR
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateBR", function( value, element ) {
    var check = false,
        re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
        adata, gg, mm, aaaa, xdata;
    if ( re.test( value ) ) {
        adata = value.split( "/" );
        gg = parseInt( adata[ 0 ], 10 );
        mm = parseInt( adata[ 1 ], 10 );
        aaaa = parseInt( adata[ 2 ], 10 );
        xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
        if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
            check = true;
        } else {
            check = false;
        }
    } else {
        check = false;
    }
    return this.optional( element ) || check;
}, $.validator.messages.date );

// retira o comportamento padrão de adiconar a validação de data quando o input possuir a class .date.
$.validator.classRuleSettings.date = false;

$.validator.setDefaults( {
    errorPlacement: function ( error, element ) {
        // Add the `help-block` class to the error element
        error.addClass( "help-block" );
        if ( $(element).prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.parent( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {

        if ( $(element).prop( "type" ) === "checkbox" ) {
            $container = $(element).parents(".form-group");
        }else {
            $container = $(element).parent();
        }

        $container.addClass("has-error").removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {

        if ( $(element).prop( "type" ) === "checkbox" ) {
            $container = $(element).parents(".form-group");
        }else {
            $container = $(element).parent();
        }

        $container.removeClass( "has-error" );
    }
});