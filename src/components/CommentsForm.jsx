import React, { useState, useRef } from 'react';
import {
  CommentUl,
  CommentLi,
  CommentP,
  CommentInputForm,
  Input,
  Button,
} from '../styles/CommentsForm.styled';
import { VscSmiley } from 'react-icons/vsc';

const CommentsForm = ({ data }) => {
  const [comments, setComments] = useState(data);
  const commentRef = useRef();
  const btnRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    commentRef.current.value &&
      setComments([
        ...comments,
        { username: 'yunjink', text: commentRef.current.value },
      ]);
    commentRef.current.value = null;
    btnRef.current.classList.remove('onComment');
  };

  const handleInputChange = () => {
    commentRef.current.value
      ? btnRef.current.classList.add('onComment')
      : btnRef.current.classList.remove('onComment');
  };

  return (
    <>
      <CommentUl>
        {comments.map((comment, idx) => (
          <CommentLi key={idx}>
            {`${comment.username}`}
            <CommentP>{`${comment.text}`}</CommentP>
          </CommentLi>
        ))}
      </CommentUl>
      <CommentInputForm onSubmit={handleSubmit} onChange={handleInputChange}>
        <VscSmiley size="27" />
        <Input type="input" placeholder="댓글 달기..." ref={commentRef} />
        <Button type="submit" ref={btnRef}>
          게시
        </Button>
      </CommentInputForm>
    </>
  );
};

export default CommentsForm;
