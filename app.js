// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function actualizarListaAmigos() {
  const listaDOM = document.getElementById('listaAmigos');
  listaDOM.innerHTML = '';

  for (let contador = 0; contador < listaAmigos.length; contador++) {
    const elementoAmigo = document.createElement('li');
    elementoAmigo.textContent = listaAmigos[contador];
    listaDOM.appendChild(elementoAmigo);
  }
}

function agregarAmigo() {
  const nombre = document.getElementById('amigo').value;

  if (nombre.trim() === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  listaAmigos.push(nombre);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const aleatorioIndice = Math.floor(Math.random() * listaAmigos.length);
  const resultadoSorteo = listaAmigos[aleatorioIndice];

  document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${resultadoSorteo}</li>`;
}