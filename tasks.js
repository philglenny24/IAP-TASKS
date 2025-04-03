        // Query for the submit button and input task field once in the beginning and store those
        // two values in the variables submit and newTask.
        const submitButton = document.getElementById("submit");
        const newTaskInput = document.getElementById("task");

        // disable the submit button by default. Enable / disable by setting its disabled attribute to
        // false / true.
        submitButton.disabled = true;

        // Listen for input to be typed into the input field
        newTaskInput.addEventListener("input", function() {
            submitButton.disabled = !newTaskInput.value.trim(); // Disable if input is empty
        });

        // Listen for submission of form
        document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the default form submission (page reload)

            // Find the task the user just submitted
            const taskText = newTaskInput.value.trim();

            if (taskText !== "") { //check if it is empty
                // Create a list item for the new task and add the task to it
                const listItem = document.createElement("li");
                listItem.textContent = taskText;

                // Add new element to our unordered list
                document.getElementById("tasks").appendChild(listItem);

                newTaskInput.value = ""; // Clear the input field
                submitButton.disabled = true; // Disable submit button after adding task
            }
        });