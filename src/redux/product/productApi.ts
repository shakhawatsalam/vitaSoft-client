import { api } from "../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Create Product
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductQuery } = courseApi;
