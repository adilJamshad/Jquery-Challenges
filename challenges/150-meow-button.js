$(document).ready(readyNow);

function readyNow(){
  appendDom();
  doMeow();
}

function appendDom(){
  let header = $('<h1>Challenge 150</h1>');
  $('.container').append(header);

  $('.container').append('<div></div>');
  let $el = $('.container').children().last();
  $el.append('<button id="meowButton">Meow</button>');

}

function doMeow() {
  // YOUR CODE HERE
  // Add an event listener to the Meow Button
  $("#meowButton").on('click', function(){

  // The listener should log 'Meeeooow' when the button is clicked
    console.log("Meeeooow");
    let $el = $('.container').children().last();
    $el.append("<p>Meeeooow</p>");
  });
}
