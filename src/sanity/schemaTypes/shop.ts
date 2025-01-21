import { defineField, defineType } from "sanity";
export const shop = defineType({
    name: "foodProduct", // Unique schema identifier
    title: "Food Product", // Display name in Sanity Studio
    type: "document", // This is a document schema
    fields: [
      {
        name: "name",
        title: "Food Product Name",
        type: "string",
      },
      defineField({
        name:'slug',
        title:'slug',
        type:'slug',
        options:{
          source:'max',
          maxLength:96,
        }
      }),
      {
        name: "category",
        title: "Category",
        type: "string",
        description: "Category of the food item (e.g., Appetizer, Main Course, Dessert).",
      },
      {
        name: "price",
        title: "Price (USD)",
        type: "number",
      },

      {
        name: "description",
        title: "Description",
        type: "string",
      },
    defineField({
        name: "images",
        title: "Food Images",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
      }),
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        description: "The date when this food product was created.",
      },
    ],
  });
  