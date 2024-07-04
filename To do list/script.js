var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function checkList(){
    return document.getElementsByTagName("li").length;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    li.classList.add("listStyle");
	ul.appendChild(li);
	input.value = "";

    li.addEventListener("click",function(){
        li.classList.toggle("done");
    })
    
    var delButton = document.createElement("button");
    var delX = document.createElement("i");
        delButton.appendChild(document.createTextNode("X"));
        delButton.appendChild(delX);
        delButton.classList.add("delete");
        delButton.addEventListener("click",deleteItem);
        li.append(delButton);
        
            function deleteItem(){
            li.remove();   
            }

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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);