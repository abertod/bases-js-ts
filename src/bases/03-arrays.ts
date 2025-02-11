const numeriArray: number[] = [1, 2, 3, 4, 5];

numeriArray.push(6);

console.log(numeriArray)

const numeriArray2 = [ ...numeriArray ];

numeriArray2.push(7)

console.log(numeriArray2)

const numeriArray3 = numeriArray.map( (valorem) => {
    return (valorem *2.3456).toFixed(1)
} )

//const numeriArray3 = numeriArray.map( valorem =>  (valorem *2.3456).toFixed(1) );

console.log(numeriArray3)