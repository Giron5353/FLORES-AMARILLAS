onload = () => {
  document.body.classList.remove("container");
};

// ...existing code...

// Rutas de tus fotos (puedes agregar más)
const fotos = [
  "img/fotos/1.jpg",
  "img/fotos/2.jpg",
  "img/fotos/3.jpg",
  "img/fotos/4.jpg",
  "img/fotos/5.jpg",
  "img/fotos/6.jpg",
  "img/fotos/7.jpg",
  "img/fotos/8.jpg"
];

// Opcional: textos alternativos para cada foto
const altText = [
  "Foto 1",
  "Foto 2",
  "Foto 3"
];

let lastIdx = -1;

function lanzarBurbujaFotoSuave() {
  const bubblesContainer = document.querySelector('.bubbles--fotos');
  let idx;
  do {
    idx = Math.floor(Math.random() * fotos.length);
  } while (fotos.length > 1 && idx === lastIdx); // Evita repetir si hay más de una foto
  lastIdx = idx;

  let size, left, top, intentos = 0, solapa;
  const intentosMax = 100;
  do {
    size = 120 + Math.random() * 120;
    left = Math.random() * (window.innerWidth - size);
    top = Math.random() * (window.innerHeight * 0.6);
    solapa = false;
    intentos++;
  } while (solapa && intentos < intentosMax);

  const bubble = document.createElement('div');
  bubble.className = 'bubble-foto';
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}px`;
  bubble.style.top = `${top}px`;

  const delay = Math.random() * 1.5;
  bubble.style.animationDelay = `${delay}s`;

  const img = document.createElement('img');
  img.src = fotos[idx];
  img.alt = altText[idx] || "Foto";
  bubble.appendChild(img);

  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000 + delay * 1000);
}

setInterval(lanzarBurbujaFotoSuave, 3300);
setTimeout(lanzarBurbujaFotoSuave, 1000);