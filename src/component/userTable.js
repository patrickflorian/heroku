import React from 'react'
import {connect} from 'react-redux'

import UserTr from './usertr'
import UserForm from './userForm'

class UserTable extends React.Component{
    state={
        userList:[],formAreaVisible:true
    }
 
    
    hideForm(){
        this.props.onDispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false})
    }
    showUserForm(){
        if(this.props.formAreaVisible) 
        return <UserForm onClose={()=> this.props.onDispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false})}>
                </UserForm>
    
        return ""
    }
    render(){
        console.log(this.state)
        return(
            <section className="comrce-bmelog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
            {this.showUserForm()}
            <article>
                    <div className="table-responsive mt3">
                        <table className="table-striped">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>
                                        <button  className="ampstart-btn ampstart-btn-secondary"
                                            style={{"color":"#0f0"}} onClick={()=>this.props.onDispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:true})}>
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
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
                                <UserTr id="1" userRole="admin" username="user"></UserTr>
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
    return {formAreaVisible:state.formAreaVisible}
}
const mapDispatchToProps = (dispatch)=>{
        return {
            onDispatch :(action)=>{ dispatch(action) }
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(UserTable)