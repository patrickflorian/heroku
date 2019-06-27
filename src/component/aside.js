import React ,{Component} from 'react';

import SideBarNav from './sideBarNav'
import {Redirect,Link} from 'react-router-dom'
import '../css/page.css'
import { connect } from 'react-redux';
import { userActions } from '../actions';

class Aside extends Component{
    constructor(props){
        super(props)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        console.log('lo out')
        this.props.dispatch(userActions.logout());
    }
    render(){
        return (
            <aside className="xs-hide sm-hide md-col-3 md-px1  justify-content items-center justify-center ">
                <nav className="ampstart-nav center items-center ">
                    <SideBarNav withimage='false'></SideBarNav></nav>
                <h1 className="h5 md-pb2 "> BANQUE DE DONNEES POUR SUPPORT D’ APPLICATION DE GEOLOCALISATION DES SALLES A
          L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br /> <span className="italic">Aussi profitez de l'<b><a href="/api" className="important">API</a></b> que nous mettons a votre disposition pour une eventuelle réutilisation des donnnées en notre possession</span></p>
                
                {(this.props.user) ?
                        <Link to='/login' className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none' on="tap:header-sidebar.toggle" tabIndex="0" onClick={this.handleClick} >
                            disconnect
                        </Link>
                        : <Redirect to="/login"></Redirect>}
            </aside>
        )
    }
}
const mapStateToProps=(state)=>{
    return {user:state.authentication.user}
}
export default connect(mapStateToProps) (Aside);
