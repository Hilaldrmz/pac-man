document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squeres = []

    // create board

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            square.id = i
            grid.appendChild(square)
            squeres.push(square)

            // add layout to the board
            if (layout[i] === 0) {
                squeres[i].classList.add('pac-dot')
            }
            if (layout[i] === 1) {
                squeres[i].classList.add('wall')
            }
            if (layout[i] === 2) {
                squeres[i].classList.add('ghost-lair')
            }
            if (layout[i] === 3) {
                squeres[i].classList.add('power-pellet')
            }
        }
    }

    createBoard()

    // draw pacman onto the board
    let pacmanCurrentIndex = 490
    squeres[pacmanCurrentIndex].classList.add('pac-man')

    // move pacman

    function movePacman(e) {
        squeres[pacmanCurrentIndex].classList.remove('pac-man')

        switch (e.key) {

            case 'ArrowLeft':
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squeres[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squeres[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= 1
                }
                if ((pacmanCurrentIndex - 1) === 363) {
                    pacmanCurrentIndex = 391
                }
                break

            case 'ArrowRight':
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squeres[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squeres[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += 1
                }
                if ((pacmanCurrentIndex + 1) === 392) {
                    pacmanCurrentIndex = 364
                }
                break

            case 'ArrowUp':
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squeres[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squeres[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= width
                }
                break

            case 'ArrowDown':
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squeres[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squeres[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += width
                }
                break

        }
        squeres[pacmanCurrentIndex].classList.add('pac-man')
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }

    document.addEventListener('keyup', movePacman)

    // what happens when pacman eats a pac-dot

    function pacDotEaten() {
        if (squeres[pacmanCurrentIndex].classList.contains('pac-dot')) {
            squeres[pacmanCurrentIndex].classList.remove('pac-dot')
            score++
            scoreDisplay.innerHTML = score
        }
    }

    // what happens when you eat a power-pellet

    function powerPelletEaten() {
        if (squeres[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10
            scoreDisplay.innerHTML = score

            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)

            squeres[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    // make the ghosts stop flashing
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //create ghosts using Constructors
    /* 
    Sınıfın yapıcı fonksiyonu (constructor), bir hayalet nesnesi oluşturulduğunda çağrılır. Bu yapıcı fonksiyon, üç parametre alır: className, startIndex ve speed.

    className: Hayaletin sınıf adını belirtir.
    startIndex: Hayaletin başlangıç indeksini belirtir.
    speed: Hayaletin hızını belirtir.
    Bu parametreler, hayalet nesnesinin özelliklerini (properties) oluşturur. Ayrıca, her hayalet nesnesi currentIndex, isScared ve timerId adında üç ek özellikle oluşturulur:
    
    currentIndex: Hayaletin mevcut indeksini belirtir. Başlangıçta, bu değer startIndex ile aynıdır.
    isScared: Hayaletin korkmuş olup olmadığını belirtir. Başlangıçta, bu değer false olarak ayarlanır.
    timerId: Hayaletin zamanlayıcı ID'sini belirtir. Başlangıçta, bu değer NaN (Not a Number) olarak ayarlanır. Bu, genellikle bir zamanlayıcı işlemi başlatıldığında güncellenir.*/
    class Ghost {
        constructor(className, startIndex, speed) {
            // Ghost properties
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            // Ghost current stuation
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    // all ghosts
    const ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]

    // draw ghosts onto the board
    ghosts.forEach(ghost => squeres[ghost.currentIndex].classList.add(ghost.className, 'ghost'))

    // move ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost) {
        const directions = [-1, 1, +width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {
            // if the next squere your ghost is going to go to does not have a ghost and does not have a wall
            if (
                !squeres[ghost.currentIndex + direction].classList.contains('wall') &&
                !squeres[ghost.currentIndex + direction].classList.contains('ghost')
            ) {
                squeres[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex += direction
                squeres[ghost.currentIndex].classList.add(ghost.className, 'ghost')

            }
            // else find a new direction to go in
            else direction = directions[Math.floor(Math.random() * directions.length)]

            // if the ghost is currently scared
            if (ghost.isScared) {
                squeres[ghost.currentIndex].classList.add('scared-ghost')
            }

            // if the ghost is currently scared and pacman is on it
            if (ghost.isScared && squeres[ghost.currentIndex].classList.contains('pac-man')) {
                ghost.isScared = false
                squeres[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                scoreDisplay.innerHTML = score
                squeres[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
            checkForGameOver()
        }, ghost.speed)
    }

    // check for game over
    function checkForGameOver() {
        if (squeres[pacmanCurrentIndex].classList.contains('ghost') && !squeres[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            // setTimeout(function () {
            //     alert('Game Over!')
            // }, 500)
            scoreDisplay.innerHTML = 'You LOSE!'
        }

    }
    // check for win
    function checkForWin() {
        if (score === 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            // setTimeout(function () {
            //     alert('You have WON!')
            // }, 500)
            scoreDisplay.innerHTML = ' You WIN!'
        }
    }

    document.querySelector('.refresh-btn').addEventListener('click', function() {
        window.location.reload();
    });
    
    checkForWin()
})

