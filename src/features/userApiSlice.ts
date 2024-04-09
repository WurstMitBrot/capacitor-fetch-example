import { User } from '../model/User';
import { apiSlice } from "./apiSlice";

export const userInvoiceSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User[], void>({
      query: () => "/users",
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } =
  userInvoiceSlice;
