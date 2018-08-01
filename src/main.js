const React = require('react');
const PropTypes = require('prop-types');

const getValuesFromSelect = selectElement =>
  [...selectElement.options]
    .reduce((values, option) => {
      if (option.value) {
        return [...values, value];
      }

      return values;
    }, {});

class MultipleSelect extends React.Component {
  handleChange = (event) => {
    const values = getValuesFromSelect(event.target);
    this.props.onChange(event, values);
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

module.exports = MultipleSelect;
