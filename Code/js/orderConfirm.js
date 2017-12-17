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