import React,{Component}from 'react';
import '../css/page.css';

class SideBarImage extends Component{
    render(){
        console.log(this.props.src)
        return (
            <li><a href="landing.amp.html"className="text-decoration-none block 15">
            <amp-img src={this.props.src} width="279" height="175" layout="responsive" className="ampstart-sidebar-nav-image inline-block mb" alt="Company logo" noloading=""><div placeholder="" className="commerce-loader"></div></amp-img></a>
            </li>
        )
    }
}
export default SideBarImage;