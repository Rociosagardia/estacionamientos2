$(document).ready(function () {
  $('#contact-submit').on('click', function (e) {
    e.preventDefault();
    if (!$("#contact")[0].checkValidity()) {
      $("#contact")[0].reportValidity();
      return;
    }

    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);


    var marca = $("#marca").val();
    console.log(marca);

    var modelo = $("#modelo").val();
    console.log(modelo);

    var anio = $("#anio").val();
    console.log(anio);

    var color = $("#color").val();
    console.log(color);

    var patente = $("#patente").val();
    console.log(patente);


    var settings = {
      "url": "http://localhost:3000/vehiculo",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "marca": marca,
        "modelo": modelo,
        "anio": anio,
        "color": color,
        "patente": patente,
        "rut_usuario":usuario.rut_usuario,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response)
      alert("Vehiculo creado correctamente")
      window.location = "pantallaEstacionamiento.html";
    })


  })

})

