const refs = {
  iframe: document.querySelector('.students-movie__iframe'),
  iframeButton: document.querySelector('[favorite-movie-js]'),
  modalStudents: document.querySelector('.modal-students'),
  iframeButtonClose: document.querySelector('.iframe-close'),
  nameMovie: document.querySelector('.students-movie__name'),
};

refs.iframeButton.addEventListener('click', onShowIframe);
refs.iframeButtonClose.addEventListener('click', onCloseIframe);

function onShowIframe(event) {
  event.preventDefault();
  onChange();
  refs.modalStudents.style.overflow = 'hidden';
}

function onCloseIframe() {
  onChange();
  refs.modalStudents.style.overflow = 'auto';
}

function onChange() {
  refs.iframe.classList.toggle('is-hidden');
  refs.iframeButtonClose.classList.toggle('is-hidden');
}
