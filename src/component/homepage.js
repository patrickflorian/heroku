import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


import logo from '../img/mymap.png';
import markerIconFocused from '../icons/marker.1.svg';
import loading from '../icons/loading.gif';


import { locationActions } from '../actions';
import { locationConstants } from '../constants';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        activeMarkerFocused: false,
        center: { lat: 5.4429218, lng: 10.068471199999976 }
    };
    componentDidMount() {
        this.props.dispatch(locationActions.getAll());
    }

    onMapCreated() {

    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            // selectedPlace :{name :"FSEG de L'UDs"}
            activeMarkerFocused: true,
            center: marker.position
        })

    };
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

        let {
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
                left:'40px',
                position:'fixed',
                boxShadow:'2px 2px 3px #999'
            }

        }
        return (

            <div>
                {locations.loading && <div> <amp-lightbox id="my-lightbox"
                    layout="display">
                    <div class="lightbox"
                        on="tap:my-lightbox.close"
                        role="button"
                        tabindex="0">
                        <h1><img class="center" width="200px" src={loading} alt="" /></h1>
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

                    {locations.items && locations.items.map((location, i) =>
                        <Marker key={i} onClick={this.onMarkerClick}
                            location={location}
                            name={location.name}
                            description={location.description}
                            position={{ lat: location.lat, lng: location.lng }}
                            icon={{
                                url: this.getMarkerImage(),
                                anchor: new google.maps.Point(16, 32),
                                scaledSize: new google.maps.Size(32, 32)
                            }}
                        />
                    )}

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
                <header
                    className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 pt2 md-pt0 " style={{backgroundColor:'#222'}}>

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
