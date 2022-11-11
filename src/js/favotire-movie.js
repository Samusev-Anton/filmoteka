const refs = {
  iframe: document.querySelector('.students-movie__iframe'),
  iframeEl: document.querySelector('iframe'),
  iframeButton: document.querySelector('[favorite-movie-js]'),
  modalStudents: document.querySelector('.modal-students'),
  iframeButtonClose: document.querySelector('.iframe-close'),
  nameMovie: document.querySelector('.students-movie__name'),
};

refs.iframeButton.addEventListener('click', onShowIframe);
refs.iframeButtonClose.addEventListener('click', onCloseIframe);

let getAttributeDataScr = '';

function onShowIframe(event) {
  event.preventDefault();
  onChange();
  refs.modalStudents.style.overflow = 'hidden';

  getAttributeDataScr = refs.iframeEl.getAttribute('data-src');
  const changeAttributeToSrc = refs.iframeEl.setAttribute(
    'src',
    getAttributeDataScr
  );
  refs.iframeEl.removeAttribute('data-src');
}

function onCloseIframe() {
  onChange();
  refs.modalStudents.style.overflow = 'auto';
  refs.iframeEl.setAttribute('data-src', getAttributeDataScr);
  refs.iframeEl.removeAttribute('src');
}

function onChange() {
  refs.iframe.classList.toggle('is-hidden');
  refs.iframeButtonClose.classList.toggle('is-hidden');
}
