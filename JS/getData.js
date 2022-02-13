import { showUserData } from './changeTemplate.js';


export const getUserData = (username) => {
    console.log(username);

    const API = 'https://api.github.com/users/';

    fetch(API + username)
        .then(response => response.json())
        .then(data => {
            const {
                avatar_url,
                name,
                create_at,
                login,
                bio,
                public_repos,
                followers,
                following,
                location,
                blog,
                twitter_username,
                company,
            } = data;
            const userData = {
                avatar_url,
                name,
                create_at,
                login,
                bio,
                public_repos,
                followers,
                following,
                location,
                blog,
                twitter_username,
                company,
            };
            
            showUserData(userData);
        })
}