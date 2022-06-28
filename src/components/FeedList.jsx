import React from 'react';
import { FeedUl } from '../styles/FeedList.styled';
import Feed from './Feed';

const FeedList = ({ feeds }) => {
  return (
    <FeedUl>
      {Object.keys(feeds).map((feedId) => (
        <Feed key={feedId} feed={feeds[feedId]} feedId={feedId} />
      ))}
    </FeedUl>
  );
};

export default FeedList;
