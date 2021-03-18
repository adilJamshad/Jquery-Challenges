$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  // YOUR CODE HERE
  let header = $('<h1>Challenge 120 - Append List</h1>');
  $('.container').append(header);
  //list starts
  let listStarts = $('<ul id="myList"></ul>');
  $('.container').append(listStarts);
  // Loop through a list and append all the values to the DOM.
  for(let animal of myArray){
    let listItem = $(`<li>${animal}</li>`);
    $("#myList").append(listItem);
  }
}

