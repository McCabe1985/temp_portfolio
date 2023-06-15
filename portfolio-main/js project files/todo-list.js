const addTodoButton = document.querySelector(".add-todo");
const todoContainer = document.querySelector("#todo-container");
const inputField = document.querySelector(".input-field");

addTodoButton.addEventListener("click", function(){
    //generate a div that contains our todo entry and a delete button
    const todoEntry = document.createElement("div");
    todoEntry.classList.add("todo-div");

    //generate a new <p> element with the value of the inputField within the container <div> and reset inputField value.
    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    todoEntry.appendChild(paragraph);
    
    //generate a new <button> element that will allow us to delete the todo entry
    const deleteTodo = document.createElement("button");
    deleteTodo.classList.add("delete-todo");
    deleteTodo.innerHTML = "&times";
    todoEntry.appendChild(deleteTodo);

    //append the todo entry to the container and reset input field
    todoContainer.appendChild(todoEntry);
    inputField.value = "";
})

todoContainer.addEventListener("click", function(e){
        //store the event in a variable that can be acted upon
        const item = e.target;
        //if statement, deletes todo if the first class of the button clicked is equal to "delete-todo"
        if (item.classList[0] === "delete-todo") {
            const todo = item.parentElement;
                todo.remove();   
        } 

});