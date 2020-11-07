export default {
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'companyUrl',
      title: 'Company URL',
      type: 'url',
    },
    {
      name: 'currentPosition',
      title: 'Current Position',
      type: 'boolean',
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
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
    },
  ],
};
