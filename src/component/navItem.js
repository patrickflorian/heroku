import React ,{Component} from 'react';
import '../css/page.css';
class NavItem extends Component{
    
    render(){
        return (
            <li onClick={this.props.onClick} className= {(this.props.active)?"ampstart-nav-item md-col-12 active":"ampstart-nav-item md-col-12"}  ><span className="ampstart-nav-link "  href=""><img src={this.props.icon} alt=""/> {this.props.title}</span></li>
        )
    }
}

export default NavItem;