import axios from 'axios';
import { useEffect, useState } from 'react';

const useSchools = () => {
  const [schoolList, setSchoolList] = useState([]);
  useEffect(() => {
    axios.get('/schools.json').then((data) => setSchoolList(data.data));
  }, []);
  return [schoolList];
};

export default useSchools;
