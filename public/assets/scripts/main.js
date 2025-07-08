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

/* ========= Modal Login / Signup ========= */
const openAuth  = document.getElementById('open-auth');
const overlay   = document.getElementById('auth-overlay');
const closeAuth = document.querySelector('.close-auth');

openAuth.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('show');
});
closeAuth.addEventListener('click', () => overlay.classList.remove('show'));
overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('show');
});

/* ========= Slider SignIn / SignUp ========= */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container    = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));



