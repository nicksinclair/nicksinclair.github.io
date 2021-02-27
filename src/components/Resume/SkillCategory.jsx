import React from 'react';

const SkillCategory = props => {
  const { category, skillList } = props;

  return (
    <div className="skill-category-block">
      <h2 className="skill-category">{category}</h2>
      <ul className="skill-list">
        {skillList.map(skill => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillCategory;
