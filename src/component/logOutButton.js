import React ,{Component} from  'react'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom';
import { userActions } from '../actions';

class LogOutButton extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{isAuthenticated:true}
        }
    }
    handleclick(e){
        const { dispatch } = this.props;
        dispatch(userActions.logout())
    }
    render(){
        if(this.props.user)
        return (
            <button onClick={this.handleClick} 
            className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none' on="tap:header-sidebar.toggle" tabIndex="0">
                disconnect
            </button>
        )

        else return <Redirect to="/"></Redirect> 
        
    }
   
}

const mapStateToProps=(state)=>{
    return {user:state.user}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch :(action)=>{ dispatch(action) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogOutButton);