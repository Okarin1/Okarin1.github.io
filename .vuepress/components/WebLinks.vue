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
  name: "WebLinks",
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
              icon:'https://tophub.today/favicon.ico',
              desc:'今天发生了什么'
            },
            
            {
              text: 'speedtest',
              url: 'https://www.speedtest.cn/',
              desc:'测网速'
            },

            {
              text: 'wikiHow',
              url: 'https://zh.wikihow.com/',
              desc:'互联网上最值得信赖的指南网站'
            },

           {
              text: 'wallhaven 壁纸',
              url: 'https://wallhaven.cc/',
              icon: 'http://wallhaven.cc/favicon.ico'
            },
            {
              text: 'Pexels 免费素材图片',
              url: 'https://www.pexels.com/',
              icon: 'https://www.pexels.com/favicon.ico',
              desc:'才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频'
            },
            
            {
              text: 'iData',
              url: 'https://www.cn-ki.net/',
              icon:'https://www.cn-ki.net/favicon.ico'
            },
            
            {
              text: '医学微视',
              url: 'https://www.mvyxws.com/',
              icon:'https://www.mvyxws.com/favicon.ico',
            },
            {
              text: '默沙东诊疗手册',
              url: 'https://www.msdmanuals.cn/',
              icon:'https://www.msdmanuals.cn/favicon.ico',
              desc:'一个涵盖了医学所有领域成千上万主题的广泛医学信息来源。'
            },
            {
              text: '热点后续',
              url: 'https://houxu.app/',
              icon:'https://i.loli.net/2021/11/20/n7aIwgPxlekyUGX.png',
              desc:'有记忆的新闻，持续追踪社会热点'
            },
            {
              text: '万能法律咨询',
              url: 'https://ai.12348.gov.cn/pc/',
              icon:'https://ai.12348.gov.cn/pc/favicon.ico',
              desc:'根据问卷提示填写相关信息，在线为您免费出具法律意见书，供您参考'
            },
            {
              text: '全历史',
              url: 'https://www.allhistory.com/',
              icon:'https://static.allhistory.com/online/common/img/logo-ah.1598.svg',
              desc:'知识地图制作分享平台，它将地图和文字结合，反映中国历史、军事、地理、文化等方面的知识'
            },
            {
              text: '中国地图',
              url: 'https://www.ageeye.cn/',
              icon:'https://www.ageeye.cn/statics/logo-small-3.png',
              desc:'沉浸在纵横开阔、左图右史的知识海洋中'
            },
            {
              text: '做音乐',
              url: 'https://learningmusic.ableton.com/',
              desc:'学习到音乐创作的基础知识，无需任何经验或设备，在浏览器中完成所有工作'
            },
            {
              text: '临时验证码',
              url: 'https://temp-mail.org/zh/',
            },
            {
              text: '微词云',
              url: 'https://www.weiciyun.com/',
            },
            {
              text: '特殊符号大全',
              url: 'http://tool.cc/fuhao/',
            },
            {
              text: 'windy 天气',
              url: 'https://www.windy.com/',
              icon:'https://www.windy.com/favicon.ico',
            },

           
            {
              text: 'DeepL 翻译',
              url: 'https://www.deepl.com/',
              icon: 'https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg',
              desc:'更地道的翻译'
            },
            {
              text: 'GBT乐赏游戏空间',
              url: 'http://gbtgame.ys168.com/',
              icon: 'http://gbtgame.ys168.com/favicon.ico',
            },
            {
              text: 'Wuxia World',
              url: 'https://www.wuxiaworld.com/',
              icon:'https://www.wuxiaworld.com/favicon.ico',
              desc:'海外版的起点小说网，看小说的同时学习英文'
            },
            {
              text: '学发音',
              url: 'https://zh.forvo.com/languages/',
              icon:'https://zh.forvo.com/favicon.ico',
              desc:'世界各地的母语者教你正确发音'
            },
            
          ]
        },
        {
          title: "趣味网站",
          children: [
            {
              text: 'crazygames',
              url: 'https://www.crazygames.com/',
              icon: 'https://images.crazygames.com/favicons/android-icon-96x96.png',
              desc: '在线游戏网站'
            },
            {
              text: 'indiexpo',
              url: 'https://www.indiexpo.net/zh',
              desc: '独立游戏网站'
            },
            {
              text: 'Yikm',
              url: 'http://www.yikm.net',
              icon: 'https://mrcuya.gitee.io/yikmresource/menu/fc.png',
              desc: '复古游戏网站'
            },
            {
              text: 'Mr.doob',
              url: 'https://mrdoob.com/',
              icon: 'https://mrdoob.com/favicon.ico',
              desc: '有趣网页合集'
            },
            {
              text: 'beatstage 音游',
              url: 'https://www.beatstage.com/',
              icon:'https://www.beatstage.com/favicon.ico'
            },
            {
              text: '找色差',
              url: 'http://www.cuishuai.cc/game/',
              desc:'它说我是个瞎子???'
            },
            {
              text: '解谜游戏',
              url: 'https://nazo.one-story.cn/',
              desc:'目前第11关'
            },
            {
              text: '人生重开模拟器',
              url: 'http://liferestart.syaro.io/view/index.html',
              icon:'https://github.com/favicon.ico',
              desc:'这垃圾的人生一点也不想呆了'
            },
            {
              text: 'TouchPianist',
              url: 'http://touchpianist.com/',
              desc:'超美在线钢琴网站'
            },
            {
              text: '灵魂社区',
              url: 'http://soulapartment.net/',
              icon: 'http://soulapartment.net/favicon.ico',
              desc:'暖心的社区'
            },
            {
              text: 'HTML5 神奇效果',
              url: 'http://fff.cmiscm.com/',
              desc:'各种神奇效果'
            },
            {
              text: 'GNOOSIC',
              url: 'https://www.gnoosic.com/faves.php',
              desc:'AI音乐推荐'
            },
            {
              text: '人工智障写作',
              url: 'http://if.caiyunai.com/dream/',
              icon:'https://caiyunai.com/favicon.ico',
              desc:'彩云小梦尝鲜版 - AI续写'
            },
            {
              text: 'Dear Website',
              url: 'https://www.thiswebsitewillselfdestruct.com/',
              icon:'https://i.loli.net/2021/11/20/a18pevYWqrlUD9V.png',
              desc:'一个会自杀的网站'
            },
            {
              text: '地图生成器',
              url: 'https://azgaar.github.io/Fantasy-Map-Generator/',
              icon:'https://github.com/favicon.ico',
              desc:'Azgaar的幻想地图生成器'
            },
            {
              text: 'behind the name',
              url: 'https://www.behindthename.com/',
              icon: 'https://www.behindthename.com/favicon.ico',
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
              icon: 'https://www.rainymood.com/favicon.ico',
              desc:'听雨的声音'
            },
            {
              text: 'A SOFT MURMUR',
              url: 'https://asoftmurmur.com/',
              icon: 'https://asoftmurmur.com/favicon.ico',
              desc:'背景白噪音'
            },
            {
              text: 'window-swap',
              url: 'https://www.window-swap.com/',
              icon: 'https://www.window-swap.com/favicon.ico',
              desc: "开窗户"
            },
            {
              text: 'Selfie2Anime',
              url: 'https://selfie2anime.com/',
              icon: 'https://selfie2anime.com/favicon.ico',
              desc: "动漫头像生成"
            },
            {
              text: 'hackertyper',
              url: 'http://hackcode.ishoulu.com/hackertyper/',
              icon:'https://www.iplaysoft.com/favicon.ico',
              desc: "假装黑客"
            },
            {
              text: 'Windows Update Prank',
              url: 'http://hackcode.ishoulu.com/hackertyper/',
              icon:'https://www.microsoft.com/favicon.ico',
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
              text: '皮卡智能抠图',
              url: 'https://www.picup.shop/currencyBatch.html',
              icon:'https://i.loli.net/2021/11/20/KMv5Ot1DP7XQNwL.png'
            },
            {
              text: '创客贴',
              url: 'https://www.chuangkit.com/dc.html',
              desc: '在线平面设计工具'
            },
            {
              text: 'YASAI',
              url: 'https://wangyasai.github.io/designtools.html',
              desc: '一个设计工具'
            },
            {
              text: 'slidesgo',
              url: 'https://slidesgo.com/theme/isometric-proposal',
              desc:'免费谷歌幻灯片主题和PowerPoint模板'
            },
            {
              text: 'SVG背景图案',
              url: 'https://cn.pattern.monster/',
              icon: 'https://i.loli.net/2021/11/20/yarVDv2NizLMsxk.png',
              desc: '一个简单的重复性SVG图案在线生成器'
            },
            {
              text: '书法生成',
              url: 'http://www.ziticq.com/shufa/',
              desc: '在线书法字体生成，AI矢量书法字体'
            },
            {
              text: 'ShapeFactory',
              url: 'https://shapefactory.co',
              icon:'https://shapefactory.co/static/images/joy.svg',
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
              text: 'Font Awesome 中文网',
              url: 'http://www.fontawesome.com.cn/faicons/',
              icon: 'https://fontawesome.com/favicon.ico'
            },
            {
              text: 'Free Mesh Gradient',
              url: 'https://products.ls.graphics/mesh-gradients/',
              icon:'https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5bfd1275cc56e1460d50b19d_Logo%20Copy%202.svg',
              desc: '渐变色配色网站'
            },
            {
              text: 'Creativemass',
              url: 'https://creativemass.cn/',
              icon: 'https://creativemass.cn/favicon.ico',
              desc: '创意导航网站'
            },
            {
              text: '设计导航',
              url: 'http://hao.shejidaren.com/',
              desc: '设计导航网站'
            },
            {
              text: '切九图',
              url: 'https://lab.magiconch.com/v/sns-image',
            },
            {
              text: '油画转换',
              url: 'https://fotosketcher.com/',
              icon:'https://i.loli.net/2021/11/21/6sD2CYSL4ahHZIg.png',
              desc:'用你的数码照片创造美丽的艺术作品'
            },

            
          ]
        },
        {
          title: "工具合集",
          children: [
            {
              text: 'Tool 工具箱',
              url: 'https://tool.lu/',
              icon: 'https://tool.lu/favicon.ico',
            },
            {
              text: 'Miku 工具箱',
              url: 'https://tools.miku.ac/',
              icon: 'https://tools.miku.ac/favicon.ico',
            },
            
            {
              text: 'Text-Difference',
              url: 'https://www.qianbo.com.cn/Tool/Text-Difference/',
              icon:'https://www.qianbo.org/favicon.ico',
              desc:'在线文本对比工具'
            },
            {
              text: 'waifu2x',
              url: 'http://waifu2x.udp.jp/',
              icon: 'http://waifu2x.udp.jp/favicon.ico',
              desc:'图片画质增强'
            },
            {
              text: 'alltoall 格式转换',
              url: 'https://www.alltoall.net/',
              icon: 'https://www.alltoall.net/qfy-content/uploads/2016/06/fa70f63e4bbcc259632aae74746ce5d6.png',
            },

            {
              text: 'aconvert 格式转换',
              url: 'https://www.aconvert.com/',
            },
            
            {
              text: 'AirPortal 空投',
              url: 'https://airportal.cn/',
              icon:'https://cdn.jsdelivr.net/gh/shangzhenyang/assets/img/ap-icon-512-2.png',
              desc:'只要您的设备联网，您就可以通过它在任意系统、任意设备间传输文件'
              
            },
            {
              text: 'AI音轨分离',
              url: 'https://dango.ai/',
              desc:'借助我们音质至上的AI技术，您可以从任何音频中分离出伴奏，人声，和声，鼓点，贝斯等轨道'
            },
             {
              text: ' LALAL.AI',
              url: 'https://www.lalal.ai/',
              icon: 'https://www.lalal.ai/favicon.ico',
              desc:'伴奏提取'
            },
            {
              text: '菜鸟工具',
              url: 'https://c.runoob.com/',
              icon: 'https://c.runoob.com/favicon.ico',
            },
            {
              text: 'OSCHINA',
              url: 'https://tool.oschina.net/',
              icon: 'https://tool.oschina.net/favicon.ico',
            },

            {
              text: '脚本之家',
              url: 'http://tools.jb51.net/',
              icon: 'http://tools.jb51.net/favicon.ico',
            },
            {
              text: 'W3Cschool',
              url: 'https://123.w3cschool.cn/webtools',
              icon: 'https://7n.w3cschool.cn/statics/images/favicon.ico'
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
              url: 'https://zh-hans.reactjs.org/',
              icon: 'https://zh-hans.reactjs.org/favicon.ico',
            },
            {
              text: 'Ant Design',
              url: 'https://ant.design/',
              icon:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
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
              url: 'https://www.swiper.com.cn/',
              icon: 'https://www.swiper.com.cn/favicon.ico',
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
              icon:'https://dayjs.fenxianglu.cn/assets/favicon.png'
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
              text: 'CSS.gg',
              url: 'https://css.gg/',
              desc:'700+用CSS做的图标'
            },
            {
              text: 'Animate.css',
              url: 'https://animate.style/',
            },
            {
              text: 'Font Awesome Animation',
              url: 'https://l-lin.github.io/font-awesome-animation/',
              icon: 'https://fontawesome.com/favicon.ico'
            },
            {
              text: 'Image Effects with CSS',
              url: 'https://bennettfeely.com/image-effects/',
              icon: 'https://bennettfeely.com/image-effects/img/favicon-16x16.png'
            },
            {
              text: 'CSS triangle generator',
              url: 'http://apps.eky.hk/css-triangle-generator/',
              icon: 'http://apps.eky.hk/css-triangle-generator/favicon.gif'
            },
            {
              text:'SASS to CSS',
              url:'https://www.sassmeister.com/',
              icon: 'https://www.sassmeister.com/favicon.ico'
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
              icon:'http://uniform.wingzero.tw/favicon.png',
            }
          ]
        },

      ]
    }
  },
  methods:{
    showIcon(item){
      // item.url.replace(/^https?\:\/\//i, "")
      //http://favicon.cccyun.cc
      return item.icon ? item.icon : `https://ico.kucat.cn/get.php?url=${item.url}` 
      // return item.icon ? item.icon : `http://favicon.cccyun.cc/${item.url}` 
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
  color: #3eaf7c;
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