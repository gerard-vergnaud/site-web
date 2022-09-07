import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gérard Vergnaud',
    siteUrl: 'https://www.gerard-vergnaud.org',
    charset: 'UTF-8',
    author: 'Éric Vergnaud, Emmanuelle Vergnaud',
  },
  graphqlTypegen: false,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fr',
        useLangKeyLayout: false,
      },
    },
  ],
};

export default config;
