const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false  // true // false then it will give the username
        if (!error) {
            resolve('Promise Resolve')
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
const pro = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
});
pro.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))

