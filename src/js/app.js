import * as flsFunctions from './modules/functions.js';


flsFunctions.isWebp();


// const defaultSelect = () => {
//     const element = document.querySelector('.selector');
//     const choices = new Choices(element, {
//         searchEnabled: false,
//         itemSelectText: '',
//     });
// }
// defaultSelect();

// const multiSelect = () => {
//     const elementMotivation = document.querySelector('.multi-selector');
//     const choicesMotiv = new Choices(elementMotivation, {
//         searchEnabled: false,
//         itemSelectText: '',
//     });
// }

// multiSelect();

const burger = document.querySelector('.burger')
const headerNav = document.querySelector('.header-nav')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    headerNav.classList.toggle('open');
    document.body.classList.toggle('lock')
})

const searchButton = document.querySelector('.header-search__button');
const searchInput = document.querySelector('.header-search__input');
const searchForm = document.querySelector('.search-form');
const headerSearch = document.querySelector('.header-search');

if (headerSearch) {
    searchButton.addEventListener('click', () => {
        headerSearch.classList.add('open');
        searchInput.focus();
    })
    searchInput.addEventListener('blur', () => {
        headerSearch.classList.remove('open');
    });
}


const sort = document.querySelector('.sort');
const sortHeader = document.querySelector('.sort__header');
const sortItems = document.querySelectorAll('.sort__list li');

if (sort) {
    sortHeader.addEventListener('click', () => {
        sort.classList.toggle('open')
    })

    sortItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemText = item.textContent;
            sortHeader.querySelector('span').innerHTML = itemText;
            sort.classList.remove('open')
        })
    })
}