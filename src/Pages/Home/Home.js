import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <div className="d-flex flex-column gap-5 justify-content-center py-5">
        <Link
          to="/schools"
          className="btn btn-success rounded-pill d-block w-50 mx-auto py-3 fw-bold"
        >
          Go go Schools Panel
        </Link>
        <Link
          to="/colleges"
          className="btn btn-success rounded-pill d-block w-50 mx-auto py-3 fw-bold"
        >
          Go go Colleges Panel
        </Link>
      </div>
    </div>
  );
};

export default Home;
