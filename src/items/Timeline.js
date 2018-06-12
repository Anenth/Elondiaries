import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
const TWEETS = [
  '1005577738332172289',
  '1005695924318842880',
  '1005788654386606080'
];

class Timeline extends Component {
  render() {
    return (
      <div className="app">
        {TWEETS.map( (id)=> <Tweet
          key={id}
          tweetId={id}
        />)}

      </div>
    );
  }
}

export default Timeline;
