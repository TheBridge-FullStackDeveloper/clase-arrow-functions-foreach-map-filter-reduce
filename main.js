// function sum (a, b) {
//     return a + b;
//   }

//   const sum = (a,b) => {
//     return a + b;
//   };

const sum = (a, b) => a + b;

const returnNum = (a) => a;

// console.log(sum(2, 5));
// console.log(returnNum(9));

function test2() {
  console.log("Función test2 ejecutada.");
}

function test1(callback) {
  callback(); // función test2
}

// test1(test2);

//* FOREACH
const fruits = ["manzana", "manguito", "sandía", "fresa"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// fruits.forEach(fruit => console.log(fruit))

const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

// canciones.forEach((cancion, indice, array) => {
//   console.log('Elemento actual',cancion,'índice', indice,'array',array);
// });

//* MAP

const myArray = [1, 2, 3, 4];

const myArrayTimesTwo = myArray.map((value) => {
  return value * 2;
});

// console.log(myArrayTimesTwo)
const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

// const allSongNames = [];

// for (const song of songs) {
//   allSongNames.push(song.name);
// }

// const allSongNames = songs.map(song => song.name)

const allSongNames = songs.map((song)=>{
    return song.name
})

// console.log(allSongNames)

//* FILTER

let numeros = [1,2,3,4,5,6,7,8,9,10]

let numerosFiltrados = numeros.filter(numero => numero >= 5)

// console.log(numerosFiltrados)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


let result =[]
for (const word of words) {
    if(word.length > 6){
        result.push(word)
    }
}

const wordsFiltered = words.filter( word => word.length > 6)
// console.log(wordsFiltered)

// const numbers = [10, 5, 7];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

const numbers = [10,5,7]

const sum2 = numbers.reduce((a,b)=> a + b,0)

console.log(sum2)




