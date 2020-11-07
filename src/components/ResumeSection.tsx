// Absolute imports
import React, { useEffect, useState } from 'react';

// Relative imports
import sanityClient from '../client';
import Header from './Header';
import Position from './Resume/Position';

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
        .fetch(`*[_type == $schema]`, { schema })
        .then(data => {
          setSectionData(data[0]);
        })
        .catch(console.error);
    }
  }, []);

  let component = null;

  if (sectionData) {
    if (schema === 'position') {
      const { company, companyUrl } = sectionData;
      component = <Position title={sectionData.title} company={company} companyUrl={companyUrl} />;
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
