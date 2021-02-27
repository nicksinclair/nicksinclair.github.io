// Absolute imports
import React from 'react';

// Relative imports
import { formatDate } from '../../utils/utils';

const Education = props => {
  const { school, major, minor, startDate, endDate, gpa, notes } = props;

  return (
    <div className="education-block">
      <h2>{school}</h2>
      <h4>
        {major}, {minor}
      </h4>
      <p>
        {formatDate(startDate)} - {formatDate(endDate)}
      </p>
      <p>
        GPA: <strong>{gpa}/4.0</strong>, {notes}
      </p>
    </div>
  );
};

export default Education;
