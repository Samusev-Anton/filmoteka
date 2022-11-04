const modal = document.getElementById('modal-students-js');
const btn = document.getElementById('modal-students-open');
const span = document.getElementsByClassName('modal-students-close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
