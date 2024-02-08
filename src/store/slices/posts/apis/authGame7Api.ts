import mainApi from '../../../apis/mainApi';
import {GET, POSTS} from "../../../../constants/requestUrls";
import {paginationForceRefetch, paginationMerge, paginationSerializeQueryArgs} from "../../../../utils/storeHelpers";
import IBaseQueryPaginationResult from "../../../types/IBaseQueryPaginationResult";

export const authGame7Api = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<IBaseQueryPaginationResult<IGame7Details[]>, { page?: number, perPage?: number }>({
      query: ({page = 1, perPage = 10}) => {
        return ({
          url: POSTS,
          method: GET,
          params: {
            page,
            _start: 0,
            _limit: perPage * page,
          },
        });
      },
      merge: paginationMerge,
      serializeQueryArgs: paginationSerializeQueryArgs,
      forceRefetch: paginationForceRefetch,
    }),
  }),
});

export const {
  useGetPostsQuery,
} = authGame7Api;
