// function login(Username, password,callback){
//     setTimeout(()=>{
//     if(Username === 'admin' && password === '12345'){
//         console.log(' Login succesfully');
//         callback(null,Username)
//     }else{
//         callback('Invalid input');
//     }
// }, 2000)
// }

// function fetcheUserData(username,callback){
//     setTimeout(()=>{
//         console.log('festching Data for : ', username);
//         callback(null, {name: 'Admin', role: 'Supervisior'});
//     }, 2000)
// }

// function displayDashboard(data, callback){
//     setTimeout(()=> {
//         console.log('welcome ' + data.name + 'role ' + data.role);
//         callback();
//     }, 2000)
// }

// // nested Callback
// login('admin', '12345', (err, user)=>{
//     if(err){
//         console.log('Error', err);
//     }else {
//         fetcheUserData(user, (err, data)=>{
//             if (err){
//                 console.log('Error', err)
//             } else{
//                 displayDashboard(data, ()=>{
//                     console.log('Login process completed')
//                 });
//             }
//         });
//     }
// });

// promis

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "12345") {
        console.log("Login succesfully");
        resolve(username);
      } else {
        reject("Invlid Input");
      }
    }, 2000);
  });
}

function fetchUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log({ name: "admin", role: "Supervisor" });
      resolve();
    }, 2000);
  });
}
function displayDashboard(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Welcome: " + data.name + "Rolr: " + data.role);
      resolve();
    }, 2000);
  });
}

login('admin', '12345')
.then(user => fetchUser(user))
.then(d => displayDashboard(d))
.catch(err => console.log('Error: ', err))
.finally(()=> console.log('Login process completed'))
