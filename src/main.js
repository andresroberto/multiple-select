import React from 'react';
import PropTypes from 'prop-types';

const getValuesFromSelect = selectElement =>
  [...selectElement.options]
    .reduce((values, { selected, value }) => {
      if (selected) {
        return [...values, value];
      }

      return values;
    }, {});

class MultipleSelect extends React.Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    const values = getValuesFromSelect(event.target);

    if (typeof onChange === 'function') {
      onChange(event, values);
    }
  }
  render() {
    return (
      <select
        {...this.props}
        multiple
        onChange={this.handleChange}
      />
    );
  }
}

MultipleSelect.propTypes = {
  onChange: PropTypes.func,
};

export default MultipleSelect;
