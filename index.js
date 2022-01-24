

function writeCards(arrayOfNames,event){
    let newArray = []
    for(let n = 0; n < arrayOfNames.length; n++) {
        newArray.push(`Thank you, ${arrayOfNames[n]}, for the wonderful ${event} gift!`) 
    }
    return newArray
}

function countDown(count){
    var i = 10
    while(i>=0){
        console.log(i--)
    }
}



