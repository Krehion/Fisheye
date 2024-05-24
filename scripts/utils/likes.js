function likes() {
    // Select all heart checkboxes
    const heartChecks = document.querySelectorAll('.heart-checkbox');

    // Add click event listener to each button
    heartChecks.forEach(checkbox => {
        checkbox.addEventListener('change', function() {

            if (this.checked) {
                // Find the corresponding like count element
                const likesElement = this.previousElementSibling;
                // Convert string to an integer
                let likes = parseInt(likesElement.textContent, 10);
                // Increment the like count
                likes += 1;
                likesElement.textContent = likes;
            } else { // Remove like on second click
                const likesElement = this.previousElementSibling;
                let likes = parseInt(likesElement.textContent, 10);
                likes -= 1;
                likesElement.textContent = likes;
            }
            
            // Optionally: update the JSON file on the server

        });
    });
}

// TODO : update total number of likes ?