import { api } from "./api/apiSlice";

export const reducer = {
  [api.reducerPath]: api.reducer,
};
