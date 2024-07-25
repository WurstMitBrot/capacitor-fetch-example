import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JSON_SERVER_URL } from "../constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${JSON_SERVER_URL}/`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (_builder) => ({}),
});
