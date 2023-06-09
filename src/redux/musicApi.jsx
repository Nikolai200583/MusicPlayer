import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
 
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
    tagTypes: ['Tracks'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token
    
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },    
  }),

  
  endpoints: (builder) => ({

    getAllMusic: builder.query({
      query: () => 'catalog/track/all',
      providesTags: ['Tracks'],        
    }), 

    getSelectMusic: builder.query({
      query: () => 'catalog/selection'      
    }),

    postReg: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      })      
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      })      
    }),

    postToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      })      
    }),
    postLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks'],
    }),

    postUnlike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
});

export const { useGetAllMusicQuery,
  useGetSelectMusicQuery,
  usePostRegMutation,
  usePostLoginMutation,
  usePostTokenMutation,
  usePostLikeMutation,
  usePostUnlikeMutation } = musicApi;
