import React,{Component} from 'react';
import{connect } from 'react-redux';


import LocationTable from './locationTable';

import UserTable from './userTable';

import Map from './map';

class Section extends  Component{

    render() {
        if (this.props.activeMenuItem === 'pos') return <LocationTable></LocationTable>;
        if (this.props.activeMenuItem === 'user') return  <UserTable></UserTable> ;
        if (this.props.activeMenuItem === 'map') return (<Map></Map>);
        return ""
    }
}
const mapStateToProps=(state)=>{
    return {activeMenuItem:state.activeMenuItem}
}
export default connect(mapStateToProps) (Section); 