/* ========== CONFIG (cambia según tu evento) ========== */
const EVENT_ISO = "2025-11-15T16:00:00"; // fecha y hora del evento
const WHATSAPP_NUMBER = "50255551234";   // sin el +
const WHATSAPP_MSG = "Hola, confirmo mi asistencia a la boda de Isabella & Daniel. Nombre: [tu nombre].";
/* ==================================================== */

/* COUNTDOWN */
(function countdown() {
  const target = new Date(EVENT_ISO).getTime();
  const el = document.getElementById('timer');
  if (!el) return;

  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      el.textContent = "¡Hoy es el gran día!";
      clearInterval(timerId);
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
    const secs = Math.floor((diff % (1000*60)) / 1000);
    el.textContent = `${days} días ${hours}h ${mins}m ${secs}s`;
  }

  update();
  const timerId = setInterval(update, 1000);
})();

/* WHATSAPP BUTTON */
(function whatsapp() {
  const wa = document.getElementById('whatsapp-link');
  if (!wa) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  wa.setAttribute('href', url);
  wa.setAttribute('target','_blank');
})();

/* SIMPLE CAROUSEL */
(function carousel() {
  const slidesWrap = document.querySelector('.slides');
  if (!slidesWrap) return;
  const slides = Array.from(slidesWrap.querySelectorAll('img'));
  let idx = 0;
  const prev = document.querySelector('.cbtn.prev');
  const next = document.querySelector('.cbtn.next');

  function show(i){
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
  }
  show(idx);

  function nextSlide(){
    idx = (idx + 1) % slides.length;
    show(idx);
  }
  function prevSlide(){
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  }

  next && next.addEventListener('click', nextSlide);
  prev && prev.addEventListener('click', prevSlide);

  // auto-rotate every 4.5s
  let auto = setInterval(nextSlide, 4500);
  // pause on hover
  slidesWrap.addEventListener('mouseenter', ()=> clearInterval(auto));
  slidesWrap.addEventListener('mouseleave', ()=> auto = setInterval(nextSlide, 4500));
})();

/* OPTIONAL: smooth scroll for anchor links (if you add any) */
(function smoothScroll(){
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
})();
