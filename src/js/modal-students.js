const modal = document.getElementById('my_modal');
const btn = document.getElementById('btn_modal_window');
const span = document.getElementsByClassName('close_modal_window')[0];

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
