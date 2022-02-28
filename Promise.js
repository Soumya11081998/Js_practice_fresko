let promise = new Promise(function (resolve, reject) { 
    let i = 2;
    if (i==1) {
        resolve("okay");   // success
    } else {
        reject("error");   // failure
    }
});
promise.then((value) => {
    console.log("Promise resolved")
}).catch((reason) => {
    console.log("Promise Rejected")
});
  
//https://youtu.be/DHvZLI7Db8E