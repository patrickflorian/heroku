import React, { Component } from 'react'
import logo from '../img/landing.png'

import user from "../icons/user2.svg"

class Login extends Component {
    aside = () => {
        return (
            <aside className=" md-col-4 md-ml8 mt6 content-end justify-content items-end justify-end ml4 ">
                
                <h1 className="h5 md-pb2 mt4"> BANQUE DE DONNEES POUR SUPPORT D’ APPLICATION DE GEOLOCALISATION DES SALLES A
                L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que
                    les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br />
                    <span className="italic">Aussi profitez de l'<b><a href="javascipt:void(0)" className="important">API</a></b> que nous mettons
                    a votre disposition pour une eventuelle utilisation des donnnées en notre possession</span></p>
                <div className="center">
                    <img src={logo} width="100%" className=" mb2 left" layout="responsive " alt="Company logo" noloading=""/>
                </div>
            </aside>
        )
    }
    section = () => {
        return (
            <section className="commerce-blog-wrapper col-12 md-col-4 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1 md-mx6 right">
                <div className="mb4 center">
                    <img src={user}  width="100" height="100" alt="" />
                </div>
                <h3 className="center">Log IN Here</h3>
                <div className="flex flex-column">
                    <form action="index.html">
                        <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                            <input type="text"  name="login" id="login" className="block border-none p0 m0" placeholder="login" />
                            <label htmlFor="login" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Login</label>
                        </div>

                        <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom">
                            <input type="password"  name="pwd" id="pwd" className="block border p0 m0" placeholder="Password" />
                            <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password</label>
                        </div>

                        <div>
                            <button type="submit" className="ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none">
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>
                <div><a href="/forgot_pwd" className="label">Forget password</a>
                </div>

            </section>
        )
    }

    render() {
        return (
            <main id="content" role="main" className="main md-flex flex-wrap  m2  p2 content-center  justify-content items-center justify-center  ">
                {this.aside()}
                {this.section()}
            </main>
        )
    }
}


export default Login
