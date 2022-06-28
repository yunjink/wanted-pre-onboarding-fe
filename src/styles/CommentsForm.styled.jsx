import styled from 'styled-components';

export const CommentUl = styled.ul`
  padding: 5px 12px;
  margin-bottom: 5px;
  line-height: 25px;
`;

export const CommentLi = styled.li`
  font-weight: 600;
`;

export const CommentP = styled.p`
  display: inline;
  font-weight: 350;
  margin-left: 8px;
`;

export const CommentInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1.5px solid #efefef;
`;

export const Input = styled.input`
  background-color: transparent;
  color: #262626;
  display: flex;
  flex: 1;
  padding: 12px;
  border: none;
`;

export const Button = styled.button`
  color: #bfdffd;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  &.onComment {
    cursor: pointer;
    color: #0095f6;
  }
`;
