import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, getJobs, editJob, deleteJob } from "./jobsAPI";

// initial state
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Fetch jobs async thunks
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

// Create job async thunks
export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await addJob(data);
  return job;
});

// Update job async thunks
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, data }) => {
    const job = await editJob(id, data);
    return job;
  }
);

// Remove job async thunks
export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const job = await deleteJob(id);
  return job;
});

// create slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      // Fet all Jobs
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.jobs = [];
        state.error = action.error?.message;
      })

      // Create job
      .addCase(createJob.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // update job
      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );

        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // delete job
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
