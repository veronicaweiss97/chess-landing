function isInViewport(element) {
    var rect = element.getBoundingClientRect()
    var threshold = window.innerHeight * 0.1

    return (
        rect.left <= window.innerWidth &&
        rect.right >= 0 &&
        rect.top - threshold <= window.innerHeight &&
        rect.bottom + threshold >= 0
    )
}

function handleScroll() {
    var image = document.querySelector('.grid-plane')

    if (isInViewport(image)) {
        image.classList.add('in-view')
        window.removeEventListener('scroll', handleScroll)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        window.addEventListener('scroll', handleScroll)
    }, 2000)
})
