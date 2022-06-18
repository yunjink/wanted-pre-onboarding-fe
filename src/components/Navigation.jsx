import React from 'react';
import {
  Navbar,
  NavWrapper,
  Img,
  SearchBox,
  NavItems,
  Icons,
} from '../styles/Navigation.styled';
import { MdHomeFilled } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const Navigation = () => {
  return (
    <>
      <Navbar>
        <NavWrapper>
          <Img logo alt="instagram-logo" src="image/logo.PNG" />
          <SearchBox type="text" placeholder="검색"></SearchBox>
          <NavItems>
            <Icons>
              <MdHomeFilled />
            </Icons>
            <Icons>
              <FiHeart />
            </Icons>
            <Icons>
              <CgProfile />
            </Icons>
          </NavItems>
        </NavWrapper>
      </Navbar>
    </>
  );
};

export default Navigation;
