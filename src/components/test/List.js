import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({items, showItem}) => (
	<ul>
		{items.map(item => (
			<Item key={item.id} {...item} showItem={() => showItem(item.id)} />
		))}
	</ul>
)

List.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			isShow: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	showItem: PropTypes.func.isRequired
}

export default List;


