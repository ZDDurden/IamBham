const arr = [
    {
        name: 'john',
        age: 21,
    },
    {
        name: 'amy',
        age: 20,
    },
    {
        name: 'vera',
        age: 10,
    },
    {
        name: 'logan',
        age: 40,
    },
    {
        name: 'peter',
        age: 255,
    },
    {
        name: 'haley2',
        age: 30,
    },
];
let arr3=[];
let arr2 = arr.forEach((person)=>{
    if(person.age>=21){
        arr3.push(person.name);
    }
});
console.log(arr3);
let arr4 = arr.reduce((acc, person)=>{
    if(person.age>=21){
        acc.push(person.name);
    }
    return acc;
}, []);
console.log(arr4);

function spread(num){
    console.log([...new Array(num)]);
}
spread(10);