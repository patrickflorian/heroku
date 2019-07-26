import React ,{Component } from 'react';
import {connect} from 'react-redux';
//import {userConstants} from '../constants';
import {userActions} from '../actions';

class UserForm extends Component{
    constructor(props){
        super(props);
        this.state={
            passwordmatch:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const {users}= this.props;
        if(users.action==="update"&& users.update.user  ){
            const id = users.update.user.id;
            const email=users.update.user.email;
            const password=users.update.user.password;
            this.setState({email,password:'',confirm_pwd:'',id,passwordmatch:false});
        }
     }
    
    passwordMatch(confirm_pwd,password){
        
        if (confirm_pwd===password)  this.setState({passwordmatch:true});
        else this.setState({passwordmatch:false});
        return confirm_pwd===password;
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        if (this.props.users.action==="update") this.handleUpdate();
        else this.handleAdd();

    }
    handleUpdate() {
        console.log("update launch");
        this.setState({ submitted: true });
        const {id,email, password,role ,confirm_pwd} = this.state;
        const { dispatch } = this.props;
    
        if ( this.passwordMatch(confirm_pwd,password) && email && password && role) {
            console.log('in');
            dispatch(userActions.update({id,email, password,is_admin:(role==='administrator')})/* {type:userConstants.UPDATE_SUCCESS,user:{id,email, password,role}} */);
        }
    }

    handleAdd() {
        console.log("add launch");
        this.setState({ submitted: true });
        const { email, password,role ,confirm_pwd} = this.state;
        const { dispatch } = this.props;
    
        if ( this.passwordMatch(confirm_pwd,password) && email && password && role) {
            console.log('in');
             dispatch( userActions.add({email, password,is_admin:(role==='administrator')}) /* {type:userConstants.ADD_SUCCESS,user:{id:5,email, password,role}} */)
        }
    }
    render(){
        let {email,password}={email:"",password:"",role:""};
        const {users} = this.props;
        const {submitted} = this.state;
        if(users.action==="update"&& users.update.user){
            email=users.update.user.email;
        }
        return (
            <form className="col-12 mb2" onSubmit={this.handleSubmit}>
               
                <div className="md-col-6 md-pl2 ">
                    <div className="ampstart-input inline-block relative m0 p0 mb1 mt2 border-bottom">
                        <select onChange={this.handleChange} name="role" required>
                            <option value=''>----------</option>
                            <option value="collector"  >Collector</option>
                            <option value="administrator" >Administrator</option>
                        </select>
                        <label htmlFor="role" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Rôle <span className="danger">*</span></label>
                    </div>
                    {((submitted && !this.state.role)||this.state.role==='') &&
                                <div className="help-block right danger">select a role</div>
                            }
                    <div className="ampstart-input inline-block relative m0 p0 mb1 mt3 border-bottom ">
                        <input type="email" name="email" id="email" defaultValue={email} onChange={this.handleChange} className="block border-none p0 m0" placeholder="email"  />
                        <label htmlFor="email" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Email <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.email &&
                                <div className="help-block right danger">email is required</div>
                            }
                    <div className="ampstart-input inline-block relative m0 p0 mt3 border-bottom">
                        <input type="password"  defaultValue={password} name="password" id="password"  onChange={this.handleChange} className="block border p0 m0" placeholder="Password" />
                        <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Password <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.password &&
                                <div className="help-block right danger">password is required</div>
                            }
                    <div className="ampstart-input inline-block relative m0 p0 mb1 mt2 border-bottom">
                        <input type="password" name="confirm_pwd" defaultValue={password} id="confirm_pwd" onChange={this.handleChange} className="block border p0 m0" placeholder="confirm password" />
                        <label htmlFor="C" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">confirm password</label>
                    </div>
                    {submitted && !this.state.passwordmatch &&
                                <div className="help-block right danger mb1">password does'nt match</div>
                            }
                    <div className="mb2 md-mt3">
                        {
                            (users.action==="update")?
                                <button className="col-4 ampstart-btn mr2" type="submit" >update</button> 
                                : <button className="col-4 ampstart-btn mr2" type="submit" >save</button>
                        }
                        
                        <button className="col-4 ampstart-btn ampstart-btn-secondary ml2" onClick={this.props.onClose}>close</button>
                    </div>

                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        formAreaVisible:state.formAreaVisible
    };
}

/* const mapDispatchToProps = (dispatch)=>{
        return {
            dispatch :(action)=>{ dispatch(action) }
        }
    } */
export default connect(mapStateToProps/* ,mapDispatchToProps */)(UserForm)