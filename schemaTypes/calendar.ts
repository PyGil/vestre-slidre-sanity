export default {
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'event_image',
      title: 'Event Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      options: {
        placeholder: '12:00 - 16:00',
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        placeholder: 'Tunvegen 17, 2966 Slidre',
      },
    },
  ],
}
