// function Login() {
//     var correo = document.login.email.value;
//     var pass = document.login.contra.value;
//     document.getElementById("correoAlerta").innerHTML= "";
//     document.getElementById("alertaPass").innerHTML ="";

//     if (correo=="correoprueba@correo.com" && pass=="1234567890"){
      
//         //navegar a url
//         const path = location.pathname;
//         const pathNav = path.slice(1,-10)+'index.html';
//          window.location.assign(pathNav);
        
//   }  if (correo !="correoprueba@correo.com"){
   
//     document.getElementById("correoAlerta").innerHTML +=
//       "<p>Ingresar Correo Válido</p>"
     
//   }if (pass!="1234567890"){
//     document.getElementById("alertaPass").innerHTML +=
//       "<p>Contraseña Inválida</p>"
//   }

// };

//validaciones correo recuperar contrasena
function valContra(){
  
  var correo2 = document.rec.correoContra.value;
  if (correo2 !="correoprueba@correo.com"){
   
    window.alert('Correo Invalido')}
  else {
    window.alert('Se ha enviado el codigo al correo')
}
}

//validacion del codigo recuperar contrasena

function valCode(){
  
  var correo3 = document.rec2.code.value;
  
  if (correo3 =="1234"){
    const path = location.pathname;
    const pathNav = path.slice(1,-20)+'recuperarContra2.html';
     window.location.assign(pathNav);
        

    }
    if (correo3!="1234"){
      window.alert('Codigo Invalido')

    }  
}
// Validacion de Recuperar contrasena
function valContra2(){
  document.getElementById("p1").innerHTML= 
    ""
  
  var pass1= document.contra2.pass1.value;
  var pass2= document.contra2.pass2.value;
  
  if (pass1.trim()!=pass1){

    window.alert("No puede contener espacios en blanco")
  }
  if (pass1.length==0){

    window.alert("Debe ingresar una contraseña")
  }
  if (pass1.length<10){

    window.alert("Minimo 10 caracteres")
  }
  
  if (pass1 != pass2){

    document.getElementById("p1").innerHTML+= 
    "<p>La contraseña no coincide</p>"
  }
  if (pass1 == pass2 && pass1.trim()==pass1 && pass1.length>=10){
    const path = location.pathname;
        const pathNav = path.slice(1,-21)+'login.html';
         window.location.assign(pathNav);

  }

}

//Funcion para bloquear los input

function valLetras(e){
  var key= e.keyCode || e.wich,
    tecla =String.fromCharCode(key).toLowerCase(),
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyz ",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]){
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla)==-1 && !tecla_especial){
      return false;
    }
}
function valLetraNum(e){
  var key= e.keyCode || e.wich,
    tecla =String.fromCharCode(key).toLowerCase(),
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyz 1234567890",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]){
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla)==-1 && !tecla_especial){
      return false;
    }
}
function valNum(e){
  var key= e.keyCode || e.wich,
    tecla =String.fromCharCode(key).toLowerCase(),
    letras = "12456890",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]){
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla)==-1 && !tecla_especial){
      return false;
    }
}


//validacion registro de estacionamiento

function valEstacionamiento(){

var ciudad= document.getElementById("ciudad").value;
var comuna= document.getElementById("comuna").value;
var calle= document.getElementById("calle").value;
var num= document.getElementById("numero").value;



if(ciudad=="" || ciudad.trim()!=ciudad || ciudad.length>30 || ciudad.length<=6){

  document.getElementById("p1").innerHTML = "<p>Debe ingresar una ciudad valida</p>"
}else {
  document.getElementById("p1").innerHTML = ""

}

if(comuna==""){
  document.getElementById("p2").innerHTML = "<p>Debe seleccionar una comuna</p>"
}else {
  document.getElementById("p2").innerHTML = ""

}
if(calle=="" || calle.trim()!=calle || calle.length>30 || calle.length<=0){

  document.getElementById("p3").innerHTML = "<p>Debe ingresar una calle valida</p>"
}else {
  document.getElementById("p3").innerHTML = ""

}
if(num=="" || num.trim()!=num || num.length>6 || num.length<=0){

  document.getElementById("p4").innerHTML = "<p> Debe ingresar un numero valido</p>"

}
else {
  document.getElementById("p4").innerHTML = ""

}
}



  function infoOpcional(){

  var casa = document.getElementById("casa").value
  var edificio = document.getElementById("edificio").value

if (casa =="casa") {

  document.getElementById("p5").innerHTML = "<p>  aaaaaaaaa      </p>"



}


}

function estacionamientoOnChange(sel) {
  if (sel.value=="casa"){
       divC = document.getElementById("nCasa");
       divC.style.display = "";

       divT = document.getElementById("nEdificio");
       divT.style.display = "none";

  }else{

       divC = document.getElementById("nCasa");
       divC.style.display="none";

       divT = document.getElementById("nEdificio");
       divT.style.display = "";
  }
}

























