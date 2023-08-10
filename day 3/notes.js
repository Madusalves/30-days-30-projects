const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

/*function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();*/

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.querySelector("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");//setAttribute method is used to set the value of an attribute on a given HTML element. This method allows you to dynamically modify attributes of HTML elements in your web page.
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);//The appendChild method is a fundamental method in JavaScript used to add a child node to an existing parent node in the Document Object Model (DOM). It is commonly used to dynamically manipulate and modify the structure of web pages.

});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})