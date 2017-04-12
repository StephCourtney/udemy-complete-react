//Practising promises
function addPromise(a, b) {
    return new Promise(function(resolve, reject){
        if(typeof a && typeof b === 'number') {
            resolve(a + b);
        }
        else {
            reject('Not numbers');
        }
    });
}

addPromise(1, 5).then(function(result){
    console.log('Result: ', result);
},function(err){
    console.log('Error: ', err);
})
addPromise(1, 'durr').then(function(result){
    console.log('Result: ', result);
},function(err){
    console.log('Error: ', err);
})