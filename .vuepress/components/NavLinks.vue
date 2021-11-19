<template>
  <div class="nav">
    <ul class="links" 
      v-for="navbarItem in navbarUsers" 
      :key="navbarItem.title">

      <li v-for="items in navbarItem.children" 
        :key="items.text">

        <a :href="items.url" 
            :title="items.desc" 
            target="_blank" rel="noopener noreferrer" >
          <img :src="showIcon(items)"/>
          {{ items.text }}
        </a>
      </li>
    </ul>
  </div>


</template>


<script>

export default {
  name: "NavLinks",
  props:{
    navbars:{
        type:String,
        default(){
          ' '
        },
    }
  },
  data(){
    return{
      navbarInfo:[
        {
          title: "实用网站",
          children: [
            {
              text: '今日热榜',
              url: 'https://tophub.today/',
              desc:'今天发生了什么'
            },
            {
              text: 'speedtest',
              url: 'https://www.speedtest.cn/',
              desc:'测网速'
            },
            {
              text: 'iData知识搜索',
              url: 'https://www.cn-ki.net/',
            },
            {
              text: 'Wuxia World',
              url: 'https://www.wuxiaworld.com/',
              desc:'国内小说英文版'
            },
            {
              text: '医学微视',
              url: 'https://www.mvyxws.com/',
            },
            {
              text: '特殊符号大全',
              url: 'http://tool.cc/fuhao/',
            },
            {
              text: 'windy 天气',
              url: 'https://www.windy.com/',
            },
            {
              text: 'wallhaven 壁纸',
              url: 'https://wallhaven.cc/',
              icon: 'https://favicon.cccyun.cc/wallhaven.cc'
            },
            
            {
              text: 'waifu2x',
              url: 'http://waifu2x.udp.jp/',
              desc:'图片画质增强'
            },
            {
              text: 'alltoall 格式转换',
              url: 'https://www.alltoall.net/',
            },
            {
              text: ' LALAL.AI',
              url: 'https://www.lalal.ai/',
              desc:'伴奏提取'
            },
            {
              text: 'DeepL 翻译',
              url: 'https://www.deepl.com/',
              desc:'更地道的翻译'
            },
            {
              text: 'GBT乐赏游戏空间',
              url: 'http://gbtgame.ys168.com/',
            },
            
          ]
        },
        {
          title: "趣味网站",
          children: [
            {
              text: 'crazygames',
              url: 'https://www.crazygames.com/',
              desc: '在线游戏网站'
            },
            {
              text: 'indiexpo',
              url: 'https://www.indiexpo.net/zh',
              icon:'http://favicon.cccyun.cc/www.indiexpo.net/zh',
              desc: '独立游戏网站'
            },
            {
              text: 'Yikm',
              url: 'http://www.yikm.net',
              desc: '复古游戏网站'
            },
            {
              text: 'Mr.doob',
              url: 'https://mrdoob.com/',
              desc: '有趣网页合集'
            },
            {
              text: 'beatstage 音游',
              url: 'https://www.beatstage.com/',
              icon:'https://favicon.cccyun.cc/beatstage.com'
            },
            {
              text: 'TouchPianist',
              url: 'http://touchpianist.com/',
              desc:'超美在线钢琴网站'
            },
            {
              text: '灵魂社区',
              url: 'http://soulapartment.net/',
              desc:'暖心的社区'
            },
            {
              text: 'GNOOSIC',
              url: 'https://www.gnoosic.com/faves.php',
              desc:'AI音乐推荐'
            },
            {
              text: 'Dear Website',
              url: 'https://www.thiswebsitewillselfdestruct.com/',
              desc:'一个会自杀的网站'
            },
            {
              text: 'behind the name',
              url: 'https://www.behindthename.com/',
              desc:'名字的起源和历史'
            },
            {
              text: '能不能好好说话？',
              url: 'https://lab.magiconch.com/nbnhhsh/',
              desc:'拼音缩写释义'
            },
            {
              text: 'Rain Mood',
              url: 'https://www.rainymood.com/',
              desc:'听雨的声音'
            },
            {
              text: 'A SOFT MURMUR',
              url: 'https://asoftmurmur.com/',
              desc:'背景白噪音'
            },
            {
              text: 'window-swap',
              url: 'https://www.window-swap.com/',
              desc: "开窗户"
            },
            {
              text: 'Selfie2Anime',
              url: 'https://selfie2anime.com/',
              desc: "动漫头像生成"
            },
            {
              text: 'hackertyper',
              url: 'http://hackcode.ishoulu.com/hackertyper/',
              desc: "假装黑客"
            },
            {
              text: 'Windows Update Prank',
              url: 'http://hackcode.ishoulu.com/hackertyper/',
              desc: "假装Windows升级界面"
            }
          ]
        },
        {
          title: "剪辑设计",
          children: [
            {
              text: '稿定抠图',
              url: 'https://www.gaoding.com/koutu',
            },
            {
              text: 'BgRemover',
              url: 'https://www.aigei.com/bgremover',
              icon: 'https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico'
            },
            {
              text: '创客贴',
              url: 'https://www.chuangkit.com/dc.html',
              desc: '在线平面设计工具'
            },
            {
              text: 'ShapeFactory',
              url: 'https://shapefactory.co',
              desc: 'LOGO、Duotone图片一键生成'
            },
            {
              text: 'Squoosh',
              url: 'https://squoosh.app/',
              icon: 'https://squoosh.app/c/favicon-c9cf50ef.ico'
            },
            {
              text: 'Iconfont',
              url: 'https://www.iconfont.cn/',
              icon: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico'
            },
            
            {
              text: 'IconPark',
              url: 'https://iconpark.oceanengine.com/',
              icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg'
            },
            {
              text: 'Free Mesh Gradient',
              url: 'https://products.ls.graphics/mesh-gradients/',
              desc: '渐变色配色网站'
            },
            {
              text: 'Creativemass',
              url: 'https://creativemass.cn/',
              desc: '创意导航网站'
            },
            {
              text: '切九图',
              url: 'https://lab.magiconch.com/v/sns-image',
            },
            
          ]
        },
        {
          title: "工具合集",
          children: [
            {
              text: 'Tool 工具箱',
              url: 'https://tool.lu/',
            },
            {
              text: 'Miku 工具箱',
              url: 'https://tools.miku.ac/',
            },
            {
              text: '菜鸟工具',
              url: 'https://c.runoob.com/',
            },
            {
              text: 'OSCHINA',
              url: 'https://tool.oschina.net/',
            },

            {
              text: '脚本之家',
              url: 'http://tools.jb51.net/',
            },
            {
              text: 'W3Cschool',
              url: 'https://123.w3cschool.cn/webtools',
              icon: 'https://7n.w3cschool.cn/statics/images/favicon.ico'
            },
            {
              text: 'Text-Difference',
              url: 'https://www.qianbo.com.cn/Tool/Text-Difference/',
              desc:'在线文本对比工具'
            },
          ]
        },
        {
          title: "前端相关",
          children: [
            {
              text: 'VueJs',
              url: 'https://cn.vuejs.org/',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Element-UI',
              url: 'https://element-plus.gitee.io/zh-CN/',
              icon: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg'
            },
            {
              text: 'View UI',
              url: 'https://www.iviewui.com/',
              icon: 'https://file.iviewui.com/file/iview-design-favicon.ico'
            },
            {
              text: 'Vant UI',
              url: 'https://youzan.github.io/vant/#/zh-CN/',
              icon: 'https://img01.yzcdn.cn/vant/logo.png'
            },
            {
              text: 'React',
              url: 'https://zh-hans.reactjs.org/'
            },
            {
              text: 'Ant Design',
              url: 'https://ant.design/'
            },
            {
              text: 'React Bootstrap',
              url: 'https://react-bootstrap.github.io/ '
            },
            {
              text: 'MATERIAL-UI',
              url: 'https://material-ui.com/'
            },
            {
              text: 'Meditor.md',
              url: 'https://pandao.github.io/editor.md/',
              icon:'https://pandao.github.io/editor.md/favicon.ico'
            },
            {
              text: 'Swiper',
              url: 'https://www.swiper.com.cn/'
            },
            {
              text: 'Can I use',
              url: 'https://caniuse.com/',
              icon: 'https://caniuse.com/img/favicon-128.png'
            },
            {
              text: 'Apache ECharts',
              url: 'https://echarts.apache.org/zh/',
              icon: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png'
            },
          ]
        },
        {
          title: "JavaScript相关",
          children: [
            {
              text: 'Lodash',
              url: 'https://www.lodashjs.com/',
            },
            {
              text: 'Day.js',
              url: 'https://dayjs.fenxianglu.cn/',
            },
            {
              text: 'timeago.js',
              url: 'https://github.com/hustcc/timeago.js',
            },
            {
              text:'validator.js',
              url:'https://github.com/validatorjs/validator.js'
            },
            {
              text:'mescroll.js',
              url:'http://www.mescroll.com/api.html'
            },
            {
              text:'echarts',
              url:'https://echarts.apache.org/zh/index.html'
            }
          ]
        },
        {
          title: "CSS相关",
          children: [
            {
              text: 'CSS ICON',
              url: 'https://cssicon.space/',
              icon: 'https://cssicon.space/favicon.png'
            },
            {
              text: 'Animate.css',
              url: 'https://animate.style/',
            },
            {
              text: 'Image Effects with CSS',
              url: 'https://bennettfeely.com/image-effects/',
              icon: 'https://bennettfeely.com/image-effects/img/favicon-16x16.png'
            },
            {
              text: 'CSS triangle generator',
              url: 'http://apps.eky.hk/css-triangle-generator/',
            },
            {
              text:'SASS to CSS',
              url:'https://www.sassmeister.com/'
            }
          ]
        },
        {
          title: "Vue轮子",
          children: [
            {
              text: 'Vue-draggable',
              url: 'https://www.itxst.com/vue-draggable/tutorial.html',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Vue-qr',
              url: 'https://www.npmjs.com/package/vue-qr',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Vue-cropper',
              url: 'https://github.com/xyxiao001/vue-cropper',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Vue-lazyload',
              url: 'https://www.npmjs.com/package/vue-lazyload',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Vue-simple-upload',
              url: 'https://github.com/saivarunk/vue-simple-upload',
              icon: 'https://cn.vuejs.org/images/logo.png'
            },
            {
              text: 'Vxe-table',
              url: 'https://xuliangzhan_admin.gitee.io/vxe-table',
              icon: 'https://xuliangzhan_admin.gitee.io/vxe-table/logo.png'
            },
          ]
        },
        {
          title: "冷门网站",
          children: [
            {
              text: '海の見える駅を探す',
              url: 'https://seaside-station.com/region/hokkaido/',
              icon:'https://seaside-station.com/wpbin/wp-content/uploads/logo_vertical.svg',
              desc:'记录日本靠海的车站'
            },
            {
              text: '全国高校制服図鑑',
              url: 'http://www.seihuku-zukan.com/',
            }
          ]
        },

      ]
    }
  },
  methods:{
    showIcon(item){
      return item.icon ? item.icon : 'http://favicon.cccyun.cc/'+item.url
    },

    },
  computed:{
    navbarUsers(){
      return this.navbarInfo.filter(
          (navbarIteam) => navbarIteam.title === this.navbars
      )
    }

  }


}

