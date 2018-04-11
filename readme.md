# React Multiple Select Component
A very simple React component on top of a select element with multiple attribute.

It works just the same as a normal select element does, but the 'multiple' prop is always set to true, so it always renders a multiple select element.

The function passed as the 'onChange' prop will receive two parameters:
  - The original event.
  - An array of selected values (This is the only reason I've made this component).

For example:

```javascript
import MultipleSelect from 'react-multiple-select-component';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {values: []};
  }
  handleChange = (event, values) => {
    console.log('The original event', event);
    console.log('An array of selected values', values);

    this.setState({values});
  }
  render() {
    return (
      <MultipleSelect
        value={this.state.values}
        onChange={this.handleChange}
      >
        <option value="foo">foo</option>
        <option value="bar">bar</option>
        <option value="baz">baz</option>
      </MultipleSelect>
    );
  } 
}

ReactDOM.render(
  <Sample />,
  document.getElementById('root')
);
```
