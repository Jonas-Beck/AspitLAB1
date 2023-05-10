// CLient Carousel 
// Need ID Clients-carousel on div with carousel class to work
const clientCarousel = document.querySelector("#clients-carousel")

let items = clientCarousel.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4 // Max number of slides
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// CLient Carousel 
// Need ID Clients-carousel on div with carousel class to work
const screenshotCarousel = document.querySelector("#screenshot-carousel")

let items1 = screenshotCarousel.querySelectorAll('.carousel .carousel-item')

items1.forEach((el) => {
    const minPerSlide = 5 // Max number of slides
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
