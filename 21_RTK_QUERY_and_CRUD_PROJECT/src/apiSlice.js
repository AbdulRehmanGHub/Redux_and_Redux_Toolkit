import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // create api from redux toolkit query
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (tasks) => tasks.reverse(),
      providesTags: [`Tasks`],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: `/tasks`,
        method: `POST`,
        body: task,
      }),
      invalidatesTags: [`Tasks`],

      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (tasksList) => {
            tasksList.unshift({ id: crypto.randomUUID(), ...task });
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    updateTask: builder.mutation({
      query: ({ id, ...updatedTask }) => ({
        url: `/tasks/${id}`,
        method: `PATCH`,
        body: updatedTask,
      }),
      invalidatesTags: [`Tasks`],

      async onQueryStarted(
        { id, ...updatedTask },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (tasksList) => {
            const tasksIndex = tasksList.findIndex((el) => el.id === id);
            tasksList[tasksIndex] ==
              { ...tasksList[tasksIndex], ...updatedTask };
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [`Tasks`],

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (tasksList) => {
            const tasksIndex = tasksList.findIndex((el) => el.id === id);

            tasksList.splice(tasksIndex, 1);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

// // it creates an hook automatically according to the name of endpoint.
// const { useGetTasksQuery } = api;

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = api;
