import React ,{Component} from 'react';


import SideBarNav from './sideBarNav'
import AuthButton from './logOutButton'
import '../css/page.css'

class SideBar extends Component{
    render(){
        return (
            <amp-sidebar id="header-sidebar" className="ampstart-sidebar px2 col-4  md-flex flex-column justify-content item-center  justify-start"
                layout="nodisplay">
                <div className="flex justify-start items-center ampstart-sidebar-header mb2">
                    <div role="button" aria-label="close sidebar" on="tap:header-sidebar.toggle" tabIndex="0"
                        className="ampstart-navbar-trigger items-start">✕ </div>
                </div>
                <nav className="ampstart-sidebar-nav ampstart-nav mx2 pt2">
                    <SideBarNav withimage='true'></SideBarNav>
                    <ul className="col-5 list-reset  ampstart-label"><h1 className="h5 md-pb2 "> BANQUE DE DONNEES POUR SUPPORT D’ APPLICATION DE GEOLOCALISATION DES SALLES A
          L'UNIVERSITE DE DSCHANG</h1>
                <p className="mb2 ">Soyez à jour sur les <b>positions des salles, leur disponibilité, leur occupation ainsi que les evenements</b> qui y sont preparés au sein du Campus de l'Université de Dschang<br /><br /> <span className="italic">Aussi profitez de l'<b><a href="/api" className="important">API</a></b> que nous mettons a votre disposition pour une eventuelle réutilisation des donnnées en notre possession</span></p>
                </ul>
                   <AuthButton></AuthButton>
                </nav>

            </amp-sidebar>
        )
    }
}
export default SideBar;