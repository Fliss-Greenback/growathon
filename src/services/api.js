import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["Session", "MyPlants"],
  endpoints: (builder) => ({
    getSession: builder.query({
      providesTags: ["Session"],
      query: () => `session`,
    }),
    login: builder.mutation({
      invalidatesTags: ["Session", "MyPlants"],
      query: (params) => ({
        url: "login",
        method: "POST",
        headers: { "X-CSRFToken": params.csrf },
        body: params,
      }),
    }),
    signup: builder.mutation({
      query: (params) => ({
        url: "signup",
        method: "POST",
        body: params,
      }),
    }),
    addnewplant: builder.mutation({
      query: (params) => ({
        url: "add-new-plant",
        method: "POST",
        body: params,
      }),
    }),
    addnewplantlog: builder.mutation({
      query: (params) => ({
        url: "add-new-plantlog",
        method: "POST",
        body: params,
      }),
    }),
    getMyplants: builder.query({
      providesTags: ["MyPlants"],
      query: () => `myplants`,
    }),
    getRewards: builder.query({
      query: () => `offers`,
    }),
    getAds: builder.query({
      query: () => `ads`,
    }),
    getPoints: builder.query({
      query: () => `points`,
    }),
  }),
});

export const {
  useGetSessionQuery,
  useLoginMutation,
  useSignupMutation,
  useAddnewplantlogMutation,
  useAddnewplantMutation,
  useGetMyplantsQuery,
  useGetRewardsQuery,
  useGetAdsQuery,
  useGetPointsQuery,
} = api;
