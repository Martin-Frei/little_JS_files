//asyncronice Tasks

// 2 fuction of promisee
// resolve rejected

// states of promis
// pending fulfilled rejected

// let promis = new Promise(function(resolve,reject){
//     let cakeReady = false;          // true or false
//     if(cakeReady){                  //always need true for thie condition
//         resolve('Cake is ready');
//     }
//     else{
//         reject('Cake is burned');
//     }
// })

// promis
// .then(result => console.log('Fulfilled:  ',result))
// .catch(error => console.log(' Rejected: ', error))

// console.log(promis)

// let weatherPromis = new Promise((resolve,reject)=>{

//     let isSunny = true;
//     if (isSunny){
//         resolve('Lets go outside')
//     }
//     else{
//         reject('Stay inside')
//     }
// });

// weatherPromis.then(msg => console.log('Success: ' ,msg))
// weatherPromis.catch(err => console.log('Error: ' ,err))

// timeout with promis

// let delayDesseret = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         let availible = true;
//         if(availible){
//             resolve(' Desert is availible')
//         }
//         else{
//             reject('No dessert avalible today')
//         }
//     }, 2000);
// })

// delayDesseret.then(msg =>(console.log(msg)))
// delayDesseret.catch(err=>(console.log(err)))

//Promis Chaining

// let orderPizza = () => {
//   return new Promise((resolve) => resolve("Pizza ordered"));
// };

// let bakePizza = (msg) => {
//   console.log(msg);
//   return new Promise((resolve) => resolve("Pizza is bake"));
// };

// let deliverPizza = (msg) => {
//   console.log(msg);
//   return new Promise((resolve) => resolve("Pizza is dliver"));
// };

// orderPizza()
//     .then((result) => bakePizza(result)
//     .then((result) => deliverPizza(result))
//     .then((result) => console.log())
// );



// let fetchUser
// = new Promise((resolve, reject)=>{
//     let serverResponse = true;
//     setTimeout(()=>{
//         if(serverResponse){
//             resolve({ name: 'Ali', age: 30})
//         }
//         else{
//             reject('Server is not reponding ')
//         }
//     }, 2000)
// })

// fetchUser.then(user => console.log('User Data: ', user))
// fetchUser.catch(err => console.log('Error: ', err))
// fetchUser.finally(()=> console.log('Default Messages is here '))

// console.log(fetchUser)


// promis with array map []
let numbers = [1,2,3,4,5,6,7,8,9]
let doubeled = new Promise((resolve, reject)=>{
    if(numbers.length>0){                   // if give us true or false 
        resolve(numbers.map((num)=> num * 2))
    }    
    else{
        reject('Array is empty')
    }
});
doubeled.then(result => console.log('doubel', result))
doubeled.catch(err => console.log(err))









