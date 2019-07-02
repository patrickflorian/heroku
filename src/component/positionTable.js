import React from 'react';
import { connect } from 'react-redux';
import { locationActions } from '../actions';
import { locationConstants } from '../constants';

import loading from '../icons/loading.gif'

class PositionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionList: []

        }
    }
    componentDidMount() {
        this.props.dispatch(locationActions.getAll());
    }
    updateLocation(location) {
        return (e) => {this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false});this.props.dispatch({type:locationConstants.UPDATE_ACTION,value:true,location:location});this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:true});};
    }

    handleDeleteLocation(id) {
        return (e) => this.props.dispatch(locationActions.delete(id));
    }
    render() {
        const { locations } = this.props;
        return (
            <section className="comrce-bmelog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
                {locations.error && <span className="danger">ERROR: {locations.error}</span>}
                {locations.loading && <div> <amp-lightbox id="my-lightbox"
                    layout="display">
                    <div class="lightbox"
                        on="tap:my-lightbox.close"
                        role="button"
                        tabindex="0">
                        <h1><img class="center" width="200px" src={loading} alt="" /></h1>
                    </div>
                </amp-lightbox></div>}
                <article>
                    <div className="table-responsive mt3">
                        <table className="table-striped">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>#</th>
                                    <th className="xs-hide">Longitude</th>
                                    <th className="xs-hide">Latitude</th>
                                    <th>Nom du lieu</th>
                                    <th>Description</th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {locations.items && locations.items.map((location,i) =>
                                    <tr key={i}>
                                        <th scope="row">{location.id}</th>
                                        <td className="xs-hide">{location.lng}</td>
                                        <td className="xs-hide">{location.lat}</td>
                                        <td> {location.name} </td>
                                        <td> {location.description} </td>
                                        <td>
                                            <button className="ampstart-btn ampstart-btn-secondary" onClick={this.updateLocation(location)} style={{ "color": "#f6f" }}>
                                                <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                                                    height="20" viewBox="0 0 20 20">
                                                    <path fill="currentColor"
                                                        d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z">
                                                    </path>
                                                </svg>
                                            </button>

                                            <button className="ampstart-btn ampstart-btn-secondary" onClick={this.handleDeleteLocation(location.id)} style={{ "color": "#f00" }}>
                                                {location.deleting ? <em className="danger"> <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></em>
                                                    : <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                                                        height="20" viewBox="0 0 20 20">
                                                        <path fill="currentColor"
                                                            d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306">
                                                        </path>
                                                    </svg>}
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </article></section>
        )
    }
}

const mapStateToProps = (state) => {
    const { locations, authentication } = state;
    const { user } = authentication;
    return { user, locations, formAreaVisible: state.formAreaVisible }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionTable)