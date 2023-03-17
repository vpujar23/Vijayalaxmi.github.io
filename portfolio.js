//Form submission
let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let message = form.elements.message.value;

  let error = document.querySelector('#errorMessageContainer');
  let success = document.querySelector('#successMessageContainer');

  if (name === '' || email === '' || message === '') {
    error.style = 'display:block';
    success.style = 'display:none';
  } else {
    error.style = 'display:none';
    success.style = 'display:block';

    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

//Hamburger vertical menu
let menu = document.getElementById('menu');
let openBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.fa-xmark');

function openmenu() {
  menu.style.left = '0';
}

function closemenu() {
  menu.style.left = '-200px';
}

openBtn.addEventListener('click', openmenu);
closeBtn.addEventListener('click', closemenu);
