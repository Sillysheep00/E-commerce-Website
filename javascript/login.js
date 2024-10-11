function openNav() {
    document.getElementById("overlay-nav").classList.add("active");
  }
  
function closeNav() {
    document.getElementById("overlay-nav").classList.remove("active");
  }

// Validtion Code for Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email-error');
var pass_error = document.getElementById('pass-error');

email.addEventListener('textInput',email_Verify);

password.addEventListener('textInput',pass_Verify);

function validated(){
    if (!isValidEmail(email.value)){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    alert("Login Successfully!");

   
}

function isValidEmail(value) {
    // Regular expression for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function email_Verify(){
    if(isValidEmail(email.value)){
        email.style.border = "1px solid black";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify(){
    if(password.value.length >=5){
        password.style.border = "1px solid black";
        pass_error.style.display = "none";
        return true;
    }
}