export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'major',
      title: 'Major',
      type: 'string',
    },
    {
      name: 'minor',
      title: 'Minor',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'gpa',
      title: 'GPA',
      type: 'number',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'string',
    },
  ],
};
