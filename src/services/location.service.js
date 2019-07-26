import { authHeader } from '../helpers';
import Rest from './config';
export const locationService = {
    //login,
    logout,
    add,
    getAll,
    getById,
    update,
    delete: _delete
};

/* function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`api/location/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
} */

function logout() {
    // remove location from local storage to log user out
    
    localStorage.removeItem('user');
}


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(),'Access-Control-Allow-Origin':'*'}
        
    };
    return fetch(Rest.apiUrl+`api/locations`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(),'Access-Control-Allow-Origin':'*'},
    };

    return fetch(Rest.apiUrl+`api/location/${id}`, requestOptions).then(handleResponse);
}

function add(location) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(),'Access-Control-Allow-Origin':'*','Content-Type': 'application/json' },
        body: JSON.stringify(location),
        
    };

    return fetch(Rest.apiUrl+`api/location/`, requestOptions).then(handleResponse);
}

function update(location) {
    console.log(JSON.stringify(location))
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(),'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' },
        body: JSON.stringify(location),
        
    };

    return fetch(Rest.apiUrl+`api/location/${location.id}/edit`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { ...authHeader(),'Access-Control-Allow-Origin':'*'}
    };

    return fetch(Rest.apiUrl+`api/location/${id}/delete`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data)
        return data;
    });
}
