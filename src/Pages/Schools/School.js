import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import useSchools from '../../hooks/useSchools';

const School = () => {
  const { schoolId } = useParams();
  const [schoolList] = useSchools();
  const selectedSchool = schoolList.find((school) => school.id === schoolId);
  const { id, EIIN, location, schoolName, teachers } = selectedSchool || {};
  const { village, union, thana, district } = location || {};
  const address = village + ', ' + union + ', ' + thana + ', ' + district;
  console.log(selectedSchool);
  return (
    <div className='w-50 mx-auto my-5'>
      <h2 className='display-6 text-center'>{schoolName}</h2>
      <h6 className='text-center'>{address}</h6>
    </div>
  );
};

export default School;
