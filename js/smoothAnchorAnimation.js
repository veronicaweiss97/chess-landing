document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.smooth-scroll-link')

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault()

            var targetId = this.getAttribute('href').substring(1)
            var targetElement = document.getElementById(targetId)

            if (targetElement) {
                var offsetTop = targetElement.offsetTop
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                })
            }
        })
    })
})
