import React from 'react';

import ResumeSection from './ResumeSection';

const Resume: React.FC = () => {
  return (
    <main className="content">
      <ResumeSection title="Experience" schema="position" />
      <ResumeSection title="Skills" schema="skills" />
      <ResumeSection title="Education" schema="education" />
    </main>
  );
};

export default Resume;
