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
    alert(formData = "at least this works");
    
})

window.addEventListener("load", function(){
    document.getElementById("fName").oninput = validateFName;
    document.getElementById("lName").oninput = validateLName;
    document.getElementById("add").oninput = validateAdd;
    document.getElementById("city").oninput = validateCity;
    document.getElementById("state").oninput = validateState;
    document.getElementById("zip").oninput = validateZip;
    document.getElementById("phone").oninput = validatePhone;
    document.getElementById("bDay").oninput = validateBDay;
    document.getElementById("eMail").oninput = validateEMail;
    document.getElementById("subButton").onclick = runSubmit;
    var test
    alert(test = "so does this");
})

function validateFName() {
    var firstName = document.forms.mailing.elements.fName.value;
    if (firstName.validity.valueMissing){
        firstName.setCustomValidity("Enter Your First Name");
    } else {
        fName.setCustomValidity("");
    }
}
function validateLName() {
    
}
function validateAdd() {
   var add = document.getElementById("add");
    if (add.validity.valueMissing){
        add.setCustomValidity("Enter your address");
    } else {
        add.setCustomValidity("");
    }
//    alert(add = "address");
}
function validateCity() {
    var City = document.getElementById("city");
    if (City.validity.valueMissing) {
        City.setCustomValidity("Enter a city");
    } else {
        City.setCustomValidity("");
    }
}
function validateState() 
    
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
    validateFName();
    validateLName();
    validateAdd() ;
    validateCity();
    validateState();
    validateZip() ;
    validatePhone();
    validateBDay();
    validateEMail();
}