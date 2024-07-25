import { User } from "../model/User";
import { apiSlice } from "./apiSlice";

export const userInvoiceSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User[], void>({
      query: () => "/users",
    }),
    createUser: builder.mutation<
      void,
      { name: string; email: string; number: string }
    >({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } = userInvoiceSlice;
