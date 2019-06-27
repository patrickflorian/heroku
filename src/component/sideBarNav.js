import React , {Component} from 'react';
import {connect} from 'react-redux';

import NavItem from './navItem';
import SideBarImage from './sideBarImage';
import NavInput from './navInput';
import map from '../icons/map.svg';
import user2 from '../icons/user2.svg';
import api from '../icons/link.svg';
import marker from '../icons/marker.svg';
import logo from '../img/mymap.png';
import '../css/page.css';
class SideBarNav extends Component{
    constructor(props){
        
        super(props);
        this.state={activeMenuItem:props.activeMenuItem}
      }
    
    render(){
        return (
                    <ul className="list-reset  ampstart-label mt4">
                    
                    {(this.props.withimage)?'':<SideBarImage src={logo}></SideBarImage>}
                    
                    <NavInput placeholder="Search" onChange={this.handleInputChange}></NavInput>
                    
                    <div className="border-top"></div>

                    {(this.state.activeMenuItem==="map") ?<NavItem title="MAP" icon={map} onClick={()=>this._toggleActiveMenu('map')} active={true}></NavItem>:<NavItem title="MAP" icon={map} onClick={()=>this._toggleActiveMenu('map')} active={false}></NavItem>}

                    <div className="border-top"></div>

                    {(this.state.activeMenuItem==="pos") ?<NavItem title="LOCATIONS" icon={marker} onClick={()=>this._toggleActiveMenu('pos')} active={true}></NavItem>:<NavItem title="LOCATIONS" icon={marker} onClick={()=>this._toggleActiveMenu('pos')} active={false}></NavItem>}

                    <div className="border-top"></div>

                    {(this.state.activeMenuItem==="user") ?<NavItem title="USERS" icon={user2} onClick={()=>this._toggleActiveMenu('user')} active={true}></NavItem>:<NavItem title="USERS" icon={user2} onClick={()=>this._toggleActiveMenu('user')} active={false}></NavItem>}

                    <div className="border-top"></div>

                     {(this.state.activeMenuItem==="api") ?<NavItem title="API" icon={api} onClick={()=>{this._toggleActiveMenu('api');}} active={true}></NavItem>:<NavItem title="API" icon={api} onClick={()=>this._toggleActiveMenu('api')} active={false}></NavItem>}
                    <div className="border-top"></div>
                    </ul>
                    
                    
        );
    }
    _toggleActiveMenu(item) {
        this.setState({activeMenuItem:item});
        const action = { type: "TOGGLE_ACTIVE_MENU_ITEM", value: item };
        this.props.dispatch(action);
        //console.log(this.props.activeMenuItem)
    }
    handleInputChange(e){
        
    }
};



const mapStateToProps=(state)=>{
    return {activeMenuItem:state.activeMenuItem}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch :(action)=>{ dispatch(action) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBarNav);