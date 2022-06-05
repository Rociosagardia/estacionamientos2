$(document).ready(function () {
 
  var estacionamiento = localStorage.getItem("estacionamiento");
  estacionamiento = JSON.parse(estacionamiento);
  console.log(estacionamiento);

  $("#region").html(estacionamiento.region)
  $("#tipo_estacionamiento").html(estacionamiento.tipo_estacionamiento)
  $("#numero").html(estacionamiento.numero)
  $("#nivel_estacionamiento").html(estacionamiento.nivel_estacionamiento)
  $("#nom_usuario").html(estacionamiento.usuario.nom_usuario)
  $("#tel_usuario").html(estacionamiento.usuario.tel_usuario)
  $("#mail_usuario").html(estacionamiento.usuario.tel_usuario)
  $("#descripcion").html(estacionamiento.descripcion)
  

});
