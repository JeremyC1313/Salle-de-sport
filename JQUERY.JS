// Debut de Code en Jquery pour le changement de couleur de la navbar

$(document).ready(function () {
    $(this).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
            $(".nav-active").css("background", "#6c757d");
        } else {
            $(".nav-active").css("background", "");
        }
    });
});

// Fin de Code en Jquery pour le changement de couleur de la navbar


// Debut du formulaire en Jquery 

let pathArr =location.pathname.split("/");
if(pathArr.includes('contact.html')){
    $("#myForm").on("submit", validForm);
    function validForm(e){
        let myRegex = (/^[a-zA-Z]+$/);
        let myRegexNumb = (/^[.0-9 ]+$/);
        let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if ($("#nom").val() === "") {
            $('#errorName').html("Saisie ton Prenom");
            $('#errorName').cs('color', 'red');
            $("#nom").css("border", "solid 1px red");
            e.preventDefault();
        }
        else if (!myRegex.test($("#nom").val())) {
            $('#errorName').html("Pas de chiffre dans ton prenom!!");
            $('#errorName').css("color","red");
            $('nom').css("border", "solid 1px red");
            e.preventDefault();
        }
        else {
            $('#errorName').html("Bravo!!");
            $('#errorName').css("color", "green");
            $("#nom").css("border", "solid 1px green");
        }
        if ($("#prenom").val() === "") {
            $("#errorFirstName").html("Saisie ton Nom");
            $("#errorFirstName").css("color", "red");
            $("#prenom").css("border", "solid 1px red");
            e.preventDefault();
        }
        else if (!myRegex.test($("#prenom").val())) {
            $("#errorFirstName").html("Pas de chiffre dans ton nom!!");
            $("#errorFirstName").css("color", "red");
            $("#prenom").css("border", "solid 1px red");
            e.preventDefault();
        }
        else {
            $("#errorFirstName").html("Bravo!!");
            $("#errorFirstName").css("color", "green");
            $("#prenom").css("border", "solid 1px green");
        }
        if ($("#number").val() === "") {
            $("#errorTel").html("Saisie ton numero de tel");
            $("#errorTel").css("color", "red");
            $("#number").css("border","solid 1px red");
            e.preventDefault();
        }
        else if (!myRegexNumb.test($("#telephone").val())) {
            $("#errorTel").html("Pas de lettre dans ton 06!!");
            $("#errorTel").css("color", "red");
            $("#number").css("border","solid 1px red");
            e.preventDefault();
        }
        else {
            $("#errorTel").html("Bravo!!");
            $("#errorTel").css("color", "green");
            $("#number").css("border","solid 1px green");
        }
        if ($("#email").val() === "") {
            $("#errorEmail").html("Saisie ton e-mail");
            $("#errorEmail").css("color", " red");
            $("#email").css("border", "solid 1px red");
            e.preventDefault();
        }
        else if (!myRegexMail.test($("#email").val())) {
            $("#errorEmail").html("e-mail non valide");
            $("#errorEmail").css("color", " red");
            $("#email").css("border", "solid 1px red");
            e.preventDefault();
        }
        else {
            $("#errorEmail").html("Bravo!!");
            $("#errorEmail").css("color", " green");
            $("#email").css("border", "solid 1px green");
        }
    }
}

// Fin du formulaire en Jquery 
