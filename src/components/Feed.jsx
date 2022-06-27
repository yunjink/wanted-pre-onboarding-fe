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
import { FiHeart, FiMessageCircle, FiBookmark, FiSmile } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';

const Feed = () => {
  return (
    <Wrapper>
      <UserBox>
        <UserProfile />
        <UserName></UserName>
        <BsThreeDots size="20" />
      </UserBox>
      <PostBox>
        <PostImgBox>
          <PostImg />
        </PostImgBox>
        <PostContentBox>
          <ReactionBox>
            <LikeCmtMsgIcon>
              <FiHeart size="24" />
              <FiMessageCircle size="25" />
              <BiPaperPlane size="26" />
            </LikeCmtMsgIcon>
            <BookmarkIcon>
              <FiBookmark size="27" />
            </BookmarkIcon>
          </ReactionBox>
          <LikeCount>좋아요 100개</LikeCount>
        </PostContentBox>
      </PostBox>
      <CommentList>
        <Comment />
      </CommentList>
      <CommentInputBox>
        <FiSmile />
        <Input placeholder="댓글 달기..." />
        <ButtonSubmit>게시</ButtonSubmit>
      </CommentInputBox>
    </Wrapper>
  );
};

export default Feed;
