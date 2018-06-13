import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";

const TOPICS = {
  TESLA: 'tesla',
  ROADSTER: 'roadster'
};

const content = {
  1: {
    tweetId: '1006597562156003328',
    title: 'Tesla Re-organization',
    topic: TOPICS.TESLA
  },
  2: {
    tweetId: '1005577738332172289',
    title: 'Tesla Roadster will include ~10 small rocket thrusters',
    topic: TOPICS.ROADSTER
  },
  3: {
    tweetId: '1005788654386606080',
    title: 'Roadster will be absolutely out of this world',
    topic: TOPICS.ROADSTER
  }
}

class Timeline extends Component {
  render() {
    return (
      <div className="app">
        { Object.entries(content).map( ([key, {title, tweetId}])=>
          <div key={key} className='card card--center'>
            <h2 className='card__header'>{title}</h2>
            <Tweet tweetId={tweetId}/>
        </div>)}

      </div>
    );
  }
}

export default Timeline;
