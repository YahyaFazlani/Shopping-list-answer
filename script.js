var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var listItems = document.querySelectorAll("li");

console.log(deleteButtons.length);

function inputLength() {
    return input.value.length;
}

function CreateListItem() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.className = "";
    button.className = "delete";
    button.appendChild(document.createTextNode("delete"));
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(button);
    ul.appendChild(li);
    console.log(deleteButtons.length);
    input.value = "";
    li.addEventListener("click", toggleDone);
    button.addEventListener("click", deleteItem);
}

function addListItemAfterClick() {
    if (inputLength() > 0) {
        CreateListItem();
    }
}

function addListItemAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        CreateListItem();
    }
}

function toggleDone(event) {
    clicked = event.toElement;
    clicked.classList.toggle("done");
}

function deleteItem(event) {
    item = event.toElement.parentElement;
    item.remove();
}

button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterKeyPress);
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", toggleDone);
    deleteButtons[i].addEventListener("click", deleteItem);
}
