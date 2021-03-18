import React from 'react';

const withMousePosition = (WrappedComponent) => {
  class Hoc extends React.Component {
    state = {
      x: 0,
      y: 0
    };

    componentDidMount() {
      document.body.addEventListener(
          'mousemove', 
          this.updateMousePostion
        );
    }

    componentWillUnmount() {
      document.body.removeEventListener(
        'mousemove', 
        this.updateMousePostion
      );
    }

    updateMousePostion = (e) =>  {
      this.setState({
        x: e.pageX,
        y: e.pageY
      });
    }

    render() {
      return (
        <WrappedComponent
          mouseX={this.state.x}
          mouseY={this.state.y}
          {...this.props} />
      );
    }
  }

  return Hoc;
}

export default withMousePosition;