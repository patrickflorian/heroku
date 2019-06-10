import React ,{Component} from  'react'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'

class LogInButton extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{isAuthenticated:false}
        }
    }
    render(){
        if(!this.props.user.isAuthenticated)
        return (
            <button onClick={()=>this.props.onDisconnect({ type: "AUTHENTICATE", value: "login",redirect:"/" })} 
            className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none'>
                Sign In
            </button>
        )

        else return <Redirect to="/dashboard"></Redirect> 
        
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

export default connect(mapStateToProps,mapDispatchToProps)(LogInButton);