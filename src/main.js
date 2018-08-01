const React = require('react');

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

module.exports = MultipleSelect;
