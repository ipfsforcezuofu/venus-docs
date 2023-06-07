module.exports = {
    title: 'Venus Filecoin',
    description: 'Venus is a Go implementation of the Filecoin Distributed Storage Network.',
    base: '/',
    markdown: {
        config: md => {
            md.set({
                linkify: true
            })
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-container'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-task-lists'))
        }
    },
    plugins: [
        'vuepress-plugin-check-md',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress-plugin-zooming',
        ['vuepress-plugin-code-copy', true]
    ],
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/venus-logo.png'
        }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-SMSDTMGLTV',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-SMSDTMGLTV');",
            ],
        ],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Venus Filecoin',
            description: 'Venus is a Go implementation of the Filecoin Distributed Storage Network.',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '启明星',
            description: 'GO语言实现的Filecoin分布式存储网络',
        }
    },
    themeConfig: {
        logo: '/assets/venus-logo-title.svg',
        lastUpdated: 'Last Updated',
        // Optional options for generating "Edit this page" link
        // if your docs are in a different repo from your main project:
        docsRepo: 'filecoin-project/venus-docs',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // end Edit on Github section
        displayAllHeaders: false,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                lang: 'en-US',
                title: 'Venus Filecoin',
                description: 'Venus is a Go implementation of the Filecoin Distributed Storage Network.',
                nav: [{
                    text: 'Introduction',
                    link: '/intro/'
                },
                {
                    text: 'Advanced',
                    link: '/advanced/'
                },
                {
                    text: 'Operation',
                    link: '/operation/'
                },
                {
                    text: 'Research',
                    link: '/research/'
                },
                ],
                sidebar: {
                    '/intro/': [{
                        title: 'Introduction',
                        collapsable: false,
                        children: [
                            ['', 'Overview'],
                            ['one-pager.md', 'One Pager']
                        ]
                    },
                    {
                        title: 'Products',
                        collapsable: false,
                        children: [
                            ['sophon.md', 'Sophon'],
                            ['damocles.md', 'Damocles'],
                            ['droplet.md', 'Droplet'],
                        ]
                    },
                    {
                        title: 'Contributing',
                        collapsable: false,
                        children: [
                            ['contribute-docs.md', 'Contribute to doc']
                        ]
                    },
                    ],
                    '/research/': [{
                        title: 'Research',
                        collapsable: false,
                        children: [
                            ['sealing-process.md', 'Sealing Process', "https://github.com/zhiqiangxu/filecoin-review/blob/main/sealing_process.md"]
                        ]
                    },],
                    '/advanced/': [{
                        title: 'Advanced Practice',
                        collapsable: false,
                        children: [
                            ['', 'Withdraw Rewards'],
                            ['Chain.md', 'Chain Management'],
                            ['venus-cli.md', 'Venus CLI Commands'],
                            ['venus_load_balancing.md', 'Simple Load Balancing'],

                        ]
                    },
                    {
                        title: 'Local Dev Env',
                        collapsable: false,
                        children: [
                            ['How-To-Setup_2knet.md', 'How to start a local dev network'],
                            ['How-To-Connect-Network.md', 'Connect to different network'],
                            ['Multisig-wallet.md', 'Multisig wallet'],
                            ['Payment-Channel.md', 'Payment channel'],

                        ]
                    },
                    {
                        title: 'RPC API Reference',
                        collapsable: false,
                        children: [
                            ['chain-api-v0.md', 'Chain api v0', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/chain/v0/method.md"],
                            ['chain-api-v1.md', 'Chain api v1', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/chain/v1/method.md"],
                            ['gateway-api-v0.md', 'Gateway api v0', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/gateway/v0/method.md"],
                            ['gateway-api-v1.md', 'Gateway api v1', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/gateway/v1/method.md"],
                            ['market-api-v0.md', 'Market api v0', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/market/v0/method.md"],
                            ['market-api-v1.md', 'Market api v1', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/market/v1/method.md"],
                            ['messager-api.md', 'Messager api', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/messager/method.md"],
                            ['wallet-api.md', 'Wallet api', "https://github.com/filecoin-project/venus/blob/master/venus-shared/api/wallet/method.md"]
                        ]
                    },
                    ],
                    '/operation/': [{
                        title: 'Operation',
                        collapsable: false,
                        children: [
                            ['', 'High Availability Solution'],
                            ['example-single-box.md', 'Example single box setup (depreciating)'],
                            ['Efficiency_of_sealing.md', 'Finding optimal configurations'],
                            ['System_monitor_of_Zabbix.md', 'System monitoring (Zabbix)'],
                            ['lotus-vs-venus.md', 'Configurations inherited from Lotus'],
                        ]
                    },
                    {
                        title: 'Network Upgrade',
                        collapsable: false,
                        children: [
                            ['nv19-upgrade.md', 'nv19 upgrade'],
                            ['nv18-upgrade.md', 'nv18 upgrade'],
                            ['nv17-upgrade.md', 'nv17 upgrade'],
                            ['nv16-upgrade.md', 'nv16 upgrade'],
                            ['nv15-upgrade.md', 'nv15 upgrade'],
                        ]
                    },
                    ],
                    '/master/': [{
                        title: 'Master Course',
                        collapsable: false,
                        children: [
                            ['', 'TOC'],
                            ['Intro_to_Venus.md', 'Introduction'],
                            ['Chain_service_construction.md', 'Deploy/join a Chain Service'],
                            ['Daily_op_and_maintenance.md', 'Node operations'],
                            ['Q&A.md', 'Q&A'],
                            ['Incubation_exit_guide.md', 'Exit incubation program'],
                        ]
                    }]
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                title: '启明星',
                description: 'Venus is a Go implementation of the Filecoin Distributed Storage Network.',
                nav: [{
                    text: '简介',
                    link: '/zh/intro/'
                },
                {
                    text: '运维/部署',
                    link: '/zh/operation/'
                },
                {
                    text: '关于',
                    link: '/zh/about/'
                },
                ],
                sidebar: {
                    '/zh/intro/': [{
                        title: '概述',
                        collapsable: false,
                        children: [
                            ['', '启明星概要'],
                            ['one-pager.md', '单页介绍文档'],

                        ]
                    },
                    {
                        title: '产品',
                        collapsable: false,
                        children: [
                            ['sophon.md', '智子'],
                            ['damocles.md', '执剑人'],
                            ['droplet.md', '水滴'],
                        ]
                    },
                    {
                        title: '参与',
                        collapsable: false,
                        children: [
                            ['contribute-doc.md', '贡献文档'],
                        ]
                    },
                    ],
                    '/zh/operation/': [{
                        title: '部署',
                        collapsable: false,
                        children: [
                            ['', '部署Venus解决方案'],
                        ]
                    },
                    {
                        title: '网络/产品升级',
                        collapsable: false,
                        children: [
                            ['nv19-upgrade.md', 'nv19网络升级'],
                            ['nv18-upgrade.md', 'nv18网络升级'],
                            ['nv17-upgrade.md', 'nv17网络升级'],
                            ['nv16-upgrade.md', 'nv16网络升级'],
                            ['nv15-upgrade.md', 'nv15网络升级'],
                            ['migrate_market_v1_to_v2.md', 'market_v2升级'],
                        ]
                    },
                    ],
                    '/zh/about/': [{
                        title: '',
                        collapsable: false,
                        children: [
                            ['', '关于我们'],
                        ]
                    },
                    ]
                }
            }
        }
    }
}
