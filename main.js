const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let targetTab = tab.dataset.tabTarget
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
            if (tab.dataset.tabTarget === targetTab) {
                tab.classList.add('active')
            }

        })
        target.classList.add('active');
    })
})

function CopyToClipboard(text, id) {
    navigator.clipboard.writeText(text);
    const alert = document.getElementById(id).style.display = "inline";

    setTimeout(function () {
        document.getElementById(id).style.display = "none";
    }, 2000);
}

function validateForm() {
    console.log("form validate");
    let name = document.forms["contactForm"]["name"];
    let email = document.forms["contactForm"]["email"];
    let message = document.forms["contactForm"]["message"];

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.value == null || email.value == null || message.value == null) {
        alert("Please fill out all fields");
        return false;
    } else if (email.value.match(validRegex)) {
        showPopup();
        setTimeout(function () {
            clearFields(name, email, message);
        }, 4000);
        return true;
    } else {
        const alert = document.getElementById("alert3").style.display = "inline";
        const border = document.getElementById("email").style.border = "1px solid #bc0000";
        setTimeout(function () {
            document.getElementById("alert3").style.display = "none";
            document.getElementById("email").style.border = "none";
        }, 3000);
        return false;
    }
}

function showPopup() {
    var popup = document.getElementById("email-popup-container");
    var button = document.getElementById("button-container-center");
    popup.style.display = "flex";
    button.style.display = "none";

    setTimeout(function () {
        popup.style.display = "none";
        button.style.display = "flex";
    }, 4000);
}

function clearFields(name, email, message) {
    name.value = "";
    email.value = "";
    message.value = "";
}