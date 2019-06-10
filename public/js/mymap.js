let map = new GMaps({
    div: '#map',
    lat: 10.063141,
    lng: 5.448287
  });

  GMaps.geocode({
    address: 'Dschang,Décanat De La FSEG De L UDs',
    callback: function (results, status) {
      var firstResult = results[0];
      map.setMapTypeId('satellite');
      let coord ={lat:firstResult.geometry.location.lat(),lng:firstResult.geometry.location.lng()}
      map.setCenter(coord.lat,coord.lng);
      map.setZoom(16);
      map.addMarker({
        lat: coord.lat,
        lng: coord.lng,
        title: 'Decanat de la FSEG UDs',
        infoWindow: {
          content: '<p><b> Decanat de la FSEG UDs </b></p>'
        },
        click: function (e) {
          alert('You clicked in this marker');
        }
      });

    }
  });