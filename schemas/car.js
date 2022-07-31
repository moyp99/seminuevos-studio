export default {
  name: "car",
  type: "document",
  title: "Car",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    { name: "brand", type: "reference", to: [{ type: "brand" }] },
    { name: "Description", type: "richText" },
    {
      name: "model",
      type: "string",
      title: "Model",
    },
    {
      name: "year",
      type: "number",
      title: "year",
    },
    {
      name: "new",
      type: "boolean",
      title: "Is New?",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    { name: "city", type: "reference", to: [{ type: "city" }] },
    { name: "gallery", type: "gallery" },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => {
          return (
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200) + '-' + // 1 -> 10
            Math.floor(Math.random() * 1000000)
          );
        },
      },
    },
  ],
};
