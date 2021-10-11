// Obtener el formulario
const form = document.getElementById("form");

//Obtener la barra de busquedad
const search = document.getElementById("search");

//Obtener usercard 
const userCard = document.getElementById("usercard");


//Escuchar el evento submit de formulario
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const username = search.value;
    getUserData(username);
    search.value = ""
})

//Obtener la infor del user en GitHub

async function getUserData(username){
    const API = "https://api.github.com/users/";
    
    // Para mostrar un error con Try Catch
    try {
        const userRequest = await fetch(API + username);

        if(!userRequest.ok){
            throw new Error(userRequest.status);
        }

        const userData = await userRequest.json();
        
        //Obtener datos de los repos, en caso de que haya
        if(userData.public_repos){
            const reposRequest = await fetch(API + username + "/repos");
            const reposData = await reposRequest.json();
            userData.repos = reposData
        }

        showUserData(userData);

    } catch (error) {
        showError(error.message);
         
    }
        
}

// Funcion para componer el HTML del WidGer

function showUserData(userData){
    let userContent = `
            <img src="${userData.avatar_url}" alt="Avatar">
            <h1>${userData.name}</h1>
            <p>${userData.bio}</p>

            <section class="data">
                <ul>
                    <li>${userData.followers} Followers</li>
                    <li>${userData.following} Following</li>
                    <li>${userData.public_repos} Repos</li>
                </ul>
            </section>

            
        
    `;

    if(userData.repos){
        userContent += `<section class="repos">`

        userData.repos.slice(0,7).forEach(repo => {
            userContent += `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
        })

        userContent += `</section>`;
        
    }

    
    userCard.innerHTML = userContent;
}

// Funcion para gestionar los errores

function showError(error) { 
    const errorContent = `<h1>Error 🛑 ${error}</h1>`
    userCard.innerHTML = errorContent;
}