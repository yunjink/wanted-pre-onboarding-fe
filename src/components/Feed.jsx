import React, { useState, useRef, useEffect } from 'react';
import {
  Wrapper,
  UserBox,
  UserProfile,
  UserName,
  PostBox,
  PostImgBox,
  PostImg,
  PostContentBox,
  ReactionBox,
  LikeCmtMsgIcon,
  BookmarkIcon,
  LikeCount,
  CommentList,
  CommentInputBox,
  Input,
  ButtonSubmit,
} from '../styles/Feed.styled';
import Comment from '../components/Comment';
import { BsThreeDots } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { FiMessageCircle } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { FiSmile } from 'react-icons/fi';

const Feed = (
  id,
  username,
  profileURL,
  postURL,
  like,
  comments,
  addComment
) => {
  // const [comment, setComment] = useState('');
  // const onCommentChange = (e) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setComment(value);
  // };

  // const inputComment = useRef();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!comment) return;
  //   inputComment.current.value = '';
  //   setComment('');
  //   const username = 'yunjink';
  //   addComment(id, userName, comment);
  // };

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = postURL;
  //   image.onLoad = (e) => {
  //     setIsLoading(false);
  //   };
  // }, []);

  // const [isLoading, setIsLoading] = useState(true);
  // if (isLoading) return <></>;

  return (
    <>
      <Wrapper>
        <UserBox>
          <UserProfile />
          {/* <UserProfile src={profileURL} /> */}
          <UserName></UserName>
          {/* <UserName>{username}</UserName> */}
          <BsThreeDots />
        </UserBox>
        <PostBox>
          <PostImgBox>
            <PostImg />
            {/* <PostImg src={postURL} /> */}
          </PostImgBox>
          <PostContentBox>
            <ReactionBox>
              <LikeCmtMsgIcon>
                <FiHeart />
                <FiMessageCircle />
                <BiPaperPlane />
              </LikeCmtMsgIcon>
              <BookmarkIcon>
                <FiBookmark />
              </BookmarkIcon>
            </ReactionBox>
            <LikeCount>좋아요 100개</LikeCount>
            {/* <LikeCount>{`좋아요 ${like}개`}</LikeCount> */}
          </PostContentBox>
        </PostBox>
        <CommentList>
          {/* {comments.map((comment, id) => (
            <Comment key={id} {...comment} />
          ))} */}
        </CommentList>
        <CommentInputBox>
          {/* <CommentInputBox onSubmit={onSubmit}> */}
          <FiSmile />
          <Input
            // ref={inputComment}
            // onChange={onCommentChange}
            placeholder="댓글 달기..."
          />
          <ButtonSubmit>게시</ButtonSubmit>
          {/* <ButtonSubmit isCommentOn={comment.length}>게시</ButtonSubmit> */}
        </CommentInputBox>
      </Wrapper>
    </>
  );
};

export default Feed;
