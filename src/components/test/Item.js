import React from 'react';
import PropTypes from 'prop-types'

const Item = ({showItem, isShow, text}) => (
	<li onClick={showItem}
		style={
			{display: isShow?'list-item':'none'}
		}
	>
		{text}
	</li>
);

Item.propTypes = {
	showItem: PropTypes.func.isRequired,
	isShow: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Item;
