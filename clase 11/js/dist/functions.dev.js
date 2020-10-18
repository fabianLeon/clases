"use strict";

var newImage = function newImage() {
  fetch('https://yesno.wtf/api').then(function (response) {
    return response.json();
  }).then(function (myJson) {
    console.log(myJson); // Import stylesheets

    var appDiv = document.getElementById('app');
    appDiv.innerHTML = "\n            <h1 class=\"title\"> ".concat(myJson.answer, " </h1>\n            <img class=\"image\" src=\"").concat(myJson.image, "\">\n            ");
  });
};