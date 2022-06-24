import React from 'react';
import { Wrapper, UserNameBox, CommentBox } from '../styles/Comment.styled';

const Comment = () => {
  return (
    <>
      <Wrapper>
        <UserNameBox>이름</UserNameBox>
        <CommentBox>여기는 댓글</CommentBox>
      </Wrapper>
    </>
  );
};

export default Comment;
