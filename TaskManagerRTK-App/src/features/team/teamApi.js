import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => ({
        url: `/team`,
      }),
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
