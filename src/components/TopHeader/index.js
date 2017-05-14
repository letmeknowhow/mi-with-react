import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import cs from 'classnames'//引入classnames依赖库
import styles from './TopHeader.scss'

const hotItems = ['红米pro', '小米笔记本air']
const MOCK = {
  xiaomi: [
    { name: '小米Max', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元起' },
    { name: '小米手机5', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起' },
    { name: '小米手机4c', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1099元' }
  ],
  red: [
    { name: '红米pro', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起' },
    { name: '红米note3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '899元起' },
    { name: '红米手机3S', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起' },
    { name: '红米手机3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起' },
    { name: '红米手机3X', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '799元' }
  ],
  flats: [
    { name: '小米平板2 16GB', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '999元' },
    { name: '小米平板2 64GB', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元' },
    { name: '小米平板2 64GB Windows版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元' },
    { name: '小米笔记本Air 12.5', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '3499元' },
    { name: '小米笔记本Air 13.3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '4999元' }
  ],
  tv: [
    { name: '小米电视3S 43英寸', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '1499元' },
    { name: '小米电视3S 48英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/48/', price: '1999元' },
    { name: '小米电视3 55英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/55/', price: '3299元起' },
    { name: '小米电视3 60英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '3499元' },
    { name: '小米电视3S 65英寸 曲面', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '8999元' },
    { name: '小米电视3 70英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/70/', price: '8999元' }
  ],
  box: [
    { name: '小米盒子mini版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png', sourcePath: 'http://www.mi.com/hezimini/', price: '179元' },
    { name: '小米盒子3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png', sourcePath: 'http://www.mi.com/hezi3/', price: '249元' },
    { name: '小米盒子3 增强版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg', sourcePath: 'http://www.mi.com/hezi3s/', price: '399元' },
    { name: '小米电视主机', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg', sourcePath: 'http://www.mi.com/tvzj/', price: '999元' },
    { name: '小米家庭音响 金属版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800073.html', price: '899元' },
    { name: '小米家庭音响 标准版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800074.html', price: '699元' }
  ],
  router: [
    { name: '全新小米路由器', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '699元起' },
    { name: '小米路由器 3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg', sourcePath: 'http://www.mi.com/miwifi3/', price: '149元' },
    { name: '小米路由器 mini', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg', sourcePath: 'http://www.mi.com/miwifimini/', price: '119元' },
    { name: '小米路由器 3C', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '99元' },
    { name: '小米路由器 青春版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg', sourcePath: 'http://www.mi.com/miwifilite/', price: '69元' },
    { name: '小米WiFi放大器', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg', sourcePath: 'http://item.mi.com/1153200003.html', price: '35元' }
  ],
  hardware: [
    { name: '九号平衡车', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg', sourcePath: 'http://www.mi.com/scooter/', price: '1999元' },
    { name: '小米净水器', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg', sourcePath: 'http://www.mi.com/water/', price: '1299元起' },
    { name: '米家压力IH电饭煲', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg', sourcePath: 'http://www.mi.com/dianfanbao/', price: '999元' },
    { name: '小米空气净化器 2', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg', sourcePath: 'http://www.mi.com/air2/', price: '649元' },
    { name: '智能摄像机', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg', sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji', price: '149元起' }
  ],
  navs: [
    { name: '小米手机', type: 'xiaomi' },
    { name: '红米', type: 'red' },
    { name: '平板 · 笔记本', type: 'flats' },
    { name: '电视', type: 'tv' },
    { name: '盒子 · 影音', type: 'box' },
    { name: '路由器', type: 'router' },
    { name: '智能硬件', type: 'hardware' },
    { name: '服务', sourceUrl: '//www.mi.com/service/' },
    { name: '社区', sourceUrl: 'http://www.xiaomi.cn' }
  ],
  results: [
    { name: '小米手机5', number: '11' },
    { name: '空气净化器2', number: '1' },
    { name: '活塞耳机', number: '4' },
    { name: '小米路由器', number: '8' },
    { name: '移动电源', number: '21' },
    { name: '运动相机', number: '3' },
    { name: '小米摄像机', number: '2' },
    { name: '小米体重秤', number: '1' },
    { name: '小米插线板', number: '13' },
    { name: '配件优惠套装', number: '32' }
  ]
}


class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerStatus: false,
      currentPhones: MOCK.xiaomi
    }
  }

  render() {
    const navEls = MOCK.navs.map((nav,idx) => {
      let el = null
      if (nav.type) {
        el = <a href="javascript: void(0);" className="nav-item" onMouseEnter={() => { this.evtHeaderEnter(nav.type) }} onMouseLeave={this.evtHeaderLeave}>{nav.name}</a>
      } else {
        el = <a href={nav.sourceUrl} target="_blank" className="nav-item">{nav.name}</a>
      }
      return <li key={idx} className="nav">
        {el}
      </li>
    })

    const hotItemEls = hotItems.map((hotItem,idx) => {
      return <li key={idx} className="hot-item">
        {hotItem}
      </li>
    })

    const hotItemsContainer = <ul className="hot-word" transition="fadeOut">
      {hotItemEls}
    </ul>

    const resultEls = MOCK.results.map((result,idx) => {
      return <li key={idx}>
        <span className="item-name">{result.name}</span>
        <span className="item-num">约有{result.number}件</span>
      </li>
    })

    const currentPhoneEls = this.state.currentPhones.map((currentPhone, idx) => {
      return <li key={idx} className="product">
        <a href={currentPhone.sourcePath}>
          <img src={currentPhone.imgUrl}
            alt=""
            className="product-img" />
        </a>
        <div className="product-name">{currentPhone.name}</div>
        <div className="product-price">
          {currentPhone.price}
        </div>
      </li>
    })

    return (
      <div className="top-header">
        <div className="container">
          <a href="#"
            className="icon-mi"></a>
          <a href="#"
            className="pic-gif"></a>
          <div className="header-navs">
            <ul className="navs">
              {navEls}
            </ul>
          </div>
          <div className="header-search">
            {this.state.hotStatus ? hotItemsContainer : null}
            <input
              className="search-ipt"
              type="search"
              name="search"
              value="" />
            <label className="search-btn">
              <i className="icon-search"></i>
            </label>
            <ul className="search-result clearfix">
              {resultEls}
            </ul>
          </div>
        </div>
        <CSSTransitionGroup transitionName="fadein" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.state.headerStatus ?
          <div className="header-menu"
            onMouseEnter={() => this.evtHeaderEnter()}
            onMouseLeave={this.evtHeaderLeave}
          >
            <ul className="menus clearfix">
              {currentPhoneEls}
            </ul>
          </div> : null
        }
        </CSSTransitionGroup>
      </div>
    )
  }

  // evtIptFocus = () => {
  //   $('.header-search').addClass('search-active')
  //   $('.search-result').show()
  //   this.hotStatus = false
  // }
  // evtIptBlur = () => {
  //   $('.header-search').removeClass('search-active')
  //   $('.search-result').hide()
  //   this.hotStatus = true
  // }
  evtHeaderEnter = (menuType) => {
    if (menuType) {
      this.setState({
        currentPhones: MOCK[menuType],
        headerStatus: true
      })
    }
    clearTimeout(this.tids)
  }
  evtHeaderLeave = () => {
    let self = this
    this.tids = setTimeout(function () {
      self.setState({
        headerStatus: false
      })
    }, 300)
  }
}

export default TopHeader
