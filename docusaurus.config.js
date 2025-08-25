// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HD 开发文档',
    tagline: '欢迎',
    favicon: 'img/HD.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    // 插件配置（重要：插件需配置在顶层，而非themeConfig）
    // plugins: [
    //     // [
    //     //     '@cmfcmf/docusaurus-search-local',
    //     //     {
    //     //         languages: ['en', 'zh'],  // 支持中英文搜索
    //     //         placeholder: '搜索文档...',
    //     //         highlightSearchTermsOnTargetPage: true,
    //     //         hashed: true,
    //     //         explicitSearchResultPath: true,
    //     //     },
    //     // ],
    //     // 代码块复制功能插件
    //     [
    //         'docusaurus-plugin-copy-code',
    //         {
    //             // 配置复制按钮样式和提示
    //             copyButtonLabel: '复制代码',
    //             successButtonLabel: '已复制',
    //         }
    //     ]
    // ],
    staticDirectories: ['public'],
    plugins: [
        // ...其他插件
        ['./src/plugins/doc-search-index-plugin', {}]
    ],

    // 禁用默认的Algolia搜索（如果启用了的话）

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
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
            // algolia: undefined,
            // Replace with your project's social card
            image: 'img/HD.ioc',
            navbar: {
                title: 'HD',
                logo: {
                    // alt: 'My Site Logo',
                    src: 'img/HD.png',
                },
                    items: [
                        // {
                        //     type: 'search', // 让 Docusaurus 识别搜索组件
                        //     position: 'right', // 实际由 Search.js 控制居中，这里仅占位
                        // },
                        {
                          type: 'docSidebar',
                          sidebarId: 'demoSidebar',
                          position: 'left',
                          label: '🚀 使用案例',
                        },

                        {
                            label: '🔤  API文档',
                            position: 'left',
                            items: [
                                { label: '⚙️ C++ 开发文档', href: '/docs/cpp' },
                                { label: '🐍 Python 开发文档', href: '/docs/python' },
                                { label: '🔷 Csharp 开发文档', href: '/docs/csharp' },
                                { label: '🌋 火山 开发文档', href: '/docs/huoshan' },
                                { label: '💻 易语言 开发文档', href: '/docs/yiyuyan' },
                                { label: '🔧 炫 开发文档', href: '/docs/xuan' },
                            ],

                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'updateSidebar',
                            position: 'left',
                            label: '📒 更新日志',

                        },

                        // {
                        //     label: '🚀 入门',
                        //     position: 'left',
                        //     items: [
                        //         { label: '⚙️ C++ ', href: '/demo/C++' },
                        //
                        //     ],
                        //
                        // },
                        // {to: '/blog', label: 'Blog', position: 'left'},
                        //   {to: '/cpp', label: 'cpp', position: 'left'},

                        // {
                        //   href: 'https://github.com/facebook/docusaurus',
                        //   label: 'GitHub',
                        //   position: 'right',
                        // },
                    ],


            },
            footer: {
                // style: 'dark',
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'Community',
                //     items: [
                //       {
                //         label: 'Stack Overflow',
                //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //       },
                //       {
                //         label: 'Discord',
                //         href: 'https://discordapp.com/invite/docusaurus',
                //       },
                //       {
                //         label: 'X',
                //         href: 'https://x.com/docusaurus',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'More',
                //     items: [
                //       {
                //         label: 'Blog',
                //         to: '/blog',
                //       },
                //       {
                //         label: 'GitHub',
                //         href: 'https://github.com/facebook/docusaurus',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} .`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            plugins: [
                [
                    '@cmfcmf/docusaurus-search-local',
                    {
                        languages: ['en', 'zh'], // 支持中英文
                        placeholder: '搜索文档...',
                        highlightSearchTermsOnTargetPage: true,
                        hashed: true,
                    },
                ],
            ],
        }),
};

export default config;
