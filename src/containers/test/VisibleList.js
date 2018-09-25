import React, {Component} from 'react';
import irisMetaData from '../../data/iris.json';
import List from "../../components/test/List";
import d3 from 'd3';

class VisibleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			svg: {
				width: 500,
				height: 500
			},
			axis: {
				xWidth: 300,
				yWidth: 300
			},
			scales: [
				d3.scale.linear()
					.domain([0, 1.2 * d3.max(irisMetaData, function (d) {
						return d.sepalLength;
					})]),
				d3.scale.linear()
					.domain([0, 1.2 * d3.max(irisMetaData, function (d) {
						return d.sepalLength;
					})]),
				d3.scale.linear()
					.domain([0, 1.2 * d3.max(irisMetaData, function (d) {
						return d.sepalLength;
					})]),
				d3.scale.linear()
					.domain([0, 1.2 * d3.max(irisMetaData, function (d) {
						return d.sepalLength;
					})])
			],
			padding: {
				top: 30,
				left: 30,
				right: 30,
				bottom: 30
			},
		}
	}

	showItem = (id) => {
		this.setState(prevState => (
			prevState.items.map((item) => {
				if (item.id == id) {
					item.isShow = !item.isShow
				}
			})
		))
	}

	render() {
		return (
			<List items={this.state.items} showItem={this.showItem}></List>
		);
	}
}

export default VisibleList;
