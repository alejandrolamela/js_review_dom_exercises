// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);
for (const country of countries) {
    const li$$ = document.createElement('li');
    li$$.textContent=country;
    ul$$.appendChild(li$$);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const classFn$$ = document.querySelector('.fn-remove-me');
classFn$$.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');
const ulCars$$ = document.createElement('ul');
div$$.appendChild(ulCars$$);

for (const car of cars) {
    const li$$ = document.createElement('li');
    li$$.textContent=car;
    ulCars$$.appendChild(li$$);

}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country2 of countries2) {
    const div2$$ = document.createElement('div');
    div2$$.innerHTML =`<h4>${country2.title} </h4><img src="${countries2.imgUrl}"/>`;
    document.body.appendChild(div2$$);
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
const button$$ =  document.querySelector("#delete-last-element");


function deleteLastElement (){
    const allDiv$$ = document.querySelectorAll('div');
    allDiv$$[allDiv$$.length-1].remove();
}


button$$.addEventListener("click",deleteLastElement);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const countries3 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries3) {
    const div_img$$= document.createElement('div');
    div_img$$.innerHTML = `<h4>${country.title}</h4> <img src="${country.imgUrl}"/>`;
    const buttons$$=document.createElement('button');
    buttons$$.textContent=`Delete`;
    div_img$$.appendChild(buttons$$);
    document.body.appendChild(div_img$$);
    
    buttons$$.addEventListener('click',deleteImage);

     function deleteImage (){
        div_img$$.remove();
     }


}
