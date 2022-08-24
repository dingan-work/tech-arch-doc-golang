import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
    port: 3000,
    base: '/',
    ga: "UA-xxxxx-1",
    dest: '/Users/ganhua/ganhua/vue/nginx/html/golang_blog',
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Golang 全栈知识学习",
            description: "自学Golang全栈知识体系,主要运用与区块链、云平台领域。"
        }
    },
    head: [
        // ico
        ["link", { rel: "icon", href: `/favicon.ico` }],
        // meta
        ["meta", { name: "robots", content: "all" }],
        ["meta", { name: "author", content: "Kingle" }],
        ["meta", { name: "keywords", content: "Golang,区块链" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }]
    ],
    plugins: [
        // 搜索插件
        searchPlugin({
            // 配置项
            maxSuggestions: 10
        }),
        ['@vuepress/nprogress'],
        ['@vuepress/back-to-top']
    ],
    theme: defaultTheme({
        // repo: "realpdai/tech-arch-doc",
        docsRepo: "kingle/tech-arch-doc",
        // logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        colorModeSwitch: false,
        locales: {
            "/": {
                repoLabel: "简体中文",
                selectLanguageText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                navbar: [
                    {
                        text: '基础知识',
                        children: [
                            {
                                text: "基础入门",
                                children: []
                            },
                            {
                                text: "核心开发",
                                children: []
                            },
                            {
                                text: "高级进阶",
                                children: []
                            },
                            {
                                text: "web框架",
                                children: []
                            }
                        ]
                    },
                    {
                        text: "分布式架构与实战",
                        link: '/'
                    },
                    {
                        text: "区块链技术分享",
                        link: '/'
                    },
                ]
            }
        }
    }),

};

