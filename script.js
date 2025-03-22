// Select the form, email input, and email message elements
const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const emailMsg = document.getElementById("email-message");

// Form submission event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valueEmail = inputEmail.value.trim(); // Trim spaces from the input value

  // Check if the email input is empty
  if (!valueEmail) {
    form.classList.add("error"); // Add error class to form
    emailMsg.textContent = "Email cannot be empty"; // Display error message
    return; // Exit the function early
  }

  // Check if the email format is valid
  if (emailRegex.test(inputEmail.value)) {
    form.classList.add("success"); // Add success class to form
    emailMsg.textContent = "Form sending success"; // Display success message
    inputEmail.value = ""; // Clear the input field

     // Remove success message and class after 3 seconds
    setTimeout(() => {
      form.classList.remove("success");
      emailMsg.textContent = "";
    }, 3000);
  } else {
    // Invalid email format
    form.classList.add("error");
    emailMsg.textContent = "Please provide a valid email";
  }
});

// Clear any error/success state when the user types
inputEmail.addEventListener("input", () => {
  form.classList.remove("success");
  form.classList.remove("error");
  emailMsg.textContent = "";
});
