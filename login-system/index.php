<!DOCTYPE html>
<html>
<head>
	<title>LamNP - Đăng Nhập</title>
	<link
      href="https://fonts.cdnfonts.com/css/sf-pro-display"
      rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <form action="login.php" method="post">
     	<h2>Đăng nhập vào LamNP Store</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<input type="text" name="uname" placeholder="Tên người dùng"><br>
     	<input type="password" name="password" placeholder="Mật Khẩu"><br>

     	<button type="submit">Đăng nhập</button>
          <a href="signup.php" class="ca">Tạo tài khoản</a>
     </form>
</body>
</html>