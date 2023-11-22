import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJob } from "./jobAPI";

export const fetchJob = createAsyncThunk("job/fetchJob", async (id) => {
  const job = await getJob(id);
  return job;
});

const initialState = {
  isLoading: false,
  job: {},
  isError: false,
  error: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
        state.isError = false;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.job = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
