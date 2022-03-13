const mostrar = (id)=>{
    let elemento = document.querySelector(`#${id}`);
   elemento.classList.add("descripcionOculta");
}

const ocultar = (id, estilo)=>{
    let elemento = document.querySelector(`#${id}`);
   elemento.classList.remove("descripcionOculta");
}