import { checkForName } from './nameChecker';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');

  fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };

const url = document.querySelector('#input-url');
const point = document.querySelector('.point');
const article = document.querySelector('.article');

const submitBtn = document
  .querySelector('#submit')
  .addEventListener('click', function (e) {
    // if (url === '') {
    //   alert('Please put a correct URL');
    // } else {
    e.preventDefault();
    console.log(url.value);

    // show result section
    const result = document.querySelector('.result-section');
    result.style.display = 'block';

    getData(url.value)
      .then(postData(url.value))
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
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    console.log('Error!', error);
  }
};

const updateUI = async data => {
  const res = await data;
  console.log(res);

  point.innerHTML = 'Update on index.js';
  article.innerHTML = 'Update on index.js';
};
