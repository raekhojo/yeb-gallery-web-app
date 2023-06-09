import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: {type: 'artist'},
    }),
    defineField({
      name: 'eventlocation',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'brief',
      title: 'Brief',
      type: 'string',
    }),
    {
      name: 'excerpt',
      title: 'Description',
      type: 'string',
      options: {
        maxLength: 200,
      },
    },

    {
      name: 'eventdate',
      title: 'Date Of The Event',
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
      name: 'exhibitionImage',
      title: 'Exhibition image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'installationViewImage',
      title: 'Installation View',
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
