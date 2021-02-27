// Absolute imports
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

// Relative imports
import sanityClient from '../../client';
import { formatDate } from '../../utils/utils';

// TypeScript props types
// interface Props {
//   title: string;
//   company: string;
//   companyUrl: string;
//   startDate: string;
//   endDate?: string;
//   location: string;
//   description?: BlockContent;
// }

const Position = props => {
  const { title, company, companyUrl, startDate, endDate, location, description } = props;

  return (
    <div className="position-block">
      <header className="position-header">
        <h2>{title}</h2>
        <a href={companyUrl} target="_blank" rel="noreferrer">
          <h4 className="position-company">{company}</h4>
        </a>
        <p>
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <p>{location.toUpperCase()}</p>
      </header>

      <div className="position-description">
        <BlockContent
          blocks={description}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
    </div>
  );
};

export default Position;
