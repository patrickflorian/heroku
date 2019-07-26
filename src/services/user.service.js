import { authHeader } from '../helpers';
import Rest from './config';
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    // eslint-disable-next-line no-unused-vars
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' },
        body: JSON.stringify({ email, password }),
    };
    /*
 const  user={ email:email, password ,id:0,role:"administrator"}
 localStorage.setItem('user', JSON.stringify(user));
return Promise.resolve(user);
 /** ****************** */
    return fetch(Rest.apiUrl+`api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            if(!user.is_admin ) return Promise.reject(401)
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    // eslint-disable-next-line no-restricted-globals
    
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'same-origin'
    };

    return fetch(Rest.apiUrl+`api/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(Rest.apiUrl+`api/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(Rest.apiUrl+`api/signup`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(Rest.apiUrl+`api/user/${user.id}/edit`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        credentials: 'same-origin'
    };

    return fetch(Rest.apiUrl+`api/user/${id}/delete`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            console.log(response.status)
            return Promise.reject(error);
        }

        return data;
    });
}
