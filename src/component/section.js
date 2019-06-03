import React,{Component} from 'react';
import{connect } from 'react-redux'
import PositionTr from './positionTr'
import UserTr from './usertr'
import Map from './map'


function showPositionsTables() {
    return (
        <section className="commerce-blog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
                <h1 className="center justify-center">POSITIONS ENREGISTREES</h1>
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
                                        <button  className="ampstart-btn ampstart-btn-secondary"
                                            style={{"color":"rgb(5, 99, 5)"}}>
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
                                <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                                <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                                <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                                <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                                <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                            </tbody>
                        </table>
                    </div>
                </article>
        </section>
    )
}
function showUsersTable(){
    return (
        <section class="commerce-blog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
                    <h1 class="center justify-center">Utilisateurs du système</h1> 
                <article>
                    <div class="table-responsive mt3">
                        <table class="table-striped">
                            <thead class="thead-inverse">
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>
                                        <button  class="ampstart-btn ampstart-btn-secondary"
                                            style={{"color":"#0f0"}}>
                                            <svg class="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="15"
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
class Section extends  Component{
    render(){
        if(this.props.activeMenuItem=== 'pos') return showPositionsTables()
        if(this.props.activeMenuItem==='user') return showUsersTable()
        if(this.props.activeMenuItem==='map') return (<Map></Map>)
        return ('')
    }
}
const mapStateToProps=(state)=>{
    return {activeMenuItem:state.activeMenuItem}
}
export default connect(mapStateToProps) (Section); 