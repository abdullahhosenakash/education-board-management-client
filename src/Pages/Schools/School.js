import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSchools from '../../hooks/useSchools';

const School = () => {
  const { schoolId } = useParams();
  const [schoolList] = useSchools();
  const selectedSchool = schoolList.find((school) => school.id === schoolId);
  const { EIIN, location, schoolName, teachers } = selectedSchool || {};
  const { village, union, thana, district } = location || {};
  const address = village + ', ' + union + ', ' + thana + ', ' + district;
  const { headmaster, assistantHeadmaster, assistantTeachers } = teachers || {};
  return (
    <div className='w-50 mx-auto my-5 text-center'>
      <h2 className='display-5'>{schoolName}</h2>
      <h5 className=''>{address}</h5>
      <p className=''>EIIN: {EIIN}</p>

      <Card className='my-2'>
        <Card.Img
          variant='top'
          src={headmaster?.photoURL}
          className='w-25 mx-auto m-2 rounded teacher-image'
        />
        <Card.Body>
          <Card.Title>{headmaster?.teacherName}</Card.Title>
          <Card.Text>
            Headmaster <br />
            Department of {headmaster?.department}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='my-2'>
        <Card.Img
          variant='top'
          src={assistantHeadmaster?.photoURL}
          className='w-25 mx-auto m-2 rounded teacher-image'
        />
        <Card.Body>
          <Card.Title>{assistantHeadmaster?.teacherName}</Card.Title>
          <Card.Text>
            Assistant Headmaster
            <br />
            Department of {assistantHeadmaster?.department}
          </Card.Text>
        </Card.Body>
      </Card>

      <Row xs={1} md={2} className='g-2'>
        {assistantTeachers?.map((teacher, index) => (
          <Col key={index}>
            <Card>
              <Card.Img
                variant='top'
                src={teacher?.photoURL}
                className=' mx-auto m-2 rounded teacher-image'
              />
              <Card.Body>
                <Card.Title>{teacher?.teacherName}</Card.Title>
                <Card.Text>
                  Assistant Teacher <br />
                  Department of {teacher?.department}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default School;
