var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/numbers.json";

function getTranslationURL(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("something wrong with server:try after some time");
}

function clickHandler() {
  var inputText = txtInput.value; //taking input
  fetch(getTranslationURL(inputText)) // calling server for processing
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
