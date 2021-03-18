$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  let header = $('<h1>Challeng 130 - Append on Click</h1>');
  $('.container').append(header);

  // YOUR CODE HERE
  // Add a button first
  let button = $('<button id="clickMe">Click Me</button>');
  $('.container').append(button);
  //Append Click me on click
  button.on('click', function (){
    $('.container').append('<p id="count">Click Me</>');
  });
}

