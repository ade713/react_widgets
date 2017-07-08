import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock_widget';
import WeatherWidget from './weather_widget';

	class Root extends React.Component {
		render () {
			return(
				<div>
						<ClockWidget />
						<WeatherWidget />
				</div>
			);
		}
	}

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Root/>, document.getElementById("root"));
});
