import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Tweet } from 'react-twitter-widgets';


export function DaySection({ tweet }) {
  const classes = ClassNames('section');

  return (
    <div className={classes}>
      <div className="section__content section__content--center">
        <h2 className="section__header">
          {tweet.title}
        </h2>
        <Tweet tweetId={tweet.tweetId} />
      </div>
    </div>
  );
}

DaySection.propTypes = {
  tweet: PropTypes.object,
};
