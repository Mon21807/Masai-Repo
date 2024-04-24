document.getElementById("fetch-todos").addEventListener("click", function() {
    const todoList = document.getElementById("todo-list");

    // Fetch todos from the API
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            // Clear existing todos
            todoList.innerHTML = "";
            // Loop through each todo and create list items
            data.forEach(todo => {
                const listItem = document.createElement("li");
                const tickBox = document.createElement("input");
                tickBox.type = "checkbox"; // Set input type to checkbox
                tickBox.classList.add("tick-box"); // Add tick-box class for styling
                listItem.textContent = todo.title;
                // Append tick box and todo title to list item
                listItem.appendChild(tickBox);
                todoList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching todos:", error);
        });
});



