import React, {Component} from 'react';

class Legend extends Component {
	render() {
		let legend = this.props.legend;

		let items = legend.map((item, index)=>{
			let top = 20 * (index + 1);
			let rect = <rect key={index} width={20} height={10} x={10} y={top} rx={5} ry={5} fill={item.color}></rect>;
			return rect;
		});

		let items2 = legend.map((item, index)=>{
			let top = 20 * (index + 1) + 10;
			let text = <text key={index} x="50" y={top} fill={item.color}>{item.name}</text>;
			return text;
		});
		return (
			<g>{items}{items2}</g>
		);
	}
}

export default Legend;
