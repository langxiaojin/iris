import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => (
	<svg id={props.id} width={props.width} height={props.height}>
		{props.children}
	</svg>
);

Svg.propTypes = {
	id: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default Svg;
