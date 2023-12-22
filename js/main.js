import { getAllBreeds } from "./service.js";

window.onload = () => {
    breeds();
};

const breeds = () => {
    console.log('jsdlkja')
    const dataContainer = document.getElementById("data-container");

    getAllBreeds().then((resp) => {
        resp.name.forEach(breeds => {
console.log('aqui')
            dataContainer.innerText=`${breeds}`;
        });

    });
}

const converterIdade = () => {
    const gato = document.getElementById("gato").value

}