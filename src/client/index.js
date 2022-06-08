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

// alert("I EXIST")
console.log('CHANGE!!');

export { checkForName, handleSubmit };

const url = document.querySelector('#input-url');
const point = document.querySelector('.point');
const article = document.querySelector('.article');

const submitBtn = document
  .querySelector('#submit')
  .addEventListener('click', function (e) {
    e.preventDefault();
    console.log(url.value);

    // show result section
    const result = document.querySelector('.result-section');
    result.style.display = 'block';

    getData(url)
      .then(newData => postData('/', newData))
      .then(updateUI(data));

    url.value = '';
  });

const getData = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

const postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

const updateUI = async data => {
  const response = await data;
  console.log(response);

  point.innerHTML = 'Update on index.js';
  article.innerHTML = 'Update on index.js';
};
