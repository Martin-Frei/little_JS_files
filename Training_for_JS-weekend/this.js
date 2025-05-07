



//this after ES6 == current 

console.log(this) // all properties from the windo

function show(){
    console.log(this)
}

let person = {
    name: ' Martin',
    greet(){
        console.log('Hello: ' + this.name)
    }
}

//arrow dont have this.
let person1 = {
    name: ' Martin',
    greet: () =>{
        console.log('Hello: ' + this.name)
    }
}
person1.greet()



let button = document.getElementById('btn');
button.addEventListener,('click', function(){
    consolelog(this)
})


function Cars(model){
    this.model = model
}

let myCar1 = new Cars ('Toyota')
let myCar2 = new Cars ('Audi')
let myCar3 = new Cars ('Ferrari')

console.log(myCar1)
console.log(myCar2)
console.log(myCar3)


function Employes(id, name, salary,post){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.post = post
}

let e1 = new Employes(1, 'Martin', '$10.000', 'Developer');
let e2 = new Employes(1, 'Ma', '$12.000', 'Senior- Developer');
let e3 = new Employes(1, 'Mar', '$15.000', 'Head- Developer');

console.log(e1);
console.log(e2);
console.log(e3);

let user = {
    name: 'martin',
    say(){
        setTimeout(function(){
            console.log(this.name)
        }, 5000)
    }
}
user.say();

// setTimeout run only 1 time

setTimeout(()=>{
    console.log('Hello after 3 Secondes')
}, 3000)

function greet(){
    console.log('Hello after 3 second again')
}

setTimeout(greet, 3000)  // greet without () becaues nit call the function, only give the referenz

setInterval(()=>{
    console.log('repeats evers 1 secon')
}, 1000)


let timeOut = setTimeout(()=>{
    console.log('This will not run')
}, 3000)

clearTimeout(timeOut)

let count= 0;

const intervalID =setInterval(()=>{
    count++;
    console.log('Count' + count)
    if(count===5){
        clearInterval(intervalID);
        console.log('Timeout Message')
    }
}, 1000)

