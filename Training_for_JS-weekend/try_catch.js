


// syntax Error
// referenz error
// type error
// range error


// error name
try{
let name = undefined;
console.log(name)
}catch(error){
console.log('Cought an error: ', + error.name);
console.log('Cought an error: ', + error.message);
}

//error message + type error
try{
    let number = "abc";
    console.log(number.toFixed(2))
    }catch(error){
    console.log('Cought an error: ', + error.name);
    console.log('Cought an error: ', + error.message);
    console.log('Cought an error: ', + error.stack);
    }

function divide(a,b){
    if(b === 0){
        throw new Error('Can not divide by ZERO')
    }
    return a / b
}

try{
    console.log(divide(4,0))
}catch(e){
    console.log( "Error: " + e.message)
}

// Error custom classes
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function checkUserName(username){
    if (username.length < 3){
        throw new ValidationError('User Name must be 3 Characters')
    }
}

try{
    checkUserName('ya')  // can be a Variable 
}catch(error){
    console.log(error.name)
    console.log(error.message)
}



