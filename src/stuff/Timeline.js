import React, { Component } from 'react';
import tweet from '../data/tweet';
import { DaySection } from '../mine/components/Sections'

class Timeline extends Component {
  render() {
    return (
      <div className="app">
        { Object.entries(tweet).map(([key, item]) => <DaySection key={key} tweet={item} />)}

      </div>
    );
  }
}

export default Timeline;
