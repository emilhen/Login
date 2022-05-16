<?php
    session_start();
    if(isset($_SESSION['user_id'])){
        header('Location: /Login');
    }
    require 'database.php';

    if(!empty($_POST['email']) && !empty($_POST['password'])){
        $records = $conn->prepare('SELECT id, email, password FROM users WHERE email=:email');
        $records->bindParam(':email', $_POST['email']);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $message = "";

        if(count($results)>0 && password_verify($_POST['password'], $results['password'])){
            $_SESSION['user_id'] = $results['id'];
            header('Location: /Login');
        }else{
            $message = "Sorry, those credentials do not match";
        }
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Login</title>
</head>
<body>
    <?php require'partials/header.php' ?>
    <h1>Login</h1>
    <span>or <a href="signup.php">Sign up</a></span>

    <?php if(!empty($message)): ?>
        <p><?php $message ?></p>
        <?php endif; ?>
    <form action="login.php" method="post" id="logInForm">
        <input type="email" name="email" placeholder="Enter your email">
        <input type="password" name="password" placeholder="Enter your password">
        <input type="submit" value="Send">
    </form>

<script src="assets/js/jquery.validate.js"></script>
<script src="assets/js/jquery.validate.min.js"></script>
<script src="assets/js/validation.js"></script>
</body>
</html>