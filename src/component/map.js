import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


import markerIconFocused from '../icons/marker.1.svg';
import loading from '../icons/loading.gif';
//import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

import { locationActions } from '../actions';
import { locationConstants } from '../constants';

class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activeMarkerFocused: false,
    center:{ lat: 5.4429218, lng: 10.068471199999976 }
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
      center:marker.position
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

  getMarkerImage() { return  markerIconFocused }
  updateLocation(location) {
    return (e) => {this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:false});this.props.dispatch({type:locationConstants.UPDATE_ACTION,value:true,location:location});this.props.dispatch({type:'TOGGLE_FORM_AREA_VISIBILITY',value:true});this.props.dispatch({type:'TOGGLE_ACTIVE_MENU_ITEM',value:'pos'});};
  }
  handleDeleteLocation(id) {
    return (e) => this.props.dispatch(locationActions.delete(id));
  }


  render() {

    let {
      google,locations
    } = this.props;

    const styles = {
      map: {
        maxWidth: '100%',
        margin: ' 2% auto 1'
      },
      container: {
        maxWidth: '950px',
        width: '100%',
        minHeight: '300px',
        maxHeight: '100%',
        height: '70%'
      }

    }
    return (
      <section className="commerce-blog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
        {locations.loading && <div> <amp-lightbox id="my-lightbox"
          layout="display">
          <div class="lightbox"
            on="tap:my-lightbox.close"
            role="button"
            tabindex="0">
            <h1><img class="center" width="200px"  src={loading} alt="" /></h1>
          </div>
        </amp-lightbox></div>}
      <Map containerStyle={styles.container}
        google={this.props.google}
        zoom={16}
        initialCenter={this.state.center}
        center={this.state.center}
        style={styles.map}
        onClick={this.onMapClicked}>

        {locations.items && locations.items.map((location,i)=>
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
              <button className="ampstart-btn ampstart-btn-secondary" onClick={this.state.selectedPlace.location&&this.updateLocation(this.state.selectedPlace.location)} style={{ "color": "#f6f" }}>
                <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                  height="20" viewBox="0 0 20 20">
                  <path fill="currentColor"
                    d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z">
                  </path>
                </svg>
              </button>

              <button className="ampstart-btn ampstart-btn-secondary ml3 right" onClick={this.state.selectedPlace.location&&this.handleDeleteLocation(this.state.selectedPlace.location.id)} style={{ "color": "#f00" }}>
                {this.state.selectedPlace.location&&this.state.selectedPlace.location.deleting ? <em className="danger"> <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></em>
                  : <svg className="icon icon-user" xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 20 20">
                    <path fill="currentColor"
                      d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306">
                    </path>
                  </svg>}
              </button>
              </div>
          </div>
        </InfoWindow>
      </Map>
      </section >
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
