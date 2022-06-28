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
} from '../styles/Feed.styled';
import { BsThreeDots } from 'react-icons/bs';
import { FiHeart, FiMessageCircle, FiBookmark } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';
import CommentsForm from './CommentsForm';

const Feed = ({ feed }) => {
  return (
    <Wrapper>
      <UserBox>
        <UserProfile src={feed.profile} />
        <UserName>{feed.username}</UserName>
        <BsThreeDots size="20" />
      </UserBox>
      <PostBox>
        <PostImgBox>
          <PostImg src={feed.img_src} />
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
          <LikeCount>좋아요 {feed.likes_count}개</LikeCount>
        </PostContentBox>
      </PostBox>
      <CommentsForm data={feed.comments} />
    </Wrapper>
  );
};

export default Feed;
