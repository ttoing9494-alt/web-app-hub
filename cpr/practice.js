const button = document.querySelector('#toggle');
const beat = document.querySelector('#beat');
const status = document.querySelector('#status');
const interval = 60000 / 110;
let timer;

function stop() {
  clearInterval(timer);
  timer = undefined;
  button.textContent = '연습 시작';
  status.textContent = '연습을 멈췄습니다.';
}

button.addEventListener('click', () => {
  if (timer !== undefined) {
    stop();
    return;
  }
  const start = performance.now();
  beat.value = 1;
  button.textContent = '연습 중지';
  status.textContent = '분당 110회 박자로 연습을 시작했습니다.';
  timer = setInterval(() => {
    beat.value = Math.floor((performance.now() - start) / interval) + 1;
  }, 40);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && timer !== undefined) stop();
});
