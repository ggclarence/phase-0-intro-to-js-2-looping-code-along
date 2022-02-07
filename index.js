

// function writeCards(arrayOfNames,event){
//     let newArray = []
//     for(let n = 0; n < arrayOfNames.length; n++) {
//         newArray.push(`Thank you, ${arrayOfNames[n]}, for the wonderful ${event} gift!`) 
//     }
//     return newArray
// }

// function countDown(count){
//     var i = count
//     while(i>=0){
//         console.log(i--)
//     }
// }

// for (let age = 30; age < 40; age++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`)
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow`);  
// }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names,eventName){
    let newArray = []
    for (let i = 0; i < names.length; i++){
    
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)    
    }
    
return newArray

}


writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))



function countDown(count){
    let i = Math.abs(count);
    while (i>=0){
        console.log(i--)
    }   
}

countDown(10)