// var names = ['Steph', 'Gill', 'Tom'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe("Steph"));

var addStatement = (a,b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(5,7));
console.log(addExpression(100,45));