import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Create Product
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery } = userApi;
