var komputer = ""
function randComp() {
    let comp = document.getElementById('comp')
    var kom = ['batu','gunting','kertas']
    if(Math.floor(Math.random(kom)*kom.length) == 0) {
        comp.innerHTML = "<img src='gambar/batu.jpg' alt='batu' id='batu'>"
        komputer = "batu"
    } else if(Math.floor(Math.random(kom)*kom.length) == 1) {
        comp.innerHTML = "<img src='gambar/gunting.jpg' alt='gunting' id='gunting'>"
        komputer = "gunting"
    } else if(Math.floor(Math.random(kom)*kom.length) == 2) {
        comp.innerHTML = "<img src='gambar/kertas.jpg' alt='kertas' id='kertas'>"
        komputer = "kertas"
    }
}

function batu() {
    randComp()
    if(komputer == "batu") {
        document.getElementById('hasil').textContent = "Draw!"
        document.getElementById('you').innerHTML = "<img src='gambar/batu.jpg' alt='batu'>"
    } else if(komputer == "gunting") {
        document.getElementById('hasil').textContent = "You Win!"
        document.getElementById('you').innerHTML = "<img src='gambar/batu.jpg' alt='batu'>"
    } else if(komputer == "kertas") {
        document.getElementById('hasil').textContent = "You Lose!"
        document.getElementById('you').innerHTML = "<img src='gambar/batu.jpg' alt='batu'>"
    }
}

function gunting() {
    randComp()
    if(komputer == "batu") {
        document.getElementById('hasil').textContent = "You Lose!"
        document.getElementById('you').innerHTML = "<img src='gambar/gunting.jpg' alt='gunting'>"
    } else if(komputer == "gunting") {
        document.getElementById('hasil').textContent = "Draw!"
        document.getElementById('you').innerHTML = "<img src='gambar/gunting.jpg' alt='gunting'>"
    } else if(komputer == "kertas") {
        document.getElementById('hasil').textContent = "You Win!"
        document.getElementById('you').innerHTML = "<img src='gambar/gunting.jpg' alt='gunting'>"
    }
}

function kertas() {
    randComp()
    if(komputer == "batu") {
        document.getElementById('hasil').textContent = "You Win!"
        document.getElementById('you').innerHTML = "<img src='gambar/kertas.jpg' alt='kertas'>"
    } else if(komputer == "gunting") {
        document.getElementById('hasil').textContent = "You Lose!"
        document.getElementById('you').innerHTML = "<img src='gambar/kertas.jpg' alt='kertas'>"
    } else if(komputer == "kertas") {
        document.getElementById('hasil').textContent = "Draw!"
        document.getElementById('you').innerHTML = "<img src='gambar/kertas.jpg' alt='kertas'>"
    }
}