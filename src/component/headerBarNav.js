import React, {Component} from 'react'
import user_icon from '../icons/user.svg'
import '../css/page.css';


class HeaderBarNavItem extends Component{
    render(){
        return (<div
    className="ampstart-headerbar-fixed center m0 p0 flex justify-center nowrap absolute top-0 right-0 pt2 pr3 ">
                <div className="mr2">
                </div>
                <a href="cart.amp.html" className="text-decoration-none mr2 ampstart-headerbar-fixed-link ">

                    <div className="ampstart-headerbar-icon-wrapper relative"><img src={user_icon} alt=''/></div>
                </a>

            </div>);
    }
}
export default HeaderBarNavItem;
