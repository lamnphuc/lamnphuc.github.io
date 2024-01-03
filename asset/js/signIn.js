function login() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
  
    if (email.trim() === '' || pwd.trim() === '') {
        alert("Hãy nhập thông tin tài khoản của bạn.");
        return;
    }
    var storedEmail = localStorage.getItem("email");
    var storedPwd = localStorage.getItem("pwd");
  
    if (email === storedEmail && pwd === storedPwd) {
        alert("Đăng nhập thành công.");
        window.location.href = "index.html";
    } else {
        alert("Thông tin đăng nhập không chính xác.");
    }
  }