</script>

<style scoped>
html .links, html.dark .links {
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  list-style: none;
}
html .links > li, html.dark .links > li {
  flex: 0 0 28%;
  margin: 8px !important;
  position: relative;
  justify-content: space-between;
  color: #1f2f3e;
  transition-timing-function: cubic-bezier(0.88, 0.13, 0.25, 1);
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.4s;
  border-radius: 2em;
}
html .links > li a, html.dark .links > li a {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  text-decoration: none;
  border-radius: 20px;
}
html .links > li a img, html.dark .links > li a img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin: 0 5px 0 1em;
}
html .links > li:last-child, html.dark .links > li:last-child {
  border-right: none;
}
html .links > li:hover, html.dark .links > li:hover {
  box-shadow: 0 10px 20px -10px #999;
  transform: translateY(-5px);
  z-index: 1;
}
html .links > li:hover > a, html.dark .links > li:hover > a {
  text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.15);
}
html .download, html.dark .download {
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  width: calc(100% - 40px);
  padding: 0;
}
html .download > li > a, html.dark .download > li > a {
  font-size: 14px;
  text-decoration: none;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
html .download > li > a:last-child, html.dark .download > li > a:last-child {
  border-bottom: none;
}

html .links > li > a {
  color: #242424;
  background: #fffffc;
}
html .links > li > a:hover {
  color: #03af90;
  text-decoration: none;
}

html.dark .links > li > a {
  color: #e0eeff;
  background: #5b6b82;
}
html.dark .links > li > a:hover {
  color: #03af90;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  html .links > li, html.dark .links > li {
    flex: 0 46%;
    margin: 8px;
  }
}
@media only screen and (max-width: 768px) {
  html .links > li, html.dark .links > li {
    flex: 0 100%;
    margin: 8px 0;
  }
}
</style>