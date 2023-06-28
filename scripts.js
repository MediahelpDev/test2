
//jQuery
$.loggaInPaServern = function(){
    var user = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    $.ajax({
        type: "POST",
        url: 'checkLogin.php',
        data: {"user":user, "pw":pw },
        success: function(data){
            alert(data);
            if(data == "true"){
                $("#username").hide();
                $("#password").hide();
                sessionStorage.setItem("username",user);
            }
            else{
                sessionStorage.removeItem("username");

            }
            
            
            
       
        }

    });

}


/*
Kontrollera om personen är inloggad. 
*/
function isLoggedIn(){
    var inloggadNamn = sessionStorage.getItem("username");
    if(inloggadNamn == null){
        document.getElementById("infoBox").innerHTML = "Du verkar inte vara inloggad";
        
        document.getElementById("password").style.display = "block";
        document.getElementById("username").style.display = "block";
        document.getElementById("username").focus();
    }
    else
    {
        document.getElementById("infoBox").innerHTML = "Välkommen " + inloggadNamn.valueOf();
        document.getElementById("password").style.display = "none";
        document.getElementById("username").style.display = "none";
        document.getElementById("loginButton").style.display = "none";
    }

}

function login(){
    var result = $.loggaInPaServern();

    if(result)
        alert("inloggad");
    /*
    var loggedIn = false;
    var user = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    if(user = "patrik"){
        if(pw == "123"){
            loggedIn = true;
        }
    }

    if(loggedIn){
        sessionStorage.setItem("username",user);
        isLoggedIn();
    }
    else
        alert("Tyvärr fel användarnamn eller lösenord");
    */
}






function klocka(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("klocka").innerHTML = h + ":" + m + ":" + s;
}

setInterval(klocka, 1000);
