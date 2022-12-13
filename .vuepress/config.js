module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: "送报少年",
  description: "EL PSY CONGROO!",

  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

  markdown: {
    "lineNumbers": true
  }

  ,
  theme: "reco",


  //themeConfig

  themeConfig: {

    type: "blog",
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Okarin",
    authorAvatar: "/avatar.png",
    record: "蜀ICP备20013490号-1",
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: "2020",


    //导航栏
    nav: [{
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [

          {
            "text": "JavaScript",
            "link": "/docs/JavaScript/"
          },
          {
            "text": "JavaScript进阶",
            "link": "/docs/deepJavaScript/"
          },
          {
            "text": "Vue",
            "link": "/docs/vue/"
          },
          {
            "text": "SQL",
            "link": "/docs/SQL/"
          }

        ]
      },

      {
        "text": "导航",
        "icon": "reco-menu",
        "link": "https://web.okarin.cn/"
      },
    ],


    // blogConfig

    blogConfig: {

      category: {
        "location": 2,
        "text": "分类"
      },
      tag: {
        "location": 3,
        "text": "标签"
      },

      socialLinks: [ // 信息栏展示社交信息
        {
          icon: 'reco-github',
          link: 'https://github.com/Okarin1'
        },
        {
          icon: 'reco-qq',
          link: 'http://wpa.qq.com/msgrd?v=3&uin=201747922&site=qq&menu=yes'
        },
        {
          icon: 'reco-mail',
          link: 'mailto:okarin1024@163.com'
        },
        {
          icon: 'reco-zhihu',
          link: 'https://www.zhihu.com/people/qing-qi-gu-jiu-8'
        },
        {
          icon: 'reco-weibo',
          link: 'https://weibo.com/u/6331216566'
        },
        {
          icon: 'reco-bilibili',
          link: 'https://space.bilibili.com/23812673'
        },
      ],
    },



    // 侧边栏
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: {
      "/docs/Vue/": [
        "",
        "01vue",
        "02vue",
        "03vue",
        "04vue",
        "05vue",
        "06vue",
        "22vue",
        "23vue",
        "24vue"
      ],
      "/docs/JavaScript/": [
        "",
        "01javascript",
        "02javascript",
        "03javascript",
        "04javascript",
        "05javascript",
        "06javascript",
        "07javascript",
        "08javascript",
        "09javascript",
        "10javascript"
      ],
      "/docs/deepJavaScript/": [
        "",
        "01JS",
        "02JS",
        "03JS",
        "04JS",
        "05JS",
        "06JS",
        "07JS",
        "08JS",
        "07JS",
        "08JS",        
        "09JS",
        "10JS",
        "11JS",
        "12JS",
        "13JS",
        "14JS",
        "15JS",
        "16JS",
        "17JS",
        "18JS"
      ],
      "/docs/SQL/": [
        "",
        "01SQL",
        "02SQL"
      ]
    },

    valineConfig: {
      appId: 'yeDg5szPSdXGKoeivis6nl2n-gzGzoHsz', // your appId
      appKey: 'wiFT09cYp9C3CnRqJ0mvaKVO', // your appKey
    },


    friendLink: [{
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: 'lookroot的个人空间',
        desc: '追求理想与现实的平衡',
        logo: "https://www.lookroot.cn/logo.png",
        link: 'https://www.lookroot.cn/'
      },
      {
        title: 'idealclover',
        desc: 'Stay simple, stay naive.',
        logo: "https://image.idealclover.cn/blog/assets/icon.png",
        link: 'https://idealclover.top/'
      },
    ]

  }
}