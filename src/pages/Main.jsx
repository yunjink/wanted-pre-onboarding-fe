import React, { useEffect } from 'react';
import FeedList from '../components/FeedList';
import Navigation from '../components/Navigation';
import { Wrapper } from '../styles/Main.styled';

const Main = () => {
  useEffect(() => {
    if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <FeedList />
      </Wrapper>
    </>
  );
};

export default Main;
