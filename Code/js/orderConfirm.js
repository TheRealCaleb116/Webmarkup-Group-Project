window.addEventListener("load", function(){
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " ");
    formData = decodeURIComponent(formData);
    var orderFields = formData.split(/[&=]/g);
    var subtotal = orderFields[17];
    var tax = orderFields[21];
    var shipping = orderFields[19];
    var total = orderFields[23];
    document.forms.info.elements.date.value = dateStr;
    document.forms.info.elements.subtotal.value = formatUSCurrency(subtotal);
    document.forms.info.elements.tax.value = formatUSCurrency(tax);
    document.forms.info.elements.shipping.value = formatUSCurrency(shipping);
    document.forms.info.elements.total.value = formatUSCurrency(total);
    
})

window.addEventListener("load", function(){
    document.getElementById("fName").oninput = validateFName;
    document.getElementById("lName").oninput = validateLName;
    document.getElementById("add").oninput = validateAdd;
    document.getElementById("city").oninput = validateCity;
    document.getElementById("state").oninput = validateState;
    document.getElementById("zip").oninput = validateZip;
    document.getElementById("phone").oninput = validatePhone;
//    document.getElementById("bDay").oninput = validateBDay;
//    document.getElementById("eMail").oninput = validateEMail;
    document.getElementById("subButton").onclick = runSubmit;
})

function validateFName() {
    var firstName = document.getElementById("fName");
    
    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity("Enter Your First Name");
    } else {
        fName.setCustomValidity("");
    }
}
function validateLName() {
    var lastName = document.getElementById("lName");
    
    if (lastName.validity.valueMissing) {
        lastName.setCustomValidity("Enter Your Last Name");
    } else {
        lName.setCustomValidity("");
    }
}
function validateAdd() {
    var add = document.getElementById("add");
    var regex = /^\d+\s[A-z]+\s[A-z]+/g;
    
    if (add.validity.valueMissing) {
        add.setCustomValidity("Enter your address");
    } else if (regex.test(add.value) == false) {
              add.setCustomValidity("Enter a valid Street Address");
    } else {
        add.setCustomValidity("");
    }
}
function validateCity() {
    var City = document.getElementById("city");
    
    if (City.validity.valueMissing) {
        City.setCustomValidity("Enter a city");
    } else {
        City.setCustomValidity("");
    }
}
function validateState() {
    var State = document.getElementById("state");
    var regex = /^([A-Z]{2})$/g;
    
    if (State.validity.valueMissing) {
        State.setCustomValidity("Enter Your State");
    } else if (regex.test(State.value) == false) {
            State.setCustomValidity("Enter a two letter state (MN, AK, NY, etc.)");
            return false;
    } else {
        State.setCustomValidity("");
    }
}
function validateZip() {
    var Zip = document.getElementById("zip");
    var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    
    if (Zip.validity.valueMissing) {
        Zip.setCustomValidity("Enter Your Zip Code");
    } else if (regex.test(Zip.value) == false) {
              Zip.setCustomValidity("Enter a valid Zip Code");
    } else {
        Zip.setCustomValidity("");
    }
}
function validatePhone() {
    var Phone = document.getElementById("phone");
    var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    
    if (Phone.validity.valueMissing) {
        Phone.setCustomValidity("Enter Your Phone Number");
    } else if (regex.test(Phone.value) == false) {
        Phone.setCustomValidity("Enter a valid Phone Number")
    } else {
        Phone.setCustomValidity("");
    }
}
//function validateBDay() {
//    var BDay = document.getElementById("bDay");
//    var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
//    
//    if (BDay.validity.valueMissing) {
//        BDay.setCustomValidity("Enter Your Birth Date");
//    } else if (regex.test(BDay.value) == false) {
//        BDay.setCustomValidity("Enter a valid Birth Date")      
//    } else {
//        BDay.setCustomValidity("");
//    }
//}
//function validateEMail() {
//        var EMail = document.getElementById("eMail");
//    
//    if (EMail.validity.valueMissing) {
//        EMail.setCustomValidity("Enter Your E-Mail");
//    } else {
//        EMail.setCustomValidity("");
//    }
//}

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

function formatUSCurrency(val){
   
//    return val.toFixed(2);
    
    var formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' , minimumFractionDigits: 2});
    formatter.format(val);
    return val;
    
    
//    return val.toLocaleString("en-US", { style: 'currency', currency: 'USD' });
}