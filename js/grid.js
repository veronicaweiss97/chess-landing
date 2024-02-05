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

if (isDesktop()) {
    gridContainer.appendChild(gridItem1)
    gridContainer.appendChild(gridItem2)
    gridContainer.appendChild(gridItem3)
    gridContainer.appendChild(gridItem4)
    gridContainer.appendChild(gridItem5)
    gridContainer.appendChild(gridItem6)
    gridContainer.appendChild(gridItem7)
}

function isDesktop() {
    return window.innerWidth > 767
}
