$(document).ready(function () {
  $("#contact-submit").on("click", function (e) {
    e.preventDefault();
    if (!$("#contact")[0].checkValidity()) {
      $("#contact")[0].reportValidity();
      return;
    }
    var ciudad = $("#ciudad").val();
    console.log(ciudad);

    var comuna = $("#comuna").val();
    console.log(comuna);

    var calle = $("#calle").val();
    console.log(calle);

    var number = $("#number").val();
    console.log(number);

    var rdDireccion = $("rdDireccion").val() || "casa";
    console.log(rdDireccion);

    var numero_estacionamiento = $("#numero_estacionamiento").val();
    console.log(numero_estacionamiento);

    var tipo_estacionamiento = $("#tipo_estacionamiento").val();
    console.log(tipo_estacionamiento);

    var nivel_estacionamiento = $("#nivel_estacionamiento").val();
    console.log(nivel_estacionamiento);

    var caracteristicas = $("#caracteristicas").val();
    console.log(caracteristicas);

    var settings = {
      url: "http://localhost:3000/estacionamiento",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ciudad: ciudad,
        comuna: comuna,
        calle: calle,
        number: number,
        rdDireccion: rdDireccion,
        numero_estacionamiento: numero_estacionamiento,
        tipo_estacionamiento: tipo_estacionamiento,
        nivel_estacionamiento: nivel_estacionamiento,
        caracteristicas: caracteristicas,
      }),
    };

    $.ajax(settings).done(function (response) {
      alert("estacionamiento registrado");
      $("#contact")[0].reset()
      console.log(response);
    });
  });
});
