import React, {Component} from 'react';
import Svg from '../components/Svg';
import Axis from '../components/Axis';
import * as d3 from 'd3';
//import irisMetaData from '../data/iris.json';
import irisMetaData from '../data/iris_test.json';
import Circle from '../components/Circle';
import Legend from '../components/Legend';
import Dashbord from '../components/Dashbord';

const translate = {
	top: 100,
	left: 30,
	right: 30,
	bottom: 30,
}
const ticks = {
	x: 10,
	y: 10
}
const axis = {
	x: {
		width: 600,
		label: 'Sepal Length'
	},
	y: {
		height: 600,
		label: 'Sepal Width'
	}
}


const legend = [
	{
		name: 'setosa',
		color: 'red',
	},
	{
		name: 'versicolor',
		color: 'green',
	},
	{
		name: 'virginica',
		color: 'blue',
	}
]

const SCALES = [
	d3.scaleLinear()
		.domain([0, 1.5 * d3.max(irisMetaData, function (d) {
			return d.sepalLength;
		})]).range([0, axis.x.width]),
	d3.scaleLinear()
		.domain([0, 1.5 * d3.max(irisMetaData, function (d) {
			return d.sepalWidth;
		})]).range([0, axis.x.width]),
	d3.scaleLinear()
		.domain([0, 1.5 * d3.max(irisMetaData, function (d) {
			return d.petalLength;
		})]).range([0, axis.x.width]),
	d3.scaleLinear()
		.domain([0, 1.5 * d3.max(irisMetaData, function (d) {
			return d.petalWidth;
		})]).range([0, axis.x.width]),
	d3.scaleLinear()
		.domain([1.5 * d3.max(irisMetaData, function (d) {
			return d.sepalLength;
		}), 0]).range([0, axis.y.height]),
	d3.scaleLinear()
		.domain([1.5 * d3.max(irisMetaData, function (d) {
			return d.sepalWidth;
		}), 0]).range([0, axis.y.height]),
	d3.scaleLinear()
		.domain([1.5 * d3.max(irisMetaData, function (d) {
			return d.petalLength;
		}), 0]).range([0, axis.y.height]),
	d3.scaleLinear()
		.domain([1.5 * d3.max(irisMetaData, function (d) {
			return d.petalWidth;
		}), 0]).range([0, axis.y.height])
];


class Scatter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			svg: {
				id: 'iris',
				width: 1000,
				height: 1000
			},
			axis: {
				x: {
					scale: SCALES[0],
					orient: 'bottom',
					ticks: ticks.x,
					selected: 0,
				},
				y: {
					scale: SCALES[4],
					orient: 'left',
					ticks: ticks.y,
					selected: 4,
				}
			}
		}
	}

	changeAxis = (currentValue, position) => {
		currentValue = parseInt(currentValue);
		if (position == 'x') {
			this.setState((prevState) => ({
				svg:prevState.svg,
				axis: {
					x: {
						scale:SCALES[currentValue],
						orient: 'bottom',
						ticks: ticks.x,
						selected: currentValue,
					},
					y: {
						scale: SCALES[parseInt(prevState.axis.y.selected)],
						orient: 'left',
						ticks: ticks.y,
						selected: prevState.axis.y.selected,
					}
				}
			}));
		} else {
			this.setState((prevState) => ({
				svg:prevState.svg,
				axis: {
					x: {
						scale:SCALES[parseInt(prevState.axis.x.selected)],
						orient: 'bottom',
						ticks: ticks.x,
						selected: prevState.axis.x.selected,
					},
					y: {
						scale:SCALES[currentValue],
						orient: 'left',
						ticks: ticks.y,
						selected: currentValue,
					}
				}
			}));
		}
	}

	render() {
		return (
			<div>
				<Dashbord changeAxis={this.changeAxis} axis={this.state.axis}></Dashbord>
				<Svg id={this.state.svg.id} width={this.state.svg.width} height={this.state.svg.height}>
					<Axis svg={this.state.svg.id} scale={this.state.axis.y.scale} orient={this.state.axis.y.orient}
					      ticks={this.state.axis.y.ticks} translate={translate} axis={axis}></Axis>
					<Axis svg={this.state.svg.id} scale={this.state.axis.x.scale} orient={this.state.axis.x.orient}
					      ticks={this.state.axis.x.ticks} translate={translate} axis={axis}></Axis>
					<Circle svg={this.state.svg.id} xScale={this.state.axis.x.scale} yScale={this.state.axis.y.scale}
					        irisMetaData={irisMetaData} translate={translate} axis={this.state.axis}></Circle>
					<Legend legend={legend}></Legend>
				</Svg>
			</div>
		);
	}
}


export default Scatter;
