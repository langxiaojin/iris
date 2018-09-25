import {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class Axis extends Component {
	render() {
		return ('');
	}

	componentDidUpdate() {
		this.componentDidMount();
	}

	componentDidMount() {
		let axis;
		console.log(this.props.orient);
		switch (this.props.orient) {
			case 'top':
				axis = d3.axisTop(this.props.scale).ticks(this.props.ticks, ",f");
				break;
			case 'right':
				axis = d3.axisRight(this.props.scale).ticks(this.props.ticks, ",f");
				break;
			case 'bottom':
				d3.select('#bottomAxis').remove();
				axis = d3.axisBottom(this.props.scale).ticks(this.props.ticks, ",f");
				break;
			case 'left':
				d3.select('#leftAxis').remove();
				axis = d3.axisLeft(this.props.scale).ticks(this.props.ticks, ",f");
				break;
		}

		let svg = d3.select('#' + this.props.svg);
		switch (this.props.orient) {
			case 'left':
				svg.append('g')
					.attr('id', 'leftAxis')
					.attr('transform', 'translate(' + this.props.translate.left + ',' + this.props.translate.top + ')')
					.call(axis);
				break;
			case 'bottom':
				svg.append('g')
					.attr('id', 'bottomAxis')
					.attr('transform', 'translate(' + this.props.translate.left + ',' + (this.props.translate.top + this.props.axis.y.height) + ')')
					.call(axis);
				break;
		}
	}
}

Axis.propTypes = {
	id: PropTypes.string,
	scale: PropTypes.func,
	orient: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	ticks: PropTypes.number,
	translate: PropTypes.shape({
		top: PropTypes.number,
		right: PropTypes.number,
		bottom: PropTypes.number,
		left: PropTypes.number
	}),
	axis: PropTypes.shape({
		width: PropTypes.number
	})
}

export default Axis;
