import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../../features/jobs/jobsSlice";
import Job from "./Job";

const Jobs = () => {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { search, sorting } = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const { jobType } = useParams();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const jobTypes = {
    "Full Time": "fulltime",
    Internship: "internship",
    Remote: "remote",
  };

  function jobTypeFilter(job) {
    if (jobType === "all") {
      return true;
    }
    return jobTypes[job.type] === jobType;
  }

  const searchFilter = (job) => {
    return job.title?.toLowerCase().includes(search.toLowerCase());
  };

  const sortFilter = (a, b) => {
    if (sorting === "low_to_high") {
      return Number(a.salary) - Number(b.salary);
    } else if (sorting === "high_to_low") {
      return Number(b.salary) - Number(a.salary);
    } else {
      return 0;
    }
  };

  const filteredJobs = jobs
    .filter(jobTypeFilter)
    .filter(searchFilter)
    .sort(sortFilter);

  let content;
  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && filteredJobs.length === 0)
    content = <div>Jobs No Found!</div>;

  if (!isLoading && !isError && filteredJobs.length > 0) {
    content = filteredJobs.map((job) => <Job job={job} key={job.id} />);
  }

  return <div className="jobs-list">{content}</div>;
};

export default Jobs;
