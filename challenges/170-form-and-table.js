
// Feel free to add more data here
const petOne = {name: 'Charlie', type: 'dog', age: 6};
const petTwo = {name: 'Thorin', type: 'rabbit', age: 4};
const petThree = {name: 'Cedar', type: 'dog', age: 7};
const petFour = {name: 'Juniper', type: 'cat', age: 3};

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challenge 170</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  // Adding Action tab
  table.children().first().children().first().append('<th>Actions</th>');
 
  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

  // YOUR CODE HERE
  // Remember, small steps!
  // Display each of the pets on the DOM.
  for (pet of pets){
    let $tr = $("<tr></tr>");
    $tr.append(`<td>${pet.name}</td>`);
    $tr.append(`<td>${pet.type}</td>`);
    $tr.append(`<td>${pet.age}</td>`);
    $tr.append(`<td><button type='button' onclick='dataDelete(this);' class='btn btn-default'><span class='glyphicon glyphicon-remove' /> </td>`)
    $('#tableBody').append($tr);
  }
  
  // Add an input field that allows users to add new pets from the index page.
  let form = $(`<div id="count">
    <h3>Add a pet</h3>
    <label>Pet Name</label>
    <input type='text' id="petName"></input><br>
    <label>Pet Type</label>
    <input type="text" id="petType"></input><br>
    <label>Pet Age</label>
    <input type="number" id="petAge"></input><br>
    <button type="button" id="createButton" class="btn btn-primary" onclick="createPet();">Add</button>
    </div>`    
  )
  $('.container').append(form);

}
//Add a button to add a pet
function createPet(){
  //values check
  if($('#petName').val() && $('#petType').val() && $('#petAge').val()){
    //creating a table element
    let $tr = $("<tr></tr>");
    $tr.append(`<td>${$('#petName').val()}</td>`);
    $tr.append(`<td>${$('#petType').val()}</td>`);
    $tr.append(`<td>${$('#petAge').val()}</td>`);
    $tr.append(`<td><button type='button' onclick='dataDelete(this);' class='btn btn-default'><span class='glyphicon glyphicon-remove' /> </td>`)
    //adding this element to table
    $('#tableBody').append($tr);
  }
}
// Add a button that clears out the list of pets.
function dataDelete(item){
  $(item).parents('tr').remove();
}

