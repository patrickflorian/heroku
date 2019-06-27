import React ,{Component} from 'react'
import { connect } from 'react-redux';

import { userActions } from '../actions';

class LoginForm extends Component{
   
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { login, password } = this.state;
        const { dispatch } = this.props;
        if (login && password) {
            dispatch(userActions.login(login, password));
        }
    }
    render(){
        const { loggingIn } = this.props;
        const { login, password, submitted } = this.state;
        console.log(this.state)
        return (
            <div className="flex flex-column">
                    <form onSubmit={this.handleSubmit}>
                        <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                            <input type="text" name="login" id="login" className="block border-none p0 m0" placeholder="login" value={login} onChange={this.handleChange}/>
                            <label htmlFor="login" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Login</label>
                            {submitted && !login &&
                            <div className="help-block">login is required</div>
                        }
                        </div>

                        <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom">
                            <input type="password" name="password" id="pwd" className="block border p0 m0" placeholder="Password" value={password} onChange={this.handleChange} />
                            <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password</label>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>

                        <div>
                            <button className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none'>
                                Sign In
                            </button>
                        </div>
                        {loggingIn &&
                            <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </form>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
export default connect(mapStateToProps)(LoginForm)