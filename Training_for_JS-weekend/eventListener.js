

let myDiv = document.getElementById('myDiv')

//Click
// myDiv.addEventListener('click', function() {
//     alert('Clicked')
// })

// Doubel Click
// myDiv.addEventListener('dblclick', ()=> {
//     alert('Double Clicked')
// })

// mouseover
// myDiv.addEventListener('mouseover', ()=> {
//     alert('Mouse over')
// })

// //mouseout
// myDiv.addEventListener('mouseout', ()=> {
//     alert('Mouse out')
// })

// //mouseenter
myDiv.addEventListener('mouseenter', ()=> {
    myDiv.innerText = 'mouse is entering....'
})

//mouseleave
myDiv.addEventListener('mouseleave', ()=> {
    myDiv.innerText = 'mouse is leaving....'
})

//mousedown
myDiv.addEventListener('mousedown', ()=> {
    myDiv.innerText = 'mouse key down....'
})

//mouseup
myDiv.addEventListener('mouseup', ()=> {
    myDiv.innerText = 'mouse key released....'
})

//mousemove
myDiv.addEventListener('mousemove', ()=> {
    myDiv.innerText = 'mouse is moving....'
})

//key press
myDiv.addEventListener('keypress', ()=> {
    myDiv.innerText = 'Key is press....'
})

//key down
myDiv.addEventListener('keydown', ()=> {
    myDiv.innerText = 'Key is down....'
})


// (input events) form events
// input = document.getElementById('input');

// input.addEventListener('focus', ()=> {
//     myDiv.innerText = 'input is focus....';
//     input.style.background = 'yellow';
//     input.style.border = '2px solid blue'
// })


// input.addEventListener('blur', ()=> {
//     myDiv.innerText = 'input is not focus....';
//     input.style.background = 'withe';
//     input.style.border = '2px solid grey'
// })



// let form = document.querySelector('form');
// let select = document.getElementById('select')
// form.addEventListener('submit',()=>{
//     alert('Your form is submitted')
// })

// select.addEventListener('change', ()=>{
//     show('role selected: ' + select.value)
// })


// function show(msg){
//     myDiv.textContent= msg
// }