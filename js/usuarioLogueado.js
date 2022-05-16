$(document).ready(function() {
    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);

    $('#nombre').html(usuario.nom_usuario);

    $('#aceptarSelector').on('click', function(e) {
        e.preventDefault();
        var selector=$("#selector").val();
        console.log(selector);
        if(selector === "vehiculo"){
            alert("haz seleccionado registrar un vehiculo")
            window.location="RegistrarVehiculo.html"
        }
        else{
            alert("haz seleccionado registrar un estacionaiento")
            window.location="RegistrarEstacionamiento.html"
        }
         
            
        
    })
});