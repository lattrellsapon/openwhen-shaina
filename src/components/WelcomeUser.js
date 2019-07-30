import React, { Component } from 'react';

export class WelcomeUser extends Component {
  state = {
    username: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateUsername(this.state.username);
    this.setState({
      username: ''
    });
  };

  hide = () => {
    if (!(this.props.username === '')) {
      return {
        display: 'none'
      };
    }
  };

  render() {
    return (
      <div style={this.hide()}>
        <div className='margin-top-bottom welcome-user-container'>
          <form onSubmit={this.onSubmit}>
            <div className='welcome-heading text-center padding-top-bottom'>
              <h3>Open When Letter Application</h3>
            </div>

            <div className='welcome-question padding-top-bottom'>
              <div className='text-center ' id='user-avatar'>
                <i class='far fa-user' />
              </div>
              <div>
                <input
                  type='text'
                  name='username'
                  value={this.state.username}
                  onChange={this.onChange}
                  placeholder="Whats's your name?"
                  className='user-input'
                />
              </div>
            </div>
            <div className='message-to-user text-center'>
              <p>{this.props.userMessage}</p>
            </div>
            <div className='submit-div text-center padding-top-bottom'>
              <input type='submit' value='Submit' className='submit-button' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomeUser;
