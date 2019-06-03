import React,{Component} from 'react';

class NavInput extends Component{
    render(){
        return (
            
              <div className="ampstart-nav-search pt1 mt1  mb2">
                <div className="ampstart-input inline-block relative m0 p0">
                  <input type="text" value="" name="name" id="name" className="block border-none p0 m0"
                    placeholder={this.props.placeholder} onChange={this.props.onChange}/>
                </div>
              </div>
            
        )
    }
}
export default NavInput;