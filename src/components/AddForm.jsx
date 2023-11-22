import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob } from "../features/jobs/jobsSlice";

const initialState = {
  title: "",
  type: "",
  salary: "",
  deadline: "",
};

const AddForm = () => {
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createJob(jobData));
    setJobData(initialState);
    navigate("/jobs");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
          value={jobData.title}
          onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
        >
          <option value="" hidden>
            Select Job
          </option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Senior Executiv">Senior Executive</option>
          <option value="Junior Executive">Junior Executive</option>
          <option value="Android App Developer">Android App Developer</option>
          <option value="IOS App Developer">IOS App Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="lwsJobType"
          required
          value={jobData.type}
          onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            value={jobData.salary}
            onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          value={jobData.deadline}
          onChange={(e) => setJobData({ ...jobData, deadline: e.target.value })}
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddForm;
