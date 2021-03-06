export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
      const total = +number.innerText;
      const increase = Math.floor(total / 72);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increase;
        number.innerText = start;
        if (start > total) {
          number.innerText = total.toLocaleString();
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
