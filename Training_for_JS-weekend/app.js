

let button = document.getElementById('loadchart');
let greet = document.getElementById('greet')

greet.addEventListener('click', () => {
     omport('./greeting.js').then(module => {
        module.sayHello()
     }).catch(error=> {
        console.log('error loading', error)
     })
})

button.addEventListener('click', () => {
    omport('./chart.js').then(module => {
       module.renderChart()
    }).catch(error=> {
       console.log('error loading', error)
    })
})
