class Slide {
    constructor(
        imageSrc = './Assets/Images/man-with-chess.png',
        title,
        description = 'Чемпион мира по шахматам'
    ) {
        this.imageSrc = imageSrc
        this.title = title
        this.description = description
    }

    render() {
        const slideElement = document.createElement('div')
        slideElement.classList.add('slide')

        slideElement.innerHTML = `
        <img src="${this.imageSrc}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <button>Подробнее</button>
      `

        return slideElement
    }
}

class Slider {
    constructor(containerId, slidesData) {
        this.container = document.getElementById(containerId)
        this.slidesData = slidesData
        this.currentSlide = 0
        this.totalSlides = slidesData.length

        this.renderSlides()
        this.showSlide()
        this.startAutomaticSlideChange()
    }

    renderSlides() {
        const slidesContainer = document.getElementById('slidesContainer')

        this.slidesData.forEach((slideData) => {
            const slide = new Slide(
                slideData.imageSrc,
                slideData.title,
                slideData.description
            )
            const slideElement = slide.render()
            slidesContainer.appendChild(slideElement)
        })

        for (let i = 0; i < 2; i++) {
            this.slidesData.forEach((slideData) => {
                const slide = new Slide(
                    slideData.imageSrc,
                    slideData.title,
                    slideData.description
                )
                const slideElement = slide.render()
                slidesContainer.appendChild(slideElement.cloneNode(true))
            })
        }

        setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out'
        }, 0)
    }

    showSlide() {
        const slidesContainer = document.getElementById('slidesContainer')
        const slideWidth = isDesktop() ? 33.33 : 100
        const newPosition = -this.currentSlide * slideWidth

        slidesContainer.style.transform = `translateX(${newPosition}%)`

        if (isDesktop()) {
            document.getElementById('slideIndex').textContent = `${
                (this.currentSlide % this.totalSlides) + 1
            } / ${this.totalSlides} `
        } else {
            document.getElementById('slideIndexMobile').textContent = `${
                (this.currentSlide % this.totalSlides) + 1
            } / ${this.totalSlides} `
        }
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides
        this.showSlide()
    }

    prevSlide() {
        this.currentSlide =
            (this.currentSlide - 1 + this.totalSlides) % this.totalSlides
        this.showSlide()
    }

    startAutomaticSlideChange() {
        setInterval(() => this.nextSlide(), 4000)
    }
}

function isDesktop() {
    return window.innerWidth > 767
}

const slidesData = [
    {
        title: 'Хозе-Рауль Капабланка',
    },
    {
        title: 'Эммануил Ласкер',
    },
    {
        title: 'Александр Алехин',
    },
    {
        title: 'Арон Нимцович',
    },
    {
        title: 'Рихард Рети',
    },
    {
        title: 'Остап Бендер',
        description: 'Гроссмейстер',
    },
]

const slider = new Slider('sliderContainer', slidesData)

function nextSlide() {
    slider.nextSlide()
}

function prevSlide() {
    slider.prevSlide()
}
