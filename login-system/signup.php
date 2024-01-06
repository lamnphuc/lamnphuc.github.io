<!DOCTYPE html>
<html>
<head>
	<title>LamNP - Đăng ký</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <form action="signup-check.php" method="post">
     	<h2>Đăng ký LamID</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>

          <label>Họ và tên</label>
          <?php if (isset($_GET['name'])) { ?>
               <input type="text" 
                      name="name" 
                      placeholder="Tên"
                      value="<?php echo $_GET['name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="name" 
                      placeholder="Tên"><br>
          <?php }?>

          <label>Tên người dùng</label>
          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" 
                      name="uname" 
                      placeholder="Tên người dùng"
                      value="<?php echo $_GET['uname']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="uname" 
                      placeholder="Tên người dùng"><br>
          <?php }?>


     	<label>Mật khẩu</label>
     	<input type="password" 
                 name="password" 
                 placeholder="Mật khẩu"><br>

          <label>Xác nhận mật khẩu</label>
          <input type="password" 
                 name="re_password" 
                 placeholder="Xác nhận mật khẩu"><br>

     	<button type="submit">Tiếp tục</button>
          <a href="index.php" class="ca">Đăng nhập</a>
     </form>
</body>
</html>