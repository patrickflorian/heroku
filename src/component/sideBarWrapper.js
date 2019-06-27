import React,{Component} from 'react'
import wrapper from '../icons/wrapper.svg'
import '../css/page.css';
class SideBarWrapper extends Component{
    render(){
        return (
            <div role="button" aria-label="open sidebar" on="tap:header-sidebar.toggle" tabIndex="0" className="ampstart-navbar-trigger  pr2 absolute top-0 pr0 mr2 mt2 ">
              <img src={wrapper} alt=''/>
            </div>
        )
    }
}
export default SideBarWrapper;