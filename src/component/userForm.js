import React ,{Component } from 'react'


class UserForm extends Component{
    state={
        login:null,
        username:null,
        password:null,
        role:null
    }

    render(){
        return (
            <div className="col-12 mb2">
                <aside className=" md-col-6 md-pr2 left">
                    <div className="ampstart-input inline-block relative m0 p0  mt3 border-bottom ">
                        <input type="text" name="username" id="username" className="block border-none p0 m0" placeholder="username" onChange={this._checkUserName} />
                        <label htmlFor="username" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">username</label>
                    </div>
                    <div className="ampstart-input inline-block relative m0 p0  mt2 border-bottom">
                        <select onSelect={this.updateUserRole()}>
                            <option value="collector">Collector</option>
                            <option value="admin">Administrator</option>
                        </select>
                        <label htmlFor="role" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Rôle</label>
                    </div>
                    <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom ">
                        <input type="text" name="login" id="login" className="block border-none p0 m0" placeholder="login" onChange={this._checkLogin} />
                        <label htmlFor="login" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Login</label>
                    </div>

                </aside>
                <div className="md-col-6 md-pl2 right">
                    <div className="ampstart-input inline-block relative m0 p0 mt4 border-bottom">
                        <input type="password" name="pwd" id="pwd" className="block border p0 m0" placeholder="Password" onChange={this._checkPassword} />
                        <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password</label>
                    </div>
                    <div className="ampstart-input inline-block relative m0 p0 mb3 mt2 border-bottom">
                        <input type="password" name="confirm_pwd" id="confirm_pwd" className="block border p0 m0" placeholder="confirm password" onChange={this._checkConfirm} />
                        <label htmlFor="confirm_pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">confirm password</label>
                    </div>
                    <div className="mb2 md-mt3">
                        <button className="col-4 ampstart-btn mr2" disabled>save</button>
                        <button className="col-4 ampstart-btn ampstart-btn-secondary ml2" onClick={this.props.onClose}>close</button>
                    </div>

                </div>
            </div>
        )
    }
}


export default (UserForm)