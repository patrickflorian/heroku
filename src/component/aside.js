import React ,{Component} from 'react';
import {Link} from 'react-router-dom'

import SideBarNav from './sideBarNav'
import '../css/page.css'

class Aside extends Component{
    render(){
        return (
            <aside className="xs-hide sm-hide md-col-3 md-px1  justify-content items-center justify-center ">
                <nav className="ampstart-nav center items-center ">
                    <SideBarNav withimage='false'></SideBarNav></nav>
                <h1 className="h5 md-pb2 "> BANQUE DE DONNEES POUR SUPPORT D’ APPLICATION DE GEOLOCALISATION DES SALLES A
          L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br /> <span className="italic">Aussi profitez de l'<b><a href="/api" className="important">API</a></b> que nous mettons a votre disposition pour une eventuelle réutilisation des donnnées en notre possession</span></p>
                <button className="ampstart-btn ampstart-btn-secondary caps col-12 mt4 mb4 border-none">
                    <Link to="/">se deconnecter</Link>
                </button>
            </aside>
        )
    }
}
export default Aside;
