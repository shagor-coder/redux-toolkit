import { createSlice, nanoid } from '@reduxjs/toolkit';
import sub from 'date-fns/sub';

const initialState = [
  {
    id: 1,
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem rem esse animi. Impedit, excepturi rerum. Quos sunt libero veritatis.',
    timePosted: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      wow: 0,
    },
  },
  {
    id: 2,
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem rem esse animi. Impedit, excepturi rerum. Quos sunt libero veritatis.',
    timePosted: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      wow: 0,
    },
  },
  {
    id: 3,
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem rem esse animi. Impedit, excepturi rerum. Quos sunt libero veritatis.',
    timePosted: sub(new Date(), { minutes: 4 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      wow: 0,
    },
  },
];

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            userId,
            timePosted: new Date().toISOString(),
            reactions: {
              like: 0,
              love: 0,
              wow: 0,
            },
          },
        };
      },
    },
    addReaction: {
      reducer(state, action) {
        let currentPost = state.find(
          (post) => post.id === action.payload.postId
        );
        currentPost.reactions[action.payload.reactionName] += 1;
      },
      prepare(name, postId) {
        return {
          payload: {
            reactionName: name,
            postId: postId,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
