$(document).ready(function () {
  $("#Rio").click(function () {
    $("#detallesRio").toggle();
  });

  $("#MachuPicchu").click(function () {
    $("#detallesMachuPicchu").toggle();
  });

  $("#Baires").click(function () {
    $("#detallesBaires").toggle();
  });

  $(".btn-close").click(function () {
    $(this).closest(".detalles").hide();
  });
});
