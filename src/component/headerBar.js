import React ,{Component} from 'react';
import logo from '../img/mymap.png'
import SideBarWrapper from './sideBarWrapper';
import HeaderBarNavItem from './headerBarNav';
import '../css/page.css';

class HeaderBar extends Component{
    render(){
        return (
            <header
            className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 pt2 md-pt0 ">
            <SideBarWrapper></SideBarWrapper>
            <a href="landing.amp.html"
                className="text-decoration-none inline-block mx-auto ampstart-headerbar-home-link mb1 md-mb0 ">
                <amp-img src={logo} width="100" height="30" layout="fixed" class="my0 mx-auto "
                    alt="logo">
                </amp-img>
            </a>
            <HeaderBarNavItem></HeaderBarNavItem>

        </header>

        );
    }
}
export default HeaderBar;