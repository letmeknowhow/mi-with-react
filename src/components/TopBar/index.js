import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import cs from 'classnames'//引入classnames依赖库
import styles from './TopBar.scss'

const navs = [
  { name: '小米商城', sourceUrl: 'http://www.mi.com/index.html' },
  { name: 'MIUI', sourceUrl: 'http://www.miui.com/' },
  { name: '米聊', sourceUrl: 'http://www.miliao.com/' },
  { name: '游戏', sourceUrl: 'http://game.xiaomi.com/' },
  { name: '多看阅读', sourceUrl: 'http://www.duokan.com/' },
  { name: '云服务', sourceUrl: 'https://i.mi.com/' },
  { name: '小米网移动版', sourceUrl: 'http://www.mi.com/c/appdownload/' },
  { name: '问题反馈', sourceUrl: 'http://static.mi.com/feedback/' },
  { name: 'Select Region', sourceUrl: 'http://www.mi.com/index.html' }
]

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStatus: false
    }
  }

  render() {
    const cartClassNames = cs({
      'cart': true,
      'active': this.state.cartStatus
    })

    const cartList = this.state.cartStatus ? (
        <div key="cartlist" className="cart-list">
          购物车中还没有商品，赶快选购吧！
        </div>
    ) : null

    const navEls = navs.map((nav, idx) => {
      if (nav.name === '小米商城') {
        return (
          <li key={idx} className="nav clearfix">
            <a href={nav.sourceUrl} className="nav-name">{nav.name}</a>
          </li>
        )
      } else {
        return (
          <li key={idx} className="nav clearfix">
            <a href={nav.sourceUrl} className="nav-name" target="_blank" rel="noopener noreferrer">{nav.name}</a>
            {idx !== 8 ? <span className="nav-separate">|</span> : null}
          </li>
        )
      }
    })
    return (
      <header className="top-container">
        <div className="top-bar clearfix">
          <div className="topbar-nav">
            <ul className="nav-wrap">
              {navEls}
            </ul>
          </div>
          <div className="topbar-info">
            <a href="http://order.mi.com/site/login?redirectUrl=http://www.mi.com/index.html">登陆</a>
            <span className="nav-separate" >|</span>
            <a href="https://account.xiaomi.com/pass/register">注册</a>
          </div>
          <div
            className="topbar-cart fa cart-arrow-down"
            role="button"
            onMouseEnter={this.evtCartEnter}
            onMouseLeave={this.evtCartOut}>
            <div className={cartClassNames}>
              <i className="fa fa-cart-arrow-down icon-cart" />
              <a href="http://static.mi.com/cart/">
                购物车(
                <span>0</span>
                )
              </a>
            </div>
            
            <CSSTransitionGroup transitionName="fadein" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {cartList}
            </CSSTransitionGroup>
          </div>

        </div>
      </header>
    )
  }

  evtCartEnter = () => {
    this.setState({ cartStatus: true })
    clearInterval(this.timer)
  }

  evtCartOut = () => {
    let self = this
    this.timer = setTimeout(() => {
      self.setState({ cartStatus: false })
    }, 500)
  }
}

export default TopBar
