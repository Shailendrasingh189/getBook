import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/v1/api/orders`,
  credentials: "include",
});

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: `/`,
        method: "POST",
        body: newOrder,
        credentials: "include",
      }),
      invalidatesTags: ["Orders"],
    }),
    getOrderByEmail: builder.query({
      transformResponse: (response) => response.orders,
      query: (email) => ({ url: `/email/${email}` }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrderByEmailQuery, useCreateOrderMutation } = ordersApi;
export default ordersApi;
