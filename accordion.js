// Selectors.
const accordions = document.querySelectorAll('#faqs .questions .sb-accordion-item')

for (const accordion of accordions) {
    accordion.addEventListener('click', function () {
        
        const itemToShow = this.children[1]

        for (let i = 0; i < accordions.length; i++) {
            const item = accordions[i];
            item.classList.remove('active')
            item.children[1].style.maxHeight = null
        }

        this.classList.add('active')

        if (itemToShow.style.maxHeight != 0) {
            itemToShow.style.maxHeight = null
        } else {
            itemToShow.style.maxHeight = itemToShow.scrollHeight + 'px'
        }

    })
}