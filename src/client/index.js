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

export { checkForName, handleSubmit };

const url = document.querySelector('#input-url').value;
const point = document.querySelector('.point');
const article = document.querySelector('.article');

const submitBtn = document
  .querySelector('#submit')
  .addEventListener('click', function (e) {
    // if (url === '') {
    //   alert('Please put a correct URL');
    // } else {
    e.preventDefault();
    console.log(url);

    // show result section
    const result = document.querySelector('.result-section');
    result.style.display = 'block';

    getData(url)
      .then(postData(url))
      .then(newData => postData('/', newData))
      .then(updateUI(data));

    url = '';
    // }
  });

const getData = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error!', error);
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
    console.log('Error!', error);
  }
};

const updateUI = async data => {
  const response = await data;
  console.log(response);

  point.innerHTML = 'Update on index.js';
  article.innerHTML = 'Update on index.js';
};
