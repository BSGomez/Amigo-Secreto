let listaAmigos = [];
let amigoSorteado = [];

function textoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function agregarAmigo() {

    let amigo = document.getElementById('amigo').value;
    

    if (amigo == '') {
        window.alert('Debe ingresar un nombre');
    }else{
        if (listaAmigos.includes(amigo)) {
            window.alert('Nombres repetidos, intenta con un nuevo nombre');
        }else{
            listaAmigos.push(amigo);
        }
    }

    console.log(listaAmigos);
    document.querySelector('#amigo').value = '';
    return cargarLista(amigo);
}

function cargarLista(dato){
    let listaHTML = document.querySelector('#listaAmigos');
    let nuevoItem =  document.createElement('li');
    nuevoItem.textContent = dato;
    listaHTML.append(nuevoItem);
}

function sortearAmigo() {

    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);

    if (listaAmigos.length == amigoSorteado.length) {
        window.alert('Ya se sortearon todos los amigos');
    }else{
            console.log(amigoSorteado);
        if (amigoSorteado.includes(listaAmigos[numeroAleatorio])) {
            console.log('Ya se sorteó ' + listaAmigos[numeroAleatorio]);
            return sortearAmigo();
        }else{
            amigoSorteado.push(listaAmigos[numeroAleatorio]);
            textoElemento('ul', 'tu amigo secreto es ' + listaAmigos[numeroAleatorio]);
            console.log('Nuevo amigo sorteado ' + listaAmigos[numeroAleatorio]);

        }
    }
    
}

