let currentSlide = 0
let totalSlides

function showSlide(index) {
    const slidesContainer = document.querySelector('.mobile-slider')
    const slideWidth = 104
    const newPosition = -currentSlide * slideWidth

    slidesContainer.style.transform = `translateX(${newPosition}%)`

    updateBulletStyles(index)
    updateControls(index)
}

function nextSlideMobile() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++
        showSlide(currentSlide)
    }
}

function prevSlideMobile() {
    if (currentSlide > 0) {
        currentSlide--
        showSlide(currentSlide)
    }
}

function updateBulletStyles(index) {
    const bullets = document.querySelectorAll('.bullet')
    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === index)
    })
}

function updateControls(index) {
    const nextButton = document.querySelector('.next')
    const prevButton = document.querySelector('.prev')
    prevButton.disabled = index === 0
    nextButton.disabled = index === totalSlides - 1
    nextButton.style.backgroundColor = index === totalSlides - 1 ? 'grey' : ''
    prevButton.style.backgroundColor = index === 0 ? 'grey' : ''
}

const bulletsContainer = document.querySelector('.bullets')
totalSlides = document.querySelectorAll('.grid-item').length

for (let i = 0; i < totalSlides; i++) {
    const bullet = document.createElement('div')
    bullet.classList.add('bullet')
    bullet.addEventListener('click', () => showSlide(i))
    bulletsContainer.appendChild(bullet)
}

showSlide(currentSlide)
