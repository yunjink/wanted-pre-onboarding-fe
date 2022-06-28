import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 550px;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: #ffffff;
  margin-top: 20px;

  @media (max-width: 499px) {
    min-width: 0px;
    width: 95%;
  }
`;

export const UserBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const UserProfile = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 17px;
  background-color: #d3d3d3;
`;

export const UserName = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  font-weight: 800;
  margin-top: -5px;
`;

export const PostBox = styled.div`
  /* This is PostBox */
`;

export const PostImgBox = styled.div`
  /* This is PostImgBox */
`;

export const PostImg = styled.img`
  width: 100%;
`;

export const PostContentBox = styled.div`
  /* This is PostContentBox */
`;

export const ReactionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const LikeCmtMsgIcon = styled.div`
  width: 6rem;
  display: flex;
  justify-content: space-between;
`;

export const BookmarkIcon = styled.div`
  /* This is BookmarkIcon */
`;

export const LikeCount = styled.div`
  padding: 10px;
  font-size: 14.5px;
  font-weight: 600;
`;
