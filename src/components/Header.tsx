import React from 'react';

interface Props {
  className: string;
  title: string;
  arrow?: boolean;
}

const defaultProps: Props = {
  className: 'header',
  title: 'Title',
};

const Header: React.FC<Props> = props => {
  const { title, arrow, className } = props;

  let arrowSVG = null;

  if (arrow) {
    arrowSVG = (
      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    );
  }

  return (
    <div className={className}>
      <h1>{title}</h1>
      {arrowSVG}
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
