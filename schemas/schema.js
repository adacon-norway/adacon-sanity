import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "adacon20",
  types: schemaTypes.concat([
    {
      name: "gallery",
      type: "document",
      title: "Gallery",
      fields: [
        {
          name: "images",
          type: "array",
          options: {
            layout: "grid",
          },
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "speaker",
      type: "document",
      title: "Speaker",
      fields: [
        {
          name: "images",
          type: "array",
          options: {
            layout: "grid",
          },
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "venue",
      type: "document",
      title: "Venue",
      fields: [
        {
          name: "images",
          type: "array",
          options: {
            layout: "grid",
          },
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "sponsor",
      type: "document",
      title: "Sponsor",
      fields: [
        {
          name: "images",
          type: "array",
          options: {
            layout: "grid",
          },
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
  ]),
});
