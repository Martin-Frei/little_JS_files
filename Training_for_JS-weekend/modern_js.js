

//destructure array

let colors = ['red','green','blue'];

// old way befor ES6
let firstColor = colors[0];
let secondColor = colors[1];
let thirdColors = colors[2];

// new way of destructure
let [color1, color2, color3] = ['red','green','blue'];
let [color11, color22, color33] =colors
console.log(color1, color2, color3);
console.log(color1, color2);
console.log(color11, color22);


let user = ['Martin', ' Frei', 53, 'German']
let[firstName, secondName] = user;    // 
console.log(`Name :${firstName} Lastname ${secondName}`)

// Obejject destructure
let person = { name: 'martin', age: 53, city:'rosenheim'};

//old way 
let fname = person.name;
let properAge = person.age;

// new Way
let {name0, age0} = person;
console.log(name0,age0)


let apiResponse = {
    status : 'succes',
    user: {
        name:'martin',
        age: 53
    },
    message: 'Data fetched succesfully'
}


let {user: {name1 , age1}} = apiResponse;
console.log(` name is ${name1} Age is ${age1}`)



//Spread and Rest Operator 
//spread operator (...) = expand and merge the element of a array, not a object assign
let arr = [1,2,3,6,7,8,9]
let newArr = [ ...arr , 4,5]
console.log(newArr)

function sum( a, b, ...nums){
    return nums.reduce((total , num)=> total + num, 0)
}
consolelog((1,2,3,4,5,6))  // 1 is a, 2 is b, 3,4,5,6, is than ...nums (rest = remaining)









