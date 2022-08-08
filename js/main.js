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


function CopyToClipboard(text) {
    console.log('i was clicked and got ' + text)

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
    const alert = document.getElementById('alert').style.display = "inline";
    setTimeout(function () {
        document.getElementById('alert').style.display = "none";
    }, 2000);

}