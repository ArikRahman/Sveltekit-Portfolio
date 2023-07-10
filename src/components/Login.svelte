<head>
<style>
    body {
    font-family: Arial, sans-serif;
    }
    .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    .login-container h2 {
    text-align: center;
    margin-bottom: 20px;
    }
    .login-container form {
    display: flex;
    flex-direction: column;
    }
    .login-container form input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
    .login-container form button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }
    .login-container form button:hover {
    background-color: #0056b3;
    }
</style>
</head>
<body>
<div class="login-container">
    <h2>Login</h2>
    <form action="/submit-login" method="post">
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Log In</button>
    </form>
</div>
</body>

