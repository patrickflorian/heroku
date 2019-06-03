import React, { Component  } from "react";
import '../css/page.css';
import MenuItem from "./menuItem";


class MenuList extends Component{
    render() {
        return (
          <ul className="list-reset ampstart-label">
            {this.props.list.map((item,index)=>
                <MenuItem key={index} className="ampstart-nav-item pt1 mt1 mb2">{item}</MenuItem>
                )}
          </ul>
        );
      }
}
export default MenuList;