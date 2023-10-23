import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

function Experience() {
  const showJob = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    const newSelect = { ...jobs[index] };
    newSelect.status = !newSelect.status;
    const newJobs = [...jobs];
    newJobs[index] = newSelect;
    setJobs(newJobs);
  };
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "PROFESSIONAL EXPERIENCE",
      jobIcon: <FaRegCircleUser className="text-4xl text-pink-700" />,
      jobType: [
        {
          title:
            "Frontend Web Developer | Ocean Rain Water Harvesting Inc., BC,Canada (May 2022 – Present)",
          skills: [
            "HTML",
            "CSS",
            "Javascript",
            "Responsive designs optimized for smartphones",
          ],
        },
        {
          title:
            "WordPress Developer | Aras Rahbord Sazeh Company, Iran ( Apr 2021 – Present)",
          skills: [
            "HTML",
            "CSS",
            "Plugins for web development",
            "UI & UX",
            "Responsive designs optimized for smartphones",
          ],
        },
        {
          title:
            "Teaching Assistant | Babol Noshirvani University of Technology, Iran",
          skills: [
            "Physics 1 (Fall 2012, Winter 2013)",
            "Physics 2 (Fall 2013)",
          ],
        },
      ],
      status: false,
    },
    {
      id: 2,
      name: "VOLUNTEER EXPERIENCE",
      jobIcon: <HiOutlineHeart className="text-4xl text-pink-700" />,
      jobType: [
        {
          title:
            "Research Assistant | Babol Noshirvani University of Technology, Iran (2016 –2021)",
          skills: [
            "Contributed remotely ",
            " 4 publications with a total of 52 citations",
            "Critical thinking",
            "Remote collaboration",
          ],
        },
        {
          title:
            "WordPress Developer | Love Without Borders - Supporting Refugees Society, Chilliwack, BC, Canada, (2023-Present)",
          skills: [
            "HTML",
            "CSS",
            "Plugins for web development",
            "UI & UX",
            "Responsive designs optimized for smartphones",
          ],
        },
      ],
      status: false,
    },
  ]);
  return (
    <div className="w-4/5  mx-auto mt-60 pb-28">
      {jobs.map((job) => {
        return (
          <div key={job.id} className="mb-28">
            <div
              className="flex justify-between items-center cursor-pointer border-b pb-3 mb-7 hover:border-pink-700"
              onClick={() => showJob(job.id)}
            >
              <div className="flex justify-start items-center ">
                {job.jobIcon}
                <h2 className="text-pink-100 text-5xl ml-2">{job.name}</h2>
              </div>
              <div className="text-5xl text-pink-700 ">
                <HiChevronDown
                  style={{
                    rotate: job.status ? "180deg" : "0deg",
                    transition: "all 0.5s ease-out",
                  }}
                />
              </div>
            </div>
            <div className={`${" transition-all duration-500 ease-out overflow-y-auto"} ${
              job.status ? "opacity-100" : "opacity-0"
            }`}>
              {job.jobType.map((item) => {
                return job.status && <JobDetail item={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
function JobDetail({ item }) {
  return (
    <div>
      <div className="flex justify-start items-start text-pink-50 text-4xl">
        <HiOutlineChevronRight className="text-pink-700 " />
        <p className="text-pink-50 text-4xl">{item.title}</p>
      </div>
      <ul className="flex justify-start items-center py-5">
        {item.skills.map((skill) => (
          <li className="text-pink-50 text-3xl px-2 border-r border-pink-700">
            {skill}
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}

