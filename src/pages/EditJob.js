import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import Layout from "../components/Layout";
import { fetchJob } from "../features/job/jobSlice";

const EditJob = () => {
  const { job, isLoading, isError, error } = useSelector((state) => state.job);
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJob(jobId));
  }, [jobId, dispatch]);

  let content = null;
  if (isLoading) content = <div>Loading..</div>;
  if (isError) content = <div>{error}</div>;
  if (!isLoading && !isError && job)
    content = (
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

          <div className="max-w-3xl mx-auto">
            <EditForm job={job} />
          </div>
        </main>
      </div>
    );

  return <Layout>{content}</Layout>;
};

export default EditJob;
