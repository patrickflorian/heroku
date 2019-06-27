import { locationConstants } from '../constants';
import { locationService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const locationActions = {
    add,
    logout,
    update,
    getAll,
    delete: _delete
};

function add(location) {
    return dispatch => {
        dispatch(request({ location }));

        locationService.add(location)
            .then(
                location => { 
                    dispatch(success(location));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(location) { return { type: locationConstants.ADD_REQUEST, location } }
    function success(location) { return { type: locationConstants.ADD_SUCCESS, location } }
    function failure(error) { return { type: locationConstants.ADD_FAILURE, error } }
}

function logout() {
    locationService.logout();
    return { type: locationConstants.LOGOUT };
}

function update(location) {
    return dispatch => {
        dispatch(request(location));

        locationService.update(location)
            .then(
                location => { 
                    dispatch(success());
                    history.push('/dashboard');
                    dispatch(alertActions.success('location successfully updated'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(location) { return { type: locationConstants.UPDATE_REQUEST, location } }
    function success(location) { return { type: locationConstants.UPDATE_SUCCESS, location } }
    function failure(error) { return { type: locationConstants.UPDATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        locationService.getAll()
            .then(
                locations => dispatch(success(locations)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: locationConstants.GETALL_REQUEST } }
    function success(locations) { return { type: locationConstants.GETALL_SUCCESS, locations } }
    function failure(error) { return { type: locationConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        locationService.delete(id)
            .then(
                location => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: locationConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: locationConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: locationConstants.DELETE_FAILURE, id, error } }
}