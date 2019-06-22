import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ItemList extends Component {
  static propTypes = {
    // columns: PropTypes.number.isRequired,
    // gap: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape),
  }

  static defaultTypes = {
    data: [],
  }

  render() {
    const { data, renderItem } = this.props;
    return (
      <div className="grid">
          {data.map((item, index) => {
              return renderItem(item, index);
          })}
      </div>
    );
  }
}

export default ItemList;
