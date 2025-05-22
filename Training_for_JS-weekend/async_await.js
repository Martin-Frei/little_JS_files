// function hello() {
//   return "Hi";
// }

// console.log(hello());

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function example() {
//     console.log('start')
//     await delay(2000)
//     console.log('After 2 second: Finished')
// }

// example()

// function delay2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Start now");
//       resolve();
//     }, 2000);
//   });
// }

// delay2().then(() => {
//   console.log(" Finished");
// });

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 completed"), 2000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 completed"), 2000);
//   });
// }

// async function runAllSteps(){
//     let one = await step1()
//     console.log(one)

//     let two = await step2()
//     console.log(two)
// }
// runAllSteps()

// step1()
//   .then((one) => {
//     console.log(one);
//     return step2();
//   })
//   .then((two) => {
//     console.log(two);
//   });

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function showNumber() {
//   let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (let num in nums) {
//     await wait(1000);
//     console.log(num);
//     console.log("Waiting for another Number");
//   }
//   console.log("finished");
// }

// showNumber();


//#######################################################
function getData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data loaded");
      } else {
        reject(" Something went wrong");
      }
    }, 1000);
  });
}

// async function fetchData() {
//     try{
//         let result = await getData(false);
//         console.log(result);
//     }
//     catch(error){
//         console.log('error caught',error)
//     }
// }
// fetchData()

getData(false)
  .then((result) => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error cought", error);
  });
