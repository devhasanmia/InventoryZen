import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["customers"],
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: () => ({
        method: "GET",
        url: "/customer/all",
      }),
      providesTags: ["customers"],
    }),
    createCustomer: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/customer/create",
        body: data,
      }),
      invalidatesTags: ["customers"],
    }),
  }),
});

export const { useGetAllCustomerQuery, useCreateCustomerMutation } = baseApi;
