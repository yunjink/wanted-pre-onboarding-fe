import React, { useState, useEffect } from 'react';
import FeedList from '../components/FeedList';
import Navigation from '../components/Navigation';
import { Wrapper } from '../styles/Main.styled';
import { getFeeds } from '../utils/getFeeds';

const Main = () => {
  const [feeds, setFeeds] = useState({});

  useEffect(() => {
    if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, []);

  useEffect(() => {
    getFeeds().then((res) => {
      setFeeds(res.feeds);
    });
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <FeedList feeds={feeds}></FeedList>
      </Wrapper>
    </>
  );
};

export default Main;
