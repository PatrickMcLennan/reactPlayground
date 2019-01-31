import { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  };

  toggler = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggler
    });
  }
}

export default Toggle;
