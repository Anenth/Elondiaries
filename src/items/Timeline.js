import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
import tweet from '../data/tweet';

class Timeline extends Component {
  render() {
    return (
      <div className="app">
        { Object.entries(tweet).map( ([key, {title, tweetId}])=>
          <div key={key} className='card card--center'>
            <h2 className='card__header'>{title}</h2>
            <Tweet tweetId={tweetId}/>
        </div>)}

      </div>
    );
  }
}

export default Timeline;
