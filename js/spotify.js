// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE

function ajaxRequest(method, url) {
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.send();
  return request;
}

// function for events that occur on click, move inputs from input window to empty array that is input
function submitInput(event) {
  event.preventDefault();
  console.log("clicked");

  var inputs = [];

//push vales from input window into input array
  // input.push(inputWindow);

// request info from spotify using ajax

  var request = ajaxRequest('GET', 'https://api.spotify.com/v1/search?q=blur&type=album');

  // use input from window to append to url in ajax to return values, store these in inputs variable array.

  // iterate through this array with for loop to find info that we want. append this info to inner html in page

  }

// define variables for each part of page
var submitButton;
var inputWindow;
var getAlbumInput;
var getArtistInput;
var getTrackInput;

document.addEventListener('DOMContentLoaded', function() {
  submitButton = document.getElementById("submit");
  inputWindow = document.getElementById("search-keyword")
  getAlbumInput = document.getElementById("album");
  getArtistInput = document.getElementById("artist");
  getTrackInput = document.getElementById("track");

// add event listeners for the different parts
submitButton.addEventListener('click', submitInput);


});