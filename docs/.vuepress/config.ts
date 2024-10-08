/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/h-qing/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const BASE='/blog/';

// @ts-ignore
// @ts-ignore
export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  title: 'Rustic blog',
  description: '沉舟侧伴千帆过，病树前头万木春。',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Rustic blog",
      description: 'h-qing的博客。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  base: BASE,
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '后端',
        link: '/server/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: 'Java',
            items: [
              { text: 'Jvm-指南', link: '/pages/java001/' },
              { text: 'Lambda&Stream-API', link: '/pages/java002/' },
              { text: 'LocalDate大法', link: '/pages/java003/' },
              { text: 'Juc-指南', link: '/pages/java004/' },
              { text: 'Spring-指南', link: '/pages/java005/' },
              { text: 'Java类加载', link: '/pages/java006/' },
              { text: 'HashMap源码分析', link: '/pages/java007/' },
              { text: 'Mybatis 源码流程分析', link: '/pages/java008/' },
            ],
          },
          {
            text: 'Linux',
            items: [
              { text: 'Linux-指南', link: '/pages/linux001/' },
              { text: 'Shell-指南', link: '/pages/linux002/' },
            ],
          },
          {
            text: 'Sql',
            items: [
              { text: 'Sql-指南', link: '/pages/sql001/' },
            ],
          },
          {
            text: 'DevOps',
            items: [
              { text: 'Docker-指南', link: '/pages/devops001/' },
              { text: 'K8S-指南', link: '/pages/devops002/' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: 'ES-指南', link: '/pages/ohter001/' },
              { text: 'Git-指南', link: '/pages/ohter002/' },
              { text: 'Redis-指南', link: '/pages/ohter003/' },
              { text: 'Typora-指南', link: '/pages/ohter004/' },
              { text: 'Nginx-指南', link: '/pages/ohter005/' },
              { text: '正则表达式-指南', link: '/pages/ohter006/' },
            ],
          },
        ],
      },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          {
            text: '页面',
            items: [
              { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
              { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
            ],
          },
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
              { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
          },
          {
            text: '学习笔记',
            items: [
              { text: '《JavaScript教程》', link: '/note/javascript/' },
              { text: '《JavaScript高级程序设计》', link: '/note/js/' },
              { text: '《ES6 教程》', link: '/note/es6/' },
              { text: '《Vue》', link: '/note/vue/' },
              { text: '《React》', link: '/note/react/' },
              {
                text: '《TypeScript 从零实现 axios》',
                link: '/note/typescript-axios/',
              },
              {
                text: '《Git》',
                link: '/note/git/',
              },
              {
                text: 'TypeScript',
                link: '/pages/51afd6/',
              },
              {
                text: 'JS设计模式总结',
                link: '/pages/4643cd/',
              },
            ],
          },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          { text: '简历', link: '/phone/jd_hq/' },
          {
            text: '收藏',
            link: '/pages/beb6c0bd8a66cea6/',
            // items: [
            //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
            //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
            //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
            // ],
          },
        ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: '简历', link: '/jd_hq/' }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // logo: '/img/logo.png', // 导航栏logo
    logo: '/img/logo.jpg', // 导航栏logo
    repo: 'h-qing', // 导航栏右侧生成Github链接
    // repo: 'hq-study/blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 启用编辑
    // editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.h-qing.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    bodyBgImg: [
      // BASE + 'img/mybg2.jpg',
      // BASE + 'img/bg.jpg',
      BASE + 'img/bg.jpg',
      // BASE + 'img/bg.jpeg',
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Rustic', // 必需
      link: 'https://github.com/h-qing', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      // avatar: BASE + 'img/logo.png',
      avatar: BASE + 'img/logo.jpg',
      name: 'Rustic',
      slogan: '后端界的小学生',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.h-qing.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:hq.email@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/h-qing',
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/huang-qing',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/',
        },
      ],
    },
    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
          'Rustic <!--| <a href="https://github.com/h-qing/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License--></a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Rustic',
        link: 'https://github.com/h-qing'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'hq-blog',
      },
    ],
    //['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[

    [
      "sakura",
      {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }
      }
    ],
    "@vuepress-reco/vuepress-plugin-loading-page",


    // [
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ["wanko"],
    //     clean: false,
    //     messages: {
    //       welcome: 'hello!',
    //       home: 'm-m.....',
    //       theme: 'v-v......',
    //       close: '再见!'
    //     }
    //   }
    // ],
    /*     [
          //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
          "ribbon",
          {
            size: 90,     // width of the ribbon, default: 90
            opacity: 0.8, // opacity of the ribbon, default: 0.3
            zIndex: -1    // z-index property of the background, default: -1
          }
        ], */
    [
      "dynamic-title",
      {
        showIcon: BASE+"img/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: BASE+"img/favicon.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      },
    ],

    // [
    //   'vuepress-plugin-helper-live2d', {
    //     // 是否开启控制台日志打印(default: false)
    //     log: true,
    //     live2d: {
    //       // 是否启用(关闭请设置为false)(default: true)
    //       enable: true,
    //       // 模型名称(default: hibiki)>>>取值请参考：
    //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //       model: 'hibiki',
    //       display: {
    //         position: "right", // 显示位置：left/right(default: 'right')
    //         width: 135, // 模型的长度(default: 135)
    //         height: 300, // 模型的高度(default: 300)
    //         hOffset: 65, //  水平偏移(default: 65)
    //         vOffset: 0, //  垂直偏移(default: 0)
    //       },
    //       mobile: {
    //         show: false // 是否在移动设备上显示(default: false)
    //       },
    //       react: {
    //         opacity: 0.8 // 模型透明度(default: 0.8)
    //       }
    //     }
    //   }
    // ],
    [
      "cursor-effects",
      {
        size: 2,
        shape: 'circle',  // 点击形状: 'star', 'star' | 'circle'
        zIndex: 999999999
      },
    ],
    // [
    //   'meting',
    //   {
    //     // 这个 API 是不可用的，只是作为示例而已
    //     meting: {
    //       auto: 'https://music.163.com/playlist?id=7382712855',
    //       server: 'netease',
    //       type: 'playlist',
    //       mid: '7382712855',
    //     }, // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       lrcType: 3,
    //       // 歌单为随机
    //       order: 'random',
    //       // 音量
    //       volume: 0.3,
    //       // 开启迷你模式
    //       mini: true,
    //       // 自动播放
    //       autoplay: true
    //     },
    //   },
    // ],

    // 'vuepress-plugin-baidu-autopush', // 百度自动推送
    //
    // [
    //   'vuepress-plugin-baidu-tongji', // 百度统计
    //   {
    //     hm: baiduCode,
    //   },
    // ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Ah-qing.com%20',
    //     },
    //   ],
    // },

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'a6e1355287947096b88b',
    //       clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //       repo: 'blog-gitalk-comment', // GitHub 仓库
    //       owner: 'Rustic', // GitHub仓库所有者
    //       admin: ['Rustic'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'sJaWDPfXywDYA9mHUIYgC4LC-gzGzoHsz', // your appId
          appKey: '05e4AsjQJ0CldAFAPxQWRf8N', // your appKey
          placeholder: '是时候展现真正的技术了',
          avatar: 'wavatar',
          serverUrl: 'https://sjawdpfx.lc-cn-n1-shared.com'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
