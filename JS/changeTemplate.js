export const showUserData = (userData) => {
    console.log(userData);
    document.getElementById('result').innerHTML = modifyTemplate(userData);
}


const modifyTemplate = (userData) => {
    return `
        <div id="contentPricipal">
                <div id="image">
                    <img src="${userData.avatar_url}" alt="Imagen de Perfil">
                </div>
                <div class="information">
                    <span>
                        <h2>${userData.name}</h2>
                        <p>${
                          userData.create_at === undefined
                            ? "Joined 25 Jan 2015"
                            : userData.create_at
                        }</p>
                    </span>
                    <p>${userData.login}</p>
                </div>
            </div>
            <div id="description">
                <p>${userData.bio}</p>
            </div>
            <div id="repos">
                <div>
                    <h4>Repos</h4>
                    <p>${userData.public_repos}</p>
                </div>
                <div>
                    <h4>Followers</h4>
                    <p>${userData.followers}</p>
                </div>
                <div>
                    <h4>Following</h4>
                    <p>${userData.following}</p>
                </div>
            </div>
            <div id="symbol">
                <div>
                    <span>
                        <i class="ri-map-pin-2-fill"></i>
                        <p>${userData.location}</p>
                    </span>
                    <span>
                        <i class="ri-link"></i>
                        <p>${userData.blog}</p>
                    </span>
                </div>
                <div>
                    <span>
                        <i class="ri-twitter-fill"></i>
                        <p>${userData.twitter_username}</p>
                    </span>
                    <span>
                        <i class="ri-building-2-fill"></i>
                        <p>${userData.company}</p>
                    </span>
                </div>
            </div>
    
    
    `;
}