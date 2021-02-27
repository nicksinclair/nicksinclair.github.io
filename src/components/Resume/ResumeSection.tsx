// Absolute imports
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

// Relative imports
import sanityClient from '../../client';
import Header from '../Header';
import Position from './Position';
import SkillCategory from './SkillCategory';
import Education from './Education';

interface Props {
  title: string;
  schema?: string;
}

const ResumeSection: React.FC<Props> = props => {
  // Component properties
  const { title, schema } = props;

  // Component state
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (schema) {
      sanityClient
        .fetch(`*[_type == $schema] | order(startDate desc)`, { schema })
        .then(data => {
          setSectionData(data);
        })
        .catch(console.error);
    }
  }, []);

  let component = null;

  if (sectionData) {
    if (schema === 'position') {
      component = sectionData.map(data => {
        const {
          company,
          companyUrl,
          startDate,
          endDate,
          currentPosition,
          location,
          description,
        } = data;

        return (
          <Position
            key={uuid()}
            title={data.title}
            company={company}
            companyUrl={companyUrl}
            startDate={startDate}
            endDate={currentPosition ? 'PRESENT' : endDate}
            location={location}
            description={description}
          />
        );
      });
    } else if (schema === 'skills') {
      component = sectionData.map(data => {
        const { category, skillList } = data;

        return <SkillCategory key={uuid()} category={category} skillList={skillList} />;
      });
    } else if (schema === 'education') {
      component = sectionData.map(data => {
        const { school, major, minor, startDate, endDate, gpa, notes } = data;

        return (
          <Education
            key={uuid()}
            school={school}
            major={major}
            minor={minor}
            startDate={startDate}
            endDate={endDate}
            gpa={gpa}
            notes={notes}
          />
        );
      });
    }
  } else {
    return <div>Loading...</div>;
  }

  return (
    <section className={title.toLowerCase()}>
      <Header className="header" title={title} />
      {component}
    </section>
  );
};

export default ResumeSection;
