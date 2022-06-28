import React, { useState, useEffect } from 'react';
import { FeedUl } from '../styles/FeedList.styled';
import Feed from './Feed';

const FeedList = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('./data/data.json')
      .then((res) => res.json())
      .then((obj) => setFeeds(obj));
  }, []);

  return (
    <FeedUl>
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </FeedUl>
  );
};

export default FeedList;
