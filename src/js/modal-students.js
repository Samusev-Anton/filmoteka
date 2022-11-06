(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onModal);
  refs.closeModalBtn.addEventListener('click', onModal);

  function onModal(event) {
    event.preventDefault();
    refs.modal.classList.toggle('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });

  document.addEventListener('click', event => {
    if (event.target.classList.contains('backdrop')) {
      refs.modal.classList.add('is-hidden');
    }
  });
})();
