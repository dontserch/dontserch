document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Process or display the values
    console.log('Username:', username);
    console.log('Password:', password);

    // Optional: Send data to a server or perform further actions
    sendDataToServer(username, password);
});

function sendDataToServer(username, password) {
    fetch('https://your-server-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle server response
        console.log('Server response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
