import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneFieldInput extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({input: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
        <form
          className="inputPanel"
          onChange={this.onInputChange}
          onSubmit={this.onSubmit}
        >
          <input type="text" placeholder={this.props.placeholder} />
          <input type="submit" value={this.props.buttonText} />
        </form>
    );
  }
}

OneFieldInput.propTypes = {
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func
};

export default OneFieldInput;
