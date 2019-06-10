import React ,{Component} from 'react'
import AuthButton from './logInButton'

class LoginForm extends Component{
    state={
        login :"",
        password :""
    }

    render(){
        return (
            <div className="flex flex-column">
                    <form action="">
                        <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                            <input type="text"  name="login" id="login" className="block border-none p0 m0" placeholder="login" />
                            <label htmlFor="login" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Login</label>
                        </div>

                        <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom">
                            <input type="password"  name="pwd" id="pwd" className="block border p0 m0" placeholder="Password" />
                            <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password</label>
                        </div>

                        <div>
                            <AuthButton></AuthButton>
                        </div>
                    </form>
                </div>
        )
    }
}

export default LoginForm