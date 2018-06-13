import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export function TimeCard({children}) {
    const classes = ClassNames('time-card');

    return (<div className={classes}>
            {children}
        </div>);
}

TimeCard.propTypes = {
  children: PropTypes.node
};