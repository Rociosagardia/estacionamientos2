$(document).ready(function () {
  $("#contact-submit").on("click", function (e) {
    e.preventDefault();
    if (!$("#contact")[0].checkValidity()) {
      $("#contact")[0].reportValidity();
      return;
    }

    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);

    var region = $("#region").val();
    console.log(region);

    var comuna = $("#comuna").val();
    console.log(comuna);

    var calle = $("#calle").val();
    console.log(calle);

    var numero = $("#numero").val();
    console.log(numero);

    var numero_estacionamiento = $("#numero_estacionamiento").val();
    console.log(numero_estacionamiento);

    var tipo_estacionamiento = $("#tipo_estacionamiento").val();
    console.log(tipo_estacionamiento);

    var nivel_estacionamiento = $("#nivel_estacionamiento").val();
    console.log(nivel_estacionamiento);

    var descripcion = $("#descripcion").val();
    console.log(descripcion);

    var settings = {
      url: "http://localhost:3000/estacionamiento",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        region: region,
        comuna: comuna,
        calle: calle,
        numero: numero,
        numero_estacionamiento: numero_estacionamiento,
        tipo_estacionamiento: tipo_estacionamiento,
        nivel_estacionamiento: nivel_estacionamiento,
        descripcion: descripcion,
        "rut_usuario": usuario.rut_usuario,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response)
      alert("Estacionamiento creado correctamente")
      window.location = "pantallaEstacionamiento.html";
    })
  });
});
