const form = document.getElementById('form')

//fname

let first = document.getElementById('firstname')
let nameError1 = document.getElementById('error-1')

function fname(){
    if(first.value===''){
        nameError1.innerHTML="firstname cannot be empty";
        nameError1.style.color="red"
        first.style.border="2px solid red"
        return false;
    }
    else if(first.value.length<8){
        nameError1.innerHTML="first name should be 8 character"
        nameError1.style.color="red"
        first.style.border="2px solid red"
        return false;
    }

    else{
        nameError1.innerHTML=""
        first.style.border="2px solid green"
        return true;
    }

}
let last = document.getElementById('lastname')
let nameError2 = document.getElementById('error-2')

function lname(){
    if(last.value===''){
        nameError2.innerHTML="lastname cannot be empty";
        nameError2.style.color="red"
        last.style.border="2px solid red"
        return false;
    }
    else if(last.value.length>8){
        nameError2.innerHTML="last name should be 8 character"
        nameError2.style.color="red"
        last.style.border="2px solid red"
        return false;
    }

    else{
        nameError2.innerHTML=""
        last.style.border="2px solid green"
        return true;
    }

}
//mobile
let mobile = document.getElementById("mobile")
let mobileError3 = document.getElementById("error-3")
function mnum(){
    if(mobile.value===''){
        mobileError3.innerHTML="mobile number is requried"
        mobileError3.style.color="red"
        mobile.style.border="2px solid red"
    }
    else if(mobile.value.length>10){
        mobileError3.innerHTML="mobile number is 10 characters"
        mobileError3.style.color="red"
        mobile.style.border="2px solid red"
    }
    else{
        mobileError3.innerHTML=""
        
        mobile.style.border="2px solid green"
    }
}
//email
let mail = document.getElementById("email");
let mailError = document.getElementById("error-4");

function gmail() {
    if (mail.value === "") {
        mailError.innerHTML = "Email is required"
        mailError.style.color = "red";
        mail.style.border = "2px solid red";
        return false;
    }
    else if (!mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailError.innerHTML = "Enter a valid email";
        mailError.style.color = "red";
        mail.style.border = "2px solid red";
        return false;

    }
    else {
        mailError.innerHTML = "";
        mail.style.border = "2px solid #00df00";
        return true;
    }
}
//address

let address = document.getElementById("address");
let addError = document.getElementById("error-5");

function val_address() {
    if (address.value === "") {
        addError.innerHTML = "Address is required"
        addError.style.color = "red";
        address.style.border = "2px solid red";
        return false;

    }
    else {
        addError.innerHTML = "";
        address.style.border = "2px solid #00df00";
        return true;
    }
}

//state
let state = document.getElementById("state");
let stateError = document.getElementById("error-6");


function val_state(){
    if(state.value==='select'){
        stateError.innerHTML="state is requried.";
        stateError.style.color="red";
        state.style.border="2px solid red";
        return false;

    }
    else{
        stateError.innerHTML='';
        state.style.border="2px solid green";
        return true;
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    output();
});
function output(){
    firstname = first.value.trim();
    lastname = last.value.trim();
    phone = mobile.value.trim();
    emailid = mail.value.trim();
    adrs = address.value.trim();
    state = state.value.trim();

    document.write("Name: " + firstname + " " + lastname + "<br>");
document.write("Mobile: " + phone + "<br>");
document.write("Email: " + emailid + "<br>");
document.write("Address: " + adrs + "<br>");
document.write("State: " + state + "<br>");
    
    
}
