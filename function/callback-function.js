// function that a5ec passed as argument to another function 
// use callback function
// 1. handle sasynchronous operation
// 2. avoid blocking code execution



function greetUser(name){
    console.log(`Hello,${name}`);
    
}


// this function takes another function (vcallback)


function getUserinput(callback){
    const name = "avanthika"
    callback(name);


}

//getUserinput greetuser as acallback

getUserinput(greetUser);
