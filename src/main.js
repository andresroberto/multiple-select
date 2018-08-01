const React = require('react');

class MultipleSelect extends React.Component {
  handleChange = (event) => {
    const values = [...event.target.options]
      .reduce((values, option) => {
        if (option.value) {
          return [...values, value];
        }

        return values;
      }, {});

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
