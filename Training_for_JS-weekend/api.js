//fetch
// let URL = 'https://jsonplaceholder.typicode.com/users'

// let data = fetch(URL)

// console.log(data)

// let data2 = fetch('https://jsonplaceholder.typicode.com/users')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(d => {
//     console.log(d.name)
// })

// let data2 = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => {
//     posts.forEach(post => {
//         let li = document.createElement('li')
//         li.innerText = post.title;
//         document.getElementById('list').appendChild(li)
//     });
// .then(posts => {
//     posts.slice(4,10).forEach(post => {
//         let li = document.createElement('li')
//         li.innerText = post.title;
//         document.getElementById('list').appendChild(li)
//     });
// })

// let allPosts = document.getElementById("allPosts");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((post) => {
//     post.forEach((element) => {
//       let postDiv = document.createElement("div");
//       postDiv.innerHTML = `<h4> Post ID: ${post.id} </h4> <h4> Post Title: ${post.title} </h4> <p> Post Body: ${post.body}</p>`;
//       allPosts.appendChild(postDiv);
//     });
//   });

// console.log(data2);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((post) => {
    let postAll = document.getElementById('allPosts')
    postAll.innerHTML = "";

    post.forEach(p => {
      postAll.innerHTML += createRowTemplat(p);
    });
  })
  .catch((error) => {
    console.error("Errors when retrieving or processing the posts:", error);
    const postAll = document.getElementById('allPosts');
    postAll.innerHTML = `<p style="color:red;">Errors when loading the data: ${error.message}</p>`;
  });

function createRowTemplat(data){
  return `
        <div class="post">
          <h4>${data.id}</h4>
          <h2>${data.title}</h2>
          <h4>${data.body}</h4>
        </div>
        ` 
}



fetch("https://jsonplaceholder.typicode.com/user")
.then(res => res.jaion())
.then(data => console.log(data))

// .catch(error => console.log('Something went wrong',error))
.catch(error => {
  document.getElementById('allPost').innerText = 'Could not load the Data'
})