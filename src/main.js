const React = require('react');

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const values = [...event.target.options]
      .filter(option => option.selected)
      .map(option => option.value);

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
