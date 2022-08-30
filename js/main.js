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
        target.classList.add('active')
    })
})

function CopyToClipboard(text, id) {
    /* Copy the text inside the text field */
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

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.value == null || email.value == null || message.value == null) {
        alert("Please fill out all fields");
        return false;
    } else if (email.value.match(validRegex)) {
        name.value = "";
        email.value = "";
        message.value = "";
        showPopup();
    } else {
        const alert = document.getElementById("alert3").style.display = "inline";
        setTimeout(function () {
            document.getElementById("alert3").style.display = "none";
        }, 3000);
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
    }, 2000);
}