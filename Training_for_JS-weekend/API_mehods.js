// Methods
// get == getting data
// post == sending data
// put == replace / update entire data
// patch == update some part of data
// delete == delet data

// fetch("https://jsonplaceholder.typicode.com/post/1")
//   .then((response) => response.json())
//   .then((data) => console.log("GET Data:", data))
//   .catch((error) => console.log(error));

// // post == sending data
// fetch("https://jsonplaceholder.typicode.com/post/", {
//   method: "POST",
//   header: {
//     "Content Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "New Post",
//     body: "This is a test Post",
//     userID: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("POST Responde:"), data)
//   .catch((error = A > console.log(error)));

// // put == replace / update entire data
// fetch("https://jsonplaceholder.typicode.com/post/", {
//   method: "PUT",
//   header: {
//     "Content Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Updated Post",
//     body: "This is a updated Post by put",
//     userID: 1,
//     is: 2,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("PUT Responde:"), data)
//   .catch((error = A > console.log(error)));

// // patch == update some part of data
// fetch("https://jsonplaceholder.typicode.com/post/", {
//   method: "PATCH",
//   header: {
//     "Content Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Updated Post Title by PATCH",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("PATCH Responde:"), data)
//   .catch((error = A > console.log(error)));

// // delete == delete data
// fetch("https://jsonplaceholder.typicode.com/post/", {
//   method: "DELETE",
// })
//   .the((response) => {
//     if (response.ok) {
//       console.log("DELETED Successfully");
//     } else {
//       console.log("DELETD failed");
//     }
//   })
//   .catch((errore) => console.log(error));

//Header use in put / post / patch
// headers:{
//     "Content Type": "application/json",
//     "CAccept": "text/plain",
//     "Authorization": "Bearer (Token)",or '(username : password)',
//     'app-version'  :  'v2.0'
// }

// fetch("https://jsonplaceholder.typicode.com/post/")
//   .then((response) => {
//     let contentType = response.header.get("Content_Type");
//     console.log("Content Type : ", contentType);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  methode: "POST",
  headers: {
    "Content-Type": " applicatio/json",
  },
  body: JSON.stringify({
    title: "Hello World",
    body: "Testing Hello World",
    UserID: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
