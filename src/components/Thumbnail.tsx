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
    <article className="project-card">
      <Link to={link} key={title}>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <header className="card-header">
          <p>{category}</p>
          <h1>{title}</h1>
        </header>
      </Link>
    </article>
  );
};

export default Thumbnail;
