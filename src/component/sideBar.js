import React ,{Component} from 'react';
import SideBarNav from './sideBarNav'
import '../css/page.css'

class SideBar extends Component{
    render(){
        return (
            <amp-sidebar id="header-sidebar" className="ampstart-sidebar px3  md-flex flex-column justify-content items-center justify-center"
            layout="nodisplay">
            <div className="flex justify-start items-center ampstart-sidebar-header">
                <div role="button" aria-label="close sidebar" on="tap:header-sidebar.toggle" tabIndex="0"
                    className="ampstart-navbar-trigger items-start">✕ </div>
            </div>
            <nav className="ampstart-sidebar-nav ampstart-nav">
            <SideBarNav withimage='true'></SideBarNav>
</nav>
            
            </amp-sidebar>
        )
    }
}
export default SideBar;