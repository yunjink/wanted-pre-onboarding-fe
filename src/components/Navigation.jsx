import React from 'react';
import {
  Wrapper,
  Nav,
  Logo,
  SearchBox,
  IconsWrapper,
  Icons,
} from '../styles/Navigation.styled';
import { MdHomeFilled } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <Logo logo alt="instagram-logo" src="image/logo.PNG" />
          <SearchBox type="text" placeholder="검색"></SearchBox>
          <IconsWrapper>
            <Icons>
              <MdHomeFilled />
            </Icons>
            <Icons>
              <FiHeart />
            </Icons>
            <Icons>
              <CgProfile />
            </Icons>
          </IconsWrapper>
        </Nav>
      </Wrapper>
    </>
  );
};

export default Navigation;
