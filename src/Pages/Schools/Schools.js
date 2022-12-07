import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSchools from '../../hooks/useSchools';
import './Schools.css';

const Schools = () => {
  const [schoolList] = useSchools();
  return (
    <div className='w-75 mx-auto my-5'>
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>EIIN</th>
            <th>School Name</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schoolList.map((school, index) => (
            <tr className='align-middle' key={index}>
              <td>{school.EIIN}</td>
              <td>{school.schoolName}</td>
              <td>{school.location.district}</td>
              <td>
                <Link
                  to={`/schools/${school.id}`}
                  className='btn btn-success rounded-pill w-100 p-1'
                >
                  Visit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Schools;
