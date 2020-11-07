import React from 'react';

import ResumeSection from './ResumeSection';

const Resume: React.FC = () => {
  return (
    <main className="content">
      <ResumeSection title="Experience" schema="position" />
      <ResumeSection title="Skills" schema="position" />
      <ResumeSection title="Education" schema="position" />
      <ResumeSection title="Interests" schema="position" />
    </main>
  );
};

export default Resume;
