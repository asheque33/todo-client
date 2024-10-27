import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          //? => Method-1
          //   url: `/tasks?priority=${priority}`,
          //   method: "GET" };
          //? => Method-2 better
          // url: `/tasks`,
          // method: "GET",
          // params: { priority },
          //? => Method-3 best
          url: "tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    createTodo: builder.mutation({
      //! query: (taskDetails-> obj) => {
      query: (data) => {
        console.log("inside base api", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      //! query: (finalUpdatedData(_id + data)-> obj) => {
      query: (finalUpdatedData) => {
        console.log("inside base api", finalUpdatedData);
        return {
          url: `/task/${finalUpdatedData._id}`,
          method: "PUT",
          body: finalUpdatedData.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
