export default {
    title: 'Shipping Address',
    name: 'shippingAddress',
    type: 'document',
    fields: [
      {
        title: 'User',
        name: 'user',
        type: 'reference',
        to: [{ type: 'user' }],
        options: {
          disableNew: true,
        },
      },
      {
        title: 'fullName',
        type: 'string',
        name: 'fullName',
      },
      {
        title: 'address',
        name: 'address',
        type: 'string',
      },
      {
        title: 'city',
        name: 'city',
        type: 'string',
      },
      {
        title: 'postalCode',
        name: 'postalCode',
        type: 'string',
      },
      {
        title: 'phone',
        name: 'phone',
        type: 'string'
      },
      {
        title: 'state',
        name: 'state',
        type: 'string',
      },
    ],
  };