
export const getTheme = () => {
    changeColor();
} 

const changeColor = () => {
    const body = document.querySelector('body');
    const nav = document.querySelector('#navegation');
    const result = document.querySelector('#result');
    const repos = document.querySelector('#repos');
    const input = document.querySelector('#search');
    const icon = document.querySelector('#iconoTheme');
    const title = document.querySelector("#titleTheme");

    if ( body.classList.contains('dark') ) {
        changeIconLight(icon, title);
        body.classList.replace('dark', 'theme');
        nav.classList.replace("navegatation", "light");
        result.classList.replace("resultados", "ligthResult");
        repos.classList.replace("repositorios", "reposLight");
        input.classList.replace("input", "inputLight");

    } else {
        changeIconDark(icon, title);
        body.classList.replace('theme', 'dark');
        nav.classList.replace("light", "navegatation");
        result.classList.replace("ligthResult", "resultados");
        repos.classList.replace("reposLight", "repositorios");
        input.classList.replace("inputLight", "input");
    }

}

const changeIconLight = (icon, title) => {
    icon.classList.replace('ri-sun-line', 'ri-moon-fill');
    title.innerHTML = "Dark";
}

const changeIconDark = (icon, title) => {
    icon.classList.replace('ri-moon-fill', 'ri-sun-line');
    title.innerHTML = "Light";
}



