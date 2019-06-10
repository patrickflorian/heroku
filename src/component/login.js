import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import LoginForm from './loginForm'

import user from "../icons/user2.svg"
//import landing from '../img/landing.png'



class Login extends Component {
    aside = () => {
        return (
            <aside className=" md-col-4 md-ml8 xs-hide sm-hide  mt6 content-end justify-content items-end justify-end ml1 ">
                
                <h1 className="h5 md-pb2 mt4"> BANQUE DE DONNEES POUR SUPPORT D’ APPLICATION DE GEOLOCALISATION DES SALLES A
                L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que
                    les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br />
                    <span className="italic">Aussi profitez de l'<b><a href="javascipt:void(0)" className="important">API</a></b> que nous mettons
                    a votre disposition pour une eventuelle utilisation des donnnées en notre possession</span></p>
                
            </aside>
        )
    }
    section = () => {
        const section_style={background:'transparent'}
        return (
            <section style={section_style} className="commerce-blog-wrapper col-12 md-col-4 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1 md-mx6 right">
                <div className="mb1 center">
                    <img src={user}  width="100" height="100" alt="" />
                </div>
                <h3 className="center xs-hide">Log IN Here</h3>
                <LoginForm></LoginForm>
                <div><Link to="/forgotpwd">Forget password</Link>
                </div>

            </section>
        )
    }

    render() {
        const style={
            height:'100%',
        }
       
        return (
            <main id="content" role="main" style={style} className="main md-flex flex-wrap  m2  p2 content-center  justify-content items-center justify-center  ">
                {this.aside()}
                {this.section()}
            </main>
        )
    }
}


export default Login
