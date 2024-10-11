function openNav() {
    document.getElementById("overlay-nav").classList.add("active");
  }
  
  function closeNav() {
    document.getElementById("overlay-nav").classList.remove("active");
  }
  
// Validtion Code for Inputs
var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var mobile  = document.forms['form']['mobile'];
var contactChoices = document.forms['form']['choice1'];
var message = document.forms['form']['message'];

var username_error = document.getElementById('username-error');
var email_error = document.getElementById('email-error');
var mobile_error = document.getElementById('mobile-error');
var contact_error = document.getElementById('contact-error');
var messageError = document.getElementById('msg-error');

username.addEventListener('textInput',username_Verify);
email.addEventListener('textInput',email_Verify);
mobile.addEventListener('textInput',mobile_Verify);
contactChoices.addEventListener('change', contact_Verify);
message.addEventListener('textInput', message_Verify);


function validated(){
    if (!isAlphabetic(username.value.trim())){
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if (!isNumeric (mobile.value)|| mobile.value.length < 11){
        mobile.style.border = "1px solid red";
        mobile_error.style.display = "block";
        mobile.focus();
        return false;
    }

    if (!isValidEmail(email.value)){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (!isCheckboxChecked()) {
        contact_error.style.display = "block";
        return false;
    }

    if (!isMessageValid()) {
        message.style.border = "1px solid red";
        messageError.style.display = "block";
        message.focus();
        return false;
    }

    alert("Your message has been sent.");
}

function isAlphabetic(value){
    return /^[a-zA-Z]+$/.test(value)
}

function isNumeric(value){
    return /^\d+$/.test(value);
}

function isValidEmail(value) {
    // Regular expression for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isCheckboxChecked() {
    return (
        contactChoices.checked ||
        document.forms['form']['choice2'].checked ||
        document.forms['form']['choice3'].checked ||
        document.forms['form']['choice4'].checked
    );
}

function isMessageValid() {
    return message.value.trim() !== '';
}

function username_Verify(){
    if(isAlphabetic(username.value.trim())){
        username.style.border = "1px solid black";
        username_error.style.display = "none";
        return true;
    }
}

function mobile_Verify(){
    if(isNumeric(mobile.value) && mobile.value.length >= 11){
        mobile.style.border = "1px solid black";
        mobile_error.style.display = "none";
        return true;
    }
}

function email_Verify(){
    if(isValidEmail(email.value)){
        email.style.border = "1px solid black";
        email_error.style.display = "none";
        return true;
    }
}

function contact_Verify() {
    if (isCheckboxChecked()) {
        contact_error.style.display = "none";
        return true;
    }
}

function message_Verify() {
    if (isMessageValid()) {
        message.style.border = "1px solid black";
        messageError.style.display = "none";
        return true;
    }
}
