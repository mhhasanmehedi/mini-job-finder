import axiosInstance from "../../utils/axios";

// Get Jobs API
export const getJobs = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};

// Add Job API
export const addJob = async (data) => {
  const response = await axiosInstance.post("/jobs", data);
  return response.data;
};

// Edit Job API
export const editJob = async (jobId, data) => {
  const response = await axiosInstance.patch(`/jobs/${jobId}`, data);
  return response.data;
};

// Delete Job API
export const deleteJob = async (id) => {
  const response = await axiosInstance.delete(`/jobs/${id}`);
  return response.data;
};
