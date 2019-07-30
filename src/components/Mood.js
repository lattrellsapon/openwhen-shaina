import React, { Component } from 'react';

export class Mood extends Component {
  render() {
    const { mood, bibleHeader, bibleVerse, message, emoji } = this.props.mood;

    return (
      <div
        className='mood-container text-center'
        onClick={this.props.chooseMood.bind(
          this,
          mood,
          bibleHeader,
          bibleVerse,
          message
        )}
      >
        <h3>{mood}</h3>
        <span>{emoji}</span>
      </div>
    );
  }
}

export default Mood;
