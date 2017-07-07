import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock_widget';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<ClockWidget/>, root);
});
