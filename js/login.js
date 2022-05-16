$(document).ready(function(){
    $('#contact-submit').on('click', function(e) {
        e.preventDefault();
        if (!$("#contact")[0].checkValidity()) {
          $("#contact")[0].reportValidity();
          return;
        }
        var mail_usuario=$("#mail_usuario").val();
        console.log(mail_usuario);

        var pass_usuario=$("#pass_usuario").val();
        console.log(pass_usuario);

        var settings = {
            "url": "http://localhost:3000/usuarios/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "mail_usuario": mail_usuario,
              "pass_usuario": pass_usuario
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response)
            alert("Login correcto")
            localStorage.setItem("usuario", JSON.stringify(response));
            window.location="UsuarioLogueado.html";
          }).fail(function(){
              alert("correo o contraseña invalida")
          })
        

    })

})

