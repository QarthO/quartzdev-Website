// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'quartzdev.gg',
  tagline: 'Website coming soon. Join the Discord for updates',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://quartzdev.gg/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        // respectPrefersColorScheme: true,
      },
      image: 'img/gp-logo-wide',
      navbar: {
        title: 'quartzdev',
        logo: {
          alt: 'quartzdev.gg Logo',
          src: 'img/quartz-icon.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: '/paypal/',
            className: "header-icon-link header-paypal-link",
            position: "right",
          },
          {
            href: 'https://modrinth.com/user/QarthO',
            className: "header-icon-link header-modrinth-link",
            // label: "Modrinth",
            position: "right",
          },
          {
            href: '/discord/',
            className: "header-icon-link header-discord-link",
            // label: "Discord",
            position: "right",
          },
          {
            href: 'https://github.com/QarthO',
            className: "header-icon-link header-github-link",
            // label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Plugins',
            items: [
              {
                label: 'TBD',
                to: '/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: '/discord/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/quartzdevgg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Donate',
                href: '/paypal/',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/user/QarthO',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/QarthO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} quartzdev.gg | Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 500, // max resized image's size.
          min: 100, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
};

export default config;
