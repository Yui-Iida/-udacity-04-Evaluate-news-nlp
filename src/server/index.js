let path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
const cors = require('cors');
// import img from '../img/chat-group.png';
// const img = require('../img/chat-group.png');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(__dirname);
console.log(dotenv);

// call API
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;

// let textapi = new meaningcloud({
//   application_key: process.env.API_KEY,
// });
// console.log(`Your API key is ${process.env.API_KEY}`);

// codes from Meaning Cloud //////
const formdata = new FormData();
formdata.append('key', 'YOUR API KEY');
formdata.append('txt', 'YOUR TEXT HERE');
formdata.append('lang', 'TEXT LANGUAGE HERE'); // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
};

const response = fetch(
  'https://api.meaningcloud.com/sentiment-2.1',
  requestOptions
)
  .then(response => ({
    status: response.status,
    body: response.json(),
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

//////////////////////////////

const dataPath = path.resolve('src/client/views/index.html');

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(dataPath);
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.get('/', (req, res, next) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
});

app.post('/', callAPI);

//// code by me

// app.post('/', async (req, res) => {
//   const body = await req.body;
//   data = body;
//   console.log(data);
//   res.send(data);
// });

const callAPI = async (req, res) => {
  const meaningCloudUrl = baseUrl + apiKey + req.body;
  const resData = await fetch(meaningCloudUrl);
  const npl = await resData.json();
  res.send(npl);
};
