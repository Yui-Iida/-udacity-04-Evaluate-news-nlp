import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
// import img from '../img/chat-group.png';
// import res from 'express/lib/response';

// console.log(checkForName);
// console.log(handleSubmit);

window.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submit');

  submitBtn.addEventListener('click', () => {
    handleSubmit();
  });
});

export { checkForName, handleSubmit };
