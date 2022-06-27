import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

export const Nav = styled.nav`
  width: 65%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img.attrs({})`
  height: 2.5rem;
  width: 110px;
  margin-top: 5px;
  position: relative;
`;

export const SearchBox = styled.input`
  position: absolute;
  // 가운데 정렬 ------------
  left: 50%;
  transform: translateX(-50%);
  // -------------------------
  width: 17rem;
  height: 2.3rem;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  color: #000;
  padding: 0 10px;
  font-size: 16px;

  ::placeholder {
    color: #8e8e8e;
    font-weight: lighter;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const IconsWrapper = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Icons = styled.div`
  height: 100%
  margin: 0 10px;
  display: inline-block;
  font-size: 1.5rem;
`;
