function validarFormulario(){
    var nombre = document.getElementById("nombre").value.trim()
    var apellido = document.getElementById("apellido").value.trim()
    var nacionalidad =  document.getElementById("nacionalidad").value.trim()
    var correo = document.getElementById("correo").value
    var comentario = document.getElementById("comentario").value.trim()


   if(nombre == "" || apellido=="" || nacionalidad=="" || correo=="" || comentario==""){
    alert("Por favor, complete todos los campos requeridos del formulario")
    return false
   }

   var nombreTest = /[A-Za-z]+(\s[A-Za-z]+)*/.test(nombre)

   if(nombreTest == false){
    alert("Ingrese un nombre valido, solo letras del abecedario")
    return false
   }

   var apellidoTest = /^[A-Za-z]+$/.test(apellido)

   if(apellidoTest == false){
    alert("Ingrese un apellido valido")
    return false
   }

   var nacionalidadTest = /[A-Za-z]+(\s[A-Za-z]+)*/.test(nacionalidad)

   if(nacionalidadTest == false){
    alert("Ingrese un nombre de pais valido")
    return false
   }

   var correoTest = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(correo)

   if(correoTest == false){
    alert("Por favor, ingrese un email valido")
    return false
   }

   //En caso de que todas las validaciones son correctas se envia el formulario
   alert("El formulario fue enviado correctamente")
}