import heroum, { dominis, type Dominus } from "../data/heroum";

console.log(dominis);

console.log(heroum);

export const obtineHeroPerId = (id: number) => {
    //heroum.find(heros => heros.id === id) ?? {};
    return heroum.find(heros => heros.id === id);
}

console.log(obtineHeroPerId(3));
console.log(obtineHeroPerId(300));

export const obtineHeroumPerDominus = (dominus: Dominus) => {
    return heroum.filter( heros => heros.dominus === dominus)
}

console.log(obtineHeroumPerDominus('Marvel'))
console.log(obtineHeroumPerDominus('DC'))