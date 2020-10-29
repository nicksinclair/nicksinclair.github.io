import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  image: string;
  title: string;
  category: string;
}

const Thumbnail: React.FC<Props> = props => {
  const { link, image, title, category } = props;

  return (
    <div className="project-thumbnail">
      <Link to={link} key={title}>
        <div className="project-image">
          <img src={image} alt="Project" />
        </div>
        <div className="text-container">
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
