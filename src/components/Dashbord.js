import React, {Component} from 'react';
import Select from './Select';

class Dashbord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			xList: [
				{
					name: 'Sepal Length',
					value: 0,
				},
				{
					name: 'Sepal Width',
					value: 1,
				},
				{
					name: 'Petal Length',
					value: 2,
				},
				{
					name: 'Petal Width',
					value: 3,
				}
			],
			yList: [
				{
					name: 'Sepal Length',
					value: 4,
				},
				{
					name: 'Sepal Width',
					value: 5,
				},
				{
					name: 'Petal Length',
					value: 6,
				},
				{
					name: 'Petal Width',
					value: 7,
				}
			],
		}
	}

	changeAxis = (currentValue, position) => {
		this.props.changeAxis(currentValue, position);
	}

	render() {
		return (
			<div>
				<label htmlFor="xAxis">X 轴选项:</label>
				<Select key={'x'} name={'xAxis'} id={'xAxis'} value={this.props.axis.x.selected} options={this.state.xList}
				        onAxisChange={this.changeAxis} position={'x'}></Select>

				<label htmlFor="xAxis">Y 轴选项:</label>
				<Select key={'y'} name={'yAxis'} id={'yAxis'} value={this.props.axis.y.selected} options={this.state.yList}
				        onAxisChange={this.changeAxis} position={'y'}></Select>
			</div>
		);
	}
}

export default Dashbord;
