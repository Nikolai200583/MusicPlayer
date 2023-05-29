import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/",
  }),
  endpoints: (builder) => ({
    getAllMusic: builder.query({
      query: () => `track/all`
      
    }),
    getSelectMusic: builder.query({
      query: () => `selection`
      
    }),
  }),
});

export const { useGetAllMusicQuery } = musicApi;
export const { useGetSelectMusicQuery } = musicApi;