import React from 'react';
import { Wrapper } from '../styles/Main.styled';
import Feed from '../components/Feed';
import Navigation from '../components/Navigation';

const Main = () => {
  return (
    <>
      <Wrapper>
        <Navigation />
        <Feed></Feed>
      </Wrapper>
    </>
  );
};

export default Main;
