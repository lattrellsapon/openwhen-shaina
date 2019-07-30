import React, { Component } from 'react';
import Mood from './Mood';

export class Moods extends Component {
  render() {
    return this.props.moods.map(mood => (
      <div>
        <Mood key={mood.id} mood={mood}  chooseMood={this.props.chooseMood} />
      </div>
    ));
  }
}

export default Moods;
