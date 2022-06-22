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
import { TbMessageCircle2 } from 'react-icons/tb';
import { BiPaperPlane } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { VscSmiley } from 'react-icons/vsc';

const Feed = (
  index,
  userName,
  profileURL,
  postURL,
  like,
  comments,
  addComment
) => {
  return (
    <>
      <Wrapper>
        <UserBox>
          <UserProfile src={profileURL} />
          <UserName></UserName>
          <BsThreeDots />
        </UserBox>
        <PostBox>
          <PostImgBox>
            <PostImg src={postURL} />
          </PostImgBox>
          <PostContentBox>
            <ReactionBox>
              <LikeCmtMsgIcon>
                <FiHeart />
                <TbMessageCircle2 />
                <BiPaperPlane />
              </LikeCmtMsgIcon>
              <BookmarkIcon>
                <BsBookmark />
              </BookmarkIcon>
            </ReactionBox>
            <LikeCount>좋아요 1,109개</LikeCount>
          </PostContentBox>
        </PostBox>
        <CommentList>
          <Comment />
        </CommentList>
        <CommentInputBox>
          <VscSmiley />
          <Input placeholder="댓글 달기..." />
          <ButtonSubmit></ButtonSubmit>
        </CommentInputBox>
      </Wrapper>
    </>
  );
};

export default Feed;
