import React from 'react';
import { Loader, Wrapper } from '../styles/Main.styled';
import Feed from '../components/Feed';

// 로그인 기능 구현시 삭제
import Navigation from '../components/Navigation';

const Main = () => {
  return (
    <>
      <Loader>
        <Wrapper>
          <Navigation />
          <Feed></Feed>
        </Wrapper>
      </Loader>
    </>
  );
};

export default Main;
