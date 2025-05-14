// function sayHello(name, callback) {
//     let count = 0
//   for (let index = 0; index < 10; index++) {
//         setTimeout(() => {
//             console.log("hello, " + name + index);
//             count++
//             if (count == 10) {
//                 callback()
//             }
//         }, 1000 * index);
//   }
//   ;
// }

// function finished() {
//   console.log("First Function is finished");
// }

// sayHello("Martin", finished);


function greet(name, callback){
    let count = 0;
    let interval  = setInterval(() => {
        console.log('hello '+ name + count)
        count++;
        if (count === 10){
            clearInterval(interval);
            callback()
        }
    }, 1000);
}

function finish(){
     console.log('All message done');
}

greet('Martin', finish)