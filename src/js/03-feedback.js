import throttle from 'lodash.throttle';

const ElForm = document.querySelector('.feedback-form');
/* const ElEmail = document.querySelector('input');
const ElMessage = document.querySelector('textarea');
const ElButton = document.querySelector('button'); */

//console.log(JSON.parse(localStorage.getItem('feedback-form-state')).email);

ElForm.addEventListener('input', throttle(handleInput, 500));
ElForm.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

ElForm.elements.email.value =
  JSON.parse(localStorage.getItem('feedback-form-state')).email || '';
ElForm.elements.message.value =
  JSON.parse(localStorage.getItem('feedback-form-state')).message || '';

function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
