(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal(event) {
    refs.modal.classList.remove('is-hidden');
    console.log(event.target);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });

  document.addEventListener('click', event => {
    if (event.target.classList.contains('modal-students')) {
      refs.modal.classList.add('is-hidden');
    }
  });
})();
