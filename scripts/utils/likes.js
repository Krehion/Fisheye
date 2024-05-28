function likes() {
    // Select all heart checkboxes
    const heartChecks = document.querySelectorAll('.heart-checkbox');
    
    // Add click event listener to each button
    heartChecks.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Find the corresponding like count element
            const likesElement = this.previousElementSibling;
            // Find total of likes
            const totalLikesElement = document.querySelector('.total-likes')
            // Convert strings to integers
            let likes = parseInt(likesElement.textContent, 10);
            let totalLikes = parseInt(totalLikesElement.textContent, 10);

            if (this.checked) { // Increment the like count
                likes += 1;
                totalLikes += 1;
                likesElement.textContent = likes;
                totalLikesElement.textContent = totalLikes;
            } else { // Remove like on second click
                likes -= 1;
                totalLikes -= 1;
                likesElement.textContent = likes;
                totalLikesElement.textContent = totalLikes;
            }
            
            // Optionally: update the JSON file on the server

        });
    });
}