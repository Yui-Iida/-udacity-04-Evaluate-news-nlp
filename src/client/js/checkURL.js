// TODO declare a function to check the url ..
//  The question now how can i do it. I understand you are very busy mate so here's some hints pick the one you like
/* HINTS
    1. https://gist.github.com/franciskim/41a959f8e3989254ef5d
    2. https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
    3. https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
    4. https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
    5. https://stackoverflow.com/a/5717133/6483379
    6. https://www.npmjs.com/package/valid-url
 */

// 2. より
// var myURL;
// function validURL(myURL) {
//    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
//    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
//    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
//    '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
//    '(\\#[-a-z\\d_]*)?$','i');
//    return pattern.test(myURL);
// }
// document.write(validURL("http://qries.com"));

// 3.　より
// function is_url(str) {
//   regexp =
//     /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(is_url('http://www.example.com'));

// 4. より
// function validURL(str) {
//   var pattern = new RegExp(
//     '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$',
//     'i'
//   ); // fragment locator
//   return !!pattern.test(str);
// }

// 5. より
// function validURL(str) {
//   var pattern = new RegExp(
//     '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$',
//     'i'
//   ); // fragment locator
//   return !!pattern.test(str);
// }

// 6. より

function name() {
  return true;
}
