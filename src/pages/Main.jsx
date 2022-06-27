import React, { useState, useEffect, useCallback } from 'react';
import Feed from '../components/Feed';
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
        <Feed></Feed>
      </Wrapper>
    </>
  );
};

export default Main;
