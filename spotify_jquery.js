$(document).ready(function(){
  

  // declare variables
  var form = $('#search');
  var input = $('#search-keyword');
  var select = $('#search-type');
  var results = $('#results');

  //add event listeners 
  form.on('submit', search);

  //when someone clicks submit they make ajax request to spotiy with input
  function search(e) {
    e.preventDefault();
    console.log(e);
  }

  $.ajax({
    type: 'GET',
    url: 'https://api.spotify.com/v1/search?q=blur&type=album'
  })
  .done(function(response) {
    console.log(resonse);
  })


})