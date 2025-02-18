import { GIFResponsio } from "../interfaces/gif.responsio";

const apikey = 'lErCUIkmEmoNxmNTM5nAxEtj0fKl4X5Y';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
.then(resp => resp.json())
.then((body: GIFResponsio) => {
    console.log(body.data.images.downsized.url)
} )
.catch( err => console.log(err))


//https://api.giphy.com/v1/gifs/random?api_key=lErCUIkmEmoNxmNTM5nAxEtj0fKl4X5Y