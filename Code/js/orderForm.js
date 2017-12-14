window.addEventListener("load", function(){
    var data = location.search.slice(1);

    data = data.replace(/\+/g, " ");
    data = decodeURIComponent(data);

    var merchData = data.split(/[&=]/g);
    
    var costs = {
        "tshirt1": 14.99,
        "tshirt2": 14.99,
        "tshirt3": 14.99,
        "textbook1": 14.99,
        "textbook2": 14.99,
        "textbook3": 14.99
    }
    
    if(merchData.length > 1) {
        var item = merchData[1].replace(/\s/g, "");
        document.getElementById("merch").value = item;
    }
    document.getElementById("merch").onchange = function() {
        var index = this.selectedIndex;
        var inputText = this.children[index].innerHTML.trim();
        window.alert(inputText);
    };
});