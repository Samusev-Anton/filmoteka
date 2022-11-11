const refs = {
    openAuthModalBtn: document.querySelector('[data-auth-modal-open]'),
    closeAuthModalBtn: document.querySelector('[data-auth-modal-close]'),
    authModal: document.querySelector('[data-auth-modal]'),
}

refs.openAuthModalBtn.addEventListener('click', onAuthModalOpen);
refs.closeAuthModalBtn.addEventListener('click', onAuthModalClose);


function onAuthModalOpen(evt) {
  evt.preventDefault();  
  refs.authModal.classList.toggle('is-hidden');
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' || evt.target.classList.contains('auth-backdrop')) {
      refs.authModal.classList.add('is-hidden');
      document.body.style.overflow = 'auto';
    }
    })
  };


function onAuthModalClose(evt) {
    evt.preventDefault();
  refs.authModal.classList.toggle('is-hidden');
  document.body.style.overflow = 'auto';
}


