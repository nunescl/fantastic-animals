export default function initModal() {
  const buttomOpen = document.querySelector('[data-modal="open"]');
  const buttomClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('active');
  }

  function clickOut(event) {
    if (event.target === this) toggleModal(event);
  }

  if (buttomOpen && buttomClose && containerModal) {
    buttomOpen.addEventListener('click', toggleModal);
    buttomClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOut);
  }
}
