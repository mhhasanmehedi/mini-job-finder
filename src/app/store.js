import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import jobReducer from "../features/job/jobSlice";
import jobsReducer from "../features/jobs/jobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    job: jobReducer,
    filter: filterReducer,
  },
});
