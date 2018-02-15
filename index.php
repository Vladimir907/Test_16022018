<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Login</title>
	<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="/js/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="/js/validator.js"></script>
</head>
<body>
	<div class="container">
		<div class="wrap_form">
			<div class="title">Login</div>
			<form id="form_login" class="form_login" action="welcom.php" method="post">

				<div class="fline flogin">
					<div class="iline">
						<span class="error">Login can not be empty!</span>
					</div>
					<input type="text" name="login" class="fld" placeholder="Login" />
				</div>

				<div class="fline fpass">
					<div class="iline">
						<span class="error">Password can not be empty!</span>
					</div>
					<input type="text" name="password" class="fld" placeholder="Password" />
				</div>

				<div class="wrap_btn">
					<input type="submit" class="btn" value="Login">
				</div>

				<div class="wrap_forgot">
					<a href="#" class="forgot">Forgot password?</a>
				</div>				
			</form>
		</div>
	</div>
	<script type="text/javascript" src="/js/script.js"></script>
</body>
</html>