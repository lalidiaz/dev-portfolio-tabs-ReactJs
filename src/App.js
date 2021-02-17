import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState([0]);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading ...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="job-container">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((dutie, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="icon" />
                <p>{dutie}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
