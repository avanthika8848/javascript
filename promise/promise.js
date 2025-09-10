let myPromise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() => {
        if (success) {
            resolve('Promise resolved successfully!')
        } else {
            reject('Promise rejected')
        }
    }, 2000)

})

myPromise 
    .then(result => console.log(result)) //then is the promise is resolved
    .catch(error => console.log(error)) // then is the promise is rejected
    .finally(()=>console.log("Promise execution finished!")) //always execute