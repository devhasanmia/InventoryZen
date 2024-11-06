import { baseApi } from "../../api/baseApi";

const customerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get All Customers Start
        getAllCustomers: builder.query({
            query: () => ({
                url: '/customer/all',
                method: "GET",

            }),
            providesTags: ["customer"]
        }),
        // Get All Customers End
        // Update Customer Data
        updateCustomerInfo: builder.mutation({
            query: (customer) => ({
                url: `/customer/${customer._id}`,
                method: "PUT",
                body: customer
            }),
            invalidatesTags: ["customer"]
        }),
        // Delete Customer By Id
        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/customer/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["customer"]
        })
        // Delete Customer By Id End
    })
})

export const { useGetAllCustomersQuery, useDeleteCustomerMutation, useUpdateCustomerInfoMutation } = customerApi;