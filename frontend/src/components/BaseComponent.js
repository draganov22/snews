import React from 'react';

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  setError(error) {
    this.setState({ error });
  }

  clearError() {
    this.setState({ error: null });
  }

  render() {
    return (
      <div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        {this.props.children}
      </div>
    );
  }
}

export default BaseComponent;
