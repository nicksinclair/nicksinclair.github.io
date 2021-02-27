export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'skillList',
      title: 'Skill List',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
