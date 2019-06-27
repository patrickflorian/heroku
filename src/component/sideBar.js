import React ,{Component} from 'react';
import {connect} from 'react-redux'
import {Redirect,Link } from 'react-router-dom';
import { userActions } from '../actions';


import SideBarNav from './sideBarNav'
import '../css/page.css'

class SideBar extends Component{
    constructor(props){
        super(props)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        console.log('lo out')
        this.props.dispatch(userActions.logout());
    }
    render(){
        console.log(this.props)
        return (
            <amp-sidebar id="header-sidebar" className="ampstart-sidebar px2 col-4  md-flex flex-column justify-content item-center  justify-start"
                layout="nodisplay">
                <div className="flex justify-start items-center ampstart-sidebar-header mb2">
                    <div role="button" aria-label="close sidebar" on="tap:header-sidebar.toggle" tabIndex="0"
                        className="ampstart-navbar-trigger items-start">✕ </div>
                </div>
                <nav className="ampstart-sidebar-nav ampstart-nav mx2 pt2">
                    <SideBarNav withimage='true'></SideBarNav>
                    <ul className="justify-center">
                        <h1 className="h5 md-pb2 "> BANQUE DE DONNEES <br />POUR SUPPORT D’APPLICATION <br />DE GEOLOCALISATION DES SALLES <br />A
          L'UNIVERSITE DE DSCHANG</h1>
                    </ul>

                    {(this.props.user) ?
                        <Link to='/login' className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none' on="tap:header-sidebar.toggle" tabIndex="0" onClick={this.handleClick} >
                            disconnect
                        </Link>
                        : <Redirect to="/login"></Redirect>}
                </nav>

            </amp-sidebar>
        )
    }
}
const mapStateToProps=(state)=>{
    return {user:state.authentication.user}
}
export default connect(mapStateToProps) (SideBar);