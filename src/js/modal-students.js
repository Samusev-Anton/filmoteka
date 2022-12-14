const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('backdrop'),
};

refs.openModalBtn.addEventListener('click', onModal);
refs.closeModalBtn.addEventListener('click', closeModal);

function onModal(event) {
  event.preventDefault();
  refs.modal.show();
  onModalStudents();

  document.addEventListener('keydown', onExit);
  document.addEventListener('click', onExit);
}

function closeModal() {
  refs.modal.close();
  onModalStudents();

  document.removeEventListener('keydown', onExit);
  document.removeEventListener('click', onExit);
}

function onModalStudents() {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('disable-scroll');
}

function disableScroll() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('disable-scroll');
}

function onExit(event) {
  if (event.key === 'Escape' || event.target.classList.contains('backdrop')) {
    disableScroll();
  }
}
