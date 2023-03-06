// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reveng',
  tagline: 'Reverse Engineering and Malware Analysis',
  favicon: 'img/logo.ico',

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
      image: 'img/reveng-social-card.webp',
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
                label: 'Website',
                href: 'https://redacean.com'
              },
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
        copyright: `Copyright © ${new Date().getFullYear()} Redacean, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
