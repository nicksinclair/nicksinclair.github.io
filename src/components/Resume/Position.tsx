import React from 'react';

interface Props {
  title: string;
  company: string;
  companyUrl: string;
}

const Position: React.FC<Props> = props => {
  const { title, company, companyUrl } = props;

  return (
    <div className="resume-content">
      <h3>{title}</h3>
      <a href={companyUrl} target="_blank" rel="noreferrer">
        {company}
      </a>
      <p>May 2019 - Present</p>
      <ul>
        <li>Designed and produced virtual reality experiences using 3ds Max</li>
      </ul>
    </div>
  );
};

export default Position;
