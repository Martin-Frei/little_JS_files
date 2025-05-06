


alert('JS is working')
//map = apply function an each element and create a new array 
let scores = [10, 20, 30];
let doubles = scores.map(x => x + 2)
console.log(doubles);


// filter = return element wich pass th condition
let ages = [ 15, 20,25 ,30 ,35,40 ]
let adult = ages.filter(age => age >= 18);
console.log(adult);

// reduce = singel value in re4sult
let num = [1,2,3,4,5,6,7]
let sum = num.reduce((total, current)=> total+ current)
console.log(sum)


// foreach  = run for each elemts create not a new array, but paossibel 
let names = ['anna', 'sahra','claudia','marion','bianca']
names.forEach(name => {
    console.log('Name: ' + name)
})


// find = give you teh first match 
let pokemons =['pikachu', 'charmander', 'bulbasur'];
let selectic = pokemons.find(p => p === 'pikachu');
console.log(selectic)

//findIndex = index of the 1. match 
let result = pokemons.findIndex(p => p === 'pikachu');
console.log(result)

//every = true if all the elements match the condition
let levels = [10 ,20 ,30,40];
let allLevelsTrue = levels.every(lvl => lvl > 5);
let allLevelsFalse =levels.every(lvl => lvl > 20);
console.log(allLevelsTrue);
console.log(allLevelsFalse)

//some = at least one pass 
let oneLevel = levels.some(lvl => lvl > 19);
console.log(oneLevel)

let pet = {
    name: 'max',
    type: 'dog'
}



// = Read Only Properties 
// key = keys of the onject = Read Only Properties 
console.log(Object.keys(pet))

// value = value of the objects = Read Only Properties 
console.log(Object.values(pet))

// entries = key Value as pair = Read Only Properties 
console.log(Object.entries(pet))


//Object manipulation Technics

//assign = coppie from the second to the first objects 
let num1 = { a : 1}
let num2 = { b : 2}
Object.assign(num1, num2)
console.log(num1)
console.log(num2)

// frezze = freeze the object you cant change or update the object
let frozen = { name: 'nida'};
Object.freeze(frozen);
frozen.name= 'maira';
console.log(frozen.name);

// const frozen2 ={ name:'nida'};
// frozen2 = [];
// console.log(frozen2)

// hasOwnProberty = Boolean for a key 
console.log(frozen.hasOwnProperty('name'));
console.log(frozen.hasOwnProperty('age'));

// Modern Data transformation Patterns
let pokemons2 = [ 
    {
        name: 'pikachu', level: 30
    },
    {
        name: 'charizad', level: 70
    },
    {
        name: 'bulbasur', level: 40
    },
    {
        name: 'dragonite', level: 90
    }
];

let totalPower = pokemons2.
filter(p => p.level >= 50)              // filter with condition
.map(p => p.level.level *2)             // do the operations
.reduce((sum, lvl) => sum + lvl, 0);    // make a sum for all values
console.log(totalPower)



