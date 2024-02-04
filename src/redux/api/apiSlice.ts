import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vitasoft-server.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
