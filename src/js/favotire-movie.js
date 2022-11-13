const refs = {
  iframe: document.querySelector('.students-movie__iframe'),
  iframeEl: document.querySelectorAll('.iframe-element'),
  modalStudents: document.querySelector('.modal-students'),
  iframeButtonClose: document.querySelector('.iframe-close'),
  iframeBody: document.querySelector('.iframe-backdrop'),
  modalStudentsBtnClose: document.querySelector('.modal-students-close'),
};

refs.iframeEl.forEach(el => {
  el.addEventListener('click', onShowIframe);
});

refs.iframeButtonClose.addEventListener('click', onCloseIframe);

function onShowIframe(event) {
  event.preventDefault();

  if (!event.target.classList.contains('iframe-element')) {
    return;
  }

  const NameStudentMovie = event.target.parentElement.getAttribute('data-href');
  const iframeMarkUp = `<iframe
    loading = "lazy"
    width="640"
    height="360"
    src="${NameStudentMovie}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>`;

  refs.iframeBody.insertAdjacentHTML('beforeend', iframeMarkUp);
  refs.modalStudents.scrollTo(0, 0);
  refs.modalStudents.style.overflow = 'hidden';
  onHidden();
}

function onCloseIframe() {
  refs.modalStudents.style.overflow = 'auto';
  refs.iframeBody.innerHTML = '';
  onHidden();
}

function onHidden() {
  refs.iframe.classList.toggle('is-hidden');
  refs.iframeButtonClose.classList.toggle('is-hidden');
  refs.modalStudentsBtnClose.classList.toggle('is-hidden');
}
