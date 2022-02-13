import { getUserData } from './getData.js';
import { getTheme } from './theme.js';

const DOM = document;

//Events

DOM.addEventListener("submit", (e) => {
    if(e.target.matches("#form")) {
        e.preventDefault();
        const username = document.getElementById('search').value;
        getUserData(username);
        search.value = "";
    }
})


DOM.addEventListener("click", (e) => {
    if(e.target.matches("#iconoTheme")) {
        getTheme();
    }
})

