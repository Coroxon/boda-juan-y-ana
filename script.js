// Fecha del evento
const destino = new Date("2025-11-15T16:00:00").getTime();

const x = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = destino - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("reloj").innerHTML =
    `${dias} días ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("reloj").innerHTML = "¡Es hoy! 💍";
  }
}, 1000);

// Ocultar después del 22 de noviembre
const fin = new Date("2025-11-22");
if (new Date() > fin) {
  document.body.innerHTML = "<h2>Esta invitación ya no está disponible 💐</h2>";
}
