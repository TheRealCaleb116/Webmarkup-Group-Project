window.addEventListener("load", function(){
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " ");
    formData = decodeURIComponent(formData);
    var orderFields = formData.split(/[&=]/g);
    document.forms.info.elements.date.value = "Today"
    document.forms.info.elements.subtotal.value = orderFields[33];
    document.forms.info.elements.tax.value = orderFields[37];
    document.forms.info.elements.shipping.value = orderFields[35];
    document.forms.info.elements.total.value = orderFields[39];
    
})

window.addEventListener("load", function(){
    document.getElementById("firstname").oninput = validateFName;
    document.getElementById("lastname").oninput = validateLName;
    document.getElementById("add").oninput = validateAdd;
    document.getElementById("city").oninput = validateCity;
    document.getElementById("state").oninput = validateState;
    document.getElementById("zip").oninput = validateZip;
    document.getElementById("phone").oninput = validatePhone;
    document.getElementById("bday").oninput = validateBDay;
    document.getElementById("email").oninput = validateEMail;
    document.getElementById("subButton").onclick = runSubmit;
})

function validateFName() {
    var fName = document.forms.mailing.elements.value;
    if (fName.validity.valueMissing){
        fName.setCustomValidity("Enter Your First Name");
    } else {
        fName.setCustomValidity("");
}
function validateLName() {
    
}
function validateAdd() {
   var add = document.forms.mailing.elements.value;
    if (add.validity.valueMissing){
        add.setCustomValidity("Enter your address");
    } else {
        add.setCustomValidity("");
    }
}
function validateCity() {
    
}
function validateState() {
    
}
function validateZip() {
    
}
function validatePhone() {
    
}
function validateBDay() {
    
}
function validateEMail() {
    
}

function runSubmit() {
    
}