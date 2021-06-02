function mudarImg01() {
    document.getElementById("mainImg").src="../img/imgs-produto/motosserra1.png"
    document.getElementById("mudarVideoYT").style.display = "none"
    document.getElementById("mudarVideo").style.display = "none"
}

function mudarImg02() {
    document.getElementById("mainImg").src="../img/imgs-produto/motosserra2.jpg"
    document.getElementById("mudarVideoYT").style.display = "none"
    document.getElementById("mudarVideo").style.display = "none"
}

function mudarImg03() {
    document.getElementById("mainImg").src="../img/imgs-produto/motosserra3.jpg"
    document.getElementById("mudarVideoYT").style.display = "none"
    document.getElementById("mudarVideo").style.display = "none"
}

function mudarVideoYT() {
    document.getElementById("mudarVideoYT").style.display = "block"
    document.getElementById("mudarVideo").style.display = "none"
    document.getElementById("mainImg").style.display = "none"
}

function mudarVideo() {
    document.getElementById("mudarVideo").style.display = "block"
    document.getElementById("mudarVideoYT").style.display = "none"
    document.getElementById("mainImg").style.display = "none"
}