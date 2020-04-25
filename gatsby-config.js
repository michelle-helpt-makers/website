const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-relative-images'],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.resolve(__dirname, 'src/components/layout'),
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: '%s | Michelle Helpt Makers',
        openGraph: {
          url: 'https://michellehelptmakers.nl',
          type: 'website',
          title: 'Michelle Helpt Makers',
          description:
            'Ik ben Michelle. Mijn doel is om jou als maker achter het stuur te zetten van je eigen carrière.',
        },
      },
    },
  ],
};
