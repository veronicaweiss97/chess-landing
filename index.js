class GridItem {
    constructor(index, description, spanRows, spanCol) {
        this.index = index
        this.description = description
        this.spanRows = spanRows
        this.spanCol = spanCol
    }
    render() {
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')

        if (this.spanRows) {
            gridItem.classList.add('span-multiple-cols')
        }

        if (this.spanCol) {
            gridItem.classList.add('span-multiple-rows')
        }

        const circle = document.createElement('div')
        circle.classList.add('circle')
        circle.textContent = this.index

        const descriptionElement = document.createElement('p')

        descriptionElement.classList.add('grid-item-descr')
        descriptionElement.textContent = this.description

        gridItem.appendChild(circle)
        gridItem.appendChild(descriptionElement)

        return gridItem
    }
}

const gridContainer = document.getElementById('gridContainer')

// Creating and appending the grid items
const gridItem1 = new GridItem(
    1,
    'Строительство железнодорожной магистрали Москва-Васюки'
).render()
const gridItem2 = new GridItem(
    2,
    'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов'
).render()
const gridItem3 = new GridItem(
    3,
    'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
    false,
    true
).render()
const gridItem4 = new GridItem(4, 'Строительство дворца для турнира').render()
const gridItem5 = new GridItem(
    5,
    'Размещение гаражей для гостевого автотранспорта'
).render()
const gridItem6 = new GridItem(
    6,
    'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов'
).render()
const gridItem7 = new GridItem(
    7,
    'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
    true,
    false,
    true
).render()

gridContainer.appendChild(gridItem1)
gridContainer.appendChild(gridItem2)
gridContainer.appendChild(gridItem3)
gridContainer.appendChild(gridItem4)
gridContainer.appendChild(gridItem5)
gridContainer.appendChild(gridItem6)
gridContainer.appendChild(gridItem7)

//slider

class Slide {
    constructor(
        imageSrc = '',
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

        // Render the first set of slides
        this.slidesData.forEach((slideData) => {
            const slide = new Slide(
                slideData.imageSrc,
                slideData.title,
                slideData.description
            )
            const slideElement = slide.render()
            slidesContainer.appendChild(slideElement)
        })

        // Clone the slides for the carousel effect
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

        // Delay transition application for cloned slides
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out'
        }, 0)
    }

    showSlide() {
        const slidesContainer = document.getElementById('slidesContainer')
        const slideWidth = 33.33
        const newPosition = -this.currentSlide * slideWidth

        slidesContainer.style.transform = `translateX(${newPosition}%)`

        document.getElementById('slideIndex').textContent = `${
            (this.currentSlide % this.totalSlides) + 1
        } / ${this.totalSlides} `
    }

    nextSlide() {
        this.currentSlide++
        this.showSlide()
    }

    prevSlide() {
        this.currentSlide--
        this.showSlide()
    }

    startAutomaticSlideChange() {
        setInterval(() => this.nextSlide(), 4000) // Change slide every 3 seconds
    }
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
