const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // Send a POST request to the logout route. If the response is ok, redirect the user to the login page.
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // Redirect the user to the login page.
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
