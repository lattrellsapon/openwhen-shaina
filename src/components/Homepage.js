import React, { Component } from 'react';
import Moods from './Moods';
import CurrentMood from './CurrentMood';

export class Homepage extends Component {
  state = {
    isMood: false,
    currentMood: {
      mood: '',
      bibleHeader: '',
      bibleVerse: '',
      message: ''
    }
  };

  getStyle = () => {
    if (this.props.username === '') {
      return {
        display: 'none'
      };
    } else {
      return {
        display: 'block'
      };
    }
  };
  // style={this.getStyle()}

  showMe = () => {
    if (this.state.isMood) {
      return {
        display: 'block'
      };
    } else {
      return {
        display: 'none'
      };
    }
  };

  chooseMood = (mood, bibleHeader, bibleVerse, message) => {
    this.setState({
      isMood: true,
      currentMood: {
        mood: mood,
        bibleHeader: bibleHeader,
        bibleVerse: bibleVerse,
        message: message
      }
    });
  };
  render() {
    return (
      <div>
        <div style={this.getStyle()}>
          <div className='margin-top-bottom'>
            <div className='welcome-message'>
              <p className='margin-top-bottom'>
                Hi <span className='bold'>{this.props.username}</span> 😁,
              </p>
              <p>
                Welcome to the place where you can find some motivation or
                inspiration despite what you are going through in life right
                now. We all know that life can be a crazy roller-coaster ride.
                One minute you are up on the top of the world and the next
                minute you are crashing on your way down to the ground. No
                matter what it is you are feeling or experiencing in life, this
                is where you can take a minute and reflect about your current
                situation.{' '}
                <span className='bold'>
                  God bless you and please smile for me.
                </span>
              </p>
            </div>
          </div>

          <div style={this.showMe()}>
            <CurrentMood
              mood={this.state.currentMood.mood}
              bibleHeader={this.state.currentMood.bibleHeader}
              bibleVerse={this.state.currentMood.bibleVerse}
              message={this.state.currentMood.message}
            />
          </div>

          <div>
            <div className='text-center margin-top-bottom'>
              <h1>Open when you are . . .</h1>
            </div>
            <div className='grid'>
              <Moods moods={this.props.moods} chooseMood={this.chooseMood} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
