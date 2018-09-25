import React, {Component} from 'react';
import './Import.less';

class ImportFromFile extends Component {
	constructor(props) {
		super(props);
	}

	import = (e) => {
		let reader = new FileReader();
		let file = e.target.files[0];
		let props = this.props;
		reader.onload = (reader) => {
			if (reader.target.result) {
				let res = reader.target.result.split('\n');
				if (res.length > 0) {
					res.shift();
					res.pop();
				}
				res = res.map((item) => {
					let arr = item.split(' ');
					console.log(arr[5]);
					console.log(arr[1]);
					return {
						sepalLength: arr[1],
						sepalWidth: arr[2],
						petalLength: arr[3],
						petalWidth: arr[4],
						target: arr[5]
					}
				}).map(item=>{
					item.target = item.target.replace(new RegExp('\"', 'g'),'');
					return item;
				});

				props.importFromFile(res);
			}
		}
		reader.readAsText(file);
	}

	render() {
		return (
			<div>
				<input type="file" onChange={this.import}/>
			</div>
		);
	}
}

export default ImportFromFile;
