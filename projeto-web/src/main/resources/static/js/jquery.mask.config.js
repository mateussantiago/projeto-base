/**
 * Created by thiago on 29/06/16.
 *
 * Arquivo de configuração para aplicação das mascaras no campos dos formulários.
 *
 * Para aplicação da máscara, basta que o input tenha a classe correspondente.
 *
 * <input type="text" class="date" />
 *
 * ## Atenção:
 *      Sempre o um formulário for carregado dinâmicamente, deve-se invocar também o método SFMasksApply() para que
 *      o novo formulário receba o tratamento.
 */

SFMasksApply = function ( formSelector ){
    
    var form = formSelector || "";

    $( form + ' .date').mask('00/00/0000');
    $( form + ' .time').mask('00:00');
    $( form + ' .time_full').mask('00:00:00');
    $( form + ' .date_time').mask('00/00/0000 00:00:00');
    $( form + ' .date_time_full').mask('00/00/0000 00:00:00');
    $( form + ' .cep').mask('00000-000');
    $( form + ' .phone').mask('00000-0000');
    $( form + ' .phone_with_ddd').mask('(00) 00000-0000');
    $( form + ' .cpf').mask('000.000.000-00', {reverse: true});
    $( form + ' .cnpj').mask('00.000.000/0000-00', {reverse: true});
    $( form + ' .money').mask("#.##0,00", {reverse: true});
    $( form + ' .ip_address').mask('099.099.099.099');
    $( form + ' .percent').mask('##0,00%', {reverse: true});
    $( form + ' .clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});

}

$(document).ready(function() {
    SFMasksApply();
});