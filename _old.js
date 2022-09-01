function changeColorOnScroll() {
    const navbar = document.querySelector('.nav-fixed');
    window.onscroll = () => {
        if(window.scrollY > 100) {
            navbar.classList.add('nav-active');
        }else {
            navbar.classList.remove('nav-active');
        }
    };
}
changeColorOnScroll()

document.getElementById("myForm").addEventListener("submit", validForm);
      
    function validForm(e) {
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let telephone = document.getElementById("number");
        let email = document.getElementById("email");
  
        let myRegex = /^[a-zA-Z]+$/;
        let myRegexNumb = /^[.0-9 ]+$/;
        let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
        if (nom.value === "") {
            errorName.innerHTML = "Saisie ton Prenom";
            errorName.style.color = " red";
            nom.style.borderColor = "red";
            e.preventDefault();
        } 
        else if (!myRegex.test(nom.value)) {
            errorName.innerHTML = "Pas de chiffre dans ton prenom!!";
            errorName.style.color = "red";
            nom.style.borderColor = "red";
            e.preventDefault();
        } 
        else {
            errorName.innerHTML = "Bravo!!";
            errorName.style.color = "green";
            nom.style.borderColor = "green";
        }
        if (prenom.value === "") {
            errorFirstName.innerHTML = "Saisie ton Nom";
            errorFirstName.style.color = " red";
            prenom.style.borderColor = "red";
            e.preventDefault();
        } 
        else if (!myRegex.test(prenom.value)) {
            errorFirstName.innerHTML = "Pas de chiffre dans ton nom!!";
            errorFirstName.style.color = "red";
            prenom.style.borderColor = "red";
            e.preventDefault();
        }   
        else {
            errorFirstName.innerHTML = "Bravo!!";
            errorFirstName.style.color = "green";
            prenom.style.borderColor = "green";
        }
        if (telephone.value === "") {
            errorTel.innerHTML = "Saisie ton numero de tel";
            errorTel.style.color = " red";
            telephone.style.borderColor = "red";
            e.preventDefault();
        } 
        else if (!myRegexNumb.test(telephone.value)) {
            errorTel.innerHTML = "Pas de lettre dans ton 06!!";
            errorTel.style.color = "red";
            telephone.style.borderColor = "red";
            e.preventDefault();
        } 
        else {
            errorTel.innerHTML = "Bravo!!";
            errorTel.style.color = "green";
            telephone.style.borderColor = "green";
        }
        if (email.value === "") {
            errorEmail.innerHTML = "Saisie ton e-mail";
            errorEmail.style.color = " red";
            email.style.borderColor = "red";
            e.preventDefault();
        } 
        else if (!myRegexMail.test(email.value)) {
            errorEmail.innerHTML = "e-mail non valide";
            errorEmail.style.color = "red";
            email.style.borderColor = "red";
            e.preventDefault();
        } 
        else {
            errorEmail.innerHTML = "Bravo!!";
            errorEmail.style.color = "green";
            email.style.borderColor = "green";
        }
    }
verifictionPath();