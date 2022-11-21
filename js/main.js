const menu = document.getElementById("btn-group-vertical");
menu.style.display = 'inline-block';
menu.style.whiteSpace = 'nowrap';
menu.style.width = '115px';


var changeText = document.getElementById('jumbotron');
changeText.style.textAlign = 'end';
changeText.style.color = 'white';
changeText.style.backgroundColor = '#6c757d';

var changeColorButtonHeader = document.getElementById('button_header');

changeColorButtonHeader.style.background = 'green';
changeColorButtonHeader.style.border = '1px solid green';

var nature = document.getElementById('4');
var animals = document.getElementById('1');

var parent = nature.parentNode;

parent.insertBefore(nature, animals);

var persons = document.getElementById('3');
var tecnology = document.getElementById('2');

var parent_two = persons.parentNode;

parent_two.insertBefore(persons, tecnology);

var changeColorButtonCard = document.getElementById('button_color');

changeColorButtonCard.style.background = 'green';
changeColorButtonCard.style.border = '1px solid green';

var list = document.querySelector(".list-group");
var newItem = document.createElement("li");
newItem.textContent = 'Quarto item';
newItem.classList.add("list-group-item", "active");
list.appendChild(newItem);

var list2 = document.querySelector(".list-group");
var newItem2 = document.createElement("li");
newItem2.textContent = 'Quinto item';
newItem2.classList.add("list-group-item");
list2.appendChild(newItem2);

const elementActive = document.querySelector('.list-group .active');
elementActive.classList.remove('active');

