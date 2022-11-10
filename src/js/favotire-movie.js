const refs = {
  iframe: document.querySelector('.students-movie__iframe'),
  iframeButton: document.querySelector('[favorite-movie-js]'),
  modalStudents: document.querySelector('.modal-students'),
  iframeButtonClose: document.querySelector('.iframe-close'),
};

refs.iframeButton.addEventListener('click', onShowIframe);
refs.iframeButtonClose.addEventListener('click', onCloseIframe);

function onShowIframe(event) {
  event.preventDefault();
  refs.iframe.classList.toggle('is-hidden');
  refs.iframeButtonClose.classList.toggle('is-hidden');
  refs.modalStudents.style.overflow = 'hidden';
}

function onCloseIframe() {
  refs.iframe.classList.toggle('is-hidden');
  refs.iframeButtonClose.classList.toggle('is-hidden');
  refs.modalStudents.style.overflow = 'auto';
}
