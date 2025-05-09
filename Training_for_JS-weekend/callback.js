

function askReceipe(callback){
    setTimeout(() => {
        console.log('I Got the Receipe')
    }, 2000);
}

function startCocking(){
    console.log('I Start cooking')
}

askReceipe(startCocking)


// console.log('Woke up');
// console.log('make Coffee');
// console.log('drink Coffee');
// console.log('start Working')



//callback hell
// setTimeout(()=>{
//     console.log('Woke up')
// }, 2000)


// setTimeout(()=>{
//     console.log('make Coffee');
// }, 2000)

// setTimeout(()=>{
//     console.log('drink Coffee');
// }, 2000)

// setTimeout(()=>{
//     console.log('start Working');
// }, 2000)


//callback hell
// setTimeout(()=>{
//     console.log('Woke up')
//         setTimeout(()=>{
//             console.log('make Coffee');
            
//                 setTimeout(()=>{
//                     console.log('drink Coffee');
                
//                 setTimeout(()=>{
//                 console.log('start Working');
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

function wakeup(callback){
    setTimeout(()=>{
        console.log('woke up')
        callback()
    }, 2000)
}


function makeCoffee(callback){
    setTimeout(()=>{
        console.log('make Coffee')
        callback()
    }, 2000)
}


function checkEmail(callback){
    setTimeout(()=>{
        console.log('check Email')
        callback()
    }, 2000)
}

function goToWork(callback){
    setTimeout(()=>{
        console.log('go to work')
        callback()
    }, 2000)
}


wakeup(()=>{
    makeCoffee(()=>{
        checkEmail(()=>{
            goToWork(()=>{
                
            })
        })
    })
})


