import React from 'react';

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: this.request()
    };
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    });
  }

  request() {
    let request = new XMLHttpRequest();

    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3bd795b638557511b4f26051417df387`, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        const resp = JSON.parse(request.responseText);
        console.log(this);
        this.setState({
          weather: resp
        });
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
    }

  render() {
    return (
      <div className="weather">
        <h2>Weather:</h2>
        <h2>{this.state.weather}</h2>
      </div>
    );
  }
}


export default WeatherWidget;
