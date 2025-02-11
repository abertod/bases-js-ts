
// function salutate(nomen: string) {
//     return `Hola ${ nomen}`;
// }

const salutate = (nomen: string): string => {
    return `Hola, ${ nomen}`;
}

console.log(salutate('Alberto'));

const obtineUsoris = (uid: string) => ({
        uid,
        nomen: 'Tony001'
})

//console.log(obtineUsoris('XYZ-456'));

const heroum = [{
    id: 1,
    nomen: 'Batman'
},
{
    id:2,
    nomen: 'Superman',
    facultatem: 'Super fuerza'
}];

const heros = heroum.find( item => item.id === 1)

//console.log(heros)
console.log(heros?.nomen)