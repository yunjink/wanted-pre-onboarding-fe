import React, { useState, useEffect } from 'react';
import Feed from '../components/Feed';
import { Loader, Wrapper } from '../styles/Main.styled';
//import { getData } from '../utils/getData';
//! 로그인 기능 구현시 삭제
//import Navigation from '../components/Navigation';

const Main = () => {
  return (
    <Loader>
      <Wrapper>
        <Feed></Feed>
      </Wrapper>
    </Loader>
  );
};

export default Main;
