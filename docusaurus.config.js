// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mip Start',
  tagline: 'You start point to become a Decision Scientist',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mip-start-demo/',
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andreajrujano', // Usually your GitHub org/user name.
  projectName: 'mip-start-demo', // Usually your repo name.
  trailingSlash: false,

  staticDirectories: ['static'],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/program',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All our articles",
          routeBasePath: '/articles',
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Mip Start',
        style: 'primary',
        logo: {
          alt: 'MipWise Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mipGoSidebar',
            position: 'left',
            label: 'Mip-Go',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'mipOptSidebar',
            label: 'Mip-Opt',
          },
          { to: '/articles', label: 'Articles', position: 'left' },
          {
            href: 'https://github.com/mipwise/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light', /* options: 'light', 'dark' IDK where it gets the colors*/
        links: [
          {
            title: 'The Program',
            items: [
              {
                label: 'Mip Go',
                to: '/program/intro_mip_go',
              },
              {
                label: 'Mip Opt',
                to: '/program/intro_mip_opt',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/mipwise',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@mipwise',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Mip Wise Blog',
                to: 'https://www.mipwise.com/blogs',
              },
              {
                label: 'Mip Wise GitHub',
                href: 'https://github.com/mipwise/',
              },
              {
                label: 'Articles',
                href: '/articles',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MipWise, LTDA. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
