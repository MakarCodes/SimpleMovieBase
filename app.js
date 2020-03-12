const addFilm = document.querySelector('.adding'); //access to form, which has class .adding
const lista = document.querySelector('.lista');
const search = document.querySelector('.search input') //access directly to the input field

const addFilmToBase = ((x) =>{
    const html = `
    <li>${x}
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    lista.innerHTML += html;
});

addFilm.addEventListener('submit', e => {
    e.preventDefault();
    filmName = addFilm.adding.value.trim();
    // console.log(filmName);
    //console.log(document.getElementsByName("adding")[0].value); <- getting value using attribute name of the tag
    if(filmName.length){
        addFilmToBase(filmName);
        addFilm.reset();
    }
});

//removing

lista.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// const k = document.getElementsByTagName("input"); // zwraca array z wszystkim input w kodzie!!
// console.log(k);


const filmFiltering = ((userText) =>{

    Array.from(lista.children)
        .filter( x => !x.textContent.toLowerCase().includes(userText))
        .forEach(y => y.classList.add('filtered'))

    Array.from(lista.children)
        .filter( x => x.textContent.toLowerCase().includes(userText))
        .forEach(y => y.classList.remove('filtered'))
});

search.addEventListener('keyup', e => {
    const userText = search.value.trim().toLowerCase(); //im in input (variable search) and im looking for value

    filmFiltering(userText);
    
});