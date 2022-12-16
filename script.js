$(function() {
  $("#button").on('click', function() {
    const textLOT      = $("#lot option:selected").val();
    const textPIP      = $("#pip option:selected").val();
    const textLEVERAGE = $("#leverage").val();
    var   textNlot     = $("#Nlot").val();
    var   textNpips    = $("#Npips").val();

    const LOT        = Number(textLOT);
    const PIP        = Number(textPIP);
    const LEVERAGE   = Number(textLEVERAGE);
    var   Nlot       = Number(textNlot);
    var   Npips      = Number(textNpips);
    var   ProfitLoss = 0;

    ProfitLoss = LOT * Nlot * PIP * Npips;
    $("#ProfitLoss").html(ProfitLoss);
  });
});