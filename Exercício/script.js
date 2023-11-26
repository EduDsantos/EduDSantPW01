const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const botao = document.getElementById('botao')
const resp = document.getElementById('resp')

function soma(){
    const soma = Number(num1.value) + Number(num2.value);
    const p = criaP();
    resp.appendChild(p)
    p.innerHTML += soma
    barra()
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function barra(){
    
    num2.value = ""
    num2.focus()
     
    num1.focus()
    num1.value = ""
}


