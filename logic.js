// BUTTON 1

let button1 =document.getElementById('btn1')
let body = document.querySelector('body')
button1.addEventListener('click', () => {
    body.style.backgroundColor= 'grey'
     button1.style.borderRadius ='20PX'

})

// BUTTON 2

let button2 = document.getElementById('btn2')
button2.addEventListener('mousedown', () => {
    button2.style.backgroundColor = 'black'
    body.style.backgroundColor = 'blue'
    button2.style.color = 'white'
    button2.style.borderRadius ='20PX'
})

// BUTTON3

let button3 = document.getElementById('btn3')
button3.addEventListener('mouseover',()=>{
    button3.style.backgroundColor = 'grey'
    body.style.backgroundColor = 'black'
    button3.style.color = 'white'
    button3.style.borderRadius ='20PX'  
})

