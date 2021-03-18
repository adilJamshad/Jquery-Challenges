$(document).ready(readyNow);
// counter number
let counter = 0;

function readyNow(){
    incrementOnClick();
}

function incrementOnClick(){
  // YOUR CODE HERE
  let header = $('<h1>Challenge 110</h1>');
  $('.container').append(header);
  let button = $('<button id="incrementButton">Click Me</button>');
  $('.container').append(button); 
  let count = $('<p id="count"></p>')
  $('.container').append(count);
  button.on('click', function () {
    counter++;
    console.log(counter);
    $('#count').text(counter);
  });
  // Log a number that gets incremented by one every time a button is clicked.
}
