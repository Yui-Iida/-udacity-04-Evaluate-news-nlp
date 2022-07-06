import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
// import img from '../img/chat-group.png';
// import res from 'express/lib/response';
// import * as path from 'path';
// import callAPI from '../server/index';

// console.log(checkForName);
// console.log(handleSubmit);
// console.log(path);

window.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submit');

  submitBtn.addEventListener('click', () => {
    handleSubmit();
    // callAPI();
  });
});

export { checkForName, handleSubmit };
