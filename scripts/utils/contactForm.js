// Validate the form
function validate() {
    // Form data
    const firstName = document.getElementById("firstName");
    const firstNameValue = firstName.value;
    const lastName = document.getElementById("lastName");
    const lastNameValue = lastName.value;
    const email = document.getElementById("email");
    const emailValue = email.value;

    console.log("Prénom : " + firstNameValue);
    console.log("Nom : " + lastNameValue);
    console.log("Email : " + emailValue);

    // Later, this function can be completed with tests for each input
}

// Send the form
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents the form from submitting
    validate();
});