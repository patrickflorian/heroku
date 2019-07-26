import React ,{Component } from 'react';
import {connect} from 'react-redux';
//import {locationConstants} from '../constants';
import {locationActions} from '../actions'


class  LocationForm extends Component{
    constructor(props){
		super(props);
		this.state={
			submitted:false,
		};
        this.handleChange = this.handleChange.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const {locations}= this.props;
        if(locations.update.location && locations.action==="update"){
            const { id,latitude,longitude,classroom,description}= locations.update.location;
            this.setState({ id,latitude,longitude,classroom,description});
        }
     }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        
       this.setState({ submitted: true });
        const { id,latitude,longitude,classroom,description}= this.state;
        const { dispatch } = this.props;
    
        if ( latitude && longitude && classroom && description) {
            dispatch(locationActions.update({ id,latitude,longitude,classroom,description})/* {type:locationConstants.UPDATE_SUCCESS,location:{ id,latitude,longitude,classroom,description}} */);
        }

    }
    

    handleNumber(e) {
        const { name, value } = e.target;
        if(!isNaN(value)) this.setState({ [name]: value });
        else {
            this.setState({[name]:''});
        }
        
    }
    render(){
        const {longitude,latitude,classroom,description,submitted} = this.state;
        console.log(this.state);
        return (
            <form className="col-12 mb2" onSubmit={this.handleSubmit}>
               
                <div className="md-col-6 md-pl2 ">
                
                    <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                        <input type="text" name="classroom" id="classroom" defaultValue={classroom} onChange={this.handleChange} className="block border-none p0 m0" placeholder="classroom"  />
                        <label htmlFor="email" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">classroom <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.classroom &&
                                <div className="help-block right danger">classroom is required</div>
							}
							<div className="ampstart-input inline-block relative m0 p0 mb2 border-bottom ">
                        <input type="text" name="description" id="description" defaultValue={description} onChange={this.handleChange} className="block border-none p0 m0" placeholder="description"  />
                        <label htmlFor="email" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Description <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.description && 
                                <div className="help-block right danger">description is required</div>
                            }
                    <div className="ampstart-input inline-block relative m0 p0  border-bottom">
                        <input type="text"   name="latitude" defaultValue={latitude} id="latitude"  onChange={this.handleNumber} className="block border p0 m0" placeholder="latitude" />
                        <label htmlFor="pwd" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">latitude <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.latitude &&
                                <div className="help-block right danger">latitude is required or wrong entry</div>
                            }
                    <div className="ampstart-input inline-block relative m0 p0 mb2 mt2 border-bottom">
                        <input type="text" name="longitude" defaultValue={longitude} id="longitude" onChange={this.handleNumber} className="block border p0 m0" placeholder="longitude" />
                        <label htmlFor="C" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">longitude <span className="danger">*</span></label>
                    </div>
                    {submitted && !this.state.longitude &&
                                <div className="help-block right danger mb2">longitude is required or wrong entry</div>
                            }
                    <div className="mb2 md-mt3">
                       <button className="col-4 ampstart-btn mr2" type="submit" >update</button> 
                      
                        <button className="col-4 ampstart-btn ampstart-btn-secondary ml2" onClick={this.props.onClose}>close</button>
                    </div>

                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    const { locations, authentication } = state;
    const { location } = authentication;
    return {
        location,
        locations,
        formAreaVisible:state.formAreaVisible
    };
}

/* const mapDispatchToProps = (dispatch)=>{
        return {
            dispatch :(action)=>{ dispatch(action) }
        }
    } */
export default connect(mapStateToProps/* ,mapDispatchToProps */)(LocationForm)