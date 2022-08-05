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