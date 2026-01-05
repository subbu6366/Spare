# Spare


# Login Page

<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="loginpage.css"> <!-- Link to your main CSS file -->
</head>
<body>

    <div class="login-page">
        <div class="login-form">
            <h2>Login</h2>
            <form id="loginForm">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" id="loginBtn"><a href="Spare.html">Login</a></button>
            </form>
        </div>
    </div>

<script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>

# Login page Css


body, html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f5f2;
}

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f5f2;
}

.login-form {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 300px;
    text-align: center;
}

.login-form h2 {
    color: #b2744c;
    font-family: 'Merriweather', serif;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    color: #b2744c;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #b2744c;
    border-radius: 5px;
    box-sizing: border-box;
}

button#loginBtn {
    width: 100%;
    padding: 10px;
    background: #b2744c;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
