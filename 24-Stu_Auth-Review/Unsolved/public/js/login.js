const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // Prevent the default behavior of the form submission. 
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // Get the email and password values from the login form and remove any whitespace from the beginning and end of the values.
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    // Send a POST request to the login route with the email and password values. If the response is ok, redirect the user to the homepage.
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
