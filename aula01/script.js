function botao(){
    let oi = prompt("Olá, qual seu nome ?")
    let nt = prompt(`Olá ${oi}, qual sua nota para nosso site :`)
    alert("Agradeço pelo seu feedback")
}

function verificar() {  
    email = prompt("Digite seu E-mail")
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        document.body.innerText = "E-mail válido";
        elementoTexto.style.color = "green";
    } else {
        document.body.innerText = "E-mail inválido";
        elementoTexto.style.color = "red"; 
    }
}


