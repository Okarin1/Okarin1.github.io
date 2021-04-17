module.exports = {
  "title": "送报少年",
  "description": "EL PSY CONGROO!",
  "head": [
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
  "theme": "reco",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  "themeConfig": {
    "nav": [
      {
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
            "text": "Vue.js",
            "link": "/docs/vue/"
          }
        ]
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Okarin1",
            "icon": "reco-github"
          }
        ]
      }
    ],
    subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    ,
    "sidebar": {
      "/docs/vue/": [
        "",
        "install"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '青春永不落幕',
        desc: '记录软件下载平台和网络学习过程中的笔记：VuePress、Git、Windows',
        logo: "https://qcyblm.gitee.io/hero.webp",
        link: 'https://qcyblm.gitee.io/'
      }
    ],
  
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Okarin",
    "authorAvatar": "/avatar.png",
    "record": "蜀ICP备20013490号-1",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }


}
