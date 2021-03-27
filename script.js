let bigTitle = document.getElementById('big-title-id')

let cursorImg = document.createElement('img')

cursorImg.setAttribute('src', 'image.jpg')




bigTitle.addEventListener('mousemove', (e) => {
    console.log(e)
    cursorImg.style = `transition:opacity 0.5s ease-in-out;position: absolute; left: ${e.pageX}px ;top: ${e.pageY}px;width:400px ;transform: translate(-100%,-50%);border-radius:15px `


})

bigTitle.addEventListener('mouseenter', (e) => {
    bigTitle.appendChild(cursorImg)
    cursorImg.style = 'opacity:0;'




})

bigTitle.addEventListener('mouseleave', (e) => {

    let elem = new Promise((res, rej) => {
        cursorImg.style.opacity = 0
        setTimeout(() => {
            res()
        }, 500)

    })
    elem.then(() => {
        cursorImg.remove()
    })

})