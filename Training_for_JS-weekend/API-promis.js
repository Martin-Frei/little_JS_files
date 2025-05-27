

// fetch('https://catfact.ninja/fact')
// .then(response => response.json())
// .then (data => {
//     console.log('Cat facts:', data.fact)
// })

// .catch(error => {
//     console.log('Something went wrong', error)
// })
// getCatFact()



// async function getCatFact() {
//     try{
//         let response = await fetch('https://catfact.ninja/fact');
//         let data = await response.json();
//         document.getElementById('fact').innerText = data.fact
//         console.log('Cat facts:', data.fact)        
//     } catch(error) {
//     console.log('Something went wrong', error)
//     document.getElementById('fact').innerText = 'Something went wrong'
// }
// }

// let btn = document.getElementById('getFact')
// btn.addEventListener('click', getCatFact)



// async function showCatFact(count) {
//     let list = document.getElementById('fact');
//     list.innerText = "";
//     for (let index = 1; index <= count; index++) {
//         try {
//             let response =  await fetch('https://catfact.ninja/fact')
//             let data = await response.json();
//             let li = document.createElement('li')
//             li.innerHTML = `<span class="highLight"> Fact ${index} :</span> ${data.fact}`
//             list.appendChild(li)
//         }catch(error){
//             let li = document.getElementById('li');
//             li.innerText =`Error loading fact ${index}`;
//             list.appendChild(li);
//         }
        
//     }
// }

async function loadDogs() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random/60');
    let data = await response.json();
    let gallery = document.getElementById('gallery')
    gallery.innerHTML = "";
    data.message.forEach(url => {
        let img = document.createElement('img')
        img.src = url
        img.classList.add('img')
        gallery.appendChild(img)
    });
}
