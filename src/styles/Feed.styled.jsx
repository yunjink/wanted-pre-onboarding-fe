import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 550px;
  min-width: 470px;
  width: 40%;
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;

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
`;
export const UserName = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 15px;
  font-size: 14px;
  font-weight: 800;
  margin-top: -5px;
`;
export const PostBox = styled.div``;
export const PostImgBox = styled.div``;
export const PostImg = styled.div`
  width: 100%;
`;
export const PostContentBox = styled.div``;
export const ReactionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
export const LikeCmtMsgIcon = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;
export const BookmarkIcon = styled.div``;
export const LikeCount = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
`;
export const CommentList = styled.div`
  padding: 10px;
  margin-bottom: 5px;

  & > div {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const CommentInputBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #efefef;
`;
export const Input = styled.input`
  background-color: transparent;
  color: #262626;
  display: flex;
  flex: 1;
  padding: 12px;
`;
export const ButtonSubmit = styled.button`
  background-color: transparent;
  font-size: 15px;
  font-weight: 800;
  color: ${(props) => (props.isReady ? '#0094f6' : '#c5e7fd')};
  cursor: ${(props) => (props.isReady ? 'pointer' : 'auto')};
`;
