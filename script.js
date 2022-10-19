function width() {
    var elements = document.getElementsByClassName("side-navbar-item");

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("active-navbar-item");
    }

    var elementsItem = document.getElementsByClassName("navbar-item-label");

    for (var i = 0; i < elementsItem.length; i++) {
        elementsItem[i].classList.toggle("active-navbar-item-label");
    }
}

function textChange() {
    document.getElementById("text-area").style.fontStyle = "italic";
}

function validate() {
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    debugger
    if(mail == "crayond" && pass == "12345") {
        window.open("/property.html");
    }else 
    alert("Your Mail ID or Your Password is invalid");
}


function showMe() {
    var cn = document.getElementById("company-name").value;
    var pn = document.getElementById("property-name").value;
    var pp = document.getElementById("payment-period").value;
    var sta = document.getElementById("status").value;

    console.log("{", "Company name:", cn, "," ,"Property name:", pn, "," ,"Payment period:", pp, "," ,"Status:", sta, "}");
}

function toggleButtonActive(obj) {
    var acc = document.getElementsByClassName('listing-button');
    for(var i = 0; i<acc.length; i++) {
      acc[i].classList.remove('listing-button-active');
    }
    obj.classList.add('listing-button-active');
  }
