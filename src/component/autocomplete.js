import React,{Component, Fragment, useImperativeHandle} from 'react';
import Proptypes from 'prop-types';


class Autocomplete extends Component{

    static propTypes={
        suggestions : Proptypes.instanceOf(Array)
    }
    static defaultProps= {
        suggestions:[]
    }

    constructor(props){
        super(props);
        this.state={
            //the active selection's index
            activeSuggestion:0,
            // suggestions that matchs user's input
            filteredSuggestions:[],
            //whether suggestions are shown
            showSuggestions:false,
            //what the user entered
            userInput:''
        }
    }
    //event fired when this input value has changed
    onChange=e=>{
        const {suggestions} = this.props;
        const userInput = e.target.value;
        
        //Filter our suggestions that doesn't  containsthe user's input
        const filteredSuggestions = suggestions.filter(
            (suggestion)=>{ return suggestion.classroom.toLowerCase().indexOf(userInput.toLowerCase())>-1 || suggestion.description.toLowerCase().indexOf(userInput.toLowerCase())>-1;}
        )

        //update the user input and filtered suggestions ,reset the active suggestion and make sure the suggestion are shown

        this.setState({
            activeSuggestion:0,
            filteredSuggestions,
            showSuggestions:true,
            userInput:e.target.value
        });

    }
    
    //event fired when a user cliick ona sugestion

    onClick = e=>{
        
        //update user input and reset the rest of the state
        this.props.onChoose(this.state.filteredSuggestions[parseInt(e.target.id)-1]);
    
        this.setState({
            /* activeSuggestion:0,
            filteredSuggestions:[], */
            showSuggestions:false,
            userInput: e.target.innerText,
        });
        
    }
    onMouseOver= (e)=>{
        this.setState({
            activeSuggestion:e.target.id,
            showSuggestions:true,
            userInput: e.target.innerText,
        });
    }
    onMouseOut= (e)=>{
        this.setState({
            showSuggestions:false,
            userInput:''
        });
    }
    //event fired when user a key down

    onKeyDown= e=>{
        const { activeSuggestion , filteredSuggestions} = this.state;

        //user pressed the enterkey,update the input and close the suggestions

        if(e.keyCode === 13){
            this.setState({
                activeSuggestion:0,
                showSuggestions:false,
                userInput:filteredSuggestions[activeSuggestion].classroom + ',' + filteredSuggestions[activeSuggestion].description,
            });
        }

        //user pressed the up arrow key decrement the index 

        else if( e.keyCode === 38){
            if(activeSuggestion==0) return;
            this.setState({
                activeSuggestion: this.state.activeSuggestion -1,
            });
        }

        //user pressed down arrow key increment the index

        else if( e.keyCode === 40 ){
            if(activeSuggestion-1 === filteredSuggestions.length) return;
            this.setState({ activeSuggestion : this.state.activeSuggestion+1});
        }

    };

    render(){
        const {
            onChange,
            onClick,
            onKeyDown,
            onMouseOver,
            onMouseOut,
            state:{
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput,
            }
        } = this;

        let suggestionsListComponent;

        if(showSuggestions && userInput){
            if(filteredSuggestions.length){
                suggestionsListComponent = (
                    <ul className="suggestions" onMouseLeave={onMouseOut}>
                        {
                            filteredSuggestions.map((suggestion,index)=>{
                                let className;

                                //flag the active suggestion with a class
                                if(index === activeSuggestion){
                                    className = "suggestion-active";
                                }
                                return(<li
                                    className={className}
                                    key={index}
                                    id={index+1}
                                    onClick = {onClick}
                                    onMouseOver={onMouseOver}
                                >
                                    {suggestion.classroom}
                                </li>)
                            })
                        }
                    </ul>
                );
            } else{
                suggestionsListComponent = (
                    <div className="no-sugestions">
                        <em>no suggestions, you're on your own!</em>
                    </div>
                )
            }
        }
        return (
            <Fragment >
                <input
                className="block border-bottom p0 m0"
                type="text"
                onChange={onChange}
                onClick={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                placeholder="find a classroom"
                style={{position:'relative',backgroundColor:'#fff',color:'#222',height:'30px'}}/>
                {suggestionsListComponent}
            </Fragment>
        )
    }


}

export default Autocomplete;