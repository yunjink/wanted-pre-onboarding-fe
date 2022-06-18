import styled from 'styled-components';

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

export const NavWrapper = styled.div`
  width: 70%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img.attrs({})`
  height: 2.8rem;
  margin-top: 5px;
`;

export const SearchBox = styled.input`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬
  width: 13rem;
  height: 2.3rem;
  background: #efefef;
  border: none;
  border-radius: 5px;
  color: #8e8e8e;
  text-align: left;
  padding: 0 10px;

  ::placeholder {
    color: #8e8e8e;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Icons = styled.div`
  height: 100%
  cursor: pointer;
  margin: 0 10px;
  display: inline-block;
  font-size: 1.5rem;
`;
