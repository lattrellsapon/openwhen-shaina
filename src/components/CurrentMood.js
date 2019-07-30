import React, { Component } from 'react';

export class CurrentMood extends Component {
  render() {
    return (
      <div className='current-mood-container margin-top-bottom'>
        {/* <div>
          <button>Back button</button>
        </div> */}
        <div className='text-center margin-top-bottom'>
          <h1>{this.props.mood}</h1>
        </div>
        <div className='bible-verse-container text-center margin-top-bottom'>
          <div className='margin-top-bottom'>
            <span className='bible-verse bold'>{this.props.bibleHeader}</span>
          </div>
          <p className='italic bold'>{<p>"{this.props.bibleVerse}"</p>}</p>
        </div>
        <div className='message-container margin-top-bottom'>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default CurrentMood;
