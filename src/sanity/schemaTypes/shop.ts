const productSchema = {
    name: 'shop',
    type: 'document',
    title: 'Shop',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text', // Reverted to text for simplicity
            title: 'Description of Product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: "stockStatus",
            title: "In Stock",
            type: "boolean",
            description: "Check if the product is available in stock.",
            initialValue: true, // Default to true
          },
          {
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            description: "The date when this product was created.",
            initialValue: () => new Date().toISOString(), // Automatically set to the current date
          },
    ],
};

export default productSchema;
