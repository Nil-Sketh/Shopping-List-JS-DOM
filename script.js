var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var delButtons = document.getElementsByClassName("delete-button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("input");
	delButton.type = "button";
	delButton.className = "delete-button";
	delButton.value = "delete";
	li.appendChild(delButton);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	updateLi();
}

function deleteLi() {
	this.parentNode.remove();
	updateLi();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle("done");
}

function updateLi() {
	li = document.querySelectorAll("li");
	delButtons = document.getElementsByClassName("delete-button");
	addListListeners();
	addDelButtonListeners();
}

function addListListeners() {
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggleDone);
	}
}

function addDelButtonListeners() {
	for (i = 0; i < delButtons.length; i++) {
		delButtons[i].addEventListener("click", deleteLi);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

addListListeners();

addDelButtonListeners();