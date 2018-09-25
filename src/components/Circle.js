import {Component} from 'react';
import * as d3 from 'd3';


class Circle extends Component{
	componentDidMount() {
		let irisMetaData = this.props.irisMetaData;
		let axis = this.props.axis;
		let svg = d3.select('#' + this.props.svg);
		let xScale = this.props.xScale;
		let yScale = this.props.yScale;
		var left = this.props.translate.left;
		var top = this.props.translate.top;
		//绘制圆
		svg.selectAll('#' + 'circle_container')
			.remove();

		svg.append('g').attr('id','circle_container')
			.selectAll("circle")
			.data(irisMetaData)
			.enter()
			.append("circle")
			.attr("fill", function (d) {
				let color = 'black';
				switch (d.target) {
					case 'setosa':
						color = 'red';
						break;
					case 'versicolor':
						color = 'green';
						break;
					case 'virginica':
						color = 'blue';
						break;
				}
				return color;
			})
			.attr("cx", function(d){
				let cx = left + xScale(d.sepalLength);
				console.log(parseInt(axis.x.selected));
				switch (parseInt(axis.x.selected)) {
					case 0:
						cx = left + xScale(d.sepalLength);
						break;
					case 1:
						cx = left + xScale(d.sepalWidth);
						break;
					case 2:
						cx = left + xScale(d.petalLength);
						break;
					case 3:
						cx = left + xScale(d.petalWidth);
						break;
				}
				return cx;
			})
			.attr("cy", function(d){
				let cy = top + yScale(d.sepalWidth);
				console.log(parseInt(axis.y.selected));
				switch (parseInt(axis.y.selected)) {
					case 4:
						cy = top + yScale(d.sepalLength);
						break;
					case 5:
						cy = top + yScale(d.sepalWidth);
						break;
					case 6:
						cy = top + yScale(d.petalLength);
						break;
					case 7:
						cy = top + yScale(d.petalWidth);
						break;
				}
				return cy;
			})
			.attr("r", 2 );

	}

	componentDidUpdate() {
		this.componentDidMount();
	}

	render(){
		return ('');
	};
}

export default Circle;
