import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

import logo from '../img/mymap.png';
import user from "../icons/user2.svg";
//import landing from '../img/landing.png'



class Login extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password) /* { type: userConstants.LOGIN_SUCCESS, user:{ email, password ,id:0,role:"administrator"} } */);
        }
    }
    aside = () => {
        return (
            <aside className=" md-col-4 md-ml8 xs-hide sm-hide  mt6 content-end justify-content items-end justify-end ml1 ">

                <h1 className="h5 md-pb2 mt4"> BANQUE DE DONNEES POUR SUPPORT D’APPLICATION DE GEOLOCALISATION DES SALLES A
                L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que
                    les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br />
                    <span className="italic">Aussi profitez de l'<b><a href="javascipt:void(0)" className="important">API</a></b> que nous mettons
                    a votre disposition pour une eventuelle utilisation des donnnées en notre possession</span></p>
                <p className="ampstart-btn ampstart-btn-primary"><Link to="/register" className="btn btn-link">Register</Link></p>
            </aside>
        )
    }
    section = () => {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        const section_style = { background: 'transparent' }
        return (
            <section style={section_style} className="commerce-blog-wrapper col-12 md-col-4 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1 md-mx6 right">
                <div className="mb1 center">
                    <img src={user} width="100" height="100" alt="" />
                </div>
                <h3 className="center xs-hide">Log IN Here</h3>
                <div className="flex flex-column">
                    <form onSubmit={this.handleSubmit}>
                        <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                            <input type="text" name="email" id="email" className="block border-none p0 m0" placeholder="email" value={email} onChange={this.handleChange} />
                            <label htmlFor="email" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Login</label>

                        </div>
                        {submitted && !email &&
                            <div className="help-block right danger">email is required</div>
                        }

                        <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom">
                            <input type="password" name="password" id="pwd" className="block border p0 m0" placeholder="Password" value={password} onChange={this.handleChange} />
                            <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password</label>

                        </div>
                        {submitted && !password &&
                            <div className="help-block right danger">Password is required</div>
                        }
                        <div>
                            <button className='ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none'>
                                Sign In {loggingIn &&
                                    <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </button>
                        </div>

                    </form>
                </div>
                <div><Link to="/forgotpwd">Forget password</Link>
                    <Link className="right" to="/register">Register</Link>
                </div>

            </section>
        )
    }

    render() {
        const style = {
            height: '100%',
        }

        return (this.props.user ? <Redirect to='/dashboard'></Redirect> :
            <main id="content" role="main" style={style} className="main md-flex flex-wrap  m2  p2 content-center  justify-content items-center justify-center  ">
                <header
                    className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 pt2 md-pt0 ">

                    <a href="/home"
                        className="text-decoration-none inline-block mx-auto ampstart-headerbar-home-link mb1 md-mb0 ">
                        <amp-img src={logo} width="100" height="30" layout="fixed" class="my0 mx-auto "
                            alt="logo">
                        </amp-img>
                    </a>

                </header>
                {this.aside()}
                {this.section()}
            </main>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn, user } = state.authentication;
    return {
        loggingIn, user
    };
}
export default connect(mapStateToProps)(Login)
