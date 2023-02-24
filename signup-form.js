var pwd = document.getElementById('pwd');
var pwdConfirm = document.getElementById('pwd-confirm');
var submitBtn = document.getElementById('submit-btn');
const inputs = document.querySelectorAll("input");

submitBtn.addEventListener('click', function(e){
    matchPwd(e)});

inputs.forEach(input => {
    input.addEventListener(
        "invalid",
        () => {
            input.classList.add("error");
        },
        false
    );

    input.addEventListener('blur', () => {
        if (input.checkValidity()){
            input.classList.remove("error");
        }
    });
});


function matchPwd(e){
    console.log(pwd.value + " " + pwdConfirm.value);
    if (pwd.value === pwdConfirm.value) {
        pwdConfirm.setCustomValidity('');
    }
    else {
        pwdConfirm.setCustomValidity('Passwords do not match.');
        pwdConfirm.reportValidity();
        e.preventDefault();
    }
}