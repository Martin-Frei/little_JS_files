

// Callback hell 

// function add(a,b,callback){
//     setTimeout(() => {
//         callback(a+b)
//     }, 1000);
// }

// function multiply(num,callback){
//     setTimeout(() => {
//         callback(num* 2)
//     }, 1000);
// }

// function subtract(num,callback){
//     setTimeout(() => {
//         callback(num - 3)
//     }, 1000);
// }



// add(4,5 ,(sum) => {
//     multiply(sum, (m)=> {
//         subtract(m , (result) => {
//             console.log(`Callback Result : ${result} `);
            
//         })
//     })
// })


// same with Promise

// function add(a,b,){
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve(a+b),500)
//     })    
// }

// function multiply(num){
//     return new Promise((resolve) =>{
//         setTimeout(()=>resolve(num *2),500)
//     })    
// }

// function subtract(num){
//     return new Promise((resolve) =>{
//         setTimeout(()=>resolve(num - 3),500)
//     });    
// }

// add(4,5)
// .then(multiply)
// .then(subtract)
// .then((result) => {
//     console.log(`Promis Result ${result}`)
// });


// Async & await

function add(a,b,){
    return new Promise((resolve) => {
        setTimeout(()=>resolve(a+b),500)
    })    
}

function multiply(num){
    return new Promise((resolve) =>{
        setTimeout(()=>resolve(num *2),500)
    })    
}

function subtract(num){
    return new Promise((resolve) =>{
        setTimeout(()=>resolve(num - 3),500)
    });    
}


async function calculate() {
    let sum = await add(4,5)
    let multi = await multiply(sum)
    let result = await subtract(multi)
    console.log(`Async & Await Result: ${result}`)
}

calculate()