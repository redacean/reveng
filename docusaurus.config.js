// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reveng',
  tagline: 'Reverse Engineering and Malware Analysis',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://redacean.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/reveng/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'redacean', // Usually your GitHub org/user name.
  projectName: 'reveng', // Usually your repo name.
  trailingSlash: false,

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/redacean/reveng',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Reveng',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'ctf/intro',
            position: 'left',
            label: 'CTF',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://youtube.com/playlist?list=PLISF42W6jzqJfiypwhA-GC9WjUAymSFFF',
            label: 'YouTube',
            position: 'right',
          },
          {
            href: 'https://github.com/redacean/reveng',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'CTF',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCX1ZdYGUCpZP6smtyhra6bQ',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/redacean'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/redacean/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/redacean#0702',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/redacean',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Email',
                href: 'mailto:contact@redacean.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/redacean',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@contact_66632',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Redacean, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
