import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fairs',
  title: 'Fairs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'exhibitingartist',
      title: 'Exhibiting Artist',
      type: 'string',
    }),
    defineField({
      name: 'brief',
      title: 'Brief',
      type: 'string',
    }),
    {
      name: 'eventdate',
      title: 'Date Of The Event',
      type: 'string',
      options: {
        maxLength: 200,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        maxLength: 200,
      },
    },
    {
      name: 'galleryLink',
      title: 'Gallery Web Link',
      type: 'string',
      options: {
        maxLength: 200,
      },
    },

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallerylogo',
      title: 'Gallery Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fairImage',
      title: 'Fair images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
