// let isDone = true
// let promise = new Promise(function(resolve, reject){
//     if(isDone) {
//         resolve("task completed")
//     }else{
//         reject("Task failed")
//     }
// });

// console.log("one")

//     promise.then(function(result){
//         console.log(result)
//     }).catch(function(error){
//     console.log(error)
//     })

//     console.log("two")

//     console.log(promise)

//     let delayedTask =new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("finished")
//         },5000)
//     })

//     delayedTask.then((r)=>{
//         console.log(r)
//     })

//     console.log(delayedTask)

// function takeOrder(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Order received: ${order} `);
//       resolve(order)
//     }, 2000);
//   });
// }

// function prepareOrder(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Preparing your Order: ${order} `);
//       resolve(order)
//     }, 2000);
//   });
// }

// function deliverOrder(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Deliever your Ordr: ${order} Enjoy!! `);
//       resolve(`Thank you for ordering !`);
//     }, 2000);
//   });
// }

// // promise Chaining
// takeOrder("Cheesy Pizza")
//   .then(prepareOrder)
//   .then(deliverOrder)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch(function (error) {
//     console.log("Some thing went wrong");
//   });

// callback
function doTask(success, callback) {
  if (success) {
    callback(null, "Task complete");
  } else {
    callback("Error : task failed");
  }
}

doTask(false, function (error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

//promise
function doTask2(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Task complete");
    } else {
      resolve("Error : task failed");
    }
  });
}

doTask2(true)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

  // callback
      function doTask(success, callback) {
        if (success) {
          callback(null, "Task complete");
        } else {
          callback("Error : task failed");
        }
      }

      doTask(false, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });



      //promise
      function doTask2(success) {
        return new Promise((resolve, reject) => {
          if (success) {
            resolve("Task complete");
          } else {
            resolve("Error : task failed");
          }
        });
      }

      doTask2(true)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
