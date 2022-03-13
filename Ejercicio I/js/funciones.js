const main=()=>{
    let nombre = document.getElementById("nombre"); 
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");
}

function enviar(){
    var nombre = document.getElementById('nombre').value;
    console.log("Nombre: "+nombre);
    var email = document.getElementById("email").value;
    console.log("Correo: "+ email);
    let asunto = document.getElementById("asunto").value;
    console.log("Asunto: " + asunto);
    let mensaje = document.getElementById("mensaje").value;
    console.log ("Mensaje: "+mensaje);

    if(nombre==""){
        alert("Debe ingresar su nombre")     
        }
    if(email==""){
        alert("Debe ingresar su email")     
    } 
    if(asunto==""){
        alert("Debe ingresar un asunto")     
    } 
    if(mensaje==""){
        alert("Debe ingresar un mensaje")     
    } 
    }

function resetear(){
   formulario.reset();    
}