const numbers = [12, 56, 87, 44];
const half =  numbers.map(n => n/2);
const third = numbers.map(x => x/3);

// console.log(half);
// console.log(third);

const friends = ["Tom hanks" , "Tom cruise" , "Tom brady" , "Tom solaiman"];
const friendLetters = friends.map(friend => friend[0]);
// console.log(friendLetters);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: "laptop" , price: 45000},
    {id: 2, name: "Mobile" , price: 80000},
    {id: 3, name: "watch" , price: 35000},
    {id: 4, name: "tablet" , price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map( product => product.name);
const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);