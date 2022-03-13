const main=()=>{
    let element = document.querySelector("#bodyStyle");    
}

const cambiarColor1 = (id) =>{
    let element= document.getElementById("bodyStyle");
    element.style.backgroundColor="darkcyan";
}

const cambiarColor2 = (id) =>{
    let element= document.getElementById("bodyStyle");
    element.style.backgroundColor="lightslategray";
}

const cambiarColor3 = (id) =>{
    let element= document.getElementById("bodyStyle");
    element.style.backgroundColor="rgb(212, 198, 171)";
}

const mostrar = (id)=>{
    let elemento = document.querySelector(`#${id}`);
   elemento.classList.add("descripcionOculta");
}

const ocultar = (id, estilo)=>{
    let elemento = document.querySelector(`#${id}`);
   elemento.classList.remove("descripcionOculta");
}
