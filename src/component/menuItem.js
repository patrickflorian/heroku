import React ,{Component} from 'react'
import '../css/page.css';
import link from '../icons/link'

class MenuItem extends Component{

    render(){
        return (
            <li className="ampstart-nav-item md-col-12">
                <a className="ampstart-nav-link " href="{this.props.href}">
                    {link}
                    {this.props.label}
                </a>
            </li>
        );
    }
}
export default MenuItem;