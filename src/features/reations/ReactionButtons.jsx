import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addReaction } from '../post/postSlice';
const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup>
      <Button
        onClick={() => dispatch(addReaction('love', post.id))}
        id={post.id}
      >
        ❤ {post.reactions.love ? post.reactions.love : 0}
      </Button>
      <Button
        onClick={() => dispatch(addReaction('like', post.id))}
        id={post.id}
      >
        👍 {post.reactions.like ? post.reactions.like : 0}
      </Button>
      <Button
        onClick={() => dispatch(addReaction('wow', post.id))}
        id={post.id}
      >
        😍 {post.reactions.wow ? post.reactions.wow : 0}
      </Button>
    </ButtonGroup>
  );
};

export default ReactionButtons;
