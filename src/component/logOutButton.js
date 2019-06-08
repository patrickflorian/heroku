import React ,{Component} from  'react'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'

class LogOutButton extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{isAuthenticated:true}
        }
    }
    render(){
        if(this.props.user.isAuthenticated)
        return (
            <button onClick={()=>this.props.onDisconnect({ type: "AUTHENTICATE", value: "logout",redirect:"/" })} 
            className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none'>
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
        onDisconnect :(action)=>{ dispatch(action) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogOutButton);