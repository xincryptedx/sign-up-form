var pwd = document.getElementById('pwd');
var pwdConfirm = document.getElementById('pwd-confirm');
var submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e){
    matchPwd(e)});

function matchPwd(e){
    console.log(pwd.value + " " + pwdConfirm.value);
    if (pwd.value === pwdConfirm.value) {
        console.log("Values do match!");
        pwdConfirm.setCustomValidity('');
    }
    else {
        pwdConfirm.setCustomValidity('Passwords do not match.');
        pwdConfirm.reportValidity();
        e.preventDefault();
        console.log("Values do not match!");
    }
}