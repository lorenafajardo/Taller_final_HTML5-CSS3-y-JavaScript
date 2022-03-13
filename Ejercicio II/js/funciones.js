const main=()=>{
    let lista = document.getElementsByClassName("lista");
}

function pares(){

    let lista = document.getElementsByClassName("lista");
    console.log(lista)

    for (let i =1;i<= 10; i++){
        if (i%2 != 0){
            let element= document.getElementById("fruta"+i);
            element.classList.remove("colorPares");
        }
    }   
    for (let i =1;i<= 10; i++){
        if (i%2 == 0){
            let element= document.getElementById("fruta"+i);
            element.classList.add("colorPares");
        }
    }   
}

function impares(){

    let lista = document.getElementById("fruta");

    for (let i =1;i<= 10; i++){
        if (i%2 == 0){
            let element= document.getElementById("fruta"+i);
            element.classList.remove("colorPares");
        }
    }   
    
    for (let i =1;i<= 10; i++){
        if (i%2 != 0){
            let element= document.getElementById("fruta"+i);
            element.classList.add("colorPares");
        }
    }   
}

