function register() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var tel = document.getElementById("tel").value;
    var storedEmail = localStorage.getItem("email");
    var storedPwd = localStorage.getItem("pwd");

    if (first.trim() === '' || last.trim() === '' || email.trim() === '' || pwd.trim() === '' || tel.trim() === '') {
        alert("Hãy nhập thông tin tài khoản của bạn.");
        return;
    }
    if (email === storedEmail) {
        alert("Email đã được đăng ký.");
        return;
    } else {
        saveUserDataLocally(first, last, email, pwd, tel);
    }
}

function saveUserDataLocally(first, last, email, pwd, tel) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("first", first);
        localStorage.setItem("last", last);
        localStorage.setItem("email", email);
        localStorage.setItem("pwd", pwd);
        localStorage.setItem("tel", tel);
        showModal();
    } else {
        alert("Trình duyệt của bạn không hỗ trợ local storage. Vui lòng nâng cấp trình duyệt.");
    }
}

function showModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

function hideModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
}