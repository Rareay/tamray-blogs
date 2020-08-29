const nav = require('./config/nav.js');
const pluginConf = require('./config/pluginConf');
const headConf = require('./config/headConf');

module.exports = {
  title: "积跬步 - 至千里",
  description: '简洁至上,专注学习与总结。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/vuepress-theme-vdoing/', // '/<github仓库名>/'， 默认'/' 

  head: headConf,
  plugins: pluginConf,

  markdown: {
    lineNumbers: true, // 代码行数
    toc: { includeLevel: [1, 2] }, // 显示的目录深度
    extendMarkdown: md => {
      md.use(require('markdown-it-katex')), // 数学公式插件
      md.use(require('markdown-it-mark')), // 字符强调插件
      md.use(require('markdown-it-ins')), // 字符下划线插件
      md.use(require('markdown-it-footnote')) // 字符下划线插件
    }
  },

  //theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/app.png', // 导航栏logo
    repo: 'https://github.com/Tamray/tr-blogs', // 导航栏右侧生成Github链接
    repoLabel: '源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    docsDir: 'docs', // 仓库下的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '编辑页面', // 链接字段
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // 以下配置是Vdoing主题改动和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    
    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Tamray', // 必需
      link: 'https://github.com/Tamray/tamray-blogs' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏
      avatar: '/head.jpg',
      name: 'Tamray',
      slogan: '听听你的故事'
    },
    social:{ // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:985480276@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Tamray'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com'
        }
      ]
    },
    footer:{ // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo:  '个人记录 All Rights Reserved. 备案号:渝ICP备20002389', // 博客版权信息，支持a标签
    }
  },
  
}
