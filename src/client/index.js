import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
import img from '../img/chat-group.png';

// console.log(checkForName);
// console.log(handleSubmit);

// alert("I EXIST")
console.log('CHANGE!!');

export { checkForName, handleSubmit };

const url = document.querySelector('#input-url');
const submitBtn = document
  .querySelector('#submit')
  .addEventListener('click', function (e) {
    e.preventDefault();
    console.log(url.value);
  });
