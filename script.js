const container = document.getElementById('bounce-container');
const toggleBtn = document.getElementById('toggle-btn');
let isPaused = false;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBall() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('ball-wrapper');

  const ball = document.createElement('div');
  ball.classList.add('ball');

  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  const size = random(80, 140);
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;

  shadow.style.width = `${size * 0.6}px`;
  shadow.style.height = `${size * 0.15}px`;

  const hue = random(0, 360);
  ball.style.background = `radial-gradient(circle at 30% 30%, #fff, hsl(${hue}, 70%, 60%))`;

  wrapper.style.left = `${random(5, 85)}%`;

  const delay = random(0, 1);
  wrapper.style.animationDelay = `${delay}s`;
  ball.style.animationDelay = `${delay}s`;
  shadow.style.animationDelay = `${delay}s`;

  wrapper.appendChild(ball);
  wrapper.appendChild(shadow);
  container.appendChild(wrapper);
}

for (let i = 0; i < 6; i++) createBall();

container.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) createBall();
});

toggleBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  container.classList.toggle('paused', isPaused);
  toggleBtn.innerText = isPaused ? 'Resume Animation' : 'Pause Animation';
});
