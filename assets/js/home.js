let bigTitle = document.getElementById('big-title-id')
let hoverShowImg = document.getElementById('hover-show-img')

let cursorImg = document.createElement('img')

cursorImg.setAttribute('src', 'assets/images/myPic.jpg')




hoverShowImg.addEventListener('mousemove', (e) => {

    cursorImg.style = `transition:opacity 0.5s ease-in-out;position: absolute; left: ${e.pageX}px ;top: ${e.pageY}px;width:300px ;transform: translate(-0%,-50%);border-radius:15px `


})

hoverShowImg.addEventListener('mouseenter', (e) => {
    bigTitle.appendChild(cursorImg)
    cursorImg.style = 'opacity:0;'





})

hoverShowImg.addEventListener('mouseleave', (e) => {

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