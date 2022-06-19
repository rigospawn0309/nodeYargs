console.log('Inicio de programa');

setTimeout(() => {
    console.log('primer timeout');
}, 3000);

setTimeout(() => {
    console.log('segundo timeout');
}, 1000);

setTimeout(() => {
    console.log('tercer timeout');
}, 0);

console.log('fin de programa');