//TYpes of API 
// 1. Open API 
// 2.Private API
// 3.Partner API
// 4.Composit API
// 5. REST Api 

// Open API
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => console.log(data))


// Private API
// let myapi = 'd0ba08c02d26da68210804097e171a8d'  //Nida Key
// let url = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${myapi}`
// fetch(url)
// .then(res => res.json())
// .then(data => console.log('private api',data))


// Partner API ==> booking.com   paypal.com  


// Composite API 
// More than one API in teh same Project 


//REST API 
// dummy fake data

// HTPPS Status 
// 1. 2xx  = Success
// 2. 4xx  = Client side Error 
// 3. 5xx  = Server side Error

//Status 200 = ok
// fetch("https://jsonplaceholder.typicode.com/user/1")
// .then((response) => {
//     console.log(`STATUS: ${response.status}`)
//     return response.json
// })
// .then ((data) => console.log(data))

//Status 201 = created
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     methode: 'post',
//     headers: {'content-type': 'application/json'},
//     body :JSON.stringify({
//         title: 'Test',
//         body: 'Example',
//         userId: 1
//     })
// })
// .then((response) => {
//     console.log(`STATUS: ${response.status}`)
//     return response.json
// })
// .then ((data) => console.log(data))


// Status 404 = URL not found
// fetch("https://jsonplaceholder.typicode.com/po", {
//     methode: 'post',
//     headers: {'content-type': 'application/json'},
//     body :JSON.stringify({
//         title: 'Test',
//         body: 'Example',
//         userId: 1
//     })
// })
// .then((response) => {
//     console.log(`STATUS: ${response.status}`)
//     return response.json
// })
// .then ((data) => console.log(data))

// Status 401 = unauthorized
// let myapi2 = 'd0b'  //Wrong Key
// let url2 = `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${myapi2}`
// fetch(url2)
// .then(res => res.json())
// .then(data => console.log('private api',data))

// Status 403 = forbidden
fetch('https://httpstat.us403'),{
.then((response) => console.log("Status", response.status))}




// Status 400 = Bad request 
fetch("https://jsonplaceholder.typicode.com/posts", {
    methode: 'post',
    headers: {'content-type': 'application/json'},
    body :JSON.stringify({
        title: 'Test',
        body: 'Example',
        userId: 1
    })
})
.then((response) => {
    console.log(`STATUS: ${response.status}`)
    return response.json
})
.then ((data) => console.log(data))


