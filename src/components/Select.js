import React,{Component} from 'react';
import './Select.less'

const Option = (props) => (
	<option value={props.value}>{props.name}</option>
)

class Select extends Component {
	changeSelected = (e) => {
		const currentValue = e.target.value;
		this.props.onAxisChange(currentValue, this.props.position);
	}

	render(){
		const props = this.props;
		const options = props.options.map((option, index)=>{
			return <Option key={index} value={option.value} name={option.name}></Option>
		});
		return (
			<select name={props.name} id={props.id} value={props.value} options={props.options} onChange={this.changeSelected}>
				{options}
			</select>
		)
	}
};

export default Select;
