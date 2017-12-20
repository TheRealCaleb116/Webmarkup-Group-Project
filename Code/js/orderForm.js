var costs = {
    "tshirt1": 14.99,
    "tshirt2": 14.99,
    "tshirt3": 14.99,
    "tshirt4": 14.99,
    "textbook1": 14.99,
    "textbook2": 14.99,
    "textbook3": 14.99,
    "textbook4": 14.99
}

window.addEventListener("load", function () {
    var data = location.search.slice(1);

    data = data.replace(/\+/g, " ");
    data = decodeURIComponent(data);

    var merchData = data.split(/[&=]/g);

    if (merchData.length > 1) {
        var item = merchData[1].replace(/\s/g, "");
        document.getElementById(item).checked = true;
    }
    document.getElementById("checkB1").style.visibility = "hidden";
    document.getElementById("checkB2").style.visibility = "hidden";
    document.getElementById("checkB3").style.visibility = "hidden";
    document.getElementById("checkB4").style.visibility = "hidden";
    document.getElementById("checkT1").style.visibility = "hidden";
    document.getElementById("checkT2").style.visibility = "hidden";
    document.getElementById("checkT3").style.visibility = "hidden";
    document.getElementById("checkT4").style.visibility = "hidden";

    document.getElementById("textbook1").onchange = change;
    document.getElementById("textbook2").onchange = change;
    document.getElementById("textbook3").onchange = change;
    document.getElementById("textbook4").onchange = change;
    document.getElementById("tshirt1").onchange = change;
    document.getElementById("tshirt2").onchange = change;
    document.getElementById("tshirt3").onchange = change;
    document.getElementById("tshirt4").onchange = change;
    
    document.getElementById("tb1Qty").onchange = calc;
    document.getElementById("tb2Qty").onchange = calc;
    document.getElementById("tb3Qty").onchange = calc;
    document.getElementById("tb4Qty").onchange = calc;
    document.getElementById("ts1Qty").onchange = calc;
    document.getElementById("ts2Qty").onchange = calc;
    document.getElementById("ts3Qty").onchange = calc;
    document.getElementById("ts4Qty").onchange = calc;

    change();

    calc();

});

function change() {
    calc();
    if (document.getElementById("textbook1").checked) {
        document.getElementById("checkB1").style.visibility = "visible";
    } else {
        document.getElementById("checkB1").style.visibility = "hidden";
    }

    if (document.getElementById("textbook2").checked) {
        document.getElementById("checkB2").style.visibility = "visible";
    } else {
        document.getElementById("checkB2").style.visibility = "hidden";
    }

    if (document.getElementById("textbook3").checked) {
        document.getElementById("checkB3").style.visibility = "visible";
    } else {
        document.getElementById("checkB3").style.visibility = "hidden";
    }

    if (document.getElementById("textbook4").checked) {
        document.getElementById("checkB4").style.visibility = "visible";
    } else {
        document.getElementById("checkB4").style.visibility = "hidden";
    }

    if (document.getElementById("tshirt1").checked) {
        document.getElementById("checkT1").style.visibility = "visible";
    } else {
        document.getElementById("checkT1").style.visibility = "hidden";
    }

    if (document.getElementById("tshirt2").checked) {
        document.getElementById("checkT2").style.visibility = "visible";
    } else {
        document.getElementById("checkT2").style.visibility = "hidden";
    }

    if (document.getElementById("tshirt3").checked) {
        document.getElementById("checkT3").style.visibility = "visible";
    } else {
        document.getElementById("checkT3").style.visibility = "hidden";
    }

    if (document.getElementById("tshirt4").checked) {
        document.getElementById("checkT4").style.visibility = "visible";
    } else {
        document.getElementById("checkT4").style.visibility = "hidden";
    }

}

function calc() {
    var subTotal = 0;
    var items = 0;
    if (document.getElementById("textbook1").checked) {
        subTotal += document.getElementById("tb1Qty").value * costs['textbook1'];
        items += document.getElementById("tb1Qty").value*1;
    }

    if (document.getElementById("textbook2").checked) {
        subTotal += document.getElementById("tb2Qty").value * costs['textbook2'];
        items += document.getElementById("tb2Qty").value*1;
    }

    if (document.getElementById("textbook3").checked) {
        subTotal += document.getElementById("tb3Qty").value * costs['textbook3'];
        items += document.getElementById("tb3Qty").value*1;
    }

    if (document.getElementById("textbook4").checked) {
        subTotal += document.getElementById("tb4Qty").value * costs['textbook4'];
        items += document.getElementById("tb4Qty").value*1;
    }

    if (document.getElementById("tshirt1").checked) {
        subTotal += document.getElementById("ts1Qty").value * costs['tshirt1'];
        items += document.getElementById("ts1Qty").value*1;
    }

    if (document.getElementById("tshirt2").checked) {
        subTotal += document.getElementById("ts2Qty").value * costs['tshirt2'];
        items += document.getElementById("ts2Qty").value*1;
    }

    if (document.getElementById("tshirt3").checked) {
        subTotal += document.getElementById("ts3Qty").value * costs['tshirt3'];
        items += document.getElementById("ts3Qty").value*1;
    }

    if (document.getElementById("tshirt4").checked) {
        subTotal += document.getElementById("ts4Qty").value * costs['tshirt4'];
        items += document.getElementById("ts4Qty").value*1;
    }
    
    document.getElementById("price").value = subTotal.toFixed(2);
    var shipping = 0;
    if (items >= 1 && items <= 5) {
        shipping = 5;
    } else if (items > 5 && items <= 10) {
        shipping = 7.50;
    } else if (items > 10) {
        shipping = 10;
    }
    
    document.getElementById("shipping").value = shipping;
    
    var tax = (subTotal * .085);
    
    document.getElementById("tax").value = tax.toFixed(2);
    
    document.getElementById("total").value = (subTotal + shipping + tax).toFixed(2);
}
