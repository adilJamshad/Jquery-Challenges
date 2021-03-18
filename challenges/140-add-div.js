$(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challange 140</h1>');
  $('.container').append(header);

  // YOUR CODE HERE
  // Add a DIV to the Container Class (a new DIV inside of the DIV that already exists).
  $('.container').append('<div></div>');
  // Inside the DIV, add a P tag that has your name
  let mydiv = $('.container').children().last();
  mydiv.append('<p>Adil Ihsan</p>')
  // Then add another P tag with the City you live in.
  mydiv.append('<p>Lahore</p>')
  
}
