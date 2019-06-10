import React, { Component } from 'react'
import markerIcon from '../icons/marker.svg'
import markerIconFocused from '../icons/marker.1.svg'
//import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activeMarkerFocused:false,
  };

  onMapCreated() {
  }
  onMarkerClick = (props, marker, e) => {
    
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      // selectedPlace :{name :"FSEG de L'UDs"}
        activeMarkerFocused:true,
    })
  
  };
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        activeMarkerFocused:false,
      })
    }
  };

  onInfoWindowClose= (props,marker) => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
      activeMarkerFocused:false,
    })
    console.log('info window closed')
  }

  getMarkerImage ( ){return (this.state.activeMarkerFocused)?markerIconFocused:markerIcon}

  render() {  

    let {
       google, 
    } = this.props;

      const styles={
        map:{
          maxWidth:'100%',
          margin :' 2% auto 1'
        },
        container:{
          maxWidth: '950px',
          width: '100%',
          minHeight:'300px',
          maxHeight:'800px',
          height:'70%'
        }

      }
    return (

      <section className="commerce-blog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
          <Map containerStyle={styles.container}
            google={this.props.google}
            zoom={16}
            initialCenter={{ lat: 5.4429218, lng: 10.068471199999976 }}
            style={styles.map}
            onClick={this.onMapClicked}>

            <Marker onClick={this.onMarkerClick}
              name={'Current location'}
              position={{ lat: 5.4429218, lng: 10.068471199999976 }}
              icon={{
                url: this.getMarkerImage(),
                anchor: new google.maps.Point(16, 32),
                scaledSize: new google.maps.Size(32, 32)
              }}
            />

            <InfoWindow
              marker={(this.state.activeMarker != null) && this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onInfoWindowClose}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        


      </section>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwatu1W2nVb1cIknUFjVkhUjC8fpzWiiM'
})(MapContainer)