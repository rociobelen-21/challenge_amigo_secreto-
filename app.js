 const inputAmigo = document.getElementById("amigo");
 const listaAmigos = [];
 const ulListaAmigos = document.getElementById("listaAmigos");
 const ulResultado = document.getElementById("resultado");
 
 function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = ""; //limpiar input
 }

 function sortearAmigo() {
    if (listaAmigos.length === 0){
        alert("La lista de amigos está vacía.");
        return;
    }
    
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
 }