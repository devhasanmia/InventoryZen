import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["customers", "categories", "product"],
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
    // Category
    createCategory: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/category/create",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
    getAllCategory: builder.query({
      query: () => ({
        method: "GET",
        url: "/category/all",
      }),
      providesTags: ["categories"],
    }),
    // Products
    addProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/product",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ['product']
    }),
    // ‍Stock
    addStock: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/stock",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllCustomerQuery,
  useCreateCustomerMutation,
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useAddProductMutation,
  useAddStockMutation,
  useGetAllProductQuery
} = baseApi;
