const React = require('react');

class MultiSelect extends React.Component {
  handleChange = (event) => {
    const values = [...event.target.options]
      .filter(option => option.selected)
      .map(option => option.value);

    this.props.onChange(values);
  }
  render() {
    return (
      <select
        {...this.props}
        multiselect
        onChange={this.handleChange}
      >
        {this.props.children}
      </select>
    );
  }
}

module.exports = MultiSelect;
