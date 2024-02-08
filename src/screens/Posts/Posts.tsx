import React from 'react';
import PostsView from "./PostsView";
import {useGetPostsQuery} from "../../store/slices/posts/apis/authGame7Api";

function Posts() {
  const {
    data: { data: posts, meta: postsMeta } = {},
    isLoading: isUpcomingGameLoading,
    isFetching: isUpcomingGameFetching,
    refetch: refetchUpcomingGames,
  } = useGetPostsQuery({});
  return (
    <PostsView />
  );
}

export default Posts;
