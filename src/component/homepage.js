import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


import logo from '../img/mymap.png';
import markerIconFocused from '../icons/marker.1.svg';
import search_marker from '../icons/markerf.svg';
import loop from '../icons/loop.svg';
import loading from '../icons/loading.gif';

import AutoComplete from './autocomplete';

import { locationActions } from '../actions';
import { locationConstants } from '../constants';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class MapContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            center: { lat: 5.4429218, lng: 10.068471199999976 },
            searchedLocation:{}
        };
        //this.onChoose = this.onChoose.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(locationActions.getAll());
    }

    onMapCreated() {

    }
    search(e){
        const { value } = e.target;
    }
    onMarkerClick = (props, marker, e) => {
        console.log(props)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            //center: marker.position
        })

    };
    onChoose=(location)=>{
        console.log(location)
        this.setState({
            searchedLocation:location,
            center:{lat:location.latitude,lng:location.longitude},
        });
        console.log('center moved');
        console.log(this.state.center)
    }
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                activeMarkerFocused: false,
            })
        }
    };

    onInfoWindowClose = (props, marker) => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
            activeMarkerFocused: false,
        })
        console.log('info window closed')
    }

    getMarkerImage() { return markerIconFocused }
    updateLocation(location) {
        return (e) => { this.props.dispatch({ type: 'TOGGLE_FORM_AREA_VISIBILITY', value: false }); this.props.dispatch({ type: locationConstants.UPDATE_ACTION, value: true, location: location }); this.props.dispatch({ type: 'TOGGLE_FORM_AREA_VISIBILITY', value: true }); this.props.dispatch({ type: 'TOGGLE_ACTIVE_MENU_ITEM', value: 'pos' }); };
    }
    handleDeleteLocation(id) {
        return (e) => this.props.dispatch(locationActions.delete(id));
    }


    render() {
    
        const {
            google, locations
        } = this.props;

        const styles = {
            map: {
                maxWidth: '100%',
                margin: ' 2% auto 1',
                height: '100%'
            },
            container: {
                maxWidth: '1380px',
                height: `600px`,
                marginTop:'6%'
            },
            floating:{
                bottom:'40px',
                left:'20px',
                position:'fixed',
                boxShadow:'2px 2px 3px #999'
            },
            search_input:{
                top:'120px',
                left:'20px',
                position:'fixed',
                width:'35%',
                minWidth:'150px',
                margin:'0 auto',
                boxShadow:'2px 2px 5px #999',
                color: '#fff',
            }

        }
        return (

            <div>
                {locations.loading && <div> <amp-lightbox id="my-lightbox"
                    layout="display">
                    <div className="lightbox"
                        on="tap:my-lightbox.close"
                        role="button"
                        tabindex="0">
                        <h1><img className="center" width="200px" src={loading} alt="" /></h1>
                    </div>
                </amp-lightbox></div>}
                <Map containerStyle={styles.container}
                    google={this.props.google}
                    zoom={16}
                    initialCenter={this.state.center}
                    center={this.state.center}
                    loadingElement={<div style={{ height: `100%` }} />}
                    style={styles.map}
                    onClick={this.onMapClicked}>

                    {(locations.items&&this.state.searchedLocation) && locations.items.map((location, i) =>
                        <Marker key={i} onClick={this.onMarkerClick}
                            location={location}
                            name={location.classroom}
                            description={location.description}
                            position={{ lat: location.latitude, lng: location.longitude }}
                            icon={{
                                url: this.getMarkerImage(),
                                anchor: new google.maps.Point(16, 32),
                                scaledSize: new google.maps.Size(32, 32)
                            }}
                        />
                    )}
                    {this.state.searchedLocation&&
                        <Marker onClick={this.onMarkerClick}
                            location={this.searchedLocation}
                            name={this.state.searchedLocation.classroom}
                            description={this.state.searchedLocation.description}
                            position={{lat:this.state.searchedLocation.latitude,lng:this.state.searchedLocation.longitude}}
                            icon={{
                                url: search_marker,
                                anchor: new google.maps.Point(16, 32),
                                scaledSize: new google.maps.Size(32, 32)
                            }}
                        />
                    }

                    <InfoWindow
                        marker={(this.state.activeMarker != null) && this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoWindowClose}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                            <em>{this.state.selectedPlace.description}</em>
                            <div className="mt2">
                            </div>
                        </div>
                    </InfoWindow>
                </Map>
                <div className="ampstart-input inline-block absolute m0 p0" style={styles.search_input}>
                            <AutoComplete suggestions={locations.items} onChoose={this.onChoose}/>
                            <label className="absolute top-0 right-0 bottom-0 left-0" 
                            aria-hidden="false"
                            style={{position:'relative',backgroundColor:'#fff',color:'#222',height:'30px'}}
                            >find a classroom <img src={loop} alt="" width="15"/></label>
                        </div>
                <header
                    className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 pt2 md-pt0 ">

                    <a href="/home"
                        className="text-decoration-none inline-block mx-auto ampstart-headerbar-home-link mb1 md-mb0 ">
                        <amp-img src={logo} width="100" height="30" layout="fixed" class="my0 mx-auto "
                            alt="logo">
                        </amp-img>

                
                    </a>                        
                    
                </header>
                        
                    
                <Link className="ampstart-btn " to='/login' style={styles.floating}>
                    SIGN IN {/* <br/><em>for more</em> */}
                </Link>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { locations, authentication } = state;
    const { user } = authentication;
    return {
        user,
        locations,
        formAreaVisible: state.formAreaVisible
    };
}
export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: 'AIzaSyAwatu1W2nVb1cIknUFjVkhUjC8fpzWiiM'
})(MapContainer))
