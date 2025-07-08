function press() {
    const optionsBar = document.querySelector(".options-bar");
    optionsBar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const slider  = document.querySelector('.phone-img');
  
  if (!slider) return;

  const img   = slider.querySelector('img');
  const dots  = slider.querySelectorAll('.dot');
  const srcs  = slider.dataset.srcs.split(',').map(s => s.trim());
  let i = 0, timer;

  const show = idx => {
    i = idx;
    img.src = srcs[i];
    dots.forEach(dot =>
      dot.classList.toggle('active', Number(dot.dataset.index) === i)
    );
  };

  const next  = () => show((i + 1) % srcs.length);
  const start = () => timer = setInterval(next, 4000); // 4 s
  const stop  = () => clearInterval(timer);

  // clic en la imagen ⇒ siguiente slide
  img.addEventListener('click', () => {
    stop(); next(); start();
  });

  // clic en los puntos ⇒ ir al slide seleccionado
  dots.forEach(dot => dot.addEventListener('click', () => {
    stop(); show(Number(dot.dataset.index)); start();
  }));

  show(i);   // inicial
  start();   // rotación automática
});


