const iframe = document.querySelector('.students-movie__iframe');
const iframeButton = document.querySelector('[favorite-movie-js]');
const modal = document.querySelector('[data-modal]');
const modalStudents = document.querySelector('.modal-students');
const iframeButtonClose = document.querySelector('.iframe-close');

iframeButton.addEventListener('click', onShowIframe);
iframeButtonClose.addEventListener('click', onCloseIframe);

function onShowIframe(event) {
  event.preventDefault();
  iframe.classList.toggle('is-hidden');
  modalStudents.style.overflow = 'hidden';
  iframeButtonClose.style.display = 'flex';
}

function onCloseIframe() {
  iframe.classList.toggle('is-hidden');
  modalStudents.style.overflow = 'auto';
  iframeButtonClose.style.display = 'none';
}
