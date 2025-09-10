// async make a function that will return a Promise
// await pauses the function excution until the promise is resolved or rejected 
// look & behave like synchronous (more efficient)

function fetchData() {
    return new Promise((resolve) => { // until the promise is resolved 
        setTimeout(() => {
            resolve("Data loaded!")


        }, 2000);
    });
}


async function  getData(){
    console.log("Start");


    const result = await fetchData();
    console.log(result);

    console.log("End");
    
}
getData();