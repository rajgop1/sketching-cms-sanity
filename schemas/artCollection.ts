export default {
    name: 'artCollection',
    title: 'Art Collection',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'string',
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number',
      },
      {
        name: 'available',
        title: 'Available',
        type: 'boolean',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options:{
            hotspot:true
        }
      },
      {
        name: 'youtubeLink',
        title: 'YouTube Link',
        type: 'url',
      },
      {
        name: 'instagramLink',
        title: 'Instagram Link',
        type: 'url',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
          isHighlighted: true
        },
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options:{
            source:'name',
            maxLength:90
        }
      }
    ]
  }
  