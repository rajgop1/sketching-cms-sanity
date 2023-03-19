export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
  
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
      {
        name: 'isAdmin',
        title: 'Is Admin',
        type: 'boolean',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      },
      {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'string'
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string'
      },
    ],
  };