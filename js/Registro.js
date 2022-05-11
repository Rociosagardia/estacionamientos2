$(document).ready(function() {
    $('#contact-submit').on('click', function(e) {
        e.preventDefault();
        if (!$("#contact")[0].checkValidity()) {
          $("#contact")[0].reportValidity();
          return;
        }
        var nom_usuario=$("#nom_usuario").val();
        console.log(nom_usuario);

        var ape_usuario=$("#ape_usuario").val();
        console.log(ape_usuario);

        var rut_usuario=$("#rut_usuario").val();
        console.log(rut_usuario);

        var mail_usuario=$("#mail_usuario").val();
        console.log(mail_usuario);

        var tel_usuario=$("#tel_usuario").val();
        console.log(tel_usuario);

        var pass_usuario=$("#pass_usuario").val();
        console.log(pass_usuario);

        var settings = {
            "url": "http://localhost:3000/usuarios",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "rut_usuario": rut_usuario,
              "nom_usuario": nom_usuario,
              "ape_usuario": ape_usuario,
              "tel_usuario": tel_usuario,
              "mail_usuario": mail_usuario,
              "pass_usuario": pass_usuario
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            alert("usuario creado correctamente")
            window.location="login.html"
          });
    }); 
});