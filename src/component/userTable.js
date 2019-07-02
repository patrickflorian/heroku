import React from 'react';
import {connect} from 'react-redux';

import { userActions } from '../actions';
import { userConstants } from '../constants';

import UserForm from './userForm';
import loading from '../icons/loading.gif';

class UserTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: {
                items: [
                    { id: 1, email: 'noumbissipatrick@gmail.com', role: 'administrator' },
                    { id: 2, email: 'vaillantyomen@gmail.com', role: 'administrator' },
                    { id: 3, email: 'mpombiezejordan@gmail.com', role: 'collector' }
                ],
                update:{user:{}}
            }, 
            formAreaVisible: true,
        };
    }
    
    
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    updateUser(user) {
        return (e) => {this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false});this.props.dispatch({type:userConstants.UPDATE_ACTION,value:true,user:user});this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:true});};
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    
    hideForm(){
        this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false});
    }
    
    showUserForm(){
        if(this.props.formAreaVisible) 
        return <UserForm onClose={()=> this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false})}>
                </UserForm>
    
        return ""
    }
    render(){
        const {users} =this.props;
        return(
            <section className="comrce-bmelog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
            
                {users.error && <span className="danger">ERROR: {users.error}</span>}
                {users.loading && <div> <amp-lightbox id="my-lightbox"
                    layout="display">
                    <div class="lightbox"
                        on="tap:my-lightbox.close"
                        role="button"
                        tabindex="0">
                        <h1><img class="center" width="200px" src={loading} alt="" /></h1>
                    </div>
                </amp-lightbox></div>}
        
                {this.showUserForm()   }
                <article>
                    <div className="table-responsive mt3">
                    <table className="table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>ROLE</th>
                                <th>EMAIL</th>
                                <th>USERNAME</th>
                                <th>
                                    <button  className="ampstart-btn ampstart-btn-secondary"
                                        style={{"color":"#0f0"}} onClick={()=>{this.props.dispatch({type:userConstants.ADD_ACTION});this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:true});}}>
                                        <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="15"
                                            height="15" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M13.68,9.448h-3.128V6.319c0-0.304-0.248-0.551-0.552-0.551S9.448,6.015,9.448,6.319v3.129H6.319
                                            c-0.304,0-0.551,0.247-0.551,0.551s0.247,0.551,0.551,0.551h3.129v3.129c0,0.305,0.248,0.551,0.552,0.551s0.552-0.246,0.552-0.551
                                            v-3.129h3.128c0.305,0,0.552-0.247,0.552-0.551S13.984,9.448,13.68,9.448z M10,0.968c-4.987,0-9.031,4.043-9.031,9.031
                                            c0,4.989,4.044,9.032,9.031,9.032c4.988,0,9.031-4.043,9.031-9.032C19.031,5.012,14.988,0.968,10,0.968z M10,17.902
                                            c-4.364,0-7.902-3.539-7.902-7.903c0-4.365,3.538-7.902,7.902-7.902S17.902,5.635,17.902,10C17.902,14.363,14.364,17.902,10,17.902
                                            z"></path>
                                        </svg> Ajouter
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.items && users.items.map(
                                    (user,index)=>
                                    <tr key={index}>
                                        <th scope="row"> {user.id} </th>
                                        <td> {user.role} </td>
                                        <td> {user.email }</td>
                                        <td>@mdo</td>
                                        <td>
                                            <button className="ampstart-btn ampstart-btn-secondary" onClick={this.updateUser(user)} style={{"color":"#f6f"}}>
                                                <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                                                    height="20" viewBox="0 0 20 20">
                                                    <path fill="currentColor"
                                                        d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z">
                                                    </path>
                                                </svg>
                                            </button>
                                            
                                            <button  className="ampstart-btn ampstart-btn-secondary" onClick={this.handleDeleteUser(user.id)} style={{"color":"#f00"}}>
                                            {  user.deleting ?<em className="danger"> <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></em>
                                                :<svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                                                    height="20" viewBox="0 0 20 20">
                                                    <path fill="currentColor"
                                                        d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306">
                                                    </path>
                                                </svg>}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                                
                        </tbody>
                    </table>
                </div>
            </article>
    </section>
        )
    }
    componentWillUnmount(){
        
    }
    
}
const mapStateToProps=(state)=>{
    const { users, authentication } = state;
    const { user } = authentication;
    return {user,users,formAreaVisible:state.formAreaVisible}
}
const mapDispatchToProps = (dispatch)=>{
        return {
            dispatch :(action)=>{ dispatch(action) }
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(UserTable)