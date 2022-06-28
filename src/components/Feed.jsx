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
import { FiHeart, FiMessageCircle, FiBookmark } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';
import { VscSmiley } from 'react-icons/vsc';

const Feed = ({ feed, feedId }) => {
  return (
    <Wrapper>
      <UserBox>
        <UserProfile src={feed.profile} />
        <UserName>{feed.username}</UserName>
        <BsThreeDots size="20" />
      </UserBox>
      <PostBox>
        <PostImgBox>
          <PostImg src={feed.feedImg} />
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
          <LikeCount>좋아요 {feed.like}개</LikeCount>
        </PostContentBox>
      </PostBox>
      <CommentList>
        <Comment />
      </CommentList>
      <CommentInputBox>
        <VscSmiley size="27" />
        <Input placeholder="댓글 달기..." />
        <ButtonSubmit>게시</ButtonSubmit>
      </CommentInputBox>
    </Wrapper>
  );
};

export default Feed;